import React from 'react'
import { connect } from 'react-redux'

// components
import ExpenseForm from './ExpenseForm'

// action generator
import { editExpense, removeExpense } from '../actions/expenses'


const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          console.log('updated', expense)
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('/')
        }}
      />
      {/**
      * btn below invokes `dispatch()` w/action obj
      * to update state, like in `ExpenseListFilters`
      */}
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }))
          props.history.push('/')
        }}>remove</button>
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
