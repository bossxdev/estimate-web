import React from 'react'

export const paperSelect = (resPaperName) => {
  const dataButton = resPaperName
  return (
    <>
      {dataButton.map((response) => (
        <option key={response}>{response}</option>
      ))}
    </>
  )
}

export const enamelSelect = (resEnamelName) => {
  const dataButton = resEnamelName
  return (
    <>
      {dataButton.map((response) => (
        <option key={response}>{response}</option>
      ))}
    </>
  )
}
