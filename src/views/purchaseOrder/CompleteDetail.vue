<template>
    <div>
        <div class="d-flex flex-column fs-5 ms-2">
            <p class="fw-bold mb-0 text-decoration-underline">{{ purchase.sid }} </p>
            <p class="mb-0">Purchase Quantity: {{ purchase.quantity }}</p>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center text-success">
            <i class="bi bi-hand-thumbs-up display-1 p-4" :class="{ 'bounce': completedTime }"></i>
            <p v-if="completedTime" class="mb-0">Order is completed on {{ formatDate(completedTime) }}</p>
            <p class="text-center mb-0 fw-bold text-success my-2">Time Duration</p>
            <p v-if="purchase.time_difference >= 0" class="text-center text-success">Early Delivery By {{
                Math.abs(purchase.time_difference) }}
                Days
            </p>
            <p v-else class="text-center text-danger">Late Delivery By {{ Math.abs(purchase.time_difference) }} Days</p>
        </div>

        <div class="container">
            <div class="mb-2">
                <button class="btn d-flex justify-content-between w-100 rounded-0 py-2 text-white"
                    style="background-color: #F48B29;" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <span>Order
                        Chats</span><span v-if="purchase.message">{{ purchase.message.length }}</span>
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <div v-for="(message, index) in purchase.message" :key="index">
                            <div class="message mt-3 mb-2 d-flex flex-column"
                                 >
                                <div class="d-flex align-items-center w-100">
                                    <div class="message-content border w-100"
                                        style="background-color: #F48B29;word-wrap: break-word; padding: 10px !important; border-radius: 8px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 0px !important; color: white;">
                                        <small class="fw-bold text-primary">@ {{ message.username }}</small>
                                        <p class="m0">
                                            <strong>{{ message.title }}</strong>: {{ message.body }}
                                        </p>
                                    </div>
                                </div>
                                <div class="text-end text-muted" style="font-size: 10px;">{{ message.time }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-2">
                <button class="btn d-flex justify-content-between w-100 rounded-0 py-2 text-white"
                    style="background-color: #F48B29;" data-bs-toggle="collapse" href="#summary" role="button"
                    aria-expanded="false" aria-controls="summary">
                    Show Order Summary
                </button>
                <div class="collapse" id="summary" v-if="purchase.log_status_time">
                    <div v-for="(log, logIndex) in purchase.log_status_time" :key="logIndex" class="px-2">
                        <div v-if="log.status === 'issued'"
                            class="d-flex justify-content-between align-items-center border p-2 my-1">
                            <i class="bi bi-check2-circle fs-4 text-success"></i>
                            <div class="d-flex flex-column text-end">
                                <p class="m-0  ">Order Placed</p>
                                <small>{{ log.time }}</small>
                            </div>
                        </div>
                        <div v-if="log.status === 'po_placed'"
                            class="d-flex justify-content-between align-items-center border p-2 my-1">
                            <i class="bi bi-check2-circle fs-4 text-success"></i>
                            <div class="d-flex flex-column text-end">
                                <p class="m-0  ">Order Accepted By Fabricator </p>
                                <small>{{ log.time }}</small>
                            </div>
                        </div>
                        <div v-if="log.status === 'completed'"
                            class="d-flex justify-content-between align-items-center border p-2 my-1">
                            <i class="bi bi-check2-circle fs-4 text-success"></i>
                            <div class="d-flex flex-column text-end">
                                <p class="m-0  ">Order Issued To Cutting </p>
                                <small>{{ log.time }}</small>
                            </div>
                        </div>
                        <div v-if="log.status === 'production'"
                            class="d-flex justify-content-between align-items-center border p-2 my-1">
                            <i class="bi bi-check2-circle fs-4 text-success"></i>
                            <div class="d-flex flex-column text-end">
                                <p class="m-0  ">Order Issued To Production </p>
                                <small>{{ log.time }}</small>
                            </div>
                        </div>
                        <div v-if="log.status === 'packing'"
                            class="d-flex justify-content-between align-items-center border p-2 my-1">
                            <i class="bi bi-check2-circle fs-4 text-success"></i>
                            <div class="d-flex flex-column text-end">
                                <p class="m-0  ">Order Issued To Packing </p>
                                <small>{{ log.time }}</small>
                            </div>
                        </div>
                        <div v-if="log.status === 'ready'"
                            class="d-flex justify-content-between align-items-center border p-2 my-1">
                            <i class="bi bi-check2-circle fs-4 text-success"></i>
                            <div class="d-flex flex-column text-end">
                                <p class="m-0  ">Order Ready to Dispatched </p>
                                <small>{{ log.time }}</small>
                            </div>
                        </div>
                        <div v-if="log.status === 'requested'"
                            class="d-flex justify-content-between align-items-center border p-2 my-1">
                            <i class="bi bi-check2-circle fs-4 text-success"></i>
                            <div class="d-flex flex-column text-end">
                                <p class="m-0  ">Order Requested</p>
                                <small>{{ log.time }}</small>
                            </div>
                        </div>
                        <div v-if="log.status === 'dispatched'"
                            class="d-flex justify-content-between align-items-center border p-2 my-1">
                            <i class="bi bi-check2-circle fs-4 text-success"></i>
                            <div class="d-flex flex-column text-end">
                                <p class="m-0">Requested Order Dispatched</p>
                                <small>{{ log.time }}</small>
                            </div>
                        </div>
                        <div v-if="log.status === 'completed'"
                            class="d-flex justify-content-between align-items-center border p-2 my-1">
                            <i class="bi bi-check2-circle fs-4 text-success"></i>
                            <div class="d-flex flex-column text-end">
                                <p class="m-0  ">Order Accepted By Brand App</p>
                                <small>{{ log.time }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="">
                <button class="btn d-flex justify-content-between w-100 rounded-0 py-2 text-white"
                    style="background-color: #F48B29;" data-bs-toggle="collapse" href="#Details" role="button"
                    aria-expanded="false" aria-controls="Details">
                    Extra Details
                </button>
                <div class="collapse" id="Details">
                    <table v-if="this.purchase.loss_quantities" class="table table-responsive">
                        <thead class="table-secondary">
                            <tr style="line-height: 45px;">
                                <th class="text-center" scope="col"><span class="fw-normal">SKU</span>
                                </th>
                                <th scope="col" v-for="(size, index) in purchase.product.sizes" :key="index">
                                    <div class="fw-bold d-flex flex-column align-items-center">
                                        <p class="m-0">{{ size.name }}</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(color, colorIndex) in purchase.product.colors" :key="colorIndex">
                                <td class="text-center">
                                    <img :src="color.image" class="rounded-circle me-2"
                                        style="width: 38px; height: 38px; object-fit: cover;">
                                </td>
                                <td v-for="(size, sizeIndex) in purchase.product.sizes" :key="sizeIndex">
                                    <div class=" text-center">{{ purchase.loss_quantities[`${color.sid}_${size.sid}`] }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-between mx-3 py-2 px-4 border" style="background-color: #e8e8e8;">
                        <p class="mb-0">Loss / Excess Quantities</p>
                        <p class="fw-bold text-center mb-0">{{ purchase.loss_quantity }} pcs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            purchase: {},
            completedTime: null,
        }
    },
    methods: {
        formatDate(dateString) {
            const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        },
    },
    mounted() {
        this.purchaseId = this.$route.params.purchaseId;
        axios.get('http://192.168.1.133:8001/api/purchases/' + this.purchaseId)
            .then(response => {
                if (response.data.status === 'ok') {
                    this.purchase = response.data.data;
                    const completedLog = this.purchase.log_status_time.find(log => log.status === 'completed');
                    if (completedLog) {
                        this.completedTime = this.formatDate(completedLog.time); // Update completedTime
                    }
                } else if (response.data.status === 'error') {
                    alert(response.data.message)
                } else {
                    alert('Something went wrong! Please try again 2 rupe gpay krdo')
                }
            })
            .catch((error) => { console.error('error getting data', error) })
    },
}
</script>
<style scoped>
/* Add the CSS animation and class here */
@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-30px);
    }

    60% {
        transform: translateY(-15px);
    }
}

.bounce {
    animation: bounce 1s infinite;
}</style>
  