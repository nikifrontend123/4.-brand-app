<template>
    <div style="margin-bottom: 70px;">
        <FabFilter class="border-bottom"></FabFilter>
        <div v-for="(purchase, index) in purchases" :key="index">
            <div class="d-flex align-items-center justify-content-between p-1 border-bottom w-100">
                <router-link :to="'/PurchaseDetail/' + purchase.sid" class="text-decoration-none text-dark ">
                    <div class="d-flex align-items-center">
                        <div v-if="purchase.product.colors.length > 0">
                            <img :src="purchase.product.colors[0].image"
                                class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                                style="height:70px; width:70px;object-fit: fill;">
                        </div>
                        <div class="ms-2">
                            <p class="fw-bold mb-0">{{ purchase.job_work_order.sid }}</p>
                            <p class="mb-0">Qty : {{ purchase.quantity }} </p>
                            <div><span> Status :</span> <span :class="getStatusClass(purchase.status)">{{ purchase.status
                            }}</span></div>

                        </div>
                    </div>
                </router-link>
                <div class="d-flex flex-column">
                    <button class="btn btn-outline-success mb-1" @click="received(purchase.sid)">Received</button>
                    <button class="btn btn-outline-danger mt-1" @click="reject(purchase.sid)">Reject</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FabFilter from '@/components/Filter/FabFilter.vue';
import axios from 'axios'

export default {
    data() {
        return {
            status: 'live',
            statusR: 'cancel'
        };
    },
    computed: {
        purchases() {
            return this.$store.getters.getPurchases;
        }
    },
    methods: {
        received(purchaseId) {
            const data = {
                status: this.status
            };
            this.updateStatus(purchaseId, data);
        },
        reject(purchaseId) {
            const data = {
                status: this.statusR
            };
            this.updateStatus(purchaseId, data);
        },
        updateStatus(purchaseId, data) {
            axios.put('http://192.168.1.133:8001/api/purchases/' + purchaseId, data)
                .then(response => {
                    this.purchases = response.data.data;
                })
                .catch(error => {
                    console.error('Error updating status:', error);
                });
        },
        getStatusClass(status) {
            if (status === 'live') {
                return 'text-success';
            } else if (status === 'cancel') {
                return 'text-danger';
            }
            return '';
        },

    },
    mounted() {
        this.$store.dispatch('fetchPurchase');
    },
    components: { FabFilter }
}
</script>

<style lang="scss" scoped></style>