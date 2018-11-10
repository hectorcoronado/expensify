import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

// actions:
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'

// selectors:
import getVisibleExpenses from './selectors/expenses'

// create store:
const store = configureStore()

store.dispatch(addExpense({
  description: 'water bill',
  amount: 4500
}))

store.dispatch(addExpense({
  description: 'gas bill',
  createdAt: 1000
}))

store.dispatch(addExpense({
  description: 'rent',
  amount: 109500
}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

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
