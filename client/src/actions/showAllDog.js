import request from 'superagent'

const dogUrl = 'https://dog.ceo/api/img/sheepdog-shetland/n02105855_9079.jpg'


export const FETCHED_RANDOM_DOG = 'FETCHED_RANDOM_DOGS'
export const fetchRandomDog = () => (dispatch) => { console.log("im here")
    .get(`${dogUrl}`)
    .then(response => dispatch({
      type: FETCHED_RANDOM_DOG,
     payload: response.body.RandomDog

    }))
    .catch(err => alert(err))
}
