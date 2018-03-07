import {FETCHED_RANDOM_DOG} from '../actions/showAllDog'



export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_RANDOM_DOG:
      return action.payload

    default:
      return state
  }
}
