import moment from 'moment'

import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)    
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate setTextFilter action object w/o text value', () => {
    const action = setTextFilter()
    const defaultValue = ''

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: expect.stringContaining(defaultValue)
    })
})

test('should generate setTextFilter action object w/text value', () => {
    const text = 'some string'
    const action = setTextFilter(text)

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: expect.stringContaining(text)
    })
})

test('should generate sortByAmount action object', () => {
    const action = sortByAmount()

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sortByDate action object', () => {
    const action = sortByDate()

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})