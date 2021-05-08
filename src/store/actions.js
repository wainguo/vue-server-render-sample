import {
    fetchItem,
  } from '../api'

  export default {
    FETCH_ITEM: ({ commit, state }, { id }) => {
      return fetchItem(id).then(item => {
          console.log(item)
          commit('SET_ITEM', { item })
      })
    },
  }
