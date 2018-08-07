import React from 'react'
import { connect } from 'react-redux'

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

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
const ExpenseListFilters = props => (
  <div>
    {/*
      * `onChange` function: pass in what you want to do -- the ACTION object.
      * As users type into the input, `setTextFilter` will update state
      * and render only expenses with input text.
      */}
    <input type='text'
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value))
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
      value={props.filters.sortBy}
      onChange={e => {
        e.target.value === 'date'
          ? props.dispatch(sortByDate())
          : props.dispatch(sortByAmount())
      }}
    >
      <option>date</option>
      <option>amount</option>
    </select>
  </div>
)

// get filters from state and assign them to `props.filters`
const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
