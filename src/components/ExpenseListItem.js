// export stateless functional component
// description
// amt
// createdAt

import React from 'react'

/**
  * destructure the `props` object to get the necessary properties:
  */
const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
)

export default ExpenseListItem
