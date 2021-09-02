import React from 'react'

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
