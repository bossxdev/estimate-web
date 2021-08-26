import React from 'react'

//? สินค้า
export const product = (resProductName) => {
  const dataButton = resProductName.map((response, index) => (
    <option key={''} value={index}>
      {response}
    </option>
  ))
  return dataButton
}

//? รูปแบบสินค้า
export const materialSelect = (resMaterialName) => {
  const dataButton = resMaterialName

  const material = (e) => {
    return e.target.value
  }

  return (
    <>
      <select
        className="col-span-2  float-right border rounded px-2 py-2 focus:outline-none input-fx"
        onChange={material}
      >
        <option selected disabled>
          เลือกรูปแบบสินค้า
        </option>
        {dataButton.map((response, index) => (
          <option key={''} value={index}>
            {response}
          </option>
        ))}
      </select>
    </>
  )
}

//? ประเภทกระดาษ
export const paperSelect = (resPaperName) => {
  const dataButton = resPaperName

  const paper = (e) => {
    return e.target.value
  }

  return (
    <>
      <select
        className="col-span-2  float-right border rounded px-2 py-2 focus:outline-none input-fx"
        onChange={paper}
      >
        <option selected disabled>
          เลือกประเภทกระดาษ
        </option>
        {dataButton.map((response, index) => (
          <option key={''} value={index}>
            {response}
          </option>
        ))}
      </select>
    </>
  )
}

//? การเคลือบ
export const enamelSelect = (resEnamelName) => {
  const dataButton = resEnamelName

  const enamel = (e) => {
    return e.target.value
  }

  return (
    <>
      <select
        className="w-full border rounded py-2 focus:outline-none input-fx"
        onChange={enamel}
      >
        <option selected disabled>
          เลือกการเคลือบ
        </option>
        {dataButton.map((response, index) => (
          <option key={''} value={index}>
            {response}
          </option>
        ))}
      </select>
    </>
  )
}

//? เลือกประเภทเครื่องพิมพ์
export const printerSelect = (resPrinterName) => {
  const dataButton = resPrinterName

  const printer = (e) => {
    return e.target.value
  }

  return (
    <>
      <select
        className="m-auto border rounded  focus:outline-none input-fx"
        onChange={printer}
      >
        <option selected disabled>
          เลือกประเภทเครื่องพิมพ์
        </option>
        {dataButton.map((response, index) => (
          <option key={''} value={index}>
            {response}
          </option>
        ))}
      </select>
    </>
  )
}
