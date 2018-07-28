// export stateless functional component
// description
// amt
// createdAt

import React from 'react'
import { connect } from 'react-redux'

import { removeExpense } from '../actions/expenses'

/**
  * destructure the `props` object to get the necessary properties:
  */
const ExpenseListItem = ({ amount, createdAt, description, dispatch, id }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    {/**
      * the button below invokes `dispatch()` with an action object
      * to update state, like in `ExpenseListFilters`
      */}
    <button onClick={() => {
      dispatch(removeExpense({ id }))
    }}>remove</button>
  </div>
)

export default connect()(ExpenseListItem)
