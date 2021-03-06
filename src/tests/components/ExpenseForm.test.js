import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})

/**
 * first: find form (can be done via tag name, id, class)
 * second: simulate a `submit` event on it, passing in an event
 *  as an object
 * third: verify that state change as expected
 * 
 * if we submit the form, the first check is for missing description
 * and amount; if lacking that data, we set an error in state:
 * 
 *      this.setState(() => ({ error: 'please provide description and amount' }))
 * 
 * we can test for that by getting state from wrapper.
 */
test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    // expect error to not be rendered prior to submit:
    expect(wrapper).toMatchSnapshot()
    // simulate form submission event:
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })

    expect(wrapper.state('error').length).toBeGreaterThan(0)
    // expect error to always render correctly:
    expect(wrapper).toMatchSnapshot()
})

/**
 * 1. render ExpenseForm
 * 2. change the input
 * 3. make assertion expecting description to've been set
 */
test('should set description on input change', () => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm />)
    // find 1st `input` which is used for `description`
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
    const value = 'new note'
    const wrapper = shallow(<ExpenseForm />)

    // component only has one `textarea` element
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })

    expect(wrapper.state('note')).toBe(value)
})

// should set amount if valid input
// 23.50
test('should set amount if valid input is used', () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount')).toBe(value)
})

// should not set amount if invalid input
// 12.123
test('should not set amount if invalid input is used', () => {
    const value = '12.500'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    /** 1)
     * create instance of ExpenseForm
     *   - pass in an expense from expenses
     *   - pass in `onSubmitSpy` as the onSubmit prop
     */
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)

    // 2) simulate form submission event:
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })

    /** 3)
     * make assertions about what ought to've happened
     *   - error state should equal an empty string
     *   - form should have been called with specific arguments,
     *     we can do so by passing in an object with specific
     *     values and properties defined in `expenses[0]`
     */
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt      
    })
})

/**
 * testing `SingleDatePicker` is different, as it's functions are not
 * called e.g. onChange or onSubmit:
 */
test('should set new date on date change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const now = moment()
    /**
     * this is how you trigger a prop from a component, passing
     * in whatever arguments are necessary in the subsequent
     * parentheses
     */
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)

    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendarFocused when onFocusChange prop is called', () => {
    const wrapper = shallow(<ExpenseForm />)
    const focused = true
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toBe(focused)
})