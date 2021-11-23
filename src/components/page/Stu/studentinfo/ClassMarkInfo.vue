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
                :default-sort = "{prop: 'cname', order: 'descending'}"
                @selection-change="handleSelectionChange"
            >

                <el-table-column prop="sid" label="学号" width="55" align="center" sortable></el-table-column>
                <el-table-column prop="studentName" label="姓名" sortable></el-table-column>
                <el-table-column prop="clazz" label="班级" sortable></el-table-column>
                <el-table-column prop="cid" label="课程ID" sortable></el-table-column>
                <el-table-column prop="cname" label="课程名称" sortable></el-table-column>
                <el-table-column prop="teacherName" label="授课老师名称" sortable></el-table-column>
                <el-table-column prop="mark" label="分数" sortable></el-table-column>
                <el-table-column prop="credit" label="学分" sortable></el-table-column>

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
import { fetch_grade } from '../../../../api';
export default {
    name: 'ClassMarkInfo',
    data() {
        return {
            query: {
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

        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        // // 编辑操作
        // handleEdit(index, row) {
        //     if (this.name !== 'admin'){
        //         this.$message.error('无权修改');
        //     }else {
        //         this.idx = index;
        //         this.form = row;
        //         this.origin['sid'] = row['sid'];
        //         this.origin['studentName'] = row['studentName'];
        //         this.origin['cname'] = row['cname'];
        //         this.origin['teacherName'] = row['teacherName'];
        //         this.origin['grade'] = row['grade'];
        //         this.editVisible = true;
        //     }
        // },
        // // 保存编辑
        // saveEdit() {
        //     this.editVisible = false;
        //     this.$message.success(`修改第 ${this.idx + 1} 行成功`);
        //
        //     this.$set(this.tableData, this.idx, this.form);
        //
        //     let data = {};
        //     data['sid'] = this.form['sid'];
        //     data['cname']= this.form['cname'];
        //     data['grade'] = this.form['grade']
        //     data['pageIndex'] = this.query.pageIndex
        //     data['pageSize'] = this.query.pageSize
        //     console.log(data)
        //     if (this.form['grade'] !== this.origin['grade']) {
        //         update_grade(data).then(res=>{
        //             console.log("update_grade",res);
        //             this.tableData = res.data.data;
        //             this.pageTotal = res.data.pagetotal || 10;
        //         })
        //     }
        //
        // },
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

/*.handle-select {*/
/*    width: 120px;*/
/*}*/

.handle-input {
    width: 140px;
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
