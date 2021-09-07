import React, { useState, useEffect } from 'react'
import PartBodyEstimate from './PartBodyEstimate'

export default function ModalEstimate(props) {
  const { SendDataValue, WhenSendDoc, SendFunc, SendFxExitEdit } = props
  const [CountDocNumber, SetCountDocNumber] = useState(
    String(Number(SendDataValue.รหัสเอกสาร) + 1)
  )
  const [NameClient, SetNameClient] = useState('')
  const [ClientType, SetClientType] = useState('ลุกค้าเก่า')
  let OurDate = new Date()
  let TheDay, TheMonth, GetDate

  if (String(OurDate.getDate()).length !== 1) {
    TheDay = OurDate.getDate()
  } else {
    TheDay = '0' + String(OurDate.getDate())
  }

  if (String(OurDate.getMonth() + 1).length !== 1) {
    TheMonth = OurDate.getMonth() + 1
  } else {
    TheMonth = '0' + String(OurDate.getMonth() + 1)
  }

  if (String(SendDataValue.วันที่) === '') {
    GetDate = String(TheDay + '/' + TheMonth + '/' + OurDate.getFullYear())
  } else {
    GetDate = String(SendDataValue.วันที่)
  }

  useEffect(() => {
    let GetLastStr = '00000' + String(CountDocNumber)
    SetCountDocNumber(
      GetLastStr.substr(
        GetLastStr.length -
          Number(
            14 - Number(String(Number(SendDataValue.รหัสเอกสาร) + 1).length) - 1
          )
      )
    )
  }, [])

  return (
    <>
      <div
        id="ModalEstimateLV01"
        onClick={(e) => SendFunc(e.target.id) & SendFxExitEdit(e.target.id)}
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
                  {SendDataValue.ผู้ขอเอกสาร}
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
                  <label className="name-sale">
                    {String(
                      OurDate.getHours() + ':' + OurDate.getMinutes() + ' น.'
                    )}
                  </label>
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
                    onChange={(e) => SetClientType(e.target.value)}
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
          <PartBodyEstimate
            SentStateJsonOffer={[
              {
                วันที่: GetDate,
                รหัสเอกสาร: String(Number(SendDataValue.รหัสเอกสาร) + 1),
                รายละเอียด: '',
                ลูกค้า: NameClient,
                สถานะลูกค้า: ClientType,
                จำนวนงาน: '',
                ผู้ออกเอกสาร: SendDataValue.ผู้ขอเอกสาร,
              },
            ]}
            GetWhenSendDoc={WhenSendDoc}
          />
        </div>
      </div>
    </>
  )
}
