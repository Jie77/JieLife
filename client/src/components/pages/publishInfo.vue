<template>
    <div class="pi-container">
        <city-select></city-select>
        <div class="input-container" style="margin-top: 50px">
            <input type="text" class="input" v-model="title" placeholder="展示标题">
        </div>
        <div class="des-container">
            <textarea class="des" v-model="describe"></textarea>
        </div>
        <div class="input-container">
            <input type="number" class="input" v-model="rent" placeholder="租金每月">
        </div>
        <label class="photo-upload" for="upload">
            上传图片
            <input type="file" style="display:none" id="upload">
        </label>
        <label class="photo-upload" @click="submit">
            发布
        </label>
    </div>
</template>
<script>
import axios from '@/http'
import citySelect from '../common/citySelect'
export default {
    components: {
        citySelect
    },
    data () {
        return {
            title: '',
            describe: '',
            rent: ''
        }
    },
    methods: {
        async submit() {
            let param = new URLSearchParams()
            param.append('title',this.title)
            param.append('describe',this.describe)
            param.append('rent',this.rent)
            try {
                let data = await axios.post('http://127.0.0.1:3000/login',param)
                console.log(data)
            }catch(e) {
                console.log("error")
            }
            
        }
    }
}
</script>
<style lang="scss">
    .pi-container {
        position: relative;
        top: 30px;
        height: calc(100% - 90px);
        overflow: hidden;
        .photo-upload {
            position: relative;
            z-index: 2;
            display: block;
            width: 90%;
            height: 40px;
            margin: 0 auto;
            margin-top: 5%;
            border-radius: 20px;
            background: rgba(0, 176, 251, 0.659);
            text-align: center;
            line-height: 40px;
        }
        .des-container {
            position: relative;
            z-index: 1;
            width: 90%;
            height: 40%;
            display: block;
            margin: 0 auto;
            margin-top: 10px;
            border: 1px solid rgb(138, 136, 136);
            border-radius: 5px;
            box-sizing: border-box;
            padding: 10px;
            .des {
                width: 100%;
                height: 100%;
                outline: none;
                font-size: 14px;
                border: none;
            }
        }
        .input-container {
            box-sizing: border-box;
            padding:0 10px;
            width: 90%;
            margin: 0 auto;
            margin-top: 10px;
            border: 1px solid rgb(138, 136, 136);
            border-radius: 3px;
            .input {
                display: block;
                width: 100%;
                height: 30px;
                outline: none;
                border: none;
                position: relative;
                z-index: 2;
            }
        }
    }
</style>
