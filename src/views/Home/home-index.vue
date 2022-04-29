<template>
  <h1>{{ num }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/store'
export default defineComponent({
  setup () {
    const store = useStore()
    const num = store.state.count
    return {
      num
    }
  }
})
</script>

<style scoped>

</style>
