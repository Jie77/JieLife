<template>
    <div class="si-container">
        <city-select></city-select>
        <div class="showInfo">
            <div v-for="house in houses" @click="goDetail(house.pageId)">
                <search-card
                    :title="house.title"
                    :place="house.place"
                    :price="house.rent" 
                    :key="house.pageId"
                    :pageId="house.pageId"
                ></search-card>
            </div>
        </div>
    </div>
</template>
<script>
import axios from '@/http'
import searchCard from '../common/searchCard'
import citySelect from '../common/citySelect'
export default {
    components: {
        citySelect,
        searchCard: searchCard
    },
    data () {
        return {
            houses: null
        }
    },
    created () {
        let self = this
        axios.get('http://127.0.0.1:3000/search').then((res)=>{
            self.houses = res.data
            console.log(res)
        }).catch(e=>{
            console.log(e)
        })
    },
    methods: {
        goDetail(id) {
            this.$router.push({ name: 'infodetail', params: { id }})
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
            position: relative;
            z-index: 1;
        }
    }
</style>
