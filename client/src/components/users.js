import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusOneButton from './thumb_up'
import MinusOneButton from './thumb_down'


export default class User extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  increasePlayerScore = () => {
    const { id, score, onChange } = this.props
    onChange(id, { score: score + 1 })
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        <PlusOneButton onClick={this.increasePlayerScore} />
      </li>
    )
  }
}
