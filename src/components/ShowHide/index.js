// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstCard: true, lastCard: true}

  state = {
    firstCard: false,
    lastCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: !firstCard,
    }))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: !lastCard,
    }))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>

        <div className="card-containers">
          <div className="card-container">
            <button
              type="button"
              className="button-style"
              onClick={this.firstName}
            >
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="name-card">Joe</p> : null}
          </div>
          <div className="card-container">
            <button
              type="button"
              className="button-style"
              onClick={this.lastName}
            >
              Show/Hide Lastname
            </button>
            {lastCard ? <p className="name-card">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
