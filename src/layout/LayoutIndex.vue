<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <MenuIndex />
      </el-aside>
      <el-container>
        <el-header>
          <HeaderIndex />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import MenuIndex from './menu/MenuIndex.vue'
import HeaderIndex from './header/headerIndex.vue'
</script>

<style scoped>
.el-aside{
  width: auto;
}
.el-main{
  background-color: #E8EEF4;
}
.el-header{
  display: flex;
  align-items: center;
}
</style>
