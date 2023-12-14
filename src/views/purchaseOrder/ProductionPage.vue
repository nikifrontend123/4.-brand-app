<template>
    <FabFilter class="border-bottom"></FabFilter>
    <p class="p-2 text-center mb-0 bg-light bill"><span>~ Cutting ~</span></p>
    <div v-if="Object.keys(cuttingPo).length">
        <div v-for="(purchase, index) in cuttingPo" :key="index">
            <div class="d-flex align-items-center justify-content-between p-1 border-bottom w-100">
                <router-link :to="'/PurchaseDetail/' + purchase.sid" class="text-decoration-none text-dark ">
                    <div class="d-flex align-items-center">
                        <div v-if="purchase.product.colors.length > 0">
                            <img :src="purchase.product.colors[0].image"
                                class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                                style="height:70px; width:70px;object-fit: fill;">
                        </div>
                        <div class="ms-2">
                            <p class="fw-bold mb-0">{{ purchase.purchase_order.sid }}</p>
                            <p class="mb-0">Qty : {{ purchase.quantity }} </p>
                            <div><span> Status :</span> <span>{{ purchase.status
                            }}</span></div>

                        </div>
                    </div>
                </router-link>
                <!-- <div v-if="purchase.status === 'ready'" class="d-flex flex-column">
                    <button class="btn btn-outline-success mb-1" @click="updatePurchase(purchase)">Requested</button>
                </div> -->
                <!-- <div class="d-flex flex-column">
                    <button class="btn btn-outline-success mb-1" @click="received(purchase.sid)">Received</button>
                    <button class="btn btn-outline-danger mt-1" @click="reject(purchase.sid)">Reject</button>
                </div> -->
            </div>
        </div>
    </div>
    <div v-else>
        <p class="text-center bg-light">There is no order Listed in Cutting</p>
    </div>
    <div class="position-fixed bottom-0 text-center w-100">
        <PruchaseNav></PruchaseNav>
    </div>
</template>

<script>
import FabFilter from '@/components/Filter/FabFilter.vue';
import PruchaseNav from '../../components/Navbar/PurchaseNav.vue';
import axios from 'axios';
import pusherApi from '@/mixing/pusherApi';

export default {
    mixins: [pusherApi],
    data() {
        return {
            status: 'live',
            statusR: 'cancel'
        };
    },
    computed: {
        filteredPurchases() {
            return this.$store.getters.getPurchases
        },
        // filteredPurchases() {
        //     const purchases = this.$store.getters.getPurchases;
        //     return purchases.filter(purchase => {
        //         return purchase.status === 'cutting';
        //     });
        // },
        cuttingPo(){
            return this.filteredPurchases.filter(po => po.status === 'cutting')
        }
    },
    methods: {
        //     received(purchaseId) {
        //         const data = {
        //             status: this.status
        //         };
        //         this.updateStatus(purchaseId, data);
        //     },
        //     reject(purchaseId) {
        //         const data = {
        //             status: this.statusR
        //         };
        //         this.updateStatus(purchaseId, data);
        //     },
        //     updateStatus(purchaseId, data) {
        //         axios.put('http://192.168.1.133:8001/api/purchases/' + purchaseId, data)
        //             .then(response => {
        //                 this.purchases = response.data.data;
        //             })
        //             .catch(error => {
        //                 console.error('Error updating status:', error);
        //             });
        //     },
        //     getStatusClass(status) {
        //         if (status === 'live') {
        //             return 'text-success';
        //         } else if (status === 'cancel') {
        //             return 'text-danger';
        //         }
        //         return '';
        //     },
        updatePurchase(purchase) {
            axios.put('http://192.168.1.133:8001/api/purchases/' + purchase.sid, {
                status: 'next'
            })
        }
    },
    mounted() {
        this.$store.dispatch('fetchPurchase');
    },
    created() {
        this.connect('fetchPurchase')
    },
    components: { FabFilter, PruchaseNav }
}
</script>

<style lang="scss" scoped></style>