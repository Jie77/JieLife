<template>
    <div class="sm-container">
        <div class="msg-box" v-for="sender in senderList">
            <message-card :sender='sender.name' ></message-card>
        </div>
    </div>
</template>
<script>
import messageCard from '../common/messageCard'
export default {
    components: {
        messageCard: messageCard
    },
    data () {
        return {
            senderList: [
                {
                    name: '111',
                    msg: '这是111的内容'
                },
                {
                    name: '222',
                    msg: '这是222的内容'
                },
                {
                    name: '333',
                    msg: '这是333的内容'
                },
                {
                    name: '444',
                    msg: '这是444的内容'
                },
                {
                    name: '555',
                    msg: '这是555的内容'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    .msg-box {
        position: relative;
        top: 30px;
    }
</style>
