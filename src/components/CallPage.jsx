import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { setDocCallPage } from '../store/reducers/docParam.reducer'

export default function CallPage() {
  const router = useRouter()
  const dispatch = useDispatch()

  const [FtTable, SetFtTable] = useState(true)

  const { docCallPage } = useSelector((state) => state.docParam)

  const BackCall = () => {
    router.push({
      pathname: '/quotation/offer',
      query: 'query=' + docCallPage[0].รหัสเอกสาร,
    })

    dispatch(
      setDocCallPage([
        {
          วันที่: docCallPage[0].วันที่,
          รหัสเอกสาร: docCallPage[0].รหัสเอกสาร,
          รายละเอียด: docCallPage[0].รายละเอียด,
          ลูกค้า: docCallPage[0].ลูกค้า,
          สถานะลูกค้า: docCallPage[0].สถานะลูกค้า,
          จำนวนงาน: docCallPage[0].จำนวนงาน,
          ผู้ออกเอกสาร: String(docCallPage[0].ผู้ออกเอกสาร),
          Action: String(docCallPage[0].Action),
        },
      ])
    )
  }

  const FX_ClickAllClose = (e) => {
    let OutSideSpan = document.querySelectorAll('.bill-table .btn-close-fs')
    let TotalCloseIndex = document.querySelectorAll('.inside-close-fs')
    let GetObject = Array.from(TotalCloseIndex).indexOf(e.target)
    if (Number(GetObject) >= 0) {
      OutSideSpan[GetObject].remove()
    }
  }

  const ClickOnTable = () => {
    FtTable ? SetFtTable(false) : SetFtTable(true)
  }

  return (
    <div className="sum-table-start">
      <div className="p-10">
        <label className="sum-table-001">ตารางสรุปราคางาน</label>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-5">
          <div className="col-span-2">
            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              <div>
                <div className="custom-07">
                  <label>สเปคงาน</label>
                </div>
                <div className="custom-08">
                  กล่องกระดาษแข็ง, กล่องฝาเสียบ ก้นเสียบ
                  <br />
                  พิมพ์สี ด้านนอก พิมพ์ 4 สี CMYK ,<br />
                  ขนาดสินค้ารวม 15x20x20 cm.
                </div>
                <div className="custom-09">
                  การดาษอารต์การ์ด 350 แกรม 2 หน้า + ขนาดใบใหญ่:31x43 Inch + ผ่า
                  4<br />
                  ขนาดที่เลย์:15.5 X 21.5 Inch. + รวม 4 + จำนวนที่ใช้ 1 รีม 125
                  แผ่น + สูญเสีย 20.17%
                </div>
              </div>
              <div className="custom-10 flex">
                <img
                  className="block m-auto p-2 max-w-full"
                  src="https://www.img.in.th/images/30ad5f05b2a9680c6d512c70425f68fe.png"
                  alt="1"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="custom-11">
              <div className="custom-07">จำนวนที่ต้องการพิมพ์</div>
              <div className="grid grid-cols-2 gap-4 custom-12">
                <div className="grid grid-cols-2 gap-4 block m-auto mt-6">
                  <span className="col-span-2">
                    จำนวนที่ 1
                    <input
                      type="text"
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      placeholder="1,000"
                    />
                  </span>
                  <span className="col-span-2">
                    จำนวนที่ 3
                    <input
                      type="text"
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      placeholder="3,000"
                    />
                  </span>
                  <span className="col-span-2">
                    จำนวนที่ 5
                    <input
                      type="text"
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      placeholder="5,000"
                    />
                  </span>
                  <span className="col-span-2">
                    จำนวนที่ 7
                    <input
                      type="text"
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      placeholder="7,000"
                    />
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 block m-auto mt-6">
                  <span className="col-span-2">
                    จำนวนที่ 2
                    <input
                      type="text"
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      placeholder="2,000"
                    />
                  </span>
                  <span className="col-span-2">
                    จำนวนที่ 4
                    <input
                      type="text"
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      placeholder="4,000"
                    />
                  </span>
                  <span className="col-span-2">
                    จำนวนที่ 6
                    <input
                      type="text"
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      placeholder="6,000"
                    />
                  </span>
                  <span className="col-span-2">
                    จำนวนที่ 8
                    <input
                      type="text"
                      className="focus:outline-none border rounded px-2 py-1 input-fx"
                      placeholder="8,000"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 custom-13 m-one mt-10"></div>
        <div className="horizontal-scroll" onClick={FX_ClickAllClose}>
          {FtTable ? (
            <table id="customers" className="table-na-ja bill-table">
              <tbody>
                <tr className="ths-head-tb">
                  <th className="none-tb">
                    <label className="label-time pl-8">
                      วันที่คำนวน:01/01/2020 เวลา:12:18 น.
                    </label>
                  </th>
                  <th className="none-tb"></th>
                  <th className="none-tb"></th>
                  <th className="none-tb"></th>
                  <th className="none-tb"></th>
                  <th
                    onClick={ClickOnTable}
                    className={FtTable ? 'active cd btn-1' : 'none cd'}
                  >
                    <div>แสดงจำนวนที่ 1-4</div>
                  </th>
                  <th
                    onClick={ClickOnTable}
                    className={!FtTable ? 'active cd btn-2' : 'none cd'}
                  >
                    <div>แสดงจำนวนที่ 5-8</div>
                  </th>
                </tr>
                <tr className="custom-29">
                  <th>ราคา</th>
                  <th>15.01</th>
                  <th>7.72</th>
                  <th>3.42</th>
                  <th>3.42</th>
                  <th className={FtTable ? 'active sl cd' : 'none sl cd'}></th>
                  <th className={!FtTable ? 'active sl cd' : 'none sl cd'}></th>
                </tr>
                <tr className="bg-indigo-300">
                  <td>ยอดงาน</td>
                  <td>1,000</td>
                  <td>2,000</td>
                  <td>3,000</td>
                  <td>4,000</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>ใบเต็ม</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>ใบพิมพ์</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>เผื่อเสีย</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>จำนวนที่ใช้</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td className="bg-yellow-100" colSpan="7">
                    ส่วนการคำนวน เพื่อส่งต่อฝ่ายผลิต
                  </td>
                </tr>
                <tr className="bg-indigo-300">
                  <td>ราคาเริ่มต้น 35.00</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>อาร์ตการ์ด 350 แกรม</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>ค่าแพลท</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>ค่าพิมพ์</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    เคลือบด้าน + สปอทยูวี
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>PVC เงา
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>บล็อคเค
                    60x8 ตัว
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    ปั้มนูน/เค-3.00
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    บล็อคไดคัท
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    ปิ้มไดคัท
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ปะดาว
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ขึ้นรูป
                    / 4.00
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ค่า Qc
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ค่าแพ็ค
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ค่าขนส่ง
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td className="bg-blue-100">รวม</td>
                  <td className="bg-blue-100">213</td>
                  <td className="bg-blue-100">275</td>
                  <td className="bg-blue-100">463</td>
                  <td className="bg-blue-100">875</td>
                  <td className="full-cd bg-blue-100" colSpan="2"></td>
                </tr>
                <tr className="bg-blue-100 btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    ราคาทุน/ชิ้น
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td className="bg-blue-100">
                    <span className="inside-close-fs float-left"></span>
                    กำไร/ชิ้น
                  </td>
                  <td className="bg-blue-100">213</td>
                  <td className="bg-blue-100">275</td>
                  <td className="bg-blue-100">463</td>
                  <td className="bg-blue-100">875</td>
                  <td className="full-cd bg-blue-100" colSpan="2"></td>
                </tr>
                <tr className="bg-blue-100">
                  <td>ราคาขาย</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="bg-yellow-300">
                  <td className="bg-yellow-300">กำไรรวม</td>
                  <td className="bg-yellow-300">0</td>
                  <td className="bg-yellow-300">0</td>
                  <td className="bg-yellow-300">0</td>
                  <td className="bg-yellow-300">0</td>
                  <td className="full-cd bg-yellow-300" colSpan="2"></td>
                </tr>
                <tr>
                  <td></td>
                  <td>0.0%</td>
                  <td>0.0%</td>
                  <td>0.0%</td>
                  <td>0.0%</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table id="customers" className="table-na-ja bill-table">
              <tbody>
                <tr className="ths-head-tb">
                  <th className="none-tb">
                    <label className="label-time pl-8">
                      วันที่คำนวน:01/01/2020 เวลา:12:18 น.
                    </label>
                  </th>
                  <th className="none-tb"></th>
                  <th className="none-tb"></th>
                  <th className="none-tb"></th>
                  <th className="none-tb"></th>
                  <th
                    onClick={ClickOnTable}
                    className={FtTable ? 'active cd btn-1' : 'none cd'}
                  >
                    <div>แสดงจำนวนที่ 1-4</div>
                  </th>
                  <th
                    onClick={ClickOnTable}
                    className={!FtTable ? 'active cd btn-2' : 'none cd'}
                  >
                    <div>แสดงจำนวนที่ 5-8</div>
                  </th>
                </tr>
                <tr className="custom-29">
                  <th>ราคา</th>
                  <th>30.20</th>
                  <th>2.72</th>
                  <th>51.42</th>
                  <th>30.42</th>
                  <th className={FtTable ? 'active sl cd' : 'none sl cd'}></th>
                  <th className={!FtTable ? 'active sl cd' : 'none sl cd'}></th>
                </tr>
                <tr className="bg-indigo-300">
                  <td>ยอดงาน</td>
                  <td>5,000</td>
                  <td>6,000</td>
                  <td>7,000</td>
                  <td>8,000</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>ใบเต็ม</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2">
                    1900 ตรน.
                  </td>
                </tr>
                <tr>
                  <td>ใบพิมพ์</td>
                  <td>2213</td>
                  <td>2375</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2">
                    900 ตรน.
                  </td>
                </tr>
                <tr>
                  <td>เผื่อเสีย</td>
                  <td>12133</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>จำนวนที่ใช้</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td className="bg-yellow-100" colSpan="7">
                    ส่วนการคำนวน เพื่อส่งต่อฝ่ายผลิต
                  </td>
                </tr>
                <tr className="bg-indigo-300">
                  <td>ราคาเริ่มต้น 22.00</td>
                  <td>1213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2">
                    22.11 / ใบเต็ม
                  </td>
                </tr>
                <tr>
                  <td>อาร์ตการ์ด 350 แกรม</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td className="btn-close-fs">ค่าแพลท</td>
                  <td>5213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td>ค่าพิมพ์</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2">
                    ค่าพิมพ์ 0.20/ใบพิมพ์ หมื่นละ 4,000
                  </td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    เคลือบด้าน + สปอทยูวี
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>PVC เงา
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2">
                    ขนาด 3x2นิ้ว=6ตรน. / ตรน.ละ 25บาท
                    <br />
                    4x15=ราคาบล็อคละ60 บาท
                  </td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>บล็อคเค
                    60x8 ตัว
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    ปั้มนูน/เค-3.00
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2">
                    80 ตัว ตัวละ 350=2,800
                  </td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    บล็อคไดคัท
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2">
                    ค่าปั๊ม 0.30 / ใบพิมพ์ หมื่นละ 3,000
                  </td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    ปิ้มไดคัท
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2">
                    0.15/ชิ้น
                  </td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ปะดาว
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ขึ้นรูป
                    / 4.00
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ค่า Qc
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ค่าแพ็ค
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>ค่าขนส่ง
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr>
                  <td className="bg-blue-100">รวม</td>
                  <td className="bg-blue-100">213</td>
                  <td className="bg-blue-100">275</td>
                  <td className="bg-blue-100">463</td>
                  <td className="bg-blue-100">875</td>
                  <td className="full-cd bg-blue-100" colSpan="2"></td>
                </tr>
                <tr className="bg-blue-100 btn-close-fs">
                  <td>
                    <span className="inside-close-fs float-left"></span>
                    ราคาทุน/ชิ้น
                  </td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="btn-close-fs">
                  <td className="bg-blue-100">
                    <span className="inside-close-fs float-left"></span>
                    กำไร/ชิ้น
                  </td>
                  <td className="bg-blue-100">213</td>
                  <td className="bg-blue-100">275</td>
                  <td className="bg-blue-100">463</td>
                  <td className="bg-blue-100">875</td>
                  <td className="full-cd bg-blue-100" colSpan="2"></td>
                </tr>
                <tr className="bg-blue-100">
                  <td>ราคาขาย</td>
                  <td>213</td>
                  <td>275</td>
                  <td>463</td>
                  <td>875</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
                <tr className="bg-yellow-300">
                  <td className="bg-yellow-300">กำไรรวม</td>
                  <td className="bg-yellow-300">0</td>
                  <td className="bg-yellow-300">0</td>
                  <td className="bg-yellow-300">0</td>
                  <td className="bg-yellow-300">0</td>
                  <td className="full-cd bg-yellow-300" colSpan="2"></td>
                </tr>
                <tr>
                  <td></td>
                  <td>0.0%</td>
                  <td>0.0%</td>
                  <td>0.0%</td>
                  <td>0.0%</td>
                  <td className="full-cd" colSpan="2"></td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <button
          onClick={BackCall}
          className="custom-05 mt-2 inline-block hover:text-white focus:outline-none focus:text-white  hover:bg-blue-dark font-bold py-2 px-3 rounded-sm hover:bg-indigo-500 transition ease-in-out duration-300"
        >
          ยกเลิก
        </button>
        <div className="float-right">
          <button className="mr-2 custom-05 mt-2 inline-block hover:text-white focus:outline-none focus:text-white  hover:bg-blue-dark font-bold py-2 px-3 rounded-sm hover:bg-indigo-500 transition ease-in-out duration-300">
            ยืนยันราคา
          </button>
          <button className="custom-05 mt-2 inline-block hover:text-white focus:outline-none focus:text-white  hover:bg-blue-dark font-bold py-2 px-3 rounded-sm hover:bg-indigo-500 transition ease-in-out duration-300">
            สร้างใบเสนอราคา
          </button>
        </div>
      </div>
    </div>
  )
}
