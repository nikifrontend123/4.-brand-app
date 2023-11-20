<template>
    <div>
        <FabFilter></FabFilter>
        <div class="position-fixed bottom-0 text-center w-100">
            <SalesNav></SalesNav>
        </div>
    </div>
</template>

<script>
import FabFilter from '@/components/Filter/FabFilter.vue'
import SalesNav from '@/components/Navbar/SalesNav.vue'
export default {
    components: {
        FabFilter, SalesNav
    },

}
</script>

<style lang="scss" scoped></style>