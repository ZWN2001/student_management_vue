<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src='../../../assets/img/img.jpg' class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{myInfo.name}}</div>
                            <div style='padding-top: 12px'>{{role}}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次登录时间：
                        <span>{{ lastLoginTime }}</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点：
                        <span>济南</span>
                    </div>
                </el-card>

            </el-col>
            <el-card shadow="hover" style="height:403px;">
                <div slot="header" class="clearfix">
                    <span>待办事项</span>
                    <el-button style="float: right; padding: 3px" type="text">添加</el-button>
                </div>
                <el-table :show-header="false" :data="todoList" style="width:100%;">
                    <el-table-column width="40">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.status"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <div
                                class="todo-item"
                                :class="{'todo-item-del': scope.row.status}"
                            >{{scope.row.title}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column width="60">
                        <template>
                            <i class="el-icon-edit"></i>
                            <i class="el-icon-delete"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-row>

    </div>
</template>

<script>
import { fetch_log, fetch_teacher_by_id } from '@/api';
export default {
    name: 'dashboard',
    data() {
        return {
            identity:localStorage.getItem('identity'),
            tid: localStorage.getItem('tid'),
            todoList: [
                {
                    title: '今天要修复100个bug',
                },
                {
                    title: '今天要修复100个bug',
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                },
                {
                    title: '今天要修复100个bug',
                },
                {
                    title: '今天要修复100个bug',
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                }
            ],
            query: {
                tid: localStorage.getItem('tid'),
                pageIndex: 1,
                pageSize: 10
            },
            myInfo: {
                name:'',
                tid:''
            },
            editVisible: false,
            origin: {},
            form: {},
            lastLoginTimes:[],
            lastLoginTime:'',
        };
    },
    components: {

    },
    computed: {
        role() {
            return '老师';
        }
    },
    created() {
        this.getInfoData();

    },
    methods: {
        getInfoData() {
            fetch_teacher_by_id(this.query).then(res => {
                console.log(res);
                this.myInfo = res.data[0];
                localStorage.setItem("teacherName",this.myInfo.name);
                console.log(localStorage.getItem('teacherName'));
            });
            fetch_log(localStorage.getItem('tid')).then(res=>{
                this.lastLoginTimes = res.data;
                this.lastLoginTime = this.lastLoginTimes[this.lastLoginTimes.length-1];
                console.log(res);
                console.log(this.lastLoginTimes[this.lastLoginTimes.length-2]);
            });
        },

    }
};
</script>


<style scoped>

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    padding-top: 14px;
    flex: 1;
    font-size: 20px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}


</style>
