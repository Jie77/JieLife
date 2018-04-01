<template>
    <div class="cs-container">
        <div :class="{cover: isOpen}"></div>
        <section class="csTitle" @click="showInfo">
            <span>区域</span>
            <span :class="{triangle:true, tgRotate:isOpen}"></span>
        </section>
        <section class="cs-info" :class="{infoShow:infoShow}">
            <div class="cs-info-detail info-first" :style="{width: listWidth.first}">
                <ul v-for="item in firstData" >
                    <li>{{ item }}</li>
                </ul>
            </div>
            <div class="cs-info-detail info-second" :style="{width: listWidth.second}">
                <ul v-for="item in secondData" >
                    <li>{{ item }}</li>
                </ul>
            </div>
            <div class="cs-info-detail info-third" :style="{width: listWidth.third}" v-if="rank === 3">
                <ul v-for="item in thirdData" >
                    <li>{{ item }}</li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isOpen: false,
            rank: 3,
            infoShow: false,
            listWidth: {
                first: '20%',
                second: '30%',
                third: '50%'
            },
            firstData: [
                '区域',
                '地铁'
            ],
            secondData: [
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀',
                '海淀'
            ],
            thirdData: [
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
                '苏州街',
            ]
        }
    },
    methods: {
        showInfo() {
            this.isOpen = !this.isOpen
            this.rank = 3
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
        position: relative;
        .cover {
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.082);
            position: absolute;
            z-index: -1;
        }
        .csTitle {
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
            background: #fff;
            overflow: hidden;
            transition: all .5s ease-in-out;
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
