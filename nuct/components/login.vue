<!-- 登录 -->
<template>
    <div>
        <div class="loginDiv">
        <!-- 登录前显示登录注册栏 -->
                <div class="login"  :class="{loginState: loginState1}">
                    <a @click="login">{{ loginIn }}</a>
                    <a>{{ register }}</a>
                </div>
        <!-- 登录成功显示的个人栏 -->
                <div class="user" :class="{loginState: loginState}">
                    <el-avatar :size="size" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                    <i class="el-icon-arrow-down" style="position: relative;top: -5px;"></i>
                </div>
        </div>
        <!-- 点击登录弹出的覆盖层登录界面 -->
        <div class="loginInbg" :class="{hide: hideDiv}">
            <el-form ref="form" status-icon :label-position="labelPosition" :model="form" label-width="80px" class="loginForm">
                <div class="loginFormTitle">
                    <span>登录</span>
                    <i class="el-icon-close iconClose" @click="closeForm"></i>
                </div>
                <el-form-item label="用户名">
                    <el-input v-model="form.name" clearable style="width: 250px;"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.psw" show-password style="width: 250px;"></el-input>
                </el-form-item>
                <el-button type="primary" style="margin-left: 100px;" @click="loginFormIn">登录</el-button>
            </el-form>
        </div>


    </div>
</template>

<script>
import Cookies from '~/plugins/cookie';

export default {
    name: 'login',
    data () {
        return {
            token: '',
            hideDiv: true,
            loginState: true,
            loginState1: true,
            labelPosition: 'right',
            form: {
                name: '',
                psw: '',
            },
            size: 'small',
            
        }
    },
    props: {
        loginIn: {
            type: String,
            default: '登录'
        },
        register: {
            type: String,
            default: '注册'
        }
    },
    methods: {
        login () {
            if(this.hideDiv) {
                this.hideDiv = false;
            }
        },

        closeForm () {
            if(this.hideDiv == false) {
                this.hideDiv = true;
            } 
        },

        loginFormIn () {
            console.log(Cookies.get('token'));
            if (this.form.name == '123' && this.form.psw == '123') {
            Cookies.set('name', this.form.name, {expires: this.toNextDay()});
            Cookies.set('token', '4a10b399f668c23962f54118d0b0a8a1', {expires: this.toNextDay()});
            this.$router.push('/');

            setTimeout(() => {
                window.location.href = window.location.href;
            }, 100) 
          } else {
            this.$message.error('账号密码不正确');
          }
          console.log(Cookies.get('token'));
        },

        toNextDay() {
            return new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0));
        },
    },
    created: function () {
        if(Cookies.get('token') !== '') {
            this.loginState = false;
        }
        else {
            this.loginState1 = false;
        }
    }
}

</script>
<style lang='less' scoped>
.loginDiv {
    height: 35px;
    overflow: hidden;
    background: #f4f9ff;
}

.login {
    float: right;
    line-height: 35px;
}

.login a {
    text-align: center;
    width: 65px;
    float: left;
    line-height: 30px;
    padding: 0 5px;
}

.login a:hover {
    background: #2dc6ff;
    cursor: pointer;
    border-radius: 5px;
}

.login a:nth-child(2) {
    margin-right: 65px;
}

.loginInbg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    z-index: 1000;
}

.hide {
    display: none;
}

.loginForm {
    width: 400px;
    height: 295px;
    border: 1px solid #000;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.loginFormTitle {
    width: 100%;
    line-height: 30px;
    background: #909399;
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
}

.iconClose {
    position: relative;
    right: -160px;
    cursor: pointer;
}

.user {
    float: right;
    margin-right: 20px;
}

.loginState {
    display: none;
}
</style>