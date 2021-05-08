<template>
   <div>{{id}}, {{ JSON.stringify(item) }}</div>
</template>

<script>
export default {
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('FETCH_ITEM', {id: route.params.id})
  },

  // 重要信息：当多次访问路由时，
  // 避免在客户端重复注册模块。
  destroyed () {
  },

  computed: {
    // 从 store 的 state 对象中的获取 item。
    id() { return this.$route.params.id },
    item () {
      return this.$store.state.item
    }
  }
}
</script>
