<template>
    <div class="infodel-container">
        <div class="describe">
            <h2>介绍</h2>
            <p style="margin-top:10px">{{ describe }}</p>
        </div>
        <div class="image-box">
            <div v-for="url in imageList" class="image">
                <img :src="url" alt="这是展示图">
            </div>
        </div>
        <div class="send-mail">
            <div class="add-msg">
                <textarea class="msg" v-model="message" placeholder="向房东发送信息"></textarea>
            </div>
            <div class="btn-style">发送</div>
        </div>
    </div>
</template>
<script>
import axios from '@/http'
export default {
    data() {
        return {
            imageList: [],
            describe: '',
            message: ''
        }
    },
    created () {
        let self = this
        axios.get('http://127.0.0.1:3000/detail',{
            params: {
                id: self.$route.params.id
            }
        }).then((res)=>{
            console.log(res)
            self.imageList = res.data[0].imageList
            self.describe = res.data[0].describe
        }).catch(e=>{
            console.log(e)
        })
    }
}
</script>
<style lang='scss'>
    .infodel-container {
        padding: 0 10px;
        box-sizing: border-box;
        overflow: scroll;
        position: relative;
        top: 30px;
        height: calc(100% - 90px);
        .image-box {
            .image {
                box-sizing: border-box;
                margin-top: 10px;
                img {
                    width: 100%;
                }
            }
        }
        .describe {
            box-sizing: border-box;
            padding: 10px;
        }
        .send-mail {
            margin-bottom: 10px;
            .add-msg {
                width: 100%;
                height: 20%;
                display: block;
                margin: 10px auto;
                border: 1px solid rgb(138, 136, 136);
                border-radius: 5px;
                box-sizing: border-box;
                padding: 10px;
                .msg {
                    width: 100%;
                    height: 60%;
                    outline: none;
                    font-size: 14px;
                    border: none;
                }
            }
            .btn-style {
                position: relative;
                display: block;
                width: 100%;
                height: 40px;
                margin: 0 auto;
                margin-top: 5%;
                border-radius: 20px;
                background: #54b1e7;
                text-align: center;
                line-height: 40px;
            }
        }
        
    }
    
</style>
