<!--<template>-->
<!--  <div class="backdrop" @click.self="closeCourse">-->
<!--      <el-dialog title="课程信息" class='card'  width="30%">-->
<!--          <el-form   label-width="100px">-->
<!--              <el-form-item label="课程名">-->
<!--                  <el-input v-model="course.name" :disabled='true'></el-input>-->
<!--              </el-form-item>-->
<!--              <el-form-item label="授课教师">-->
<!--                  <el-input v-model="course.teacher" :disabled='true'></el-input>-->
<!--              </el-form-item>-->
<!--              <el-form-item label="上课地点">-->
<!--                  <el-input v-model="course.location" :disabled='true'></el-input>-->
<!--              </el-form-item>-->
<!--          </el-form>-->
<!--      </el-dialog>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  props: ['curID', 'courses'],-->
<!--  data() {-->
<!--    return {-->
<!--      uri: 'http://localhost:3000/courses/' + this.curID,-->
<!--      course: {-->
<!--        name: this.courses[this.curID].name,-->
<!--        teacher: this.courses[this.curID].teacher,-->
<!--        location: this.courses[this.curID].location-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    closeCourse() {-->
<!--      this.$emit('close')-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--  .card {-->
<!--    width: 300px;-->
<!--    padding: 40px;-->
<!--    margin: 150px auto;-->
<!--    border-radius: 20px;-->
<!--    background: white;-->
<!--    text-align: left;-->
<!--  }-->
<!--  .backdrop {-->
<!--    top: 0;-->
<!--    position: fixed;-->
<!--    background: rgba(0, 0, 0, 0.5);-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--  }-->
<!--  label {-->
<!--    color: #aaa;-->
<!--    display: inline-block;-->
<!--    margin: 25px 0 15px;-->
<!--    font-size: 0.8em;-->
<!--    font-weight: bold;-->
<!--    letter-spacing: 1px;-->
<!--    text-transform: uppercase;-->
<!--  }-->
<!--  input, select {-->
<!--    display: block;-->
<!--    padding: 10px 6px;-->
<!--    width: 100%;-->
<!--    box-sizing: border-box;-->
<!--    border: none;-->
<!--    border-bottom: 1px solid #ddd;-->
<!--    color: #555;-->
<!--  }-->

<!--  .confirm button {-->
<!--    width: 100px;-->
<!--    border: none;-->
<!--    padding: 10px 20px;-->
<!--    margin-top: 20px;-->
<!--    color: white;-->
<!--    border-radius: 20px;-->
<!--    cursor: pointer;-->
<!--    background: #0b6dff;-->
<!--  }-->

<!--  .delete input {-->
<!--    display: inline-block;-->
<!--    width: 100px;-->
<!--    border: none;-->
<!--    padding: 10px 20px;-->
<!--    margin-top: 20px;-->
<!--    color: white;-->
<!--    border-radius: 20px;-->
<!--    cursor: pointer;-->
<!--    background: #ff0b0b;-->
<!--  }-->
<!--</style>-->
