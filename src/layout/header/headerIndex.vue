<template>
  <el-icon
    :size="40"
    @click="changeCollapse()"
  >
    <Expand v-if="getters.isCollapse" />
    <Fold v-else />
  </el-icon>
</template>

<script lang="ts" setup>
import {
  Expand,
  Fold
} from '@element-plus/icons-vue'
import { useStore } from '@/store/store'
import type { IAllGetters } from '@/store/getters'

const store = useStore()
const getters:IAllGetters = store.getters
const changeCollapse = () => {
  store.commit('changeCollapse', !getters.isCollapse)
}

</script>

<style scoped></style>
