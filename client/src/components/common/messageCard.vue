<template>
    <div class="mc-container">
        <div class="msg-img">
            <img src="../../assets/reply.png" alt="信息图标" height="60px">
        </div>
        <div class="msg-text">
            <h3>通知</h3>
            <p style="margin-top:10px">你收到了{{ sender }}的来信</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        sender: {
            default: '未知游客',
            type: String
        }
    },
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss">
    .mc-container {
        box-sizing: border-box;
        height: 80px;
        border-bottom: 1px solid #c7c4c4;
        padding: 10px 0;
        .msg-img {
            width: 60px;
            margin: 0 30px 0 10px;
            float: left;
        }
    }
</style>
