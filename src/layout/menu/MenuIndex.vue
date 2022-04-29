<template>
  <el-menu
    class="el-menu-vertical-demo"
    text-color="#FFFFFF"
    background-color="#2F3F57"
    :collapse="getters.isCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <HomeFilled />
        </el-icon>
        <span>首页</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>首页</span>
      </template>
      <el-menu-item index="2-1">
        item one
      </el-menu-item>
      <el-menu-item index="2-2">
        item one
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>首页</span>
      </template>
      <el-menu-item index="3-1">
        item one
      </el-menu-item>
      <el-menu-item index="3-2">
        item one
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>首页</span>
      </template>
      <el-menu-item index="4-1">
        item one
      </el-menu-item>
      <el-menu-item index="4-2">
        item one
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>首页</span>
      </template>
      <el-menu-item index="5-1">
        item one
      </el-menu-item>
      <el-menu-item index="5-2">
        item one
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import {
  Location,
  HomeFilled
} from '@element-plus/icons-vue'
import { useStore } from '@/store/store'
import type { IAllGetters } from '@/store/getters'

const store = useStore()
const getters:IAllGetters = store.getters
</script>

<style scoped>
.el-menu {
  height: 100vh;
  background-color: #2f3f57;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
