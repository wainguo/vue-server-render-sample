import {
    fetchItem,
  } from '../api'
  
  export default {
    FETCH_ITEM: ({ commit, state }, { id }) => {
      // on the client, the store itself serves as a cache.
      // only fetch items that we do not already have, or has expired (3 minutes)
    //   const now = Date.now()
    //   ids = ids.filter(id => {
    //     const item = state.items[id]
    //     if (!item) {
    //       return true
    //     }
    //     if (now - item.__lastUpdated > 1000 * 60 * 3) {
    //       return true
    //     }
    //     return false
    //   })
    //   if (ids.length) {
    //     return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
    //   } else {
    //     return Promise.resolve()
    //   }

    //   item = { idtitle: 'new title', content: 'new world'}
      return fetchItem(id).then(item => {
          console.log(item)
          commit('SET_ITEM', { item })
      })
    //   return Promise.resolve()
    },
  }