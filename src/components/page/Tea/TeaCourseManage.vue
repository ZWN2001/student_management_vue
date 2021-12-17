<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-cascades"></i> 选课情况 </el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-breadcrumb-item class='title'>  课程选课名单: </el-breadcrumb-item>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header">
                <el-table-column prop="cid" label="课程id"></el-table-column>
                <el-table-column prop="cname" label="课程名称"></el-table-column>
                <el-table-column prop="sid" label="学生ID"></el-table-column>
                <el-table-column prop="studentName" label="学生姓名"></el-table-column>
                <el-table-column prop="credit" label="学分"></el-table-column>
                <el-table-column prop="courseDay" label="上课星期"></el-table-column>
                <el-table-column prop="courseSection" label="节次"></el-table-column>
                <el-table-column prop="start" label="开课周"></el-table-column>
                <el-table-column prop="end" label="结课周"></el-table-column>

            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import {  get_selected_course } from '@/api';
export default {
    name: 'TeaCourseManage',
    data() {
        return {
            query: {
                tid: localStorage.getItem('tid'),
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            pageTotal: 0,
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            get_selected_course(this.query).then(res => {
                console.log(res);
                this.tableData = res.data.data;
                this.pageTotal = res.data.pagetotal || 10;
                this.tableData.forEach((item,index) =>{
                    if (this.tableData[index].courseDay === 1){
                        this.tableData[index].courseDay = '星期一';
                    }else  if (this.tableData[index].courseDay === 2){
                        this.tableData[index].courseDay = '星期二';
                    }
                    else  if (this.tableData[index].courseDay === 3){
                        this.tableData[index].courseDay = '星期三';
                    }
                    else  if (this.tableData[index].courseDay === 4){
                        this.tableData[index].courseDay = '星期四';
                    }
                    else  if (this.tableData[index].courseDay === 5){
                        this.tableData[index].courseDay = '星期五';
                    }
                    else  if (this.tableData[index].courseDay === 6){
                        this.tableData[index].courseDay = '星期六';
                    }
                    else  if (this.tableData[index].courseDay === 7){
                        this.tableData[index].courseDay = '星期日';
                    }

                    if (this.tableData[index].courseSection === 1){
                        this.tableData[index].courseSection = '第一节';
                    }else if (this.tableData[index].courseSection === 2){
                        this.tableData[index].courseSection = '第二节';
                    }else if (this.tableData[index].courseSection === 3){
                        this.tableData[index].courseSection = '第三节';
                    }else if (this.tableData[index].courseSection === 4){
                        this.tableData[index].courseSection = '第四节';
                    }else if (this.tableData[index].courseSection === 5){
                        this.tableData[index].courseSection = '第五节';
                    }

                    if (this.tableData[index].start === 1){
                        this.tableData[index].start = '第一周';
                    } else if (this.tableData[index].start === 2){
                        this.tableData[index].start = '第二周';
                    } else if (this.tableData[index].start === 3){
                        this.tableData[index].start = '第三周';
                    } else if (this.tableData[index].start === 4){
                        this.tableData[index].start = '第四周';
                    } else if (this.tableData[index].start === 5){
                        this.tableData[index].start = '第五周';
                    } else if (this.tableData[index].start === 6){
                        this.tableData[index].start = '第六周';
                    } else if (this.tableData[index].start === 7){
                        this.tableData[index].start = '第七周';
                    } else if (this.tableData[index].start === 8){
                        this.tableData[index].start = '第八周';
                    } else if (this.tableData[index].start === 9){
                        this.tableData[index].start = '第九周';
                    } else if (this.tableData[index].start === 10){
                        this.tableData[index].start = '第十周';
                    }

                    if (this.tableData[index].end === 1){
                        this.tableData[index].end = '第一周';
                    }  else if (this.tableData[index].end === 2){
                        this.tableData[index].end = '第二周';
                    }  else if (this.tableData[index].end === 3){
                        this.tableData[index].end = '第三周';
                    }  else if (this.tableData[index].end === 4){
                        this.tableData[index].end = '第四周';
                    }  else if (this.tableData[index].end === 5){
                        this.tableData[index].end = '第五周';
                    } else if (this.tableData[index].end === 5){
                        this.tableData[index].end = '第五周';
                    } else if (this.tableData[index].end === 6){
                        this.tableData[index].end = '第六周';
                    } else if (this.tableData[index].end === 7){
                        this.tableData[index].end = '第七周';
                    } else if (this.tableData[index].end === 8){
                        this.tableData[index].end = '第八周';
                    } else if (this.tableData[index].end === 9){
                        this.tableData[index].end = '第九周';
                    } else if (this.tableData[index].end === 10){
                        this.tableData[index].end = '第十周';
                    } else if (this.tableData[index].end === 11){
                        this.tableData[index].end = '第十一周';
                    } else if (this.tableData[index].end === 12){
                        this.tableData[index].end = '第十二周';
                    } else if (this.tableData[index].end === 13){
                        this.tableData[index].end = '第十三周';
                    } else if (this.tableData[index].end === 14){
                        this.tableData[index].end = '第十四周';
                    } else if (this.tableData[index].end === 15){
                        this.tableData[index].end = '第十五周';
                    } else if (this.tableData[index].end === 16){
                        this.tableData[index].end = '第十六周';
                    } else if (this.tableData[index].end === 17){
                        this.tableData[index].end = '第十七周';
                    } else if (this.tableData[index].end === 18){
                        this.tableData[index].end = '第十八周';
                    }

                });
                console.log(this.tableData);
            });
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        },
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}
.title{
    margin-left: 0;
    margin-bottom: 12px;
    color: #222222;
    font-size: 24px;
}
</style>

