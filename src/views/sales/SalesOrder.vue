<template>
    <FabFilter></FabFilter>
    <div>
        <div v-for="(data, index) in datas" :key="index">
            <div class="d-flex p-2 border-bottom">
                <div class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                    style="height:60px; width:60px;object-fit: fill;">
                    {{ data.date }}
                </div>
                <div class="d-flex flex-column  justify-content-center">
                    <span class="fw-bold mx-2">{{ data.order_no }}</span>
                    <span class="mx-2">Qty : {{ data.Amount }}</span>
                </div>
            </div>
        </div>
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
        FabFilter,SalesNav
    },
    data() {
        return {
            datas: [
                {
                    id: 1,
                    date: '1/2',
                    order_no: '#098787',
                    Amount: '700',
                },
                {
                    id: 1,
                    date: '1/2',
                    order_no: '#098787',
                    Amount: '700',
                },
                {
                    id: 1,
                    date: '1/2',
                    order_no: '#098787',
                    Amount: '700',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>