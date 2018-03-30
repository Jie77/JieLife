<template>
    <div class="footer-container">
        <ul class="option-container">
            <li :class="{option:true,black: 1===indexNum}" @click="choosenOption('publishinfo',1)"></li>
            <li :class="{option:true,black: 2===indexNum}" @click="choosenOption('searchinfo',2)"></li>
            <li :class="{option:true,black: 3===indexNum}" @click="choosenOption('collection',3)"></li>
            <li :class="{option:true,black: 4===indexNum}" @click="choosenOption('sitemail',4)"></li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            indexNum: 2      
        }
    },
    methods: {
        choosenOption(to,index) {
            this.$router.push(to)
            this.indexNum = index
        }
    }
}
</script>
<style lang="scss">
.footer-container {
    width: 100%;
    .option-container {
        width: 100%;
        .option {
            list-style: none;
            float: left;
            width: 25%;
            height: 60px;
            text-align: center;
            &:nth-child(1) {
                background: url('../../assets/publish.svg') center center no-repeat;
                background-size: 25%;
                background-color:rgba(110, 107, 107, 0.459);
            }
            &:nth-child(2) {
                background: url('../../assets/search.svg') center center no-repeat;
                background-size: 25%;
            }
            &:nth-child(3) {
                background: url('../../assets/collect.svg') center center no-repeat;
                background-size: 25%;
            }
            &:nth-child(4) {
                background: url('../../assets/message.svg') center center no-repeat;
                background-size: 25%;
            }
        }
        .black {
            background-color:rgba(110, 107, 107, 0.459);
        }
    }
}
</style>
