import React from 'react'
import { wrapper } from '../src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import '../styles/index.css'
import '../styles/style.css'

const GlobalStyle = createGlobalStyle`
img, canvas, button, a, select {
cursor: pointer
}
`

function WrappedApp({ Component, pageProps }) {
  const store = useStore((state) => {
    return state
  })

  return (
    <PersistGate persistor={store.__persistor} loading={null}>
      <GlobalStyle />
      <Component {...pageProps} />
    </PersistGate>
  )
}

export default wrapper.withRedux(WrappedApp)
