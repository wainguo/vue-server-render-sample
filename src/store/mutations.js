import Vue from 'vue'

export default {
  SET_ITEM: (state, { item }) => {
    Vue.set(state.item, item.id, item)
  },
}