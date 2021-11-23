<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-cascades"></i> 开课查询与选课 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.cid" placeholder="课程id" class="handle-input mr10"></el-input>
                <el-input v-model="query.credit" placeholder="学分" class="handle-input mr10"></el-input>
                <el-select v-model="query.courseDay" placeholder="上课星期" class="handle-select mr10">
                    <el-option key="" label="星期一" value="1"></el-option>
                    <el-option key="" label="星期二" value="2"></el-option>
                    <el-option key="" label="星期三" value="3"></el-option>
                    <el-option key="" label="星期四" value="4"></el-option>
                    <el-option key="" label="星期五" value="5"></el-option>
                    <el-option key="" label="星期六" value="6"></el-option>
                    <el-option key="" label="星期日" value="7"></el-option>
                    <el-option key="" label="未选择星期" value=""></el-option>
                </el-select>
                <el-select v-model="query.courseSection" placeholder="节次" class="handle-select mr10">
                    <el-option key="1" label="第一节" value="1"></el-option>
                    <el-option key="2" label="第二节" value="2"></el-option>
                    <el-option key="3" label="第三节" value="3"></el-option>
                    <el-option key="4" label="第四节" value="4"></el-option>
                    <el-option key="5" label="第五节" value="5"></el-option>
                    <el-option key="" label="未选择节次" value=""></el-option>
                </el-select>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >

                <el-table-column prop="cid" label="课程id" sortable></el-table-column>
                <el-table-column prop="cname" label="课程名称" sortable></el-table-column>
                <el-table-column prop="teacherName" label="授课老师名称"></el-table-column>
                <el-table-column prop="tid" label="授课老师ID"></el-table-column>
                <el-table-column prop="credit" label="学分" sortable></el-table-column>
                <el-table-column prop="courseDay" label="上课星期" sortable></el-table-column>
                <el-table-column prop="courseSection" label="节次" sortable></el-table-column>
                <el-table-column prop="start" label="开课周" sortable></el-table-column>
                <el-table-column prop="end" label="结课周" sortable></el-table-column>
                <el-table-column prop="courseInfo" label="课程描述"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">选课</el-button>
                    </template>
                </el-table-column>
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
import { fetch_course,select_course} from '../../../../api';
export default {
    name: 'ClassInfo',
    data() {
        return {
            query: {
                cid: '',
                tid: '',
                cname: '',
                teacherName:'',
                credit:'',
                courseDay:'',
                courseSection:'',
                start:'',
                end:'',
                courseInfo:'',

                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            pageTotal: 0,
            origin: {},
            idx: -1,
            id: -1
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            fetch_course(this.query).then(res => {
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
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        handleEdit(index, row) {
                this.idx = index;
                this.form = row;
                this.origin['cid'] = row['cid'];
                this.origin['sid'] = localStorage.getItem("sid");
            this.origin['tid'] = row['tid'];
                this.origin['cname'] = row['cname'];
                this.origin['teacherName'] = row['teacherName'];
                // this.origin['start'] = row['start'];
                // this.origin['end'] = row['end'];
                this.origin['credit'] = row['credit'];
                // this.origin['courseDay'] = row['courseDay'];
                // this.origin['courseSection'] = row['courseSection'];
            switch (row['start']){
                case '第一周':this.origin['start'] = '1';break;
                case '第二周':this.origin['start'] = '2';break;
                case '第三周':this.origin['start'] = '3';break;
                case '第四周':this.origin['start'] = '4';break;
                case '第五周':this.origin['start'] = '5';break;
                case '第六周':this.origin['start'] = '6';break;
                case '第七周':this.origin['start'] = '7';break;
                case '第八周':this.origin['start'] = '8';break;
                case '第九周':this.origin['start'] = '9';break;
                case '第十周':this.origin['start'] = '10';break;
            }
            switch (row['end']) {
                case '第一周':this.origin['end'] = '1';break;
                case '第二周':this.origin['end'] = '2';break;
                case '第三周':this.origin['end'] = '3';break;
                case '第四周':this.origin['end'] = '4';break;
                case '第五周':this.origin['end'] = '5';break;
                case '第六周':this.origin['end'] = '6';break;
                case '第七周':this.origin['end'] = '7';break;
                case '第八周':this.origin['end'] = '8';break;
                case '第九周':this.origin['end'] = '9';break;
                case '第十周':this.origin['end'] = '10';break;
                case '第十一周':this.origin['end'] = '11';break;
                case '第十二周':this.origin['end'] = '12';break;
                case '第十三周':this.origin['end'] = '13';break;
                case '第十四周':this.origin['end'] = '14';break;
                case '第十五周':this.origin['end'] = '15';break;
                case '第十六周':this.origin['end'] = '16';break;
                case '第十七周':this.origin['end'] = '17';break;
                case '第十八周':this.origin['end'] = '18';break;
            }
            switch (row['courseDay']){
                case '星期一':this.origin['courseDay'] = '1';break;
                case '星期二':this.origin['courseDay'] = '2';break;
                case '星期三':this.origin['courseDay'] = '3';break;
                case '星期四':this.origin['courseDay'] = '4';break;
                case '星期五':this.origin['courseDay'] = '5';break;
                case '星期六':this.origin['courseDay'] = '6';break;
                case '星期日':this.origin['courseDay'] = '7';break;
            }
            switch (row['courseSection']) {
                case '第一节':this.origin['courseSection'] = '1';break;
                case '第二节':this.origin['courseSection'] = '2';break;
                case '第三节':this.origin['courseSection'] = '3';break;
                case '第四节':this.origin['courseSection'] = '4';break;
                case '第五节':this.origin['courseSection'] = '5';break;
            }
            this.origin['mark'] = '';
            this.origin['clazz'] = localStorage.getItem('clazz');
            this.origin['studentName'] = localStorage.getItem('studentName');
                select_course(this.origin).then(res =>{
                    if (res.data === 0){
                        this.$message.success("选课成功");
                    }else if (res.data===-2){
                        this.$message.error("该课已选");
                    }else if (res.data===-3){
                        this.$message.error("时间冲突");
                    }else if (res.data===-1){
                        this.$message.error("选课失败");
                    }
                })
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 100px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
</style>
