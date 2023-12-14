<template>
    <div style="margin-bottom: 70px;">
        <FabFilter class="border-bottom"></FabFilter>
        <p class="p-2 text-center mb-0 bg-light bill"><span>~ Completed Order ~</span></p>

        <div v-if="Object.keys(filteredPurchases).length">
            <div v-for="(purchase, index) in filteredPurchases" :key="index">
                <div class="d-flex align-items-center justify-content-between p-1 border-bottom w-100">
                    <router-link :to="'/CompleteDetail/' + purchase.sid" class="text-decoration-none text-dark ">
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
                    <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">Status Summary</button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div v-for="item in purchase.log_status_time" :key="item.id">
                            {{ item }}
                        </div>
                    </div>
                </div> -->
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-center bg-light">There is no Completed order Listed</p>
        </div>
    </div>

    <div class="position-fixed bottom-0 text-center w-100">
        <PruchaseNav></PruchaseNav>
    </div>
</template>

<script>
import FabFilter from '@/components/Filter/FabFilter.vue';
import PruchaseNav from '../../components/Navbar/PurchaseNav.vue';
// import axios from 'axios'
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
            const purchases = this.$store.getters.getPurchases;
            return purchases.filter(purchase => {
                return purchase.status === 'completed';
            });
        }
    },
    // methods: {
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
    //         axios.put('http://192.168.1.133:8001/api/internal/purchases/' + purchaseId, data)
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

    // },
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