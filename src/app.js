import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

// create store:
const store = configureStore()

/**
 * Provider component's only prop is `store`, this is only the *prop name*,
 * but the value we pass into it is the *actual* store, which we have defined
 * above:
 * const store = configureStore()
 */
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
