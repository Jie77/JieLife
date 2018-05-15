<template>
    <div class="footer-container">
        <ul class="option-container">
            <li :class="{option:true,blue: nowPath === '/publishinfo'}" @click="choosenOption('publishinfo')">
                <i class="fa fa-file-text-o" aria-hidden="true"></i>
                <p class="nav-title">发布房源</p>
            </li>
            <li :class="{option:true,blue: nowPath === '/searchinfo'}" @click="choosenOption('searchinfo')">
                <i class="fa fa-map-o" aria-hidden="true"></i>
                <p class="nav-title">搜索房源</p>
            </li>
            <li :class="{option:true,blue: nowPath === '/sitemail'}" @click="choosenOption('sitemail')">
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                <p class="nav-title">站内信</p>
            </li>
        </ul>
    </div>
</template>
<script>
import store from '@/store'
export default {
    data () { 
        return {
            indexNum: 2,
        }
    },
    computed: {
        nowPath() {
            return store.state.nowPath
        }
    },
    methods: {
        choosenOption(to,index) {
            this.$router.push(to)
        }
    }
}
</script>
<style lang="scss">
.footer-container {
    width: 100%;
    background: #fff;
    .option-container {
        width: 100%;
        .option {
            box-sizing: border-box;
            list-style: none;
            float: left;
            width: 33.333333%;
            height: 60px;
            text-align: center;
            font-size: 20px;
            padding: 12px 0;
            color: #4b4949;
        }
        .nav-title {
            font-size: 11px;
        }
        .blue {
            color: rgb(114, 166, 233);
        }
    }
}
</style>
