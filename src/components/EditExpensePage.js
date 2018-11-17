import React from 'react'
import { connect } from 'react-redux'

// components
import ExpenseForm from './ExpenseForm'

// action generators
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id })
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <ExpenseForm
          expense={ this.props.expense }
          onSubmit={ this.onSubmit }
        />
        <button onClick={ this.onRemove }>remove</button>
      </div>
    )
  }
}

/**
 * give this component access to Expense object
 * 
 * expenses live in state, need the one with id that matches
 * `props.match.params.id`, and we can access that by way of
 * `props` by passing it as 2nd argument
 */
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: id => dispatch(removeExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={expense => {
//           props.dispatch(editExpense(props.expense.id, expense))
//           props.history.push('/')
//         }}
//       />
//       {/**
//       * btn below invokes `dispatch()` w/action obj
//       * to update state, like in `ExpenseListFilters`
//       */}
//       <button
//         onClick={() => {
//           props.dispatch(removeExpense({ id: props.expense.id }))
//           props.history.push('/')
//         }}>remove</button>
//     </div>
//   )
// }
