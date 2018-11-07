import moment from 'moment'

/**
 * for `createdAt`, we set one to unix-time 0, then use moment to
 * create instances of same time minus and plus 4 days, then we use the
 * Date prototype's `valueOf()` method to give us a number
 */

export default [
    {
        id: '1',
        description: 'gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'credit card',
        note: '',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]