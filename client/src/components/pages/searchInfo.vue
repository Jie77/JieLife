<template>
    <div class="si-container">
        <city-select></city-select>
        <div class="showInfo">
            <router-link to="/sitemail" v-for="house in houses" >
                <card
                    :title="house.title"
                    :place="house.place"
                    :price="house.rent" 
                    :key="house.houseId"
                ></card>
            </router-link>
        </div>
    </div>
</template>
<script>
import axios from '@/http'
import card from '../common/card'
import citySelect from '../common/citySelect'
export default {
    components: {
        citySelect,
        card: card
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
