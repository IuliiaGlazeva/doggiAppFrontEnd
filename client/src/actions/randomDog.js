import request from 'superagent'

const baseUrl = 'http://localhost:4001'


export const FETCHED_RANDOM_DOG = 'FETCHED_RANDOM_DOG'

export const fetchRandomDog = () => (dispatch) => {
  request
    .get(`${baseUrl}/random/`)
    .then(response => dispatch({
      type: FETCHED_RANDOM_DOG,
      payload: response.body
    }))
    .catch(err => alert(err))
}
