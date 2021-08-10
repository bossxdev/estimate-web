import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setDocOffer } from '../store/reducers/DocParam'
import { API_GET_PROCESS } from '../../pages/api/GetData'

import axios from 'axios'
import DataTable from './DataTable'
import Estimates from './Estimates'

export default function IndexPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const ApiProcess = 'http://localhost:4200/process/'

  const [ProDoc, SetProDoc] = useState([{}])
  const [okDoc, setOKDoc] = useState([{}])
  const [GetThisResult, SetGetThisResult] = useState(ProDoc)
  const [OldResult, SetOldResult] = useState(ProDoc)
  const [docProcess, setDocProcess] = useState(true)
  const [editOldLeft, setEditOldLeft] = useState([])
  const [getOption, setGetOption] = useState(['กำลังโหลดข้อมูล...'])
  const [ChangeResult, SetChangeResult] = useState("");
  const [, setHandingAPI] = useState()

  useEffect(() => {
    const GetApi = async () => {
      const result = await API_GET_PROCESS()
      if (result) {
        if (docProcess) {
          const resultProcess = result.map((ValueProCess, index) => {
            const Digit = String(ValueProCess.id).length - 1
            let GetLastStr = '00000' + String(ValueProCess.id)

            const MakeJsonProCess = {
              วันที่: (
                <span
                  onClick={() => {
                    setEditOldLeft([result[index]])
                  }}
                >
                  {ValueProCess.วันที่}
                </span>
              ),
              รหัสเอกสาร: GetLastStr.substr(
                GetLastStr.length - Number(14 - Digit)
              ),
              รายละเอียด: ValueProCess.รายละเอียด,
              ลูกค้า: ValueProCess.ลูกค้า,
              สถานะลูกค้า: ValueProCess.สถานะลูกค้า,
              จำนวนงาน: ValueProCess.จำนวนงาน,
              ผู้ออกเอกสาร: (
                <span>
                  <label className="mr-2 name-sale-ft1">
                    {ValueProCess.ผู้ขอเอกสาร}
                  </label>
                  <label className="ball-sale">
                    {ValueProCess.ฝ่ายผู้ขอเอกสาร}
                  </label>
                </span>
              ),
              Action: <button className="btn-process-offer">เสนอราคา</button>,
            }
            return MakeJsonProCess
          })
          SetProDoc(resultProcess)
          SetGetThisResult(resultProcess)
          SetOldResult(resultProcess)
        } else {
          const resultOkcess = result.map((ValueProCess, index) => {
            const Digit = String(ValueProCess.id).length - 1
            let GetLastStr = '00000' + String(ValueProCess.id)

            const MakeJsonProCess = {
              วันที่: (
                <span
                  onClick={() => {
                    setEditOldLeft([result[index]])
                  }}
                >
                  {ValueProCess.วันที่}
                </span>
              ),
              รหัสเอกสาร: GetLastStr.substr(
                GetLastStr.length - Number(14 - Digit)
              ),
              รายละเอียด: ValueProCess.รายละเอียด,
              ลูกค้า: ValueProCess.ลูกค้า,
              สถานะลูกค้า: ValueProCess.สถานะลูกค้า,
              จำนวนงาน: ValueProCess.จำนวนงาน,
              ผู้ขอเอกสาร: (
                <span>
                  <label className="mr-2 name-sale-ft1">
                    {ValueProCess.ผู้ขอเอกสาร}
                  </label>
                  <br />
                  <label className="ball-sale">
                    {ValueProCess.ฝ่ายผู้ขอเอกสาร}
                  </label>
                </span>
              ),
              ผู้เสนอราคา: (
                <span>
                  <label className="mr-2 name-sale-ft1">
                    {ValueProCess.ผู้เสนอราคา}
                  </label>
                  <br />
                  <label className="ball-ceo">
                    {ValueProCess.ฝ่ายผู้เสนอราคา}
                  </label>
                </span>
              ),
              Action: (
                <span>
                  <button className="btn-process-open">เปิด</button>
                  <button className="btn-process-load"></button>
                  <button className="btn-process-share"></button>
                </span>
              ),
            }
            return MakeJsonProCess
          })
          setOKDoc(resultOkcess)
          SetGetThisResult(resultOkcess)
          SetOldResult(resultOkcess)
        }
      }
    }

    setHandingAPI((prevState) => {
      prevState = GetApi(docProcess)
      return prevState
    })

    return () => {
      setHandingAPI(GetApi(docProcess))
    }
  }, [docProcess])

  useEffect(() => {
    docProcess ? SetGetThisResult(ProDoc) : SetGetThisResult(okDoc)
    docProcess ? SetOldResult(ProDoc) : SetOldResult(okDoc)
  }, [ProDoc, docProcess, okDoc])

  useEffect(() => {
    let TdChild = document.querySelectorAll('.ft1-page tr')[1].firstElementChild

    if (TdChild !== null) {
      document.querySelector('.loader').style.display = 'none'
    } else {
      document.querySelector('.loader').style.display = 'block'
    }
  })

  const GetNewDoc = (GetDoc) => {
    if (Number(editOldLeft.length) === 0) {
      PostApi(GetDoc)
    } else {
      axios
        .put(ApiProcess + GetDoc[0].รหัสเอกสาร, {
          วันที่: GetDoc[0].วันที่,
          ลูกค้า: GetDoc[0].ลูกค้า,
          สถานะลูกค้า: GetDoc[0].สถานะลูกค้า,
          ผู้ขอเอกสาร: GetDoc[0].ผู้ออกเอกสาร,
        })
        .then(() => setHandingAPI(docProcess))
    }
  }

  const PostApi = (GetDoc) => {
    axios
      .post(ApiProcess, {
        วันที่: GetDoc[0].วันที่,
        id: GetDoc[0].รหัสเอกสาร,
        รายละเอียด: 'กล่องกระดาษแข็ง กล่องผ่าเสียบ ก้นเสียบ',
        ลูกค้า: GetDoc[0].ลูกค้า,
        สถานะลูกค้า: GetDoc[0].สถานะลูกค้า,
        จำนวนงาน: '200',
        ผู้ขอเอกสาร: GetDoc[0].ผู้ออกเอกสาร,
        ฝ่ายผู้ขอเอกสาร: 'ฝ่ายขาย',
        ผู้เสนอราคา: 'เกี๊ยวน้ำเปล่า แต่ไม่เค็ม',
        ฝ่ายผู้เสนอราคา: 'CEO',
      })
      .then(() => setHandingAPI(docProcess))
  }

  const ClickMyOffer = (e) => {
    let PositionMyOffer = Array.from(
      document.getElementsByClassName('btn-process-offer')
    ).indexOf(e.target)
    if (Number(PositionMyOffer) >= 0) {
      let PositionInner =
        document.querySelectorAll('.ft1-page tr')[PositionMyOffer + 1].innerText

      let OurArr = PositionInner.split('')

      let DocCode =
        String(OurArr[11]) +
        String(OurArr[12]) +
        String(OurArr[13]) +
        String(OurArr[14]) +
        String(OurArr[15]) +
        String(OurArr[16])

      const Filter = GetThisResult.filter((theValue) => {
        return String(theValue.รหัสเอกสาร) === String(DocCode)
      })

      router.push({
        pathname: '/utils/offer',
        query: 'query=' + DocCode,
      })

      dispatch(
        setDocOffer([
          {
            วันที่: String(Filter[0].วันที่),
            รหัสเอกสาร: Filter[0].รหัสเอกสาร,
            รายละเอียด: Filter[0].รายละเอียด,
            ลูกค้า: Filter[0].ลูกค้า,
            สถานะลูกค้า: Filter[0].สถานะลูกค้า,
            จำนวนงาน: Filter[0].จำนวนงาน,
            ผู้ออกเอกสาร: Filter[0].ผู้ออกเอกสาร,
            Action: String(Filter[0].Action),
          },
        ])
      )
    }
  }

  const ExitFormEdit = (GetExitEdit) => {
    if (
      String(GetExitEdit) === 'ModalEstimateLV01' ||
      String(GetExitEdit) === 'font-closed' ||
      String(GetExitEdit) === 'cancel-modal-na-ja'
    ) {
      setEditOldLeft([])
    }
  }

  const FxOption = () => {
    const TagOption = OldResult.map((theValue) => {
      return theValue.วันที่.props.children
    })

    setGetOption(TagOption)
  }

  const FX_Click_Read = () => {
    let filter = ChangeResult
    const Filter = OldResult.filter((theValue) => {
      return theValue.วันที่.props.children.toUpperCase().indexOf(filter) > -1
    })

    if (Filter.length === 0) {
      SetGetThisResult(OldResult)
    } else {
      SetGetThisResult(Filter)
    }
  }

  const FX_Read = (e) => {
    let input, filter, txtValue
    input = e.target
    filter = input.value.toUpperCase()

    const Filter = OldResult.filter((theValue) => {
      txtValue = [
        theValue.วันที่,
        theValue.รหัสเอกสาร,
        theValue.รายละเอียด,
        theValue.ลูกค้า,
        theValue.สถานะลูกค้า,
        theValue.จำนวนงาน,
        theValue.ผู้ออกเอกสาร,
        theValue.Action,
      ]
      return (
        txtValue[0].props.children.toUpperCase().indexOf(filter) > -1 ||
        txtValue[1].toUpperCase().indexOf(filter) > -1 ||
        txtValue[2].toUpperCase().indexOf(filter) > -1 ||
        txtValue[3].toUpperCase().indexOf(filter) > -1 ||
        txtValue[4].toUpperCase().indexOf(filter) > -1 ||
        txtValue[5].toUpperCase().indexOf(filter) > -1
      )
    })

    if (Filter.length === 0) {
      const VisualFilter = [
        {
          วันที่: '',
          รหัสเอกสาร: '',
          รายละเอียด: '',
          ลูกค้า: '',
          สถานะลูกค้า: '',
          จำนวนงาน: '',
          ผู้ออกเอกสาร: '',
          Action: '',
        },
      ]
      SetGetThisResult(VisualFilter)
    } else {
      SetGetThisResult(Filter)
    }
  }

  const FX_Reset_Zero = () => {
    SetGetThisResult(OldResult)
    document.querySelectorAll('.receive-input')[0].value = null
    document.querySelectorAll('.Set-Zero')[0].selectedIndex = 0
  }
  
  return (
    <>
      <div className="container mx-auto pb-10 pt-10">
        <label className="head-the-receive ml-3 md:ml-0">เอกสารขอราคา</label>
        <Estimates
          SendModeEditer={[editOldLeft, ExitFormEdit]}
          SentJsonDataToModal={[ProDoc.length, 'นลิมรัตน์']}
          SentFunctionGetDoc={GetNewDoc}
        />
      </div>
      <div className="grid grid-cols-12 gap-0">
        <div
          className={
            docProcess
              ? 'col-span-12 text-center md:col-span-2 custom-30 active'
              : 'col-span-12 text-center md:col-span-2 custom-30'
          }
          onClick={() => setDocProcess(true)}
        >
          เอกสารรอดำเนินการ
        </div>
        <div
          className={
            docProcess
              ? 'col-span-12 text-center md:col-span-2 custom-30'
              : 'col-span-12 text-center md:col-span-2 custom-30 active'
          }
          onClick={() => setDocProcess(false)}
        >
          เอกสารแล้วเสร็จ
        </div>
        <div className="col-span-12 md:col-span-8 custom-31"></div>
      </div>
      <div className="pl-10 pr-10 pt-10 pb-10">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 md:col-span-2">
            <span className="span-receive">
              <input
                onChange={FX_Read}
                type="text"
                className="receive-input"
                placeholder="ใส่ข้อมูลที่ต้องการค้นหา"
              />
            </span>
          </div>
          <div className="col-span-12 2xl:col-span-3 xl:col-span-5">
            <span className="text-center span-option-receive p-5 md:p-0 block m-auto pl-5 md:pl-0">
              <select
                className="Set-Zero"
                onClick={FxOption}
                onChange={(e) => SetChangeResult(e.target.value)}
              >
                <option value="">ทั้งหมด</option>
                {getOption.map((theValue, index) => {
                  return (
                    <option key={index} value={String(theValue)}>
                      {String(theValue)}
                    </option>
                  )
                })}
              </select>
              <span className="p-2">
                <button onClick={FX_Click_Read} className="find-spaning">
                  <span>ค้นหา</span>
                </button>
                <button
                  onClick={FX_Reset_Zero}
                  className="reset-spaning md:ml-2"
                >
                  <span>รีเซ็ต</span>
                </button>
              </span>
            </span>
          </div>
        </div>
        <div className="mt-5 ft1-page" onClick={ClickMyOffer}>
          {
            <div className={docProcess ? 'block' : 'hidden'}>
              <DataTable obj={GetThisResult} dataInOnePage={10} />
            </div>
          }
          {
            <div className={!docProcess ? 'block' : 'hidden'}>
              <DataTable obj={GetThisResult} dataInOnePage={10} />
            </div>
          }
        </div>
      </div>
      <div className="loader"></div>
    </>
  )
}
