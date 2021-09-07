import React, { useState } from 'react'
import ModalEstimate from './ModalEstimate'

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

  return (
    <>
      {StatusModalEstimate || Number(SendModeEditer[0].length) === 1 ? (
        <ModalEstimate
          WhenSendDoc={SentFunctionGetDoc}
          SendFxExitEdit={SendModeEditer[1]}
          SendDataValue={TheEdit[0]}
          SendFunc={(GetID) =>
            String(GetID) === 'ModalEstimateLV01' ||
            String(GetID) === 'font-closed' ||
            String(GetID) === 'cancel-modal-na-ja'
              ? SetStatusModalEstimate(false)
              : null
          }
        />
      ) : null}
      <button
        onClick={(value) =>
          value ? SetStatusModalEstimate(value) : SetStatusModalEstimate(value)
        }
        className="md:float-right custom-03"
      >
        สร้างเอกสารใหม่
      </button>
    </>
  )
}
