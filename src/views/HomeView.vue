<template>
  <div>
    <el-container>
      <el-header>
        <h2>UNI-ADMIN</h2>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="/hou">后台管理</el-menu-item>
            <el-menu-item index="/xiang">相册管理</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue"

</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  background-color: #545c63;

  h2 {
    line-height: 60px;
    color: #fff;
  }
}

.el-aside {
  height: calc(100vh - 60px);
  background-color: #fefefe;
}

.el-main {
  background-color: #f8f8f8;
}
</style>