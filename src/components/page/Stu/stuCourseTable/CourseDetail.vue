<template>
  <div>
    <span>{{ course.cname }}</span>
    <span>{{ course.teacherName }}</span>

  </div>
</template>

<script>
export default {
  props: ['course'],
}
</script>

<style scoped>
  span {
    display: block;
  }
</style>>
