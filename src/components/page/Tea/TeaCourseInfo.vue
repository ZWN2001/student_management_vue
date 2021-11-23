<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-cascades"></i> 课程管理 </el-breadcrumb-item>
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
                <el-button type="primary" icon="el-icon-search" @click="handleNewCourse">新建</el-button>
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
                <el-table-column prop="credit" label="学分" sortable></el-table-column>
                <el-table-column prop="courseDay" label="上课星期" sortable></el-table-column>
                <el-table-column prop="courseSection" label="节次" sortable></el-table-column>
                <el-table-column prop="start" label="开课周" sortable></el-table-column>
                <el-table-column prop="end" label="结课周" sortable></el-table-column>
                <el-table-column prop="courseInfo" label="课程描述"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-edit" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑课程信息" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="课程ID">
                    <el-input v-model="form.cid" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="课程名称">
                    <el-input v-model="form.cname" ></el-input>
                </el-form-item>
                <el-form-item label="学分">
                    <el-input v-model="form.credit" ></el-input>
                </el-form-item>
                <el-form-item label="上课星期">
                    <el-select v-model="form.courseDay" placeholder="上课星期" class="handle-select mr10">
                        <el-option key="" label="星期一" value="1"></el-option>
                        <el-option key="" label="星期二" value="2"></el-option>
                        <el-option key="" label="星期三" value="3"></el-option>
                        <el-option key="" label="星期四" value="4"></el-option>
                        <el-option key="" label="星期五" value="5"></el-option>
                        <el-option key="" label="星期六" value="6"></el-option>
                        <el-option key="" label="星期日" value="7"></el-option>
                        <el-option key="" label="未选择星期" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="节次">
                    <el-select v-model="form.courseSection" placeholder="节次" class="handle-select mr10">
                        <el-option key="1" label="第一节" value="1"></el-option>
                        <el-option key="2" label="第二节" value="2"></el-option>
                        <el-option key="3" label="第三节" value="3"></el-option>
                        <el-option key="4" label="第四节" value="4"></el-option>
                        <el-option key="5" label="第五节" value="5"></el-option>
                        <el-option key="" label="未选择节次" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开课周">
                    <el-select v-model="form.start" placeholder="开课周" class="handle-select mr10">
                        <el-option key="" label="第一周" value="1"></el-option>
                        <el-option key="" label="第二周" value="2"></el-option>
                        <el-option key="" label="第三周" value="3"></el-option>
                        <el-option key="" label="第四周" value="4"></el-option>
                        <el-option key="" label="第五周" value="5"></el-option>
                        <el-option key="" label="第六周" value="6"></el-option>
                        <el-option key="" label="第七周" value="7"></el-option>
                        <el-option key="" label="第八周" value="8"></el-option>
                        <el-option key="" label="第九周" value="9"></el-option>
                        <el-option key="" label="第十周" value="10"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="结课周">
                    <el-select v-model="form.end" placeholder="结课周" class="handle-select mr10">
                        <el-option key="" label="第一周" value="1"></el-option>
                        <el-option key="" label="第二周" value="2"></el-option>
                        <el-option key="" label="第三周" value="3"></el-option>
                        <el-option key="" label="第四周" value="4"></el-option>
                        <el-option key="" label="第五周" value="5"></el-option>
                        <el-option key="" label="第六周" value="6"></el-option>
                        <el-option key="" label="第七周" value="7"></el-option>
                        <el-option key="" label="第八周" value="8"></el-option>
                        <el-option key="" label="第九周" value="9"></el-option>
                        <el-option key="" label="第十周" value="10"></el-option>
                        <el-option key="" label="第十一周" value="11"></el-option>
                        <el-option key="" label="第十二周" value="12"></el-option>
                        <el-option key="" label="第十三周" value="13"></el-option>
                        <el-option key="" label="第十四周" value="14"></el-option>
                        <el-option key="" label="第十五周" value="15"></el-option>
                        <el-option key="" label="第十六周" value="16"></el-option>
                        <el-option key="" label="第十七周" value="17"></el-option>
                        <el-option key="" label="第十八周" value="18"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="课程描述">
                    <el-input type="textarea" v-model="form.courseInfo"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="删除" :visible.sync="deleteVisible" width="30%">
            <div class='title'>确定删除该课程？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveDelete">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="新建课程" :visible.sync="newCourseVisible" width="30%">
            <el-form ref="form" :model="newCourse" label-width="90px">
                <el-form-item label="课程名称">
                    <el-input v-model="newCourse.cname" ></el-input>
                </el-form-item>
                <el-form-item label="学分">
                    <el-input v-model="newCourse.credit" ></el-input>
                </el-form-item>
                <el-form-item label="选择上课星期" >
                    <el-select v-model="newCourse.courseDay" placeholder="请选择上课星期">
                        <el-option v-for="week in options_weeks" :key="week.value" :label="week.label" :value="week.value"> </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择节次" >
                    <el-select v-model="newCourse.courseSection" placeholder="请选择上课节次">
                        <el-option v-for="section in options_sections" :key="section.value" :label="section.label" :value="section.value"> </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开课周">
                    <el-select v-model="newCourse.start" placeholder="开课周" class="handle-select mr10">
                        <el-option key="" label="第一周" value="1"></el-option>
                        <el-option key="" label="第二周" value="2"></el-option>
                        <el-option key="" label="第三周" value="3"></el-option>
                        <el-option key="" label="第四周" value="4"></el-option>
                        <el-option key="" label="第五周" value="5"></el-option>
                        <el-option key="" label="第六周" value="6"></el-option>
                        <el-option key="" label="第七周" value="7"></el-option>
                        <el-option key="" label="第八周" value="8"></el-option>
                        <el-option key="" label="第九周" value="9"></el-option>
                        <el-option key="" label="第十周" value="10"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="结课周">
                    <el-select v-model="newCourse.end" placeholder="结课周" class="handle-select mr10">
                        <el-option key="" label="第一周" value="1"></el-option>
                        <el-option key="" label="第二周" value="2"></el-option>
                        <el-option key="" label="第三周" value="3"></el-option>
                        <el-option key="" label="第四周" value="4"></el-option>
                        <el-option key="" label="第五周" value="5"></el-option>
                        <el-option key="" label="第六周" value="6"></el-option>
                        <el-option key="" label="第七周" value="7"></el-option>
                        <el-option key="" label="第八周" value="8"></el-option>
                        <el-option key="" label="第九周" value="9"></el-option>
                        <el-option key="" label="第十周" value="10"></el-option>
                        <el-option key="" label="第十一周" value="11"></el-option>
                        <el-option key="" label="第十二周" value="12"></el-option>
                        <el-option key="" label="第十三周" value="13"></el-option>
                        <el-option key="" label="第十四周" value="14"></el-option>
                        <el-option key="" label="第十五周" value="15"></el-option>
                        <el-option key="" label="第十六周" value="16"></el-option>
                        <el-option key="" label="第十七周" value="17"></el-option>
                        <el-option key="" label="第十八周" value="18"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="课程描述">
                    <el-input type="textarea" v-model="newCourse.courseInfo"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="newCourseVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveNewCourse">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { add_course, drop_course, fetch_course, update_course } from '@/api';
