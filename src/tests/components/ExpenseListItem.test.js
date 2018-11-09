import React from 'react'
import { shallow } from 'enzyme'

// import named component, not the default/conected one
import { ExpenseListItem } from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render ExpenseListItem with individual expense', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})