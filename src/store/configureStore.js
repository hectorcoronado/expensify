// store configuration

import { createStore, combineReducers } from 'redux'

// reducers
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

/**
  * combineReducers allows you to combine multiple reducers to create
  * - a single store; using it is simple:
  *
  * 1. we pass combineReducers as the first arg to createStore, where we call it as a function
  * 2. we pass combineReducers an object as its first arg
  *     - the keys are the names of the root state
  *     - the values are the reducers (functions) that manage that piece of state
  */

// store creation:
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  )

  return store
}
