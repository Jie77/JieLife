<template>
    <div class="si-container">
        <city-select></city-select>
        <div class="showInfo">
            <card v-for="house in houses" 
                :title="house.title"
                :place="house.place"
                :price="house.price" 
            ></card>
        </div>
    </div>
</template>
<script>
import card from '../common/card'
import citySelect from '../common/citySelect'
export default {
    components: {
        citySelect,
        card: card
    },
    data () {
        return {
            houses:[
                {
                    title: '这是一个很好很好很好很好办呵呵额呵呵',
                    place: '苏州街',
                    price: '8000/月'
                },
                {
                    title: '这是一个很好很好很好很好办',
                    place: '苏州街',
                    price: '8000/月'
                },
                {
                    title: '这是一个很好很好很好很好办',
                    place: '苏州街',
                    price: '8000/月'
                },
                {
                    title: '这是一个很好很好很好很好办',
                    place: '苏州街',
                    price: '8000/月'
                },
                {
                    title: '这是一个很好很好很好很额呵呵呵课程的吧好办',
                    place: '苏州街',
                    price: '8000/月'
                },
                {
                    title: '这是一个很好很好除好很好办',
                    place: '苏州街',
                    price: '8000/月'
                },
                {
                    title: '这是一个肯定不肯出兵很好很好很好很好办',
                    place: '苏州街',
                    price: '8000/月'
                },
                {
                    title: '这是一个很好很好很好很好办',
                    place: '苏州街',
                    price: '8000/月'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    .si-container {
        box-sizing: border-box;
        position: relative;
        top: 30px;
        overflow: scroll;
        height: calc(100% - 90px);
        .showInfo {
            margin-top: 40px;
        }
    }
</style>
