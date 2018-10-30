import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      <ExpenseForm
        onSubmit={expense => console.log('updated', expense)}
      />
    </div>
  )
}

/**
 * give this component access to Expense object
 * 
 * expenses live in state, need the one with id that matches
 * `props.match.params.id`, and we can access that by way of
 * `props` by passing it as 2nd argument
 */
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage)
