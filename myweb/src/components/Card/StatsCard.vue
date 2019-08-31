<template>
  <div>
    <card class="card-stats">
      <el-row :gutter="10">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <slot name="header">
            </slot>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <slot name="header"></slot>
        <el-col :span="8">
          <div class="grid-content bg-purple">{{title}}</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">{{subTitle}}</div>
        </el-col>

        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
          <slot name="content"></slot>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <slot name="footer"></slot>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </card>
  </div>
</template>

// <slot name="content"></slot>
// <slot name="header"></slot>
// <slot name="footer"></slot>

<script>
import Card from './Card.vue'
export default {
  name: 'stats-card',
  components: {
    Card
  }
}
</script>

<style>
.el-row {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
