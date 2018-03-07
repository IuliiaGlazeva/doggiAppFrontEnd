import { THUMB_UP } from './thumb_up'

export const top10 = (playerId) => {
  return (dispatch, getState) => {
    const { players } = getState()
    const player = players.filter(p => p.id === playerId)[0]
    if (!player) return

    request
      .patch(`${baseUrl}/players/${playerId}`)
      .send({ score: player.score + 1 })
      .then((response) => {
        const player = response.body
        dispatch({
          type: 'UPDATED_PLAYER',
          payload: player
        })
      })
      .catch((error) => {
        console.error('Something went wrong!', error)
      })
  }
}
