import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const THUMB_UP = 'THUMBED_UP_PICTURES'
export const THUMB_DOWN = 'THUMBED_DOWN_PICTURES'
export const LOGIN = 'LOGIN_USERS'
export const MATCH_USERS = 'MATCH_USERS'
export const TOP_TEN = 'COUNT_THUMBS_UP'

export const select_picture = (pictureId) => (dispatch) => {
  request
    .get(`${baseUrl}/allDogs/${usersId}`)
    .then(response => dispatch({
      type: THUMB_UP,
      payload: response.body
      .then(
        result => {
          dispatch({
            type: TOP_TEN,
            payload: response.body
        }
      )
    }))
    .catch(err => alert(err))
}
