import React, { Component } from 'react'
import { connect } from 'react-redux'

// components:
import ExpenseListItem from './ExpenseListItem'

// selectors:
import selectExpenses from '../selectors/expenses'

/**
  * `connect()` below has given this component access to our
  * state, and made it available to it via `props`
  */
export const ExpenseList = props => (
  <div>
    { 
      props.expenses.length === 0 
      ? (<p>no expenses</p>)
      : (props.expenses.map(expense => (<ExpenseListItem key={expense.id} {...expense} />)))
    }
  </div>
)

/**
  * `connect()` returns a function, which we need to call with
  * the component that we aim to connect to the store, in this
  * case `ExpenseList`
  *
  * we pass a function directly to `connect()` to determine which
  * data we want to access from the store
  */
// const ConnectedExpenseList = connect(state => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)
//
// export default ConnectedExpenseList

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList)
