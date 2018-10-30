// export stateless functional component
// description
// amt
// createdAt

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeExpense } from '../actions/expenses'

/**
  * destructure `props` obj, get needed ones:
  */
const ExpenseListItem = ({ amount, createdAt, description, dispatch, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
    {/**
      * btn below invokes `dispatch()` w/action obj
      * to update state, like in `ExpenseListFilters`
      */}
    <button onClick={() => {
      dispatch(removeExpense({ id }))
    }}>remove</button>
  </div>
)

export default connect()(ExpenseListItem)
