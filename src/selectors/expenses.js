import moment from 'moment'

/**
  * getVisibleExpenses
  * @param { expenses } Array of expenses to be filtered & sorted
  * @param { Object } properties by which to sort
  */

export default (expenses, { text, sortBy, startDate, endDate }) => {
  // only need to filter by `text`, `startDate`, & `endDate`
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt)

    // if both of these are true, the expense is kept, otherwise it will not be
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true

    // boolean, if expenses.description has the text variable string in it
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    // if all the above evaluate to `true`, we have a match
    return startDateMatch && endDateMatch && textMatch
    // once we have filtered through the array, sort by the required value:
  }).sort((a, b) => {
    if (sortBy === 'date') {
      // most recent first: if a.createdAt is less than b.createdAt, `b` value goes first
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      // most expensive first:
      return a.amount < b.amount ? 1 : -1
    }
  })
}
