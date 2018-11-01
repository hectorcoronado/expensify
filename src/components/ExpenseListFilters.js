import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'

import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate }
  from '../actions/filters'

/**
  * the objective is to get the *old* value from the store
  * and display that above the input
  *
  * `onChange` will take a function and it will fire every
  * time the input changes; absent it/otherwise the input behaves
  * as a read-only field
  * - as the value changes, state will be updated with this function
  *
  * if you open React devtools and dig into components until you find
  * this one, you will see that asides from props mapped from state,
  * `connect()` also gives us access to the `dispatch()` method, so
  * we can modify state directly from here.
  */

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  /**
   * dispatch both actions/filtering functions when user changes dates
   */
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  render () {
    return (
      <div>
        {/*
        * `onChange` function: pass in what you want to do -- the ACTION object.
        * As users type into the input, `setTextFilter` will update state
        * and render only expenses with input text.
        * 
        * the function passed in to `onChange` will fire upon any change to input.
        */}
        <input type='text'
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value))
          }}
        />
        {/*
        * since the <option>'s below have the same explicit value (i.e. `date`
        * `amount`) as the strings we use to set our `sortByDate` & `sortByAmount`
        * filters, we can use `e.target.value` in <select> to dispatch these actions
        *
        * if we set something like <option>Amount</option>, the uppercase letter would
        * throw things off, so we'd have to use <option value='amount'> for it to work.
        */}
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            e.target.value === 'date'
              ? this.props.dispatch(sortByDate())
              : this.props.dispatch(sortByAmount())
          }}
        >
          <option value='date'>date</option>
          <option value='amount'>amount</option>
        </select>
        <DateRangePicker
          endDate={this.props.filters.endDate}
          focusedInput={this.state.calendarFocused}
          isOutsideRange={() => false}
          numberOfMonths={1}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          startDate={this.props.filters.startDate}
        />
      </div>
    )
  }
}

// get filters from state and assign them to `props.filters`
const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
