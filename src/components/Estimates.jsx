import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputNumber } from 'antd'
import {
  setResProductName,
  setResMaterialName,
  setResPaperName,
  setResEnamelName,
} from '../store/reducers/main.reducer'
import {
  setA,
  setB,
  setC,
  setF,
  setP,
  setUnit,
  setLayout,
} from '../store/reducers/boxes.reducer'
import {
  GET_PRODUCT_CATEGORY,
  GET_MATERIAL_CATEGORY,
  GET_PAPER_LIST,
  GET_ENAMEL_LIST,
} from '../../pages/api/getData.api'
import { enamelSelect } from '../utils/handingdata'
import TUCK_END_BOXES_MAIN from './boxes/tuckEndBoxes/main'

const Part2ModalBody = (props) => {
  const { SentStateJsonOffer } = props
  const dispatch = useDispatch()

  const { resProductName, resMaterialName, resPaperName, resEnamelName } =
    useSelector((state) => state.main)
  const { token } = useSelector((state) => state.auth)
  const { A, B, C, F, P, unit } = useSelector((state) => state.boxes)

  const [OutSide, SetOutSide] = useState(true)
  const [Dieline, SetDieline] = useState(true)
  const [UVPrinting, SetUVPrinting] = useState(false)
  const [Foiling, SetFoiling] = useState(false)
  const [materialName, setMaterialName] = useState()
  const [paperName, setPaperName] = useState()
  const [, setPrevUnit] = useState('mm')

  const defaultUnit = { mm: 1, cm: 10, inch: 25.4 }
  const [orderGroup, setOrderGroup] = useState({
    key: 'ordergroup',
    default: {
      amount1: 0,
      amount2: 0,
      amount3: 0,
      amount4: 0,
      amount5: 0,
      amount6: 0,
      amount7: 0,
      amount8: 0,
    },
  })

  useEffect(() => {
    //? สินค้า
    const getProductFormDB = async () => {
      const product = await GET_PRODUCT_CATEGORY(token)
      const productAll = product.map(({ name }) => name)
      dispatch(setResProductName(productAll))
    }
    getProductFormDB()

    //? รูปแบบสินค้า
    const getMaterialFormDB = async () => {
      const material = await GET_MATERIAL_CATEGORY(token)
      const materialAll = material.map(({ name }) => name)
      dispatch(setResMaterialName(materialAll))
    }
    getMaterialFormDB()

    //? ประเภทกระดาษ
    const getPaperFormDB = async () => {
      const paper = await GET_PAPER_LIST(token)
      const paperAll = paper.map(({ name }) => name)
      dispatch(setResPaperName(paperAll))
    }
    getPaperFormDB()

    //? การเคลือบ
    const getEnamelFormDB = async () => {
      const enamel = await GET_ENAMEL_LIST(token)
      const enamelAll = enamel.map(({ enamels_name }) => enamels_name)
      dispatch(setResEnamelName(enamelAll))
    }
    getEnamelFormDB()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    Dieline ? dispatch(setLayout(Dieline)) : dispatch(setLayout(Dieline))
  }, [Dieline, dispatch])

  const product = (resProductName) => {
    const dataButton = resProductName.map((response, index) => (
      <option key={''} value={index}>
        {response}
      </option>
    ))
    return dataButton
  }

  const material = (e) => {
    if (e.target.value === '0') {
      const dataButton = resMaterialName.map((response, index) => (
        <option key={''} value={index}>
          {response}
        </option>
      ))
      setMaterialName(dataButton)
    }
  }

  const paper = (e) => {
    if (e.target.value === '0') {
      const dataButton = resPaperName.map((name) => (
        <option key={''}>{name}</option>
      ))
      setPaperName(dataButton)
    }
  }

  const handleChangeSize = (value, type) => {
    switch (type) {
      case 'width':
        dispatch(setA(value))
        break
      case 'depth':
        dispatch(setB(value))
        break
      case 'height':
        dispatch(setC(value))
        break
      case 'flap':
        dispatch(setF(value))
        break
      case 'plug':
        dispatch(setP(value))
        break
      default:
        return ''
    }
  }

  const handleCheckUnit = (e) => {
    let value = e.target.value,
      pre

    setPrevUnit((prevState) => {
      pre = prevState
      return { value }
    }) //?  pre เก็บค่าตัวแปร value ที่รับเข้ามาก่อนหน้า

    // mm
    if (value === 'mm') {
      if (pre === 'cm') {
        dispatch(setUnit(value))
      }
      dispatch(setUnit(value))
    }
    // cm
    if (value === 'cm') {
      if (pre === 'inch') {
        dispatch(setUnit(value))
      }
      dispatch(setUnit(value))
    }
    // in
    if (value === 'inch') {
      if (pre === 'cm') {
        dispatch(setUnit(value))
      }
      dispatch(setUnit(value))
    }
  }

  const handleAmountGroup = (e) => {
    const { name, value } = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setOrderGroup({ ...orderGroup, [name]: value })
    }
  }

  const selectUnit = () => (
    <select
      className="border rounded px-2 py-2 focus:outline-none"
      value={unit}
      onChange={handleCheckUnit}
    >
      <option value="mm">mm</option>
      <option value="cm">cm</option>
      <option value="inch">inch</option>
    </select>
  )

  const FX_More_One = (e) => {
    let GetClass = e.target.className

    for (let Count0 = 1; Count0 <= 5; Count0++) {
      if (
        String(GetClass) ===
        'form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-0' +
          Count0
      ) {
        let TableOne = document.querySelectorAll('.form-checkbox-0' + Count0)
        let GetObject = Array.from(TableOne).indexOf(e.target)
        for (let Count = 0; Count < TableOne.length; Count++) {
          TableOne[Count].checked = false
        }
        TableOne[GetObject].checked = true
      }
    }
  }

  return (
    <div className="bg-white now-set-modal-height">
      <div className="lg:p-5 p-1 m-1 lg:ml-1 lg:mr-1 bg-white">
        <h3 className="product-value-ok">ข้อมูลลูกค้า</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="border-gray-300 border rounded-sm">
            <div className="bg-head custom-06 p-2 product-value-ok flex bg-head">
              <label className="mt-4">สเปกสินค้า</label>
            </div>
            <div className="grid  gap-4 grid-cols-3 spec-product">
              {/* //? เลือกสินค้า */}
              <span className="col-span-1 text-gray-800 text-look-product-show">
                สินค้า:
              </span>
              <select
                className="col-span-2  float-right border rounded px-2 py-2 focus:outline-none input-fx"
                onChange={material}
              >
                <option selected disabled>
                  เลือกสินค้า
                </option>
                {product(resProductName)}
              </select>
              {/* //? รูปแบบสินค้า */}
              <span className="col-span-1 text-gray-800 text-look-product-show">
                รูปแบบสินค้า:
              </span>
              <select
                className="col-span-2  float-right border rounded px-2 py-2 focus:outline-none input-fx"
                onChange={paper}
              >
                <option selected disabled>
                  เลือกรูปแบบสินค้า
                </option>
                {materialName}
              </select>
              {/* //? ประเภทกระดาษ */}
              <span className="col-span-1 text-gray-800 text-look-product-show">
                ประเภทกระดาษ:
              </span>
              <select className="col-span-2  float-right border rounded px-2 py-2 focus:outline-none input-fx">
                <option selected disabled>
                  เลือกประเภทกระดาษ
                </option>
                {paperName}
              </select>
            </div>
          </div>
          <div className="border-gray-300 border rounded-sm size-pro-na">
            <div className="bg-head custom-06 p-2">
              <div className="float-left lg:p-4 p-2 product-value-ok bg-head">
                ขนาดสินค้า
              </div>
              <div className="font-semibold lg:p-3 float-right bg-head">
                <span className="text-white">เลือกหน่วย:</span>
                {selectUnit()}
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2 na-ja">
              <div className="lg:col-span-1 col-span-2">
                <div className="font-semibold">
                  <span className="text-gray-800">
                    ด้าน A
                    <InputNumber
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      step={1}
                      value={`${
                        unit === 'mm'
                          ? (A / defaultUnit[unit]).toFixed(2)
                          : (A / defaultUnit[unit]).toFixed(1)
                      }`}
                      onChange={(value) => handleChangeSize(value, 'width')}
                    />
                    mm
                  </span>
                </div>
                <div className="font-semibold">
                  <span className="text-gray-800">
                    ด้าน B
                    <InputNumber
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      step={1}
                      value={`${
                        unit === 'mm'
                          ? (B / defaultUnit[unit]).toFixed(2)
                          : (B / defaultUnit[unit]).toFixed(1)
                      }`}
                      onChange={(value) => handleChangeSize(value, 'depth')}
                    />
                    mm
                  </span>
                </div>
                <div className="font-semibold">
                  <span className="text-gray-800">
                    ด้าน C
                    <InputNumber
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      step={1}
                      value={`${
                        unit === 'mm'
                          ? (C / defaultUnit[unit]).toFixed(2)
                          : (C / defaultUnit[unit]).toFixed(1)
                      }`}
                      onChange={(value) => handleChangeSize(value, 'height')}
                    />
                    mm
                  </span>
                </div>
              </div>
              <div className="lg:col-span-1 col-span-2">
                <div className="font-semibold">
                  <span className="text-gray-800">
                    FLAP
                    <InputNumber
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      step={1}
                      value={`${
                        unit === 'mm'
                          ? (F / defaultUnit[unit]).toFixed(2)
                          : (F / defaultUnit[unit]).toFixed(1)
                      }`}
                      onChange={(value) => handleChangeSize(value, 'flap')}
                    />
                    %
                  </span>
                </div>
                <div className="font-semibold">
                  <span className="text-gray-800">
                    PLUG
                    <InputNumber
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      step={1}
                      value={`${
                        unit === 'mm'
                          ? (P / defaultUnit[unit]).toFixed(2)
                          : (P / defaultUnit[unit]).toFixed(1)
                      }`}
                      onChange={(value) => handleChangeSize(value, 'plug')}
                    />
                    mm
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-sm border ml-2 mr-2 px-2 py-3 text-center m-5 left-right">
              {`ขนาดสินค้ารวม ${A} x ${B} ${unit} ขนาดสินค้าไม่เกิน ${
                A * B >= 999949
                  ? 'A0'
                  : A * B >= 499554
                  ? 'A1'
                  : A * B >= 249480
                  ? 'A2'
                  : A * B >= 124740
                  ? 'A3'
                  : A * B >= 62370
                  ? 'A4'
                  : 'A5'
              }`}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="border-gray-300 border rounded-sm mt-2 set-height-01">
            <div className="custom-06 p-2 flex bg-head">
              <label className="select-side-print">เลือกด้านพิมพ์</label>
            </div>
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 side-print-br pb-2">
              <div className="col-span-4 lg:col-span-1">
                <label className="ml-3 mt-5 mb-2 Label-In-side">Out-side</label>
                <br />
                <div className="grid gap-4 grid-cols-2 mt-3">
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                    />
                    <span className="text-gray-700 cmyk">CMYK</span>
                  </div>
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                    />
                    <span className="text-gray-700 pantone">Pantone</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-1">
                  <div>
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                    />
                    <span className="text-gray-700 metallic">metallic</span>
                  </div>
                </div>
              </div>
              <div className="col-span-4 lg:col-span-1 add-left">
                <label className="ml-3 mt-5 mb-2 Label-In-side">In-side</label>
                <div className="grid gap-4 grid-cols-2 mt-3">
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                    />
                    <span className="text-gray-700 cmyk">CMYK</span>
                  </div>
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                    />
                    <span className="text-gray-700 pantone">Pantone</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-1">
                  <div>
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                    />
                    <span className="text-gray-700 metallic">metallic</span>
                  </div>
                </div>
              </div>
              <div className="col-span-4 add-bt-top add-top">
                <input
                  onClick={() =>
                    UVPrinting ? SetUVPrinting(false) : SetUVPrinting(true)
                  }
                  type="checkbox"
                  className="mb-1 form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                />
                <label className="side-print">
                  พิมพ์ UV Printing ด้านนอก
                  <span>*UV printing พิมพ์เฉพาะด้าน (ด้านนอกเท่านั้น)</span>
                </label>
              </div>
            </div>
            {UVPrinting ? (
              <div className="col-span-4 pl-11 pt-2 pb-2 Click-UV">
                <label className="side-print">
                  <span>เคลือบฟอยล์</span>
                </label>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                />
                <span className="text-gray-700 gold">สีทอง</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                />
                <span className="text-gray-700 silver">สีเงิน</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na"
                />
                <span className="text-gray-700 hologram">โอโลแกรม</span>
              </div>
            ) : null}
            <div
              className="grid grid-cols-1 gap-4 mt-5 small-font-na"
              onClick={FX_More_One}
            >
              <div className="border-gray-300 border rounded-sm">
                <div className="bg-head custom-06 p-2">
                  <div className="grid grid-cols-2 gap-4 bg-head">
                    <div className="bg-head">
                      <label className="select-side-print font-technical">
                        เทคนิกพิเศษ
                      </label>
                      <br />
                      <span className="span-technical bg-head">
                        *เลือกได้มากกว่า 1 เทคนิค
                      </span>
                    </div>
                    <div className="bg-head">
                      <div className="float-right lg:pt-4 bg-head">
                        <button
                          onClick={() => (OutSide ? null : SetOutSide(true))}
                          className={
                            OutSide
                              ? 'bg-green-300 custom-17 active'
                              : 'bg-green-300 custom-17'
                          }
                        >
                          ด้านนอก
                        </button>
                        <button
                          onClick={() => (OutSide ? SetOutSide(false) : null)}
                          className={OutSide ? 'custom-18' : 'custom-18 active'}
                        >
                          ด้านใน
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <table id="customers" className="custom-19">
                  <tbody>
                    <tr>
                      <td className="t1">การเคลือบ</td>
                      <td colSpan="4" className="t2">
                        {enamelSelect(resEnamelName)}
                      </td>
                    </tr>
                    <tr>
                      <td className="t1">SPOT UV</td>
                      <td colSpan="2">
                        <div className="custom-20">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-01"
                          />{' '}
                          30% ของพื้นที่กล่อง
                        </div>
                      </td>
                      <td colSpan="2">
                        <div className="custom-20">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-01"
                          />{' '}
                          50% ของพื้นที่กล่อง
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="t1">ปั๊มฟอยล์</td>
                      <td colSpan="4">
                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
                          <div className="custom-20 col-span-1">
                            <input
                              onClick={() =>
                                Foiling ? SetFoiling(false) : SetFoiling(true)
                              }
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-02"
                            />
                            1จุด
                          </div>
                          <div className="custom-20 col-span-1">
                            <input
                              onClick={() =>
                                Foiling ? SetFoiling(false) : SetFoiling(true)
                              }
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-02"
                            />
                            2จุด
                          </div>
                          <div className="custom-20 col-span-1">
                            <input
                              onClick={() =>
                                Foiling ? SetFoiling(false) : SetFoiling(true)
                              }
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-02"
                            />
                            3จุด
                          </div>
                          <div className="custom-22 col-span-1 lg:col-span-2">
                            <input
                              onClick={() =>
                                Foiling ? SetFoiling(false) : SetFoiling(true)
                              }
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-02"
                            />
                            เหมา (*มากกว่า 3จุดขึ้นไป)
                          </div>
                          {Foiling ? (
                            <div className="col-span-1 lg:col-span-5">
                              <div>
                                <label>เลือกกระดาษ ฟอยล์แมทเทิลไลท์</label>
                                <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 gold">
                                      ฟอยล์ทอง
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 silver">
                                      ฟอยล์เงิน
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 red">
                                      แดง
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 green">
                                      เขียว
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 blue">
                                      น้ำเงิน
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 copper">
                                      ทองแดง
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 pink">
                                      ชมพู
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 purple">
                                      ม่วง
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 black">
                                      ดำ
                                    </span>
                                  </div>
                                  <div>
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-gray-600  mr-2 rounded-full check-na"
                                    />
                                    <span className="text-gray-700 hologram">
                                      โอโลแกรมเลเชอร์
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="t1">ปั๊ม ทอง</td>
                      <td colSpan="4">
                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
                          <div className="custom-20 col-span-1">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-03"
                            />
                            1จุด
                          </div>
                          <div className="custom-20 col-span-1">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-03"
                            />
                            2จุด
                          </div>
                          <div className="custom-20 col-span-1">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-03"
                            />
                            3จุด
                          </div>
                          <div className="custom-22 col-span-1 lg:col-span-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-03"
                            />
                            เหมา (*มากกว่า 3จุดขึ้นไป)
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="t1">เจาะหน้าต่าง</td>
                      <td className="custom-23" colSpan="4">
                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-4">
                          <div className="custom-20">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-04"
                            />
                            ติดพลาสติด
                          </div>
                          <div className="custom-20">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-04"
                            />
                            ไม่ติดพลาสติด
                          </div>
                          <div className="custom-20">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-04"
                            />
                            เคลือบหน้าต่าง
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="t1">ปะกาว</td>
                      <td colSpan="4">
                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
                          <div className="custom-25">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-05"
                            />
                            ปะกาวข้าง 1จุด
                          </div>
                          <div className="custom-25">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-05"
                            />
                            จิ้มก้น(ปะกาวข้าง 1 จุด)
                          </div>
                          <div></div>
                          <div className="custom-25">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-05"
                            />
                            ทากาวมือ
                          </div>
                          <div className="custom-25">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full check-na form-checkbox-05"
                            />
                            ปะเทปกาว
                            <input
                              type="text"
                              className="focus:outline-none border rounded px-2 py-1 input-fx"
                            />
                            จุด
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4 lay-box2d mt-2">
              <div className="col-span-3 lg:col-span-1">
                <label className="label-ex-box2d">
                  ภาพตัวอย่างกล่องเมื่อกางออก
                </label>
                <br />
                <div className="both-btn2d">
                  <button
                    onClick={() => (Dieline ? null : SetDieline(true))}
                    className={Dieline ? 'btn-2d active' : 'btn-2d'}
                  >
                    2D
                  </button>
                  <button
                    onClick={() => (Dieline ? SetDieline(false) : null)}
                    className={Dieline ? 'btn-dieline' : 'btn-dieline active'}
                  >
                    Dieline
                  </button>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-2">
                <TUCK_END_BOXES_MAIN />
              </div>
            </div>
            <div className="border-gray-300 border rounded-sm mt-3">
              <div className="bg-head custom-06 p-2 flex">
                <label className="select-side-print">จำนวนสั่งผลิต</label>
              </div>
              <table id="customers" className="custom-27">
                <tbody>
                  <tr>
                    <td>
                      จำนวนที่ 1<br />
                      <input
                        type="text"
                        id="amount1"
                        className="focus:outline-none border rounded px-2 py-1 input-fx file-de"
                        name="amount1"
                        value={orderGroup.amount1}
                        onChange={handleAmountGroup}
                      />
                    </td>
                    <td>
                      จำนวนที่ 2<br />
                      <input
                        type="text"
                        id="amount2"
                        className="focus:outline-none border rounded px-2 py-1 input-fx file-de"
                        name="amount2"
                        value={orderGroup.amount2}
                        onChange={handleAmountGroup}
                      />
                    </td>
                    <td>
                      จำนวนที่ 3<br />
                      <input
                        type="text"
                        id="amount3"
                        className="focus:outline-none border rounded px-2 py-1 input-fx file-de"
                        name="amount3"
                        value={orderGroup.amount3}
                        onChange={handleAmountGroup}
                      />
                    </td>
                    <td>
                      จำนวนที่ 4<br />
                      <input
                        type="text"
                        id="amount4"
                        className="focus:outline-none border rounded px-2 py-1 input-fx file-de"
                        name="amount4"
                        value={orderGroup.amount4}
                        onChange={handleAmountGroup}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      จำนวนที่ 5<br />
                      <input
                        type="text"
                        id="amount5"
                        className="focus:outline-none border rounded px-2 py-1 input-fx file-de"
                        name="amount5"
                        value={orderGroup.amount5}
                        onChange={handleAmountGroup}
                      />
                    </td>
                    <td>
                      จำนวนที่ 6<br />
                      <input
                        type="text"
                        id="amount6"
                        className="focus:outline-none border rounded px-2 py-1 input-fx file-de"
                        name="amount6"
                        value={orderGroup.amount6}
                        onChange={handleAmountGroup}
                      />
                    </td>
                    <td>
                      จำนวนที่ 7<br />
                      <input
                        type="text"
                        id="amount7"
                        className="focus:outline-none border rounded px-2 py-1 input-fx file-de"
                        name="amount7"
                        value={orderGroup.amount7}
                        onChange={handleAmountGroup}
                      />
                    </td>
                    <td>
                      จำนวนที่ 8<br />
                      <input
                        type="text"
                        id="amount8"
                        className="focus:outline-none border rounded px-2 py-1 input-fx file-de"
                        name="amount8"
                        value={orderGroup.amount8}
                        onChange={handleAmountGroup}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-gray-300 border rounded-sm mt-3 set-height-02">
              <div className="bg-head custom-06 p-2 flex">
                <div className="grid grid-cols-7 gap-0">
                  <label className="select-side-print col-span-2 lg:col-span-3">
                    ไฟล์ออกแบบ
                  </label>
                  <div className="col-span-5 lg:col-span-4 flex">
                    <div className="mt-5">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full"
                      />
                      <span className="text-white">ดราฟ</span>
                    </div>
                    <div className="mt-5">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full"
                      />
                      <span className="text-white">จ้างออกแบบ</span>
                    </div>
                    <div className="mt-5">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600 ml-5 mr-2 rounded-full"
                      />
                      <span className="text-white">มีไฟล์.ai</span>
                    </div>
                  </div>
                </div>
              </div>
              <table id="customers" className="custom-28">
                <tbody>
                  <tr>
                    <td className="t1 hind-na">
                      <label>เพิ่มไฟล์</label>
                    </td>
                    <td className="t2">
                      <input type="file" id="actual-btn" hidden />
                      <label className="upload" htmlFor="actual-btn">
                        Add file
                      </label>
                      <label className="label-acc" id="file-chosen">
                        แนบไฟล์ออกแบบ<span>(ai, png, psd, pdf, jpq)</span>
                      </label>
                      <div className="grid grid-cols-3 gap-4 mt-5">
                        <label className="file-attach">File Attach:</label>

                        <div className="d1">
                          <span>logobababishop.ai</span>
                          <br />
                          <span>logobababishop.ai</span>
                        </div>
                        <div className="d2">
                          <div></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="border-gray-300 border rounded-sm mt-3">
          <div className="custom-06 p-2 flex">
            <label className="select-side-print">หมายเหตุ</label>
          </div>
          <table id="customers">
            <tbody>
              <tr>
                <td>
                  <textarea
                    type="text"
                    rows="3"
                    className="w-full focus:outline-none border rounded px-2 py-1 input-fx"
                    placeholder="กรอกรายละเอียด"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          id="cancel-modal-na-ja"
          className="custom-05 mt-2 inline-block hover:text-white focus:outline-none focus:text-white  hover:bg-blue-dark font-bold py-2 px-3 rounded-sm hover:bg-indigo-500 transition ease-in-out duration-300"
        >
          ยกเลิก
        </button>
        <button
          onClick={() => props.GetWhenSendDoc(SentStateJsonOffer)}
          id="cancel-modal-na-ja"
          className="float-right custom-05 mt-2 inline-block hover:text-white focus:outline-none focus:text-white  hover:bg-blue-dark font-bold py-2 px-3 rounded-sm hover:bg-indigo-500 transition ease-in-out duration-300"
        >
          ส่งเอกสารขอราคา
        </button>
      </div>
    </div>
  )
}

const TheModalEstimate = (props) => {
  const { SendDataValue, WhenSendDoc } = props
  const [CountDocNumber, SetCountDocNumber] = useState(
    String(Number(SendDataValue.รหัสเอกสาร) + 1)
  )
  const [NameClient, SetNameClient] = useState('')
  const [ClientType, SetClientType] = useState('ลุกค้าเก่า')

  const Digit = Number(String(Number(SendDataValue.รหัสเอกสาร) + 1).length) - 1

  let OurDate = new Date()
  let TheDay =
    String(OurDate.getDate()).length !== 1
      ? OurDate.getDate()
      : '0' + String(OurDate.getDate())
  let TheMonth =
    String(OurDate.getMonth() + 1).length !== 1
      ? OurDate.getMonth() + 1
      : '0' + String(OurDate.getMonth() + 1)
  const GetDate =
    String(SendDataValue.วันที่) === ''
      ? String(TheDay + '/' + TheMonth + '/' + OurDate.getFullYear())
      : String(SendDataValue.วันที่)

  const GetTime = String(
    OurDate.getHours() + ':' + OurDate.getMinutes() + ' น.'
  )
  const OurSale = SendDataValue.ผู้ขอเอกสาร

  useEffect(() => {
    let GetLastStr = '00000' + String(CountDocNumber)
    SetCountDocNumber(GetLastStr.substr(GetLastStr.length - Number(14 - Digit)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const AfterInsideModal = (e) => {
    props.SendFunc(e.target.id)
    props.SendFxExitEdit(e.target.id)
  }

  const ClientChange = (e) => {
    let GetClientType = e.target.value
    SetClientType(GetClientType)
  }

  return (
    <>
      <div
        id="ModalEstimateLV01"
        onClick={AfterInsideModal}
        className="bg-blue-400 custom-01"
      >
        <div id="ModalEstimateLV02" className="custom-02 bg-white">
          <div className="custom-04">
            <label>เอกสารขอราคา</label>
            <span
              id="font-closed"
              className="cursor-pointer float-right text-white hover:text-gray-500 text-4xl"
            >
              &#10006;
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="pt-11 pb-5 pl-11">
              <label className="code-label-forward">
                รหัสเอกสารขอราคา : {CountDocNumber}
              </label>
            </div>
            <div>
              <div className="grid grid-cols-8 gap-4 mt-4">
                <div className="lg:col-span-3 col-span-1"></div>
                <div className="lg:col-span-2 col-span-3 mt-4 ml-2 offer-sale">
                  ผู้จัดทำใบขอราคา:
                </div>
                <div className="col-span-1">
                  <img
                    className="block m-auto rounded-full pic-sale"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqelGYhDyC4P6HBYqGPsFxmtRFnDGEota1fg&usqp=CAU"
                    alt="1"
                  />
                </div>
                <div className="lg:col-span-2 col-span-3 name-sale mt-1">
                  {OurSale}
                  <br />
                  <label className="ball-sale">
                    {SendDataValue.ฝ่ายผู้ขอเอกสาร}
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-8 gap-4 mt-4">
                <div className="col-span-3"></div>
                <div className="col-span-5 ml-2">
                  <label className="offer-sale">วันที่ออกเอกสาร:</label>
                  <label className="ml-4 name-sale">{GetDate}</label>
                  <label className="offer-sale ml-2">เวลา:</label>
                  <label className="name-sale">{GetTime}</label>
                </div>
              </div>
            </div>
          </div>
          <div className="border-gray-300 border rounded-md lg:p-5 p-1 bg-white m-1 lg:ml-6 lg:mr-6">
            <h3 className="product-value-ok">ข้อมูลสินค้า</h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <div className="font-semibold p-2">
                  <span className="text-gray-800 label-ft">ลูกค้า:</span>
                  <input
                    defaultValue={SendDataValue.ลูกค้า}
                    onChange={(e) => SetNameClient(e.target.value)}
                    type="text"
                    className="lg:w-5/6 w-4/6 float-right focus:outline-none border rounded px-2 py-1 input-fx"
                  />
                </div>
                <div className="font-semibold p-2">
                  <span className="text-gray-800 label-ft">เบอร์โทรศัพท์:</span>
                  <input
                    type="text"
                    className="lg:w-5/6 w-4/6 float-right focus:outline-none border rounded px-2 py-1 input-fx"
                  />
                </div>
                <div className="font-semibold p-2">
                  <span className="text-gray-800 label-ft">อีเมล์:</span>
                  <input
                    type="text"
                    className="lg:w-5/6 w-4/6 float-right focus:outline-none border rounded px-2 py-1 input-fx"
                  />
                </div>
                <div className="font-semibold p-2">
                  <span className="text-gray-800 label-ft">ที่อยู่:</span>
                  <textarea
                    type="text"
                    rows="3"
                    className="lg:w-5/6 w-4/6 float-right focus:outline-none border rounded px-2 py-1 input-fx"
                  />
                </div>
              </div>
              <div>
                <div className="font-semibold p-2">
                  <span className="text-gray-800 label-ft">ผู้ติดต่อ:</span>
                  <input
                    type="text"
                    className="lg:w-5/6 w-4/6 float-right focus:outline-none border rounded px-2 py-1 input-fx"
                  />
                </div>
                <div className="font-semibold p-2">
                  <span className="text-gray-800 label-ft">เบอร์แฟกซ์:</span>
                  <input
                    type="text"
                    className="lg:w-5/6 w-4/6 float-right focus:outline-none border rounded px-2 py-1 input-fx"
                  />
                </div>
                <div className="font-semibold p-2">
                  <span className="text-gray-800 label-ft">
                    เลขผู้เสียภาษี:
                  </span>
                  <input
                    type="text"
                    className="lg:w-5/6 w-4/6 float-right focus:outline-none border rounded px-2 py-1 input-fx"
                  />
                </div>
                <div className="font-semibold p-2">
                  <span className="text-gray-800 label-ft">ประเภทลูกค้า:</span>
                  <select
                    onChange={ClientChange}
                    className="lg:w-5/6 w-4/6 border float-right rounded px-2 py-2 focus:outline-none input-fx"
                  >
                    <option>ลูกค้าเก่า</option>
                    <option>ลูกค้าใหม่</option>
                  </select>
                </div>
                <div className="font-semibold p-2 mt-4">
                  <span className="text-gray-800 label-ft mr-6">Status</span>
                  <button className="custom-05 ml-10 inline-block hover:text-white focus:outline-none focus:text-white  hover:bg-blue-dark font-bold py-2 px-3 rounded-lg hover:bg-indigo-500 transition ease-in-out duration-300">
                    Offline
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Part2ModalBody
            SentStateJsonOffer={[
              {
                วันที่: GetDate,
                รหัสเอกสาร: String(Number(SendDataValue.รหัสเอกสาร) + 1),
                รายละเอียด: '',
                ลูกค้า: NameClient,
                สถานะลูกค้า: ClientType,
                จำนวนงาน: '',
                ผู้ออกเอกสาร: OurSale,
              },
            ]}
            GetWhenSendDoc={WhenSendDoc}
          />
        </div>
      </div>
    </>
  )
}

export default function Estimates(props) {
  const { SendModeEditer, SentJsonDataToModal, SentFunctionGetDoc } = props
  const [StatusModalEstimate, SetStatusModalEstimate] = useState(false)

  let TheEdit =
    Number(SendModeEditer[0].length) === 1
      ? [
          {
            วันที่: SendModeEditer[0][0].วันที่,
            รหัสเอกสาร: Number(SendModeEditer[0][0].id) - 1,
            รายละเอียด: SendModeEditer[0][0].รายละเอียด,
            ลูกค้า: SendModeEditer[0][0].ลูกค้า,
            สถานะลูกค้า: SendModeEditer[0][0].สถานะลูกค้า,
            จำนวนงาน: SendModeEditer[0][0].จำนวนงาน,
            ผู้ขอเอกสาร: String(SendModeEditer[0][0].ผู้ขอเอกสาร),
            ฝ่ายผู้ขอเอกสาร: SendModeEditer[0][0].ฝ่ายผู้ขอเอกสาร,
            ผู้เสนอราคา: SendModeEditer[0][0].ผู้เสนอราคาม,
            ฝ่ายผู้เสนอเอกสาร: SendModeEditer[0][0].ฝ่ายผู้เสนอเอกสาร,
          },
        ]
      : [
          {
            วันที่: '',
            รหัสเอกสาร: SentJsonDataToModal[0],
            รายละเอียด: '',
            ลูกค้า: '',
            สถานะลูกค้า: '',
            จำนวนงาน: '',
            ผู้ขอเอกสาร: SentJsonDataToModal[1],
            ฝ่ายผู้ขอเอกสาร: 'ฝ่ายขาย',
            ผู้เสนอราคา: '',
            ฝ่ายผู้เสนอเอกสาร: '',
          },
        ]

  const WhenStayInModal = (GetID) => {
    if (
      String(GetID) === 'ModalEstimateLV01' ||
      String(GetID) === 'font-closed' ||
      String(GetID) === 'cancel-modal-na-ja'
    )
      SetStatusModalEstimate(false)
  }

  const ClickToInModalEstimate = () => {
    StatusModalEstimate
      ? SetStatusModalEstimate(false)
      : SetStatusModalEstimate(true)
  }

  return (
    <>
      {StatusModalEstimate || Number(SendModeEditer[0].length) === 1 ? (
        <TheModalEstimate
          WhenSendDoc={SentFunctionGetDoc}
          SendFxExitEdit={SendModeEditer[1]}
          SendDataValue={TheEdit[0]}
          SendFunc={WhenStayInModal}
        />
      ) : null}
      <button
        onClick={ClickToInModalEstimate}
        className="md:float-right custom-03"
      >
        สร้างเอกสารใหม่
      </button>
    </>
  )
}
