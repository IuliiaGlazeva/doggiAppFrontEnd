
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchRandomDog } from '../actions/showAllDog'



class AllDogs extends React.Component {
  static propTypes = {
      fetchRandomDog: PropTypes.func.isRequired
  }

  componentWillMount() {
    console.log("im confusing")
    this.props.fetchRandomDog()
  }

  render() {
    return (
      <div>
        <h1>ddd</h1>
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    RandomDog: state.RandomDog
  }
}

export default connect(mapStateToProps, { fetchRandomDog })(AllDogs)
