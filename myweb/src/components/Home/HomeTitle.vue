<template>
  <div class="page">

    <el-row :gutter="20">
      <el-col :span="4">logo
      </el-col>
      <el-col :span="16">陈子豪
      </el-col>
      <el-col :span="4">退出
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

</style>
