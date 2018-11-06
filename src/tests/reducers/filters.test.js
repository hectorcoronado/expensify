import moment from 'moment'

import filtersReducer from '../../reducers/filters'

/**
 * ensure default values are set up correctly; use action
 * type `@@INIT` used internally by redux to do so
 */
test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })

    expect(state.sortBy).toBe('amount')
})

/**
 * since default value for `sortBy` is date, initialize w/
 * different value to ascertain that it changes
 */
test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)

    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'some text'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)

    expect(state.text).toBe(text)
})

test('should set startDate filter', () => {
    const startDate = moment().startOf('week')
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)

    expect(state.startDate).toEqual(startDate)
})

test('should set endDate filter', () => {
    const endDate = moment().endOf('week')
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)

    expect(state.endDate).toEqual(endDate)
})