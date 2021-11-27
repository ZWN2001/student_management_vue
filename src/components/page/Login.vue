<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">学生管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.id" placeholder="学号">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="密码"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <el-button style='padding-top: 12px' type="text" icon="el-icon-edit" @click="handleReSetPassword">重置密码</el-button>
            </el-form>
        </div>

        <el-dialog title="重置密码（仅支持学生，老师请联系管理员）" :visible.sync="passwordVisible" width="40%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="学号">
                    <el-input  v-model="form.sid"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input type='mail' v-model="form.mail"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="passwordVisible = false">取 消</el-button>
                <el-button type="primary" @click="reSetPassword">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { login, reset_password } from '@/api';
export default {
    data() {
        return {
            param: {
                id: '',
                password: '',
            },
            rules: {
                id: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
            form:{

            },
            passwordVisible:false,
        };
    },

    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                console.log();
                if (valid) {
                    login(this.param).then(res =>{
                        console.log(res);
                        if (res.data === 0){
                            this.$message.success('欢迎同学');
                            localStorage.setItem('identity', '0');

                            localStorage.setItem('sid', this.param.id);
                            localStorage.setItem('isLogin','0');
                            this.$router.push('/stuDashboard');
                        }else if(res.data === 1){
                            this.$message.success('老师您好');
                            localStorage.setItem('identity', '1');
                            localStorage.setItem('tid', this.param.id);
                            localStorage.setItem('isLogin','0');
                            this.$router.push('/teaDashboard');
                        }else {
                            console.log('账号密码错误');
                            this.$message.error('登录失败')
                        }
                    });
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        handleReSetPassword(){
          this.passwordVisible = true;
        },

        reSetPassword(){
            var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
            if (this.form.sid ===''||this.form.mail ===''){
                this.$message.warning('信息不能有空');
            } else if (!emailReg.test(this.form.mail)) {
                this.$message.error("请输入合法邮箱");
            }else {
                reset_password(this.form).then(res=>{
                    if (res.data === -1){
                        this.$message.error("用户不存在！");
                    }else if (res.data === -2){
                        this.$message.error("邮箱或学号错误");
                    }else if (res.data === 0){
                        this.$message.success('重置邮件已发送到您的邮箱，请及时查收')
                        this.passwordVisible = false;
                    }
                });
            }

        }
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #1f2f3d;
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}

</style>
