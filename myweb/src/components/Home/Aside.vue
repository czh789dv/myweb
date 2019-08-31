<template>
  <div class="page">
<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="Transparent"
      text-color="#000000"
      active-text-color="#409EFF">
      <el-menu-item index="1">
        <i class="el-icon-user"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
