import React from 'react'

//? สินค้า
export const productSelect = (resProductName) => {
  const dataButton = resProductName

  const product = (e) => {
    return e.target.value
  }

  return (
    <>
      <select
        className="col-span-2  float-right border rounded px-2 py-2 focus:outline-none input-fx"
        onChange={(e) => product(e)}
      >
        <option selected disabled>
          เลือกสินค้า
        </option>
        {dataButton.map((response, index) => (
          // eslint-disable-next-line react/jsx-key
          <option value={index}>{response}</option>
        ))}
      </select>
    </>
  )
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
        onChange={(e) => material(e)}
      >
        <option selected disabled>
          เลือกรูปแบบสินค้า
        </option>
        {dataButton.map((response, index) => (
          // eslint-disable-next-line react/jsx-key
          <option value={index}>{response}</option>
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
        onChange={(e) => paper(e)}
      >
        <option selected disabled>
          เลือกประเภทกระดาษ
        </option>
        {dataButton.map((response, index) => (
          // eslint-disable-next-line react/jsx-key
          <option value={index}>{response}</option>
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
        onChange={(e) => enamel(e)}
      >
        <option selected disabled>
          เลือกการเคลือบ
        </option>
        {dataButton.map((response, index) => (
          // eslint-disable-next-line react/jsx-key
          <option value={index}>{response}</option>
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
        onChange={(e) => printer(e)}
      >
        <option selected disabled>
          เลือกประเภทเครื่องพิมพ์
        </option>
        {dataButton.map((response, index) => (
          // eslint-disable-next-line react/jsx-key
          <option value={index}>{response}</option>
        ))}
      </select>
    </>
  )
}
