import {
    addExpense,
    editExpense,
    removeExpense
} from '../../actions/expenses'

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense action object', () => {
    const expenseUpdatesObj = {
        amount: 100.50,
        createdAt: 10000,
        description: 'rent',
        note: 'monthly rent'
    }

    const action = editExpense(123, expenseUpdatesObj)

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 123,
        updates: expenseUpdatesObj
    })
})

// addExpense randomizes `id` property, use `expect.any()` to pass test
test('should set up add expense action object with provided values', () => {
    const expenseData = {
        amount: 100.50,
        createdAt: 10000,
        description: 'rent',
        note: 'monthly rent'
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set up add expense aciton object with default values', () => {
    const defaultExpenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultExpenseData,
            id: expect.any(String)
        }
    })
})