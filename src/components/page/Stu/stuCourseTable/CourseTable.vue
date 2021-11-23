<!--单纯用于处理繁杂的数据-->
<template>
    <div>
        <Schedule :courses="courses"  />
    </div>
</template>

<script>
import Schedule from './Schedule.vue'
import { get_all_selected_course} from '@/api';
export default {
    name: 'CourseTable',
    data() {
        return {
            query: {
                sid: localStorage.getItem('sid'),
            },
            tableData: [],
            courses: [
                {
                    id: 0,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 1,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 2,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 3,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 4,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 5,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 6,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 7,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 8,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 9,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 10,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 11,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 12,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 13,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 14,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 15,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 16,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 17,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 18,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 19,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 20,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 21,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 22,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 23,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 24,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 25,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 26,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 27,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 28,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 29,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 30,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 31,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 32,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 33,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
                {
                    id: 34,
                    cid: "",
                    cname: "",
                    teacherName: "",
                    credit:''
                },
            ],
        }
    },

    components: {
        Schedule
    },

    created() {
        this.getData();
    },

    methods: {
        getData() {
            get_all_selected_course(this.query).then(res => {
                console.log(res)
                this.tableData = res.data;
                this.courses.forEach((item,index) =>{
                    this.courses[index].cid = '';
                    this.courses[index].cname = '';
                    this.courses[index].teacherName = '';
                    this.courses[index].credit = '';
                });
                this.tableData.forEach((item,index) =>{
                    console.log(item['courseSection']);
                    var id = (item['courseSection']-1)*7+item['courseDay']-1;
                    console.log(id);
                    this.courses[id].cid = item['cid'];
                    this.courses[id].cname = item['cname'];
                    this.courses[id].teacherName = item['teacherName'];
                    this.courses[id].credit = item['credit'];
                });
            });
        },


    },
}
// function add(item,index){
//
//     var id = (item['courseSection']-1)*7+item['courseDay'];
//     this.data().courses[id].cid = item['cid'];
//     this.data().courses[id].cname = item['cname'];
//     this.data().courses[id].teacherName = item['teacherName'];
//     this.data().courses[id].credit = item['credit'];
// }
</script>

<style scoped>
body {
    background: #eee;
}
</style>
