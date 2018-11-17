import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

// function from jest that allows for easier config/less duplication
beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)

})

/**
 * `AddExpensePage` expects 2 props:
 *      - onSubmit
 *      - history
 * we can pass those in with anything as their values,
 * so we use spies (`jest.fn()`, defined above)
 */
test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

/**
 * test `onSubmit` function directly, passing in data that would
 * get passed in by a real user (an expense)
 */
test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    /**
     * after the `onSubmit` function runs:
     *      - expect history.push (a spy) to be called with the str '/'
     *      - expect `onSubmit` to be called with the data passed in
     */
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})