import React from 'react'
import { connect } from 'react-redux'

// components
import ExpenseForm from './ExpenseForm'

// action generator
import { addExpense } from '../actions/expenses'

const AddExpensePage = props => (
  <div>
    <h1>add expense</h1>
    {/* onSubmit is the function that is made available via props
      * in ExpenseForm.js to submit the form (that component in turn
      * makes the expense data available here)
      */}
    <ExpenseForm onSubmit={expense => {
        props.dispatch(addExpense(expense))
        // redirect user to homepage after adding expense
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpensePage)
