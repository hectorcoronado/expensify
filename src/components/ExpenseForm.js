import moment from 'moment'
import React from 'react'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
  // keep track of state locally, only do sth w/it once submitted
  state = {
    amount: '',
    calendarFocused: false,
    createdAt: moment(), // new instance of moment()
    description: '',
    error: '',
    note: ''
  }

  onAmountChange = e => {
    const amount = e.target.value
    /** setting `!amount` allows user to delete field entirely
      * after having entered a valid amount
      */ 
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onNoteChange = e => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onSubmit = e => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      // set error state equal to message
      this.setState(() => ({ error: 'please provide description and amount' }))
    } else {
      // clear error
      this.setState(() => ({ error: '' }))
      console.log('submitted');
    }
  }

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          {/* set type to `text` (not `number`)
            * to allow for validation & not allow user
            * to enter > 2 decimal places
            */}
          <input
            type='text'
            placeholder='amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder='add a note for your expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>add expense</button>
        </form>
      </div>
    )
  }
}
