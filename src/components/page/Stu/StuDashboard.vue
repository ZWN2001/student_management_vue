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
                        <span>2021-11-01</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点：
                        <span>济南</span>
                    </div>
                </el-card>
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
            </el-col>

            <el-col :span="16">
                <el-card shadow="hover" style="height:652px;">
                    <div slot="header" class="clearfix">
                        <span>个人信息</span>
                        <el-button type="text"  icon="el-icon-edit" style='float: right' @click="handleEdit()">编辑</el-button>
                    </div>
                    <el-table-column>
                        <div class="infoText">姓名:<span style='margin-left: 360px'>{{myInfo.name}}</span></div>
                    </el-table-column>
                    <el-divider></el-divider>
                    <el-table-column>
                        <div class="infoText">学号:<span style='margin-left: 360px'>{{myInfo.sid}}</span></div>
                    </el-table-column>
                    <el-divider></el-divider>
                    <el-table-column>
                        <div class="infoText">班级:<span style='margin-left: 360px'>{{myInfo.clazz}}班</span></div>
                    </el-table-column>
                    <el-divider></el-divider>
                    <el-table-column>
                        <div class="infoText">邮箱:<span style='margin-left: 360px'>{{myInfo.mail}}</span></div>
                    </el-table-column>
                    <el-divider></el-divider>
                    <el-table-column>
                        <div class="infoText">电话:<span style='margin-left: 360px'>{{myInfo.phone}}</span></div>
                    </el-table-column>
                    <el-divider></el-divider>
                    <el-table-column>
                        <div class="infoText">住址:<span style='margin-left: 360px'>{{myInfo.address}}</span></div>
                    </el-table-column>
                    <el-divider></el-divider>
                    <el-table-column>
                        <div class="infoText">介绍:<span style='margin-left: 360px'>{{myInfo.other}}</span></div>
                    </el-table-column>


                </el-card>
            </el-col>
        </el-row>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="学号">
                    <el-input v-model="form.sid" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="学生姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="班级">
                    <el-input v-model="form.class" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.mail" ></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                <el-input v-model="form.address" :disabled="true"></el-input>
            </el-form-item>
                <el-form-item label="其他信息">
                    <el-input v-model="form.other"></el-input>
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
import bus from '../../common/bus';
import {  fetch_student, update_student_info } from '../../../api';
export default {
    name: 'dashboard',
    data() {
        return {
            identity:localStorage.getItem('identity'),
            sid: localStorage.getItem('sid'),
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
                sid: localStorage.getItem('sid'),
                address: '',
                clazz: '',
                name:'',
                other:'',
                mail:'',
                phone:'',
                pageIndex: 1,
                pageSize: 10
            },
            myInfo: {
                address: '',
                clazz: '',
                name:'',
                other:'',
                sid:'',
                mail:'',
                phone:'',
            },
            editVisible: false,
            origin: {},
            form: {
                address: '',
                clazz: '',
                name:'',
                other:'',
                sid:'',
                mail:'',
                phone:'',},
        };
    },
    components: {

    },
    computed: {
        role() {
            return '学生';
        }
    },
    created() {
        this.getInfoData();
    },
    deactivated() {
        window.removeEventListener('resize', this.renderChart);
        bus.$off('collapse', this.handleBus);
    },
    methods: {
        getInfoData() {
            fetch_student(this.query).then(res => {
                console.log(res);
                this.myInfo = res.data.data[0];
                localStorage.setItem('clazz',this.myInfo.clazz);
                localStorage.setItem('studentName',this.myInfo.name);
                console.log(localStorage.getItem('studentName'));
            });

        },

        handleEdit() {
            this.form = this.myInfo;
            this.origin['sid'] = this.myInfo.sid;
            this.origin['name'] = this.myInfo.name;
            this.origin['clazz'] = this.myInfo.clazz;
            this.origin['mail'] = this.myInfo.mail;
            this.origin['phone'] = this.myInfo.phone;
            this.origin['address'] = this.myInfo.address;
            this.origin['other'] = this.myInfo.other;
            this.editVisible = true;
        },

        // 保存编辑
        saveEdit() {
            this.editVisible = false;

            let data = {};
            data['sid'] = this.form['sid'];
            if (this.form['name'] !== this.origin['name']) data['name'] = this.form['name'];
            if (this.form['clazz'] !== this.origin['clazz']) data['clazz'] = this.form['clazz'];
            if (this.form['address'] !== this.origin['address']) data['address'] = this.form['address'];
            if (this.form['other'] !== this.origin['other']) data['other'] = this.form['other'];
            if (this.form['mail'] !== this.origin['mail']) data['mail'] = this.form['mail'];
            if (this.form['phone'] !== this.origin['phone']) data['phone'] = this.form['phone'];
            data['pageIndex']= this.query.pageIndex;
            data['pageSize'] = this.query.pageSize;
            var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
            if (!emailReg.test(this.form.mail)) {
               this.$message.error("请输入合法邮箱");
               this.getInfoData();
            } else  if (data.phone.length !==11){
                this.$message.error("请输入合法手机号");
                this.getInfoData();
            }else {
                update_student_info(data).then(res => {
                    console.log(res);
                });
            }
        },
    }
};
</script>


<style scoped>

.infoText {
    font-size: 20px;
    font-weight: bold;
    margin-left: 24px;
    margin-top: 14px;
    color: #1f2f3d;
    flex: 1;
}


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
