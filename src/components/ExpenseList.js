import React from 'react'
import { connect } from 'react-redux'

/**
  * `connect()` below has given this component access to our
  * state, and made it available to it via `props`
  */
const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.filters.text}
    {props.expenses.length}
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
    expenses: state.expenses,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseList)
