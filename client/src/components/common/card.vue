<template>
    <div class="card">
        <div class="img-container">
            <img src="" alt="">
        </div>
        <div class="card-text">
            <p class="title">{{ title }}</p>
            <p class="place">地点：{{ place }}</p>
            <p class="price">{{ price }}/月</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '暂无标题'
        },
        place: {
            type: String,
            default: '暂无位置'
        },
        price: {
            type: String,
            default: '暂无报价'
        }
    }
}
</script>
<style lang="scss">
.card {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #c7c4c4;
    overflow: hidden;
    box-sizing: border-box;
    .img-container {
        width: 90px;
        height: 60px;
        border: 1px solid #000;
        float: left;
        margin-right: 30px;
    }
    .card-text {
        float: left;
        width: 60%;
        .title {
            font-size: 16px;
            color: rgb(72, 201, 55);
        }
        .place {
            font-size: 12px;
            color: rgb(131, 125, 125);
        }
        .price {
            color: rgb(223, 75, 75);
        }
    }
}
</style>
