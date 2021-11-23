<template>
  <div class="schedule">
    <table>
      <thead>
        <tr>
          <th class="title"></th>
          <th class="title">星期一</th>
          <th class="title">星期二</th>
          <th class="title">星期三</th>
          <th class="title">星期四</th>
          <th class="title">星期五</th>
          <th class="title">星期六</th>
          <th class="title">星期日</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="i in 5">
        <td class="container" v-for="j in 1" >
          <div >第{{i}}节</div>
        </td>

        <td v-for="j in 7"  @click="showCourse((i-1)*7+(j-1))">
          <CourseDetail :course="courses[(i-1)*7+(j-1)]" />
        </td>
      </tr>
      </tbody>
    </table>

        <el-dialog title="课程信息"  :visible.sync="infoVisible" class='card'  width="30%">
            <el-form   label-width="100px">
                <el-form-item label="课程ID">
                    <el-input v-model="course.cid" :disabled='true'></el-input>
                </el-form-item>
                <el-form-item label="课程名">
                    <el-input v-model="course.cname" :disabled='true'></el-input>
                </el-form-item>
                <el-form-item label="授课教师">
                    <el-input v-model="course.teacherName" :disabled='true'></el-input>
                </el-form-item>
                <el-form-item label="学分">
                    <el-input v-model="course.credit" :disabled='true'></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import CourseDetail from './CourseDetail.vue'

export default {
  props: ['courses'],

    data(){
      return{
      infoVisible:false,
          course: {
              cid: "",
              cname: "",
              teacherName: "",
              credit:''
          },
      }
    },
  components: {
    CourseDetail
  },
  methods: {
    showCourse(id) {
        this.infoVisible = true;
        this.course.cname = this.courses[id].cname;
        this.course.cid = this.courses[id].cid;
        this.course.teacherName = this.courses[id].teacherName;
        this.course.credit = this.courses[id].credit;
    },

  }
}
</script>

<style scoped>
  table {
    table-layout: fixed;
    width: 80%;
    height: 75%;
    margin: 20px auto;
    border-collapse: collapse;
    text-align: center;
    /* border-width: 1px; */
  }
  th, td {
    border: 1px solid #ccc;
  }
  th {
    height: 50px;
  }
  td {
    height: 32px;
    cursor: pointer;
  }
  td:hover {
    background-color: #ddd;
  }
  .title{
    background-color: cornflowerblue;
  }
</style>
