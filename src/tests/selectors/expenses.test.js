import moment from 'moment'

import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

/**
 * should return expenses w/o 'e' in description
 * 'credit card' should come first, b/c we have default
 * sortByDate in place
 */
test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[2], expenses[1] ])
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[2], expenses[0] ])
})


test('should filter by endDate', () => {
    // filter out items created after endDate
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[0], expenses[1] ])
})

// most recent first
test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})

// most expensive first
test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})