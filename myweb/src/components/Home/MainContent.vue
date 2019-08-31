<template>
  <div class="page">
    <el-row :gutter="20">
      <el-col :span="6">
        <stats-card>
          <div slot="header">
            <i class="el-icon-delete"></i>
          </div>
          <div slot="content">
            <p class="card-category">Capacity</p>
            <h4 class="card-title">105GB</h4>
          </div>
          <div slot="footer">
            <i class="el-icon-refresh"></i>Updated now
          </div>
        </stats-card>
        
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import StatsCard from '../Card/StatsCard'
export default {
  components: {
    StatsCard
  },
  data() {
    return {
      editTooltip: 'Edit Task',
      deleteTooltip: 'Remove',
      pieChart: {
        data: {
          labels: ['40%', '20%', '40%'],
          series: [40, 20, 40]
        }
      },
      lineChart: {
        data: {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
            [287, 385, 490, 492, 554, 586, 698, 695],
            [67, 152, 143, 240, 287, 335, 435, 437],
            [23, 113, 67, 108, 190, 239, 307, 308]
          ]
        },
        options: {
          low: 0,
          high: 800,
          showArea: false,
          height: '245px',
          axisX: {
            showGrid: false
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc(value) {
                return value[0]
              }
            }
          }]
        ]
      },
      barChart: {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: '245px'
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc(value) {
                return value[0]
              }
            }
          }]
        ]
      },
      tableData: {
        data: [{
            title: 'Sign contract for "What are conference organizers afraid of?"',
            checked: false
          },
          {
            title: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
            checked: true
          },
          {
            title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            checked: true
          },
          {
            title: 'Create 4 Invisible User Experiences you Never Knew About',
            checked: false
          },
          {
            title: 'Read "Following makes Medium better"',
            checked: false
          },
          {
            title: 'Unfollow 5 enemies from twitter',
            checked: false
          }
        ]
      }
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
  height: 6rem;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
