<template>
    <div class="footer-container">
        <ul class="option-container">
            <li :class="{option:true,blue: 1===indexNum}" @click="choosenOption('publishinfo',1,'发布房源')">
                <i class="fa fa-file-text-o" aria-hidden="true"></i>
                <p class="nav-title">发布房源</p>
            </li>
            <li :class="{option:true,blue: 2===indexNum}" @click="choosenOption('searchinfo',2,'搜索房源')">
                <i class="fa fa-map-o" aria-hidden="true"></i>
                <p class="nav-title">搜索房源</p>
            </li>
            <li :class="{option:true,blue: 3===indexNum}" @click="choosenOption('sitemail',3,'站内信')">
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                <p class="nav-title">站内信</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () { 
        return {
            indexNum: 2,
            pageName: '搜索房源'  
        }
    },
    methods: {
        choosenOption(to,index,pageName) {
            this.$router.push(to)
            this.indexNum = index
            this.pageName = pageName
            this.$emit("changeHeader",this.pageName)
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
