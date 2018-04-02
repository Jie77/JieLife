<template>
    <div class="si-container">
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
    .si-container {
        height: calc(100% - 120px);
    }
</style>
