// export stateless functional component
// description
// amt
// createdAt

import React from 'react'
import { Link } from 'react-router-dom'

/**
  * destructure `props` obj, get needed ones:
  */
const ExpenseListItem = ({ amount, createdAt, description, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
)

export default ExpenseListItem
