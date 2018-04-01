<template>
    <div class="pi-container">
        <city-select></city-select>
    </div>
</template>
<script>
import citySelect from '../common/citySelect'
export default {
    components: {
        citySelect
    }
}
</script>
<style lang="scss">
    .pi-container {
        height: calc(100% - 120px);
    }
</style>
