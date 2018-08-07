import React from 'react'

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: ''
  }

  onDescriptionChange = e => {
    let description = e.target.value

    this.setState(() => ({ description }))
  }

  onNoteChange = e => {
    let note = e.target.value

    this.setState(() => ({ note }))
  }

  render () {
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type='number'
            placeholder='amount'
          />
          <textarea
            placeholder='add a note for your expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>add expense</button>
        </form>
      </div>
    )
  }
}
