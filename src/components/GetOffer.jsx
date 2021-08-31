import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { InputNumber } from 'antd'
import { setDocOffer } from '../store/reducers/docParam.reducer'
import {
  setResProductName,
  setResMaterialName,
  setResPaperName,
  setResEnamelName,
  setResPrinterName,
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
  GET_PRINTER_NAME,
} from '../../pages/api/getData.api'
import { paperSelect, enamelSelect, printerSelect } from '../utils/handingdata'
import TUCK_END_BOXES_MAIN from './boxes/tuckEndBoxes/main'
import DataTable from './DataTable'

export default function GetOffer() {
  const router = useRouter()
  const dispatch = useDispatch()

  const {
    resProductName,
    resMaterialName,
    resPaperName,
    resEnamelName,
    resPrinterName,
  } = useSelector((state) => state.main)
  const { docOffer } = useSelector((state) => state.docParam)
  const { token } = useSelector((state) => state.auth)
  const { A, B, C, F, P, unit } = useSelector((state) => state.boxes)

  const [ClickLay, SetClickLay] = useState(false)
  const [OutSide, SetOutSide] = useState(true)
  const [Dieline, SetDieline] = useState(true)
  const [OpenMoreDetail, SetMoreDetail] = useState(false)
  const [Foiling, SetFoiling] = useState(false)
  const [UVPrinting, SetUVPrinting] = useState(false)
  const [materialName, setMaterialName] = useState()
  const [paperName, setPaperName] = useState()
  const [, setPrevUnit] = useState('mm')

  const defaultUnit = { mm: 1, cm: 10, inch: 25.4 }

  const arrayOfObjects = [
    {
      ลำดับ: <button className="btn-best-top-1">BEST TOP 1</button>,
      ประเภทกระดาษ: 'อาร์ตการ์ด 300 แกรม 2หน้า',
      'ขนาดใบใหญ่:Inch.': '31x43',
      ผ่า: '4',
      'ขนาดที่เลย์:Inch.': '15.5 X 21.5',
      รวม: '4',
      'จำนวนใบพิมพ์:ใบ': '2500',
      จำนวนที่ใช้: '1 รีม 125 แผ่น',
      สูญเสีย: '20.17%',
      Action: <button className="btn-see">ดูเลย์เอ้าท์</button>,
      '': (
        <span className="span-table-final">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600 rounded input-fx-table"
          />
          <label>เลือกการคำนวณ</label>
        </span>
      ),
    },
    {
      ลำดับ: <button className="btn-best-top-2">BEST TOP 2</button>,
      ประเภทกระดาษ: 'อาร์ตการ์ด 300 แกรม 2หน้า',
      'ขนาดใบใหญ่:Inch.': '31x43',
      ผ่า: '4',
      'ขนาดที่เลย์:Inch.': '15.5 X 21.5',
      รวม: '4',
      'จำนวนใบพิมพ์:ใบ': '2500',
      จำนวนที่ใช้: '1 รีม 125 แผ่น',
      สูญเสีย: '20.17%',
      Action: <button className="btn-see">ดูเลย์เอ้าท์</button>,
      '': (
        <span className="span-table-final">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600 rounded input-fx-table"
          />
          <label>เลือกการคำนวณ</label>
        </span>
      ),
    },
    {
      ลำดับ: <button className="btn-best-top-3">BEST TOP 3</button>,
      ประเภทกระดาษ: 'อาร์ตการ์ด 300 แกรม 2หน้า',
      'ขนาดใบใหญ่:Inch.': '31x43',
      ผ่า: '4',
      'ขนาดที่เลย์:Inch.': '15.5 X 21.5',
      รวม: '4',
      'จำนวนใบพิมพ์:ใบ': '2500',
      จำนวนที่ใช้: '1 รีม 125 แผ่น',
      สูญเสีย: '20.17%',
      Action: <button className="btn-see">ดูเลย์เอ้าท์</button>,
      '': (
        <span className="span-table-final">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600 rounded input-fx-table"
          />
          <label>เลือกการคำนวณ</label>
        </span>
      ),
    },
    {
      ลำดับ: '1',
      ประเภทกระดาษ: 'อาร์ตการ์ด 300 แกรม 2หน้า',
      'ขนาดใบใหญ่:Inch.': '31x43',
      ผ่า: '4',
      'ขนาดที่เลย์:Inch.': '15.5 X 21.5',
      รวม: '4',
      'จำนวนใบพิมพ์:ใบ': '2500',
      จำนวนที่ใช้: '1 รีม 125 แผ่น',
      สูญเสีย: '20.17%',
      Action: <button className="btn-see">ดูเลย์เอ้าท์</button>,
      '': (
        <span className="span-table-final">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600 rounded input-fx-table"
          />
          <label>เลือกการคำนวณ</label>
        </span>
      ),
    },
    {
      ลำดับ: '2',
      ประเภทกระดาษ: 'อาร์ตการ์ด 300 แกรม 2หน้า',
      'ขนาดใบใหญ่:Inch.': '31x43',
      ผ่า: '4',
      'ขนาดที่เลย์:Inch.': '15.5 X 21.5',
      รวม: '4',
      'จำนวนใบพิมพ์:ใบ': '2500',
      จำนวนที่ใช้: '1 รีม 125 แผ่น',
      สูญเสีย: '20.17%',
      Action: <button className="btn-see">ดูเลย์เอ้าท์</button>,
      '': (
        <span className="span-table-final">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600 rounded input-fx-table"
          />
          <label>เลือกการคำนวณ</label>
        </span>
      ),
    },
    {
      ลำดับ: '3',
      ประเภทกระดาษ: 'อาร์ตการ์ด 300 แกรม 2หน้า',
      'ขนาดใบใหญ่:Inch.': '31x43',
      ผ่า: '4',
      'ขนาดที่เลย์:Inch.': '15.5 X 21.5',
      รวม: '4',
      'จำนวนใบพิมพ์:ใบ': '2500',
      จำนวนที่ใช้: '1 รีม 125 แผ่น',
      สูญเสีย: '20.17%',
      Action: <button className="btn-see">ดูเลย์เอ้าท์</button>,
      '': (
        <span className="span-table-final">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600 rounded input-fx-table"
          />
          <label>เลือกการคำนวณ</label>
        </span>
      ),
    },
    {
      ลำดับ: '4',
      ประเภทกระดาษ: 'อาร์ตการ์ด 300 แกรม 2หน้า',
      'ขนาดใบใหญ่:Inch.': '31x43',
      ผ่า: '4',
      'ขนาดที่เลย์:Inch.': '15.5 X 21.5',
      รวม: '4',
      'จำนวนใบพิมพ์:ใบ': '2500',
      จำนวนที่ใช้: '1 รีม 125 แผ่น',
      สูญเสีย: '20.17%',
      Action: <button className="btn-see">ดูเลย์เอ้าท์</button>,
      '': (
        <span className="span-table-final">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600 rounded input-fx-table"
          />
          <label>เลือกการคำนวณ</label>
        </span>
      ),
    },
  ]

  useEffect(
    () =>
      ClickLay
        ? window.scrollTo(0, document.body.scrollHeight)
        : window.scrollTo(0, document.body.scrollTop),
    [ClickLay]
  )

  useEffect(() => {
    // //? รูปแบบสินค้า
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

    //? เครื่องพิมพ์
    const getPrinterFormDB = async () => {
      const printer = await GET_PRINTER_NAME(token)
      const printerAll = printer.map(({ name }) => name)
      dispatch(setResPrinterName(printerAll))
    }
    getPrinterFormDB()
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

  const SentCall = () => {
    router.push({
      pathname: '/quotation/callpage',
      query: 'doc_code=' + docOffer[0].รหัสเอกสาร,
    })

    dispatch(
      setDocOffer([
        {
          วันที่: docOffer[0].วันที่,
          รหัสเอกสาร: docOffer[0].รหัสเอกสาร,
          รายละเอียด: docOffer[0].รายละเอียด,
          ลูกค้า: docOffer[0].ลูกค้า,
          สถานะลูกค้า: docOffer[0].สถานะลูกค้า,
          จำนวนงาน: docOffer[0].จำนวนงาน,
          ผู้ออกเอกสาร: String(docOffer[0].ผู้ออกเอกสาร),
          Action: String(docOffer[0].Action),
        },
      ])
    )
  }

  const WhenClickLay = () => {
    Boolean(ClickLay) ? SetClickLay(false) : SetClickLay(true)
  }

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
    <div className="offer-page">
      <div className="lg:container lg:mx-auto lg:px-4 bg-out">
        <div className="pt-5 pl-5 pr-5">
          <label className="top-head">
            HON estimate{' '}
            <span className="text-blue-400">
              {' '}
              เอกสารขอราคา {docOffer[0].รหัสเอกสาร}
            </span>
          </label>
          <div className="grid grid-cols-3 gap-4 custom-29">
            <div className="col-span-3 lg:col-span-2 custom-14 p-5 custom-14-na flex">
              <label className="h1">ข้อมูลลูกค้า</label>
              <div className="grid grid-cols-10 gap-4 p-5 m-auto">
                <div className="col-span-10 lg:col-span-2 mt-3">
                  <label>
                    ลูกค้า:<span>{docOffer[0].ลูกค้า}</span>
                  </label>
                  <br />
                  <br />
                  <label>
                    ผู้ติดต่อ:<span>คุณจอย</span>
                  </label>
                  <br />
                  <br />
                  <label>
                    เบอร์โทรศัพท์:<span>0838838832</span>
                  </label>
                  <br />
                  <br />
                  <label>
                    อีเมล์:<span>vero@gmail.com</span>
                  </label>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-10 lg:col-span-6">
                  <label>
                    Status:{' '}
                    <span>
                      <button className="New">{docOffer[0].สถานะลูกค้า}</button>
                      <button className="Off-line">Offline</button>
                      <button className="face-book">
                        {docOffer[0].ลูกค้า}
                      </button>
                      <button className="line">{docOffer[0].ลูกค้า}</button>
                    </span>
                  </label>
                  <br />
                  <br />
                  <label>
                    เบอร์โทรศัพท์:<span>123456789</span>
                  </label>
                  <br />
                  <br />
                  <label>
                    เบอร์แฟกซ์:<span>-</span>
                  </label>
                  <br />
                  <br />
                  <label>
                    ที่อยู่: <span>xxxxxxxxxxx 10000</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 custom-15">
              <div className="custom-16 h1">
                <label className="pt-5"> เอกสารขอราคา</label>
              </div>
              <table id="customers">
                <tbody>
                  <tr>
                    <td>
                      <div className="grid grid-cols-10 gap-1">
                        <div className="col-span-2 mt-4 ml-2 offer-sale">
                          ผู้จัดทำใบขอราคา:
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1">
                          <img
                            className="block m-auto rounded-full pic-sale"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqelGYhDyC4P6HBYqGPsFxmtRFnDGEota1fg&amp;usqp=CAU"
                            alt="1"
                          />
                        </div>
                        <div className="col-span-3 name-sale mt-1">
                          นลิมรัตน์ ฝ่ายขาย
                          <br />
                          <label className="ball-sale">ฝ่ายขาย</label>
                        </div>
                        <div className="col-span-3 name-sale time-doc mt-1">
                          วันที่ออกเอกสาร:
                          <span>{docOffer[0].วันที่}</span>
                          <br />
                          <label className="time">
                            เวลา: <span>10:18 น.</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="grid grid-cols-10 gap-1">
                        <div className="col-span-2 mt-4 ml-2 offer-sale">
                          ผู้จัดทำใบราคา:
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1">
                          <img
                            className="block m-auto rounded-full pic-sale"
                            src="https://th.visafoto.com/img/docs2/zz_4x4_cm.jpg"
                            alt="1"
                          />
                        </div>
                        <div className="col-span-3 name-sale mt-1">
                          เกี๊ยวน้ำปลา แต่ไม่เค็ม
                          <br />
                          <label className="ball-ceo">CEO</label>
                        </div>
                        <div className="col-span-3 name-sale time-doc mt-1">
                          วันที่ออกเอกสาร:
                          <span>{docOffer[0].วันที่}</span>
                          <br />
                          <label className="time">
                            เวลา: <span>10:18 น.</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 add-border-tb add-more-border">
          <div className="mt-5 col-span-1 lg:col-span-2">
            <label className="h1-hover">ข้อมูลสินค้า</label>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4">
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
              <div className="border-gray-300 border rounded-sm set-height-01">
                <div className="custom-06 p-2 flex bg-head">
                  <label className="select-side-print">เลือกด้านพิมพ์</label>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 add-the-border-001">
                  <div className="col-span-4 lg:col-span-1">
                    <label className="ml-3 mt-5 mb-2 Label-In-side">
                      Out-side
                    </label>
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
                  <div className="col-span-4 lg:col-span-1">
                    <label className="ml-3 mt-5 mb-2 Label-In-side">
                      In-side
                    </label>
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
              </div>
            </div>
          </div>
          <div>
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 add-border-tb">
          <div className="col-span-5 mt-5">
            <label className="h1-hover">ขนาดสินค้า</label>
          </div>
          <div className="lg:col-span-2 col-span-5">
            <div className="grid grid-cols-1 gap-4">
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
                          onChange={(value) =>
                            handleChangeSize(value, 'height')
                          }
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
                <div className="rounded-sm border ml-2 mr-2 px-2 py-3 text-center total m-5 left-right">
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
                <label
                  onClick={() =>
                    OpenMoreDetail ? SetMoreDetail(false) : SetMoreDetail(true)
                  }
                  className="ml-6 more-detail-na"
                >
                  เปิดตัวเลือกเพิ่มเติม
                </label>
              </div>
              {OpenMoreDetail ? (
                <div className="small-font-na page-more">
                  <div className="border-gray-300 border rounded-sm size-pro-na">
                    <div className="bg-head custom-06 p-2">
                      <div className="float-left lg:p-4 p-2 product-value-ok bg-head">
                        ตั้งค่ากระดาษ
                      </div>
                      <div className="font-semibold lg:p-3 float-right bg-head">
                        <span className="text-white">เลือกหน่วย:</span>
                        <select className="border rounded px-2 py-2 focus:outline-none">
                          <option>เซนติเมตร</option>
                          <option>Two</option>
                          <option>Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2 na-ja mb-4">
                      <div className="lg:col-span-1 col-span-2">
                        <div className="font-semibold">
                          <span className="text-gray-800 this-text">
                            <span className="this-l">กริปเปอร์</span>
                            <input
                              type="text"
                              className="focus:outline-none border rounded px-2 py-1 input-fx"
                              placeholder="00.00"
                            />
                            cm
                          </span>
                        </div>
                        <div className="font-semibold">
                          <span className="text-gray-800 this-text">
                            ขอบด้านขวา
                            <input
                              type="text"
                              className="focus:outline-none border rounded px-2 py-1 input-fx"
                              placeholder="00.00"
                            />
                            cm
                          </span>
                        </div>
                        <div className="font-semibold">
                          <span className="text-gray-800 this-text">
                            ระยะห่างเลย์
                            <input
                              type="text"
                              className="focus:outline-none border rounded px-2 py-1 input-fx"
                              placeholder="00.00"
                            />
                            cm
                          </span>
                        </div>
                      </div>
                      <div className="lg:col-span-1 col-span-2">
                        <div className="font-semibold">
                          <span className="text-gray-800 this-text">
                            ขอบด้านซ้าย
                            <input
                              type="text"
                              className="focus:outline-none border rounded px-2 py-1 input-fx"
                              placeholder="00.00"
                            />
                            cm
                          </span>
                        </div>
                        <div className="font-semibold">
                          <span className="text-gray-800 this-text">
                            <span className="this-r">ขอบด้านบน</span>
                            <input
                              type="text"
                              className="focus:outline-none border rounded px-2 py-1 input-fx"
                              placeholder="00.00"
                            />
                            cm
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="lg:col-span-3  col-span-6">
            <div className="grid grid-cols-8 gap-4 lay-box2d">
              <label className="label-ex-box2d lg:col-span-2 col-span-8">
                ภาพตัวอย่างกล่องเมื่อกางออก
              </label>
              <div className="mt-6 mb-7 lg:col-span-4 col-span-8">
                <TUCK_END_BOXES_MAIN />
              </div>
              <div className="col-span-8 lg:col-span-2">
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
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 add-border-tb">
          <div className="col-span-1 lg:col-span-3 mt-5">
            <label className="h1-hover">
              เครื่องพิมพ์ และจำนวนที่ต้องการผลิต
            </label>
          </div>
          <div className="engine01">
            <div className="h1">
              <label>เลือกเครื่องพิมพ์</label>
            </div>
            <div className="grid grid-cols-5 gap-0">
              <div className="col-span-2 con-0">ประเภทกระดาษ</div>
              <div className="col-span-2 con-1 flex">
                {paperSelect(resPaperName)}
              </div>
              <div className="col-span-1 con-2"></div>
              <div className="col-span-5 con-3">
                <span className="span-v">{printerSelect(resPrinterName)}</span>
              </div>
            </div>
          </div>
          <div className="engine02">
            <div className="h1">
              <label>จำนวนสั่งผลิต</label>
            </div>
            <div className="grid grid-cols-5 gap-0 p-3">
              <div className="col-span-1 con-4">
                <span className="s">
                  จำนวนที่ 1
                  <input
                    type="text"
                    className="focus:outline-none border rounded input-fx"
                  />
                </span>
              </div>
              <div className="col-span-1 con-4">
                <span className="s">
                  จำนวนที่ 2
                  <input
                    type="text"
                    className="focus:outline-none border rounded input-fx"
                  />
                </span>
              </div>
              <div className="col-span-1 con-4">
                <span className="s">
                  จำนวนที่ 3
                  <input
                    type="text"
                    className="focus:outline-none border rounded input-fx"
                  />
                </span>
              </div>
              <div className="col-span-1 con-4">
                <span className="s">
                  จำนวนที่ 4
                  <input
                    type="text"
                    className="focus:outline-none border rounded input-fx"
                  />
                </span>
              </div>
              <div className="col-span-1 con-4">
                <span className="s">
                  จำนวนที่ 5
                  <input
                    type="text"
                    className="focus:outline-none border rounded input-fx"
                  />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-0 p-3">
              <div className="col-span-1 con-4">
                <span className="s">
                  จำนวนที่ 6
                  <input
                    type="text"
                    className="focus:outline-none border rounded input-fx"
                  />
                </span>
              </div>
              <div className="col-span-1 con-4">
                <span className="s">
                  จำนวนที่ 7
                  <input
                    type="text"
                    className="focus:outline-none border rounded input-fx"
                  />
                </span>
              </div>
              <div className="col-span-1 con-4">
                <span className="s">
                  จำนวนที่ 8
                  <input
                    type="text"
                    className="focus:outline-none border rounded input-fx"
                  />
                </span>
              </div>
              <div className="col-span-2 con-4">
                <span className="s">
                  จำนวนเผื่อเสีย
                  <input
                    type="text"
                    className="focus:outline-none border rounded input-fx"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="engine03">
            <div className="h1">
              <label> หมายเหตุ</label>
            </div>
            <div className="grid grid-cols-1 gap-1 p-2 con-5">
              <textarea
                placeholder="กรอกรายละเอียด"
                type="text"
                rows="3"
                className="block m-auto w-full focus:outline-none border rounded input-fx"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 mt-2">
            <div className="float-right flex">
              <button onClick={WhenClickLay} className="btn-layout m-2">
                คำนวณแพลท / เลย์เอ้าท์
              </button>
              <button className="btn-reset m-2">รีเซต</button>
            </div>
          </div>
        </div>
        {Boolean(ClickLay) ? (
          <div>
            <label className="label-pain">ข้อมูลตารางเพลทงาน</label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
              <div>
                <img
                  className="block m-auto max-w-full mb-5"
                  src="https://www.img.in.th/images/cafffe39311b2d00d95a3a1f5c36f51e.png"
                  alt="1"
                />
                <button className="btn-best-top-1">BEST TOP 1</button>
              </div>
              <div>
                <img
                  className="block m-auto max-w-full mb-5"
                  src="https://www.img.in.th/images/cafffe39311b2d00d95a3a1f5c36f51e.png"
                  alt="1"
                />
                <button className="btn-best-top-2">BEST TOP 2</button>
              </div>
              <div>
                <img
                  className="block m-auto max-w-full mb-5"
                  src="https://www.img.in.th/images/cafffe39311b2d00d95a3a1f5c36f51e.png"
                  alt="1"
                />
                <button className="btn-best-top-3">BEST TOP 3</button>
              </div>
            </div>
            <DataTable obj={arrayOfObjects} dataInOnePage={5} />
            <span className="block m-auto text-center md:float-right mb-5 mt-2">
              <button onClick={SentCall} className="btn-layout mr-2">
                คำนวณราคา
              </button>
              <button className="btn-reset">แก้ไข</button>
            </span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
