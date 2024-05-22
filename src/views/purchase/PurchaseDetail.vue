<template>
    <div class="container">
        <!-- --------------Final Order----------------------------------- -->
        <div data-bs-toggle="collapse" data-bs-target="#collapsepoplaced" aria-expanded="false"
            aria-controls="collapsepoplaced" class="border mt-3 p-2 py-3 ps-4  text-white w-100 rounded-top"
            style="background-color: #F48B29;">
            Final Order
        </div>
        <div class="bg-white collapse" id="collapsepoplaced">
            <div class="overflow-x-scroll">
                <table v-if="purchase.product" class="table table-responsive table-striped table-hover">
                    <thead>
                        <tr style="line-height: 45px;">
                            <th class="text-center" scope="col"><span class="fw-normal">SKU</span>
                            </th>
                            <th scope="col" v-for="(headSize, headSizeIndex) in purchase.product.sizes"
                                :key="'head-size-' + headSizeIndex">
                                <div class="fw-bold d-flex flex-column align-items-center">
                                    <p class="m-0">{{ headSize.name }}</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(color, colorindex) in purchase.product.colors" :key="'color-' + colorindex">
                            <td class="text-center">
                                <img :src="color.image" class="rounded-circle me-2"
                                    style="width: 38px; height: 38px; object-fit: cover;" alt="">
                            </td>
                            <td v-for="(size, sizeIndex) in purchase.product.sizes" :key="'size-' + sizeIndex">
                                <div>
                                    <div class=" text-center">{{ purchase.quantities[`${color.sid}_${size.sid}`] }}</div>
                                </div>
                            </td>
                        </tr>
                        <tr class="text-center" scope="row">
                            <th>Total</th>
                            <td class="text-center" v-for="(footSize, footSizeindex) in purchase.product.sizes"
                                :key="'foot-size-' + footSizeindex">
                                {{ calculateAdvanceSizeTotal(footSizeindex) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="purchase.product" class="container mb-3 ">
                <div class=" d-flex justify-content-between mx-3 py-2 px-4 border" style="background-color: #e8e8e8;">
                    <p class=" mb-0">Actual Ordered Qty</p>
                    <p class=" fw-bold text-center mb-0">
                        {{ totalQuantity }} pcs
                    </p>
                </div>
            </div>
        </div>
        <!-- --------------Final Order----------------------------------- -->

        <div class=" my-3 w-100">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger w-100 py-3 ">Order
                completed</button>
        </div>

        <!-- ----------------Transaction--------------------------------- -->
        <div>
            <div class="mt-3">
                <div class="d-flex align-items-center">
                    <div class="border p-2 py-3 ps-4 rounded-top  text-white w-100" style="background-color: #F48B29 ;"
                        data-bs-toggle="collapse" data-bs-target="#collapseExampleNew" aria-expanded="false"
                        aria-controls="collapseExampleNew">
                        Transaction
                    </div>
                </div>
                <div class="collapse show bg-white p-2" id="collapseExampleNew">
                    <div v-for="(ss, index) in purchase.message" :key="index" :class="ss.type">
                        <div class="message mt-3 mb-2 d-flex flex-column"
                            style="width: calc(100% - 40px) !important; margin-left:auto; margin-right: 0;">
                            <div class="d-flex align-items-center">
                                <i class="bi bi-person fs-4 border rounded-circle me-2"
                                    style="padding: 5px 10px !important;"></i>
                                <div class="message-content border w-100"
                                    style="background-color: #F48B29;word-wrap: break-word; padding: 10px !important; border-radius: 8px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 0px !important; color: white;">
                                    <p class="m0">
                                        <strong>{{ ss.title }}</strong>: {{ ss.body }}
                                    </p>
                                </div>
                            </div>
                            <div class="text-end text-muted" style="font-size: 10px;">{{ ss.time }}</div>
                        </div>
                    </div>

                </div>
            </div>
            <div v-if="isVisible" class="border bg-white">
                 <div class="container pb-2 ">
                    <div class="form-check border-bottom py-2" v-for="(action_name, index) in inputList" :key="index">
                        <div class="d-flex align-items-center">
                            <input class="form-check-input" :id="'radio' + index" type="radio" :value="action_name"
                                v-model="actionName" name="actionGroup">
                            <label class="form-check-label w-100" :for="'radio' + index">
                                <span><i :class="action_name.icon" class="fs-4 mx-3"></i></span>
                                <span class="text-capitalize">{{ action_name.title }}</span>
                            </label>
                        </div>
                    </div>


                    <div class=" d-flex bg-light p-2 align-items-center">
                        <input v-model="body" type="text" class="form-control" placeholder="Type your message..." />
                        <div @click="sendMessage" class="ms-2 "><i class="bi bi-telegram fs-1   p-3"
                                style="color: #F48B29;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ---------------Transaction---------------------------------- -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Order Completed</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p>Are you sure you have received <br> <b> Quantity of this
                                Order</b></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light border" style="width: 30%;"
                            data-bs-dismiss="modal">Close</button>
                        <button @click="hideDiv()" data-bs-dismiss="modal" style="width: 30%;" type="button"
                            class="btn btn-light border">Yes</button>
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
            inputList: [
                {
                    id: 1,
                    title: 'Sending Request',
                    icon: 'bi bi-envelope'
                },
                {
                    id: 2,
                    title: 'Received Quantity',
                    icon: 'bi bi-check2-all'
                },
                {
                    id: 3,
                    title: 'Chat Message',
                    icon: 'bi bi-chat-dots'
                },
            ],
            messages: [],
            isVisible: true,
            chats: {}
        }
    },
    mounted() {
        let purchaseId = this.$route.params.sid
        axios.get('http://192.168.1.133:8001/api/purchases/' + purchaseId).then(response => {
            this.purchase = response.data.data
        })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },
    computed: {
        totalQuantity() {
            let total = 0;

            for (let footSizeIndex = 0; footSizeIndex < this.purchase.product.sizes.length; footSizeIndex++) {
                total += this.calculateAdvanceSizeTotal(footSizeIndex);
            }

            return total;
        },
    },
    methods: {
        calculateAdvanceSizeTotal(footSizeIndex) {
            let total = 0;

            this.purchase.product.colors.forEach((color) => {
                const sizeId = this.purchase.product.sizes[footSizeIndex].sid;
                const colorId = color.sid;
                const key = `${colorId}_${sizeId}`;

                if (Object.prototype.hasOwnProperty.call(this.purchase.quantities, key)) {
                    total += parseInt(this.purchase.quantities[key]) || 0;
                }
            });

            return total;
        },
        hideDiv() {
            this.isVisible = false;
        },
        sendMessage() {
            if (this.body.trim() !== '') {
                const message = {
                    body: this.body,
                    title: this.actionName.title,
                };

                this.messages.push(message);

                this.actionName = '';
                this.body = '';

                let purchaseId = this.$route.params.sid
                axios.put('http://192.168.1.133:8001/api/purchases/' + purchaseId, {
                    message: JSON.stringify(message)
                })
                    .then(response => {
                        console.log('Response from the API:', response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },
    }
}
</script>

<style lang="scss" scoped></style>