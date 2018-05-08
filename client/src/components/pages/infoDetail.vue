<template>
    <div class="infodel-container">
        <div class="image-box">
            <div v-for="url in imageList" class="image">
                <img :src="url" alt="这是展示图">
            </div>
        </div>
        <div class="describe">
            <h2>介绍</h2>
            <p style="margin-top:10px">{{ describe }}</p>
        </div>
    </div>
</template>
<script>
import axios from '@/http'
export default {
    data() {
        return {
            imageList: [],
            describe: ''
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
    }
    
</style>
