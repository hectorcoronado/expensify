import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, history, removeExpense, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    history = { push: jest.fn() }
    removeExpense = jest.fn()
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        expense={expenses[1]}
        history={history}
        removeExpense={removeExpense}
    />)
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id})
})