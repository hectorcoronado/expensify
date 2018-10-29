import React from 'react'
import ExpenseForm from './ExpenseForm'

const AddExpensePage = () => (
  <div>
    <h1>add expense</h1>
    {/* onSubmit is the function that is made available via props
      * in ExpenseForm.js to submit the form (that component in turn
      * makes the expense data available here)
      */}
    <ExpenseForm onSubmit={expense => console.log(expense) } />
  </div>
)

export default AddExpensePage
