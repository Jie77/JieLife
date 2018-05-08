<template>
    <div class="pi-container">
        <city-select @getPlace="getPlace"></city-select>
        <div class="input-container" style="margin-top: 50px">
            <input type="text" class="input" v-model="title" placeholder="展示标题">
        </div>
        <div class="des-container">
            <textarea class="des" v-model="describe"></textarea>
        </div>
        <div class="input-container">
            <input type="number" class="input" v-model="rent" placeholder="租金每月">
        </div>
        <label class="btn-style" for="upload">
            上传图片
            <input type="file" multiple="multiple" style="display:none" id="upload" @change="uploadPhoto">
        </label>
        <div class="btn-style" 
            @click="submit"
            :style="{backgroundImage:progressBgColor}">
            发布
        </div>
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
            rent: '',
            blob: null,
            progress: '0%',
            houseId: null,
            place: null
        }
    },
    computed: {
        progressBgColor: function(){
            return `linear-gradient(to right,#60e66b 0%,#60e66b ${this.progress},#54b1e7 ${this.progress},#54b1e7 100%)`
        }
    },
    methods: {
        getPlace(id,place) {
            console.log('触发函数')
            this.houseId = id
            this.place = place
        },
        uploadPhoto($event) {
            this.blob = $event.target.files
        },
        submit() {
            let param = new FormData()
            param.append('title',this.title)
            param.append('describe',this.describe)
            param.append('rent',this.rent)
            param.append('place',this.place)
            param.append('houseId',this.houseId)
            for(let i in this.blob){
                param.append('photos',this.blob[i])
            }
            let config = {
                onUploadProgress: progressEvent => {
                    var complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
                    this.progress = complete
                }
            }

            axios.post('http://192.168.43.97:3000/publish',param,config).then(res=>{
                console.log(res)
                alert('success')
            }).catch(e=>{
                console.log('error:'+e)
                alert('error')
            })
            
        }
    }
    // mounted () {
    //     let file = document.querySelector('#upload'),
    //             reader = new FileReader(),
    //             img = new Image(),
    //             photo = null
    //         file.addEventListener('change',(e)=>{
    //             photo = event.target.files[0]
    //             console.log("选择图片成功")
    //             if (photo.type.indexOf("image") == 0) {
    //                 reader.readAsDataURL(photo)   
    //             }
    //         })
    //         reader.onload = (e)=>{
    //             console.log('reader加载完成')
    //             img.src = e.target.result
    //         }

    //         let canvas = document.createElement('canvas');
    //         let context = canvas.getContext('2d');
    //         let self = this
    //         img.onload = function(){//此处不能使用箭头函数，否则无法获取img宽高
    //             console.log('img加载完成')
    //             let originWidth = this.width;
    //             let originHeight = this.height;
    //             let maxWidth = 400, maxHeight = 400;
    //             let targetWidth = originWidth, targetHeight = originHeight;
    //             if (originWidth > maxWidth || originHeight > maxHeight) {
    //                 if (originWidth / originHeight > maxWidth / maxHeight) {
    //                     targetWidth = maxWidth;
    //                     targetHeight = Math.round(maxWidth * (originHeight / originWidth));
    //                 } else {
    //                     targetHeight = maxHeight;
    //                     targetWidth = Math.round(maxHeight * (originWidth / originHeight));
    //                 }
    //             }
    //             canvas.width = targetWidth;
    //             canvas.height = targetHeight;
    //             context.clearRect(0, 0, targetWidth, targetHeight);
    //             context.drawImage(img, 0, 0, targetWidth, targetHeight);
    //             canvas.style.position="relative"
    //             canvas.style.top="-400px"
    //             document.querySelector('.pi-container').appendChild(canvas)
    //             canvas.toBlob((blob)=>{
    //                 console.log(blob)
    //                 self.blob = blob
    //             })
    //         }
    // }
}
</script>
<style lang="scss">
    .pi-container {
        position: relative;
        top: 30px;
        height: calc(100% - 90px);
        overflow: hidden;
        .btn-style {
            position: relative;
            
            display: block;
            width: 90%;
            height: 40px;
            margin: 0 auto;
            margin-top: 5%;
            border-radius: 20px;
            background: #54b1e7;
            text-align: center;
            line-height: 40px;
        }
        .des-container {
            position: relative;
            
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
                
            }
        }
    }
</style>
