<template>
    <div class="login-container">
        <section :class="{title:true, showAnimate: showTitle}">
            <div class="title-name">Jie</div>
            <div class="title-date">{{ date }}</div>
        </section>
        <section :class="{login:true, showAnimate: showTitle}">
            <div class="login-input-container">
                <input type="text" name="usename" v-model="user" placeholder="用户名" class="login-input">
            </div>
            <div class="login-input-container">
                <input type="password" name="pwd" v-model="pwd" placeholder="密码" class="login-input">
            </div>
            <div class="login-btn-container">
                <button class="login-btn" @click="regist">注册</button>
            </div>
        </section>
    </div>
</template>
<script>
import axios from '@/http'
export default {
    data () {
        return {
            date: '',
            user: '',
            pwd: '',
            showTitle: true
        }
    },
    mounted () {
        let d = new Date()
        let year = d.getFullYear(),
            month = d.getMonth()+1,
            day = d.getDate()
        this.date = `${year}/${month}/${day}`
        let self = this
        // window.addEventListener('load',function(){
        //     self.showTitle = true
        // })
    },
    methods: {
        regist() {
            let param = new FormData()
            param.append('user',this.user)
            param.append('pwd',this.pwd)
            axios.post('http://127.0.0.1:3000/reg',param).then(res=>{
                console.log(res)
                alert('success')
            }).catch(e=>{
                console.log('error:'+e)
                alert('error')
            })
            
        }
    }

}
</script>
<style lang="scss">
.login-container {
    position: absolute;
    width: 100%;
    padding:0 20px;
    box-sizing: border-box;
    &:before{
        content:'';
        position:fixed;
        z-index:-1;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background: url("../../assets/bg.jpg") 0 center no-repeat;
        background-size: 100% 100%;
    }
    .title {
        margin-top: 30%;
        opacity: 0;
        transition: all .7s ease-in-out;
        transform: translateY(-15px);
        width: 100%;
        color: #fff;
        .title-name {
            font-size: 5rem;
        }
        .title-date {
            font-size: 2rem;
        }
    }
    .login{
        opacity: 0;
        transition: all .9s ease-in-out;
        transform: translateY(-15px);
        margin-top: 20%;
        .login-input-container {
            width: 100%;
            height: 50px;
            margin-top: 15px;
            .login-input {
                outline: none;
                border: none;
                background: rgba(255, 255, 255, 0);
                border-bottom: 1px solid #fefefe;
                font-size: 0.9rem;
                color: #fff;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 20px 5px 0;
                &::-webkit-input-placeholder{
                    color:#fff;
                }
                &::-moz-placeholder{    
                    color:#fff;
                }
                &:-moz-placeholder{
                    color:#fff;
                }
                &:-ms-input-placeholder{
                    color:#fff;
                }
            }
        }
        .login-btn-container {
            width: 100%;
            margin-top: 20px;
            .login-btn {
                width:100%;
                height: 40px;
                background: rgba(96, 184, 255, 0.8);
                border: none;
                border-radius: 3px;
                color: #fff;
                letter-spacing: 5px;
                font-size: 0.9rem;
                outline: none;
            }
            
        }
    }
    .showAnimate {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>


