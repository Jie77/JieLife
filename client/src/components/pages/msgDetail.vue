<template>
    <div class="md-container">
        <div v-for="msg in dialog">
            <div class="msg-single">
                <div class="time">{{ msg.time }}</div>
                <div class="content">
                    <div class="msg-box">
                        <p class="msg">{{ msg.msg }}</p>
                    </div>
                    <div class="usr">
                        <div class="touxiang"></div>
                        <!-- <img src="../../assets/fangdong.png" alt=""> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            user: 'aa',
            dialog: [
                {
                    sender: 'aa',
                    receive: 'bb',
                    time: '03-15 10:10',
                    msg: '哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈'
                },
                {
                    sender: 'bb',
                    receive: 'aa',
                    time: '03-15 10:10',
                    msg: '哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈'
                },
                {
                    sender: 'aa',
                    receive: 'bb',
                    time: '03-15 10:10',
                    msg: '哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈'
                },
                {
                    sender: 'bb',
                    receive: 'aa',
                    time: '03-15 10:10',
                    msg: '哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈'
                },
                {
                    sender: 'aa',
                    receive: 'bb',
                    time: '03-15 10:10',
                    msg: '哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈'
                },
                {
                    sender: 'bb',
                    receive: 'aa',
                    time: '03-15 10:10',
                    msg: '哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    .md-container {
        position: relative;
        top: 30px;
        overflow: scroll;
        height: calc(100% - 90px);
        .msg-single {
            .time {
                display: table;
                margin: 0 auto;
            }
            .content {
                position: relative;
                .msg-box {
                    display: inline-block;
                    background: rgb(63, 241, 57);
                    padding: 5px 30px;
                    border-radius: 50px;
                    width: 75%;
                    box-sizing: border-box;
                    .msg {
                    
                    }
                }
                .usr {
                    display: inline-block;
                    position: absolute;
                    right: 10px;
                    box-sizing: border-box;
                    .touxiang {
                        width: 50px;
                        height: 50px;
                        background: url('../../assets/fangdong.png');
                        background-size: contain;
                        border-radius: 50%;
                    }
                }
                
            }
        }
    }
</style>
