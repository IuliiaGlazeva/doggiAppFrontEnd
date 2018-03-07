
import { THUMB_UP } from './thumb_up'
import { TOP_TEN } from './top10'

export const createMatch = (filter) => {
  return{
    type : MATCH_USERS,
    payload: filter
  }
}
