<template>
    <div v-if="dataSet" class="container" style="padding-bottom: 100px;">
        <!-- ---------------Catelog Detail---------------------------------- -->
        <div class="text-white p-2 rounded-top-2 my-3" style="background-color: rgb(244, 139, 41);" type="button">
            <div class="d-flex justify-content-between w-100">
                <div class="d-flex">
                    <div v-if="dataSet && dataSet.colors && dataSet.colors.length > 0">
                        <img v-if="dataSet.colors" :src="dataSet.colors[0].image"
                            style="height: 60px; width: 60px; object-fit: cover; object-position: top;" class="rounded-2">
                    </div>
                    <div>
                        <b class="ms-2">{{ dataSet && dataSet.jwoi }}</b>
                        <p class="ms-2" v-if="dataSet && dataSet.quantity">Qty : {{ dataSet.quantity }}</p>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <i class="bi bi-chevron-down mx-2 fs-5" data-bs-toggle="collapse" href="#collapseExample" role="button"
                        aria-expanded="false" aria-controls="collapseExample"></i>
                    <i class="bi bi-download mx-2 fs-5"></i>
                    <RouterLink class="text-white" :to="{ path: '/PoEdit/' + dataSet.sid + '/edit' }">
                        <i class="bi bi-pencil mx-2 fs-5"></i>
                    </RouterLink>

                    <i class="bi bi-file-image mx-2 fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                </div>
            </div>
        </div>

        <div class="collapse" id="collapseExample">
            <table class="table table-bordered  table-hover ">
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td class="text-muted w-50">{{ dataSet.name }}</td>
                    </tr>
                    <!-- <tr>
                        <th scope="row">Message</th>
                        <td class="text-muted">{{ dataSet.message }}</td>
                    </tr> -->
                    <tr>
                        <th scope="row">Fc / Piece</th>
                        <td class="text-muted">{{ dataSet.fc }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Search Tags</th>
                        <td class="text-muted">{{ dataSet.stag }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Amount</th>
                        <td class="text-muted">{{ dataSet.amnt }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Average Rate</th>
                        <td class="text-muted">{{ dataSet.rate }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Pieces</th>
                        <td class="text-muted">{{ dataSet.piece }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- -----------Catelog Detail-------------------------------------- -->
        <!-- ----------------IMAGE---------------------------------- -->
        <div class="modal fade h-100" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex justify-content-center">
                            <div v-if="dataSet && dataSet.colors.length > 0">
                                <img :src="dataSet.colors[0].image"
                                    style="height: 400px; width: 300px; object-fit: cover; object-position:top;"
                                    class="rounded-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ----------------IMAGE---------------------------------- -->

        <!-- ------------------Po Placed------------------------------- -->
        <div v-if="isVisible">
            <div data-bs-toggle="collapse" data-bs-target="#collapseorder" aria-expanded="false"
                aria-controls="collapseorder" class="border p-2 py-3 ps-4 mt-3 text-white w-100 rounded-top"
                style="background-color: #F48B29;">
                PO Placed
            </div>
            <div class=" collapse  bg-white border pb-2 mt-3" id="collapseorder">
                <div class="overflow-x-scroll">
                    <table class="table table-responsive table-striped table-hover">
                        <thead>
                            <tr style="line-height: 45px;">
                                <th class="text-center" scope="col"><span class="fw-normal">SKU</span>{{ skuCount }}
                                </th>
                                <th scope="col" v-for="(headSize, headSizeIndex) in dataSet.sizes"
                                    :key="'head-size-' + headSizeIndex">
                                    <div class="fw-bold d-flex flex-column align-items-center">
                                        <p class="m-0">{{ headSize.name }}</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(color, colorindex) in dataSet.colors" :key="'color-' + colorindex">
                                <td class="text-center">
                                    <img :src="color.image" class="rounded-circle me-2"
                                        style="width: 38px; height: 38px; object-fit: cover;">
                                </td>
                                <td v-for="(size, sizeIndex) in dataSet.sizes" :key="'size-' + sizeIndex">
                                    <div class=" text-center">{{ advance[`${color.sid}_${size.sid}`] }}</div>
                                </td>
                            </tr>
                            <tr scope="row">
                                <th class="text-center">Total</th>
                                <td class="text-center" v-for="(footSize, footSizeindex) in dataSet.sizes"
                                    :key="'foot-size-' + footSizeindex">
                                    {{ calculateAdvanceSizeTotal(footSizeindex) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="container mb-3 ">
                    <div class=" d-flex justify-content-between mx-3 py-2 px-4 border" style="background-color: #e8e8e8;">
                        <p class=" mb-0">Actual Ordered Qty</p>
                        <p class=" fw-bold text-center mb-0">
                            {{ totalQuantity }} pcs
                        </p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
        <!-- -------------------Po Placed------------------------------ -->

        <!-- --------------Final Order----------------------------------- -->
        <div data-bs-toggle="collapse" data-bs-target="#collapsepoplaced" aria-expanded="false"
            aria-controls="collapsepoplaced" class="border mt-3 p-2 py-3 ps-4  text-white w-100 rounded-top"
            style="background-color: #F48B29;">
            Final Order
        </div>
        <div class="bg-white collapse" id="collapsepoplaced">
            <div class="overflow-x-scroll">
                <table class="table table-responsive table-striped table-hover">
                    <thead>
                        <tr style="line-height: 45px;">
                            <th class="text-center" scope="col"><span class="fw-normal">SKU</span>{{ skuCount }}
                            </th>
                            <th scope="col" v-for="(headSize, headSizeIndex) in dataSet.sizes"
                                :key="'head-size-' + headSizeIndex">
                                <div class="fw-bold d-flex flex-column align-items-center">
                                    <p class="m-0">{{ headSize.name }}</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(color, colorindex) in dataSet.colors" :key="'color-' + colorindex">
                            <td class="text-center">
                                <img :src="color.image" class="rounded-circle me-2"
                                    style="width: 38px; height: 38px; object-fit: cover;" alt="">
                            </td>
                            <td v-for="(size, sizeIndex) in dataSet.sizes" :key="'size-' + sizeIndex">
                                <div>
                                    <div class=" text-center">{{ advance[`${color.sid}_${size.sid}`] }}</div>
                                </div>
                            </td>
                        </tr>
                        <tr class="text-center" scope="row">
                            <th>Total</th>
                            <td class="text-center" v-for="(footSize, footSizeindex) in dataSet.sizes"
                                :key="'foot-size-' + footSizeindex">
                                {{ calculateAdvanceSizeTotal(footSizeindex) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="container mb-3 ">
                <div class=" d-flex justify-content-between mx-3 py-2 px-4 border" style="background-color: #e8e8e8;">
                    <p class=" mb-0">Actual Ordered Qty</p>
                    <p class=" fw-bold text-center mb-0">
                        {{ totalQuantity }} pcs
                    </p>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary">Approved</button>
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
                    <div v-for="(ss, index) in dataSet.message" :key="index" :class="ss.type">
                        <div class="message mt-3 mb-2 d-flex flex-column"
                            style="width: calc(100% - 40px) !important; margin-left:auto; margin-right: 0;">
                            <div class="d-flex align-items-center">
                                <!-- <i class="bi bi-person fs-4 border rounded-circle me-2"
                                    style="padding: 5px 10px !important;"></i> -->
                                <div class="message-content border w-100"
                                    style="background-color: #F48B29;word-wrap: break-word; padding: 10px !important; border-radius: 8px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 0px !important; color: white;">
                                    <p class="mb-0">@{{ ss.username }}</p>
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
                <!-- <p class="text-center text-white py-2" style="background-color: #606C5D;">Order Management</p> -->
                <div class="container pb-2 ">
                    <div class="form-check border-bottom py-2 " v-for="(action_name, index) in inputList" :key="index">
                        <div class="d-flex align-items-center ">
                            <input class="form-check-input" :ID="'radio' + index" type="radio" :value="action_name"
                                v-model="actionName">
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
                        <p>Are you sure you have received <br> <b>{{ dataSet.qty }} Quantity of this {{ dataSet.style }}
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
import axios from 'axios'
export default {
    name: 'OrderDetails',
    data() {
        return {
            dataSet: 0,
            publicPath: process.env.BASE_URL,
            actionName: [],
            body: '',
            showActionModal: false,
            inputList: [
                {
                    title: 'Sending Request',
                    icon: 'bi bi-envelope'
                },
                {
                    title: 'Received Quantity',
                    icon: 'bi bi-check2-all'
                },
                {
                    title: 'Chat Message',
                    icon: 'bi bi-chat-dots'
                },
            ],
            messages: [],
            isVisible: true,
            advance: {},
            status: '',
            chats: {}
        }
    },
    computed: {
        sizes() {
            return this.$store.getters.getSize
        },
        skuCount() {
            return this.dataSet.colors.length * this.dataSet.sizes.length;
        },
        totalQuantity() {
            let total = 0;

            for (let footSizeIndex = 0; footSizeIndex < this.dataSet.sizes.length; footSizeIndex++) {
                total += this.calculateAdvanceSizeTotal(footSizeIndex);
            }

            return total;
        },

    },
    watch: {
        'dataSet': {
            handler: 'updateAdvance',
            deep: true,
        },
    },
    methods: {
        updateAdvance() {
            if (!this.advance) {
                this.advance = {}; // Initialize advance if it's undefined
            }

            if (this.dataSet && this.dataSet.quantities) {
                // Iterate through colors and sizes to update advance object
                this.dataSet.colors.forEach((color) => {
                    this.dataSet.sizes.forEach((size) => {
                        const key = `${color.sid}_${size.sid}`;
                        this.advance[key] = this.dataSet.quantities[key] || 0;
                    });
                });
            }
        },
        hideDiv() {
            this.isVisible = false;
        },
        sendMessage() {
            if (this.body.trim() !== '') {
                const message = {
                    // id: Date.now(),
                    body: this.body,
                    title: this.actionName.title, // Get the title from the selected action
                    // timestamp: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
                    // timestamp2: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    // type: 'outgoing', // Change to 'incoming' for received messages
                };


                this.messages.push(message);

                this.actionName = '';
                this.body = '';

                let poId = this.$route.params.posid
                axios.put('http://192.168.1.133:8001/api/purchaseorders/' + poId, {
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
        calculateAdvanceSizeTotal(footSizeIndex) {
            let total = 0;

            this.dataSet.colors.forEach((color) => {
                const sizeId = this.dataSet.sizes[footSizeIndex].sid;
                const colorId = color.sid;
                const key = `${colorId}_${sizeId}`;

                if (Object.prototype.hasOwnProperty.call(this.advance, key)) {
                    total += parseInt(this.advance[key]) || 0;
                }
            });

            return total;
        }
    },
    mounted() {
        let poId = this.$route.params.posid
        axios.get('http://192.168.1.133:8001/api/purchaseorders/' + poId).then(response => {
            this.dataSet = response.data.data
        })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        axios.get('http://192.168.1.133:8001/api/purchaseorders/message/' + poId)
            .then(res => {
                console.log('API Response:', JSON.stringify(res.data));

                this.chats = res.data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },

}

</script>

<style scoped>
table th:nth-child(1),
.table td:nth-child(1) {
    position: sticky;
    left: 0;
    background-color: #f8f8f7;
    color: #373737;
    z-index: 10;
}
</style>