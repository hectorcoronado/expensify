# Component State:

Let's say we have a `<Counter />` component.

```javascript
class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

    /**
     * state is initialized here in constructor:
     */
    this.state = {
      count: 0
    }
  }

  /**
   * never update state manually -- the following is INVALID:
   *
   *  handleAddOne () {
   *    this.state.count = this.state.count ++
   *  }
   *
   * ...instead, state is only ever updated via the `setState` function
   */
  handleAddOne () {
    // state's val's before update are by default available in 1st arg:
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne () {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset () {
    // previous state is irrelevant here:
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render () {
    return (
      <div>
        <div>
          <p>count: {this.state.count}</p>
          <button onClick={this.handleAddOne} className=''>+</button>
          <button onClick={this.handleMinusOne} className=''>-</button>
          <button onClick={this.handleReset} className=''>reset</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
```

1. Set up default state object to initialize necessary values
2. Component is rendered with default state values
3. Change state based on event
4. Component re-rendered using new state values
5. Start again at step 3
