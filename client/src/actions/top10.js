import * as request from 'superagent'


const baseUrl = 'http://localhost:3000'
export const FETCHED_TOP10 = 'FETCHED_TOP10'


export const fetchTop10 = (dogs) => (dispatch) => {
  request
  .get(`${baseUrl}/top10/`)
  .then(response => dispatch({
    type: FETCHED_TOP10,
    payload: response.body
  }))
  .catch(err => alert(err))
}