export default {
    name: 'ClassInfo',
    data() {
        return {
            query: {
                cid: '',
                tid: localStorage.getItem('tid'),
                cname: '',
                teacherName:localStorage.getItem('teacherName'),
                credit:'',
                courseDay:'',
                courseSection:'',
                start:'',
                end:'',
                courseInfo:'',

                pageIndex: 1,
                pageSize: 10
            },
            options_weeks: [
                {
                    value: '1',
                    label: '星期一'
                },
                {
                    value: '2',
                    label: '星期二'
                },
                {
                    value: '3',
                    label: '星期三'
                },
                {
                    value: '4',
                    label: '星期四'
                },
                {
                    value: '5',
                    label: '星期五'
                },
                {
                    value: '6',
                    label: '星期六'
                },
                {
                    value: '7',
                    label: '星期日'
                },
            ],
            options_sections: [
                {
                    value: '1',
                    label: '第1节：8:00~9:50'
                },
                {
                    value: '2',
                    label: '第2节：10:00~11:50'
                },
                {
                    value: '3',
                    label: '第3节：14:00~15:50'
                },
                {
                    value: '4',
                    label: '第4节：16:00~17:50'
                },
                {
                    value: '5',
                    label: '第5节：19:00~20:50'
                },
            ],
            editVisible:false,
            deleteVisible:false,
            newCourseVisible:false,
            tableData: [],
            pageTotal: 0,
            form: {},
            newCourse:{},
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
            this.editVisible = true;
            this.idx = index;
            this.form = row;
            console.log(this.form);
        },
        saveEdit(){

            switch (this.form['start']){
                case '第一周':this.form['start'] = '1';break;
                case '第二周':this.form['start'] = '2';break;
                case '第三周':this.form['start'] = '3';break;
                case '第四周':this.form['start'] = '4';break;
                case '第五周':this.form['start'] = '5';break;
                case '第六周':this.form['start'] = '6';break;
                case '第七周':this.form['start'] = '7';break;
                case '第八周':this.form['start'] = '8';break;
                case '第九周':this.form['start'] = '9';break;
                case '第十周':this.form['start'] = '10';break;
            }
            switch (this.form['end']) {
                case '第一周':this.form['end'] = '1';break;
                case '第二周':this.form['end'] = '2';break;
                case '第三周':this.form['end'] = '3';break;
                case '第四周':this.form['end'] = '4';break;
                case '第五周':this.form['end'] = '5';break;
                case '第六周':this.form['end'] = '6';break;
                case '第七周':this.form['end'] = '7';break;
                case '第八周':this.form['end'] = '8';break;
                case '第九周':this.form['end'] = '9';break;
                case '第十周':this.form['end'] = '10';break;
                case '第十一周':this.form['end'] = '11';break;
                case '第十二周':this.form['end'] = '12';break;
                case '第十三周':this.form['end'] = '13';break;
                case '第十四周':this.form['end'] = '14';break;
                case '第十五周':this.form['end'] = '15';break;
                case '第十六周':this.form['end'] = '16';break;
                case '第十七周':this.form['end'] = '17';break;
                case '第十八周':this.form['end'] = '18';break;
            }
            switch (this.form['courseDay']){
                case '星期一':this.form['courseDay'] = '1';break;
                case '星期二':this.form['courseDay'] = '2';break;
                case '星期三':this.form['courseDay'] = '3';break;
                case '星期四':this.form['courseDay'] = '4';break;
                case '星期五':this.form['courseDay'] = '5';break;
                case '星期六':this.form['courseDay'] = '6';break;
                case '星期日':this.form['courseDay'] = '7';break;
            }
            switch (this.form['courseSection']) {
                case '第一节':this.form['courseSection'] = '1';break;
                case '第二节':this.form['courseSection'] = '2';break;
                case '第三节':this.form['courseSection'] = '3';break;
                case '第四节':this.form['courseSection'] = '4';break;
                case '第五节':this.form['courseSection'] = '5';break;
            }
            if (this.form['start']>this.form['end']){
                this.$message.error('开课周要早于结课周！');
            }else {
                update_course(this.form).then(res=>{
                    if (res.data === 0){
                        this.$message.success("更新成功");
                    }else {
                        this.$message.error("更新失败");
                    }
                });
                this.getData();
                this.editVisible = false;
            }

        },

        handleDelete(index, row) {
            this.deleteVisible = true;
            this.idx = index;
            this.form = row;
        },
        saveDelete(){
            this.deleteVisible = false;
            drop_course(this.form).then(res=>{
                if (res.data === 0){
                    this.$message.success("删除成功");
                    this.getData();
                }else {
                    this.$message.error("删除失败");
                }
            });

        },

        handleNewCourse(){
            this.newCourseVisible = true;
        },
        saveNewCourse(){
            var re = /^[0-9]+.?[0-9]*/;
           if (this.newCourse.start>this.newCourse.end){
                this.$message.warning('开课周应早于结课周');
            } else if (!re.test(this.newCourse.credit)) {
                this.$message.warning("学分请输入数字");
            } else {
                this.newCourse.teacherName = localStorage.getItem('teacherName');
                this.newCourse.tid = localStorage.getItem('tid');
                add_course(this.newCourse).then(res=>{
                    if (res.data===0){
                        this.$message.success('添加成功');
                    }else {
                        this.$message.error('表格不能含有空项');
                    }
                    this.newCourseVisible = false;
                });
                this.getData();
            }

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
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
