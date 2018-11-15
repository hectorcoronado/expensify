import React from 'react'
import { connect } from 'react-redux'

// components
import ExpenseForm from './ExpenseForm'

// action generator
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.onSubmit(expense)
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h1>add expense</h1>
        <ExpenseForm onSubmit={ this.onSubmit }/>
      </div>
    )
  }
}

/**
 * returns an object, wherein we define props that call dispatch
 *    - this config makes it much easier to test this component, as
 *      opposed to directly testing a function (`addExpense`) that we
 *      import from elsewhere
 */
const mapDispatchToProps = dispatch => (
  { onSubmit: expense => dispatch(addExpense(expense)) }
)

/**
 * `connect()` can be called with 2 parameters:
 *    - 1st argument would be `mapStateToProps`
 *    - 2nd argument would be `mapDispatchToProps`
 */
export default connect(undefined, mapDispatchToProps)(AddExpensePage)

// const AddExpensePage = props => (
//   <div>
//     <h1>add expense</h1>
//     {/* onSubmit is the function that is made available via props
//       * in ExpenseForm.js to submit the form (that component in turn
//       * makes the expense data available here)
//       */}
//     <ExpenseForm 
//       onSubmit={expense => {
//         // props.dispatch(addExpense(expense))
//         props.onSubmit(expense)
//         // redirect user to homepage after adding expense
//         props.history.push('/')
//       }}
//     />
//   </div>
// )