<template>
    <div class="sm-container">
        <div class="msg-box" v-for="sender in senderList" @click="goDetail(sender.id)">
            <message-card 
                :sender='sender.name' 
                :key="sender.id"
            ></message-card>
        </div>
    </div>
</template>
<script>
import messageCard from '../common/messageCard'
export default {
    components: {
        messageCard: messageCard
    },
    methods: {
        goDetail(id) {
            this.$router.push({ name: 'msgdetail', params: { id }})
        }
    },
    data () {
        return {
            senderList: [
                {
                    name: '111',
                    msg: '这是111的内容',
                    id: 1,
                    sender: 'aaa',
                    receive: 'bbb',
                    time: '03-15 10:10'
                },
                {
                    name: '222',
                    msg: '这是222的内容',
                    id: 2
                },
                {
                    name: '333',
                    msg: '这是333的内容',
                    id: 3
                },
                {
                    name: '444',
                    msg: '这是444的内容',
                    id: 4
                },
                {
                    name: '555',
                    msg: '这是555的内容',
                    id: 5
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
        overflow: scroll;
        height: calc(100% - 90px);
    }
</style>
