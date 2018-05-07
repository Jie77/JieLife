<template>
    <div class="cs-container">
        <div class="cover"  v-if="isOpen"></div>
        <section class="csTitle" @click="isOpen = !isOpen">
            <span>区域</span>
            <span :class="{triangle:true, tgRotate:isOpen}"></span>
        </section>
        <section class="cs-info" :class="{infoShow:infoShow}">
            <div class="cs-info-detail info-first" :style="{width: listWidth.first}">
                <ul v-for="(item, index) in firstData" >
                    <li @click="first(index)" :class="{ blue: index===firstChoose }">{{ item.name }}</li>
                </ul>
            </div>
            <div class="cs-info-detail info-second" :style="{width: listWidth.second}">
                <ul v-for="(item, index) in secondData" >
                    <li @click="second(index)" :class="{ blue: index===secondChoose }">{{ item.name }}</li>
                </ul>
            </div>
            <div class="cs-info-detail info-third" :style="{width: listWidth.third}" v-if="rank === 3">
                <ul v-for="(item, index) in thirdData" >
                    <li @click ="third(index,item.thirdId,item.name)" :class="{ blue: index===thirdChoose }">{{ item.name }}</li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
import { selectData } from '../conf/selectData'
export default {
    data () {
        return {
            selectData,
            isOpen: false,
            rank: 2,
            infoShow: false,
            listWidth: {
                first: '50%',
                second: '50%',
                third: '50%'
            },
            firstChoose: 0,
            secondChoose: 0,
            thirdChoose: 0, 
            chooseId: -1,
            chooseName: ''
        }
    },
    computed: {
        firstData: function(){
            return this.selectData
        },
        secondData: function(){
            return this.selectData[this.firstChoose].secondData
        },
        thirdData: function(){
            return this.selectData[this.firstChoose].secondData[this.secondChoose].thirdData
        }
    },
    methods: {
        first(index) {
            this.firstChoose = index
            this.rank = 2
            this.listWidth.first = '50%'
            this.listWidth.second = '50%'
        },
        second(index) {
            this.secondChoose = index
            this.thirdChoose = 0
            this.rank = 3
            this.listWidth.first = '20%'
            this.listWidth.second = '30%'
            this.listWidth.third = '50%'
        },
        third(index, chooseId, chooseName) {
            this.thirdChoose = index
            this.isOpen = false
            this.chooseId = chooseId  //这是最终的过滤条件引索
            this.chooseName = chooseName
            this.$emit('getPlace',chooseId,chooseName)
        }
    },
    watch: {
        isOpen: function(){
            if(this.isOpen === true){
                this.infoShow = true
            }else{
                this.infoShow = false
            }
        }
    }
}
</script>
<style lang="scss">
    .cs-container {
        height: 100%;
        width: 100%;
        position: absolute;
        .blue {
            color: #72a6e9;
        }
        .cover {
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.2);
            position: fixed;
            z-index: 3;
        }
        .csTitle {
            position: relative;
            z-index: 5;
            background: #fff;
            box-sizing: border-box;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-bottom: 1px solid #c7c4c4;
            .triangle {
                display: inline-block;
                height: 0;
                width: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 5px solid #000;
                transition: all .3s ease-in-out;
                transform: translateY(-50%);
            }
            .tgRotate {
                transform-origin: 50% 20%;
                transform: rotate(180deg)
            }
        }
        .cs-info {
            position: relative;
            z-index: 5;
            background: #fff;
            overflow: hidden;
            transition: all .3s ease-in-out;
            transform-origin: 0 0;
            transform: scaleY(0);
            .cs-info-detail {
                box-sizing: border-box;
                float: left;
                border-left: 1px solid #c7c4c4;
                background: #fff;
                height: 300px;
                overflow: scroll;
                li {
                    box-sizing: border-box;
                    list-style: none;
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #c7c4c4;
                    font-size: 12px;
                }
            }
            .info-first {
                text-align: center;
            }
            .info-second {
                padding-left: 15px;
            }
            .info-third {
                padding-left: 15px;
            }
        }
        .infoShow {
            transform: scaleY(1);
        }
    }
</style>
