import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setEndDate = jest.fn()
    setStartDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter = {setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setEndDate = {setEndDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    )
})

test('should render ExpenseListFilters with default filter values', () => {
    expect(wrapper).toMatchSnapshot()
})

/**
 * use `setProps` fn to manipulate props for a given component, then
 * assert something about it:
 * 
 * to do so:
 * 1) pass object to `setProps`
 * 2) change the property/ies value/s as necessary
 */
test('should render ExpenseListFilters with altFilter values', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

// should handle text change; pass in obj to simulate `e.target.value`
test('should handle <input> onTextChange', () => {
    const text = { target: { value: 'e' } }
    wrapper.find('input').simulate('change', text)

    expect(setTextFilter).toHaveBeenLastCalledWith('e')
})

// sortBy... are handled in <select> field, use `simulate` & provide sth for `e.target.value`
// should sortByDate
test('should handle sortByDate', () => {
    // change filters, so that `sortBy` doesn't start w/default `date` value
    wrapper.setProps({
        filters: altFilters
    })

    const dateStr = { target: { value: 'date' } }
    wrapper.find('select').simulate('change', dateStr)

    expect(sortByDate).toHaveBeenCalled()
})

// should sortByAmount
test('should handle sortByAmount', () => {
    const amountStr = { target: { value: 'amount' } }
    wrapper.find('select').simulate('change', amountStr)

    expect(sortByAmount).toHaveBeenCalled()
})

// should handle date changes
test('should handle date changes', () => {
    const startDate = moment(0).add(1, 'day')
    const endDate = moment(0).add(5, 'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})

    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

// should handle date focus changes
test('should handle date focus changes', () => {
    const endDateCal = 'endDate'
    const startDateCal = 'startDate'
    
    wrapper.find('DateRangePicker').prop('onFocusChange')(endDateCal)
    expect(wrapper.state('calendarFocused')).toEqual(endDateCal)

    wrapper.find('DateRangePicker').prop('onFocusChange')(startDateCal)
    expect(wrapper.state('calendarFocused')).toEqual(startDateCal)
})