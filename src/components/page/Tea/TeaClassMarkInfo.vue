<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-cascades"></i> 学生成绩表 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.sid" placeholder="学号" class="handle-input mr10"></el-input>
                <el-input v-model="query.clazz" placeholder="班级" class="handle-input mr10"></el-input>
                <el-input v-model="query.studentName" placeholder="姓名" class="handle-input mr10"></el-input>
                <el-input v-model="query.cid" placeholder="课程ID" class="handle-input mr10"></el-input>
                <el-input v-model="query.credit" placeholder="学分" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >
                <el-table-column prop="sid" label="学号" width="55" align="center" sortable></el-table-column>
                <el-table-column prop="studentName" label="姓名" sortable></el-table-column>
                <el-table-column prop="clazz" label="班级" sortable></el-table-column>
                <el-table-column prop="cid" label="课程ID" sortable></el-table-column>
                <el-table-column prop="cname" label="课程名称" sortable></el-table-column>
                <el-table-column prop="teacherName" label="授课老师名称" sortable></el-table-column>
                <el-table-column prop="mark" label="分数" sortable></el-table-column>
                <el-table-column prop="credit" label="学分" sortable></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">录入分数</el-button>
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
        <el-dialog title="录入分数" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="学号">
                    <el-input v-model="form.sid" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="学生姓名">
                    <el-input v-model="form.studentName" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="课程名称">
                    <el-input v-model="form.cname" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="授课老师">
                    <el-input v-model="form.teacherName" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="分数">
                    <el-input v-model="form.mark"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { fetch_grade,update_grade } from '@/api';
export default {
    name: 'ClassMarkInfo',
    data() {
        return {
            query: {
                tid:localStorage.getItem('tid'),
                sid: '',
                cid:'',
                studentName: '',
                cname: '',
                mark:'',
                teacherName:'',
                credit:'',
                clazz:'',
                pageIndex: 1,
                pageSize: 10
            },
            editVisible:false,
            form: {},
            data:{},
            originMark:'',
            tableData: [],
            pageTotal: 0,
            idx: -1,
            id: -1
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            fetch_grade(this.query).then(res => {
                this.tableData = res.data.data;
                this.pageTotal = res.data.pagetotal || 10;
                this.tableData.forEach((item,index)=>{
                    if (this.tableData[index].mark === -1){
                        this.tableData[index].mark = '未录入';
                    }
                })
            });

        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },

        // 编辑操作
        handleEdit(index, row) {
                this.idx = index;
                this.form = row;
                if (row['mark'] === '未录入'){
                    this.form['mark'] = '0';
                    this.originMark = '0';
                }else {
                    this.form['mark'] = row['mark'];
                    this.originMark = row['mark'];
                }

                this.editVisible = true;
        },

        // 保存编辑
        saveEdit() {
            this.editVisible = false;

            if (this.originMark !== this.form['mark']){
                this.data['cid'] = this.form['cid'];
                this.data['sid']= this.form['sid'];
                this.data['mark'] = this.form['mark'];
                update_grade(this.data).then(res=>{
                    if (res.data === 0){
                        this.$message.success(`修改成功`);
                        this.getData();
                    }else {
                        this.$message.error(`修改失败`);
                    }
                });
            }else {
                this.$message.error('未改动');
            }

            this.editVisible = false;

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

.handle-input {
    width: 140px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}

.mr10 {
    margin-right: 10px;
}

</style>
