import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import store from './store'
import Router from './router'

/**
 * Globally inject css styles in all the components,
 * Must be used only once in the app.
 */
injectGlobal`
  body {
    font-family: 'Aref Ruqaa', serif;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f6f9fc;
  }
  * {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <Provider store={store} >
    <Router />
  </Provider>,
  document.getElementById('root')
)
