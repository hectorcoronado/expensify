import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    dashboard
  </div>
)

const AddExpensePage = () => (
  <div>
    add expense
  </div>
)

const EditExpensePage = () => (
  <div>
    edit expense
  </div>
)

const HelpPage = () => (
  <div>
    help
  </div>
)

/**
  * BrowserRouter expects child element length to be 1, hence <div>
  */
const ROUTES = (
  <BrowserRouter>
    <div>
      <Route path='/' component={ExpenseDashboardPage} exact={true} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(ROUTES, document.getElementById('app'))
