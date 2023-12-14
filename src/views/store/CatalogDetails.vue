<template>
    <div class="container " style="padding-bottom: 80px;" v-if="dataReady">
        <div class="fs-5 d-flex justify-content-between align-items-center my-3">
            <div class="">
                <b>Status :</b> <span>{{ statusText }}</span>
            </div>
            <div class="form-check form-switch" v-if="dataSet.active !== null">
                <input class="form-check-input" :checked="active" @change="toggleStatus" type="checkbox"
                    id="flexSwitchCheckChecked">
            </div>
        </div>
        <button class="accordion-button collapsed border p-2 rounded-top-2 my-3 bg-light" type="button">
            <div class="d-flex justify-content-between w-100">
                <div class="d-flex">
                    <img :src="dataSet.product.image"
                        style="height: 60px; width: 60px; object-fit: cover; object-position:top;" class="rounded-2">
                    <div class="mx-2">
                        <b> {{ dataSet.product.name }}</b>
                    </div>
                </div>
                <div class="d-flex align-items-center ">
                    <i class="bi bi-chevron-down me-2 fs-5" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne"></i>
                    <i class="bi bi-download mx-2 fs-5"></i>
                    <i class="bi bi-file-image mx-2 fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                </div>
            </div>
        </button>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body p-0">
                <div class="col-lg-7 px-3">
                    <p class="text-start mb-2 fs-5 py-1 text-muted fw-bold">
                        {{ dataSet.product.info }}
                    </p>
                    <div>
                        <div class=" w-100 d-flex  me-0">
                            <div class="col-12 text-start d-flex align-items-center justify-content-between">
                                <div>
                                    <span class="me-2 text-dark fw-bold fs-5">₹ {{ dataSet.product.price }} / mtr</span>
                                </div>
                                <div>
                                    <p class="fw-bold m-0">Wholesale Price</p>
                                    <p class="fw-bold m-0">with {{ dataSet.product.moq }}/mtr MOQ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <table class="table table-bordered mt-3">
                    <tbody>
                        <tr>
                            <th class="w-50 bg-light" scope="row">
                                <p class="mb-1" style="font-size: 14px">Total Amount :</p>
                            </th>
                            <td>
                                <p class="mb-1 text-center" style="font-size: 14px">{{ dataSet.product.total }}</p>
                            </td>

                        </tr>
                        <tr>
                            <th class="w-50 bg-light" scope="row">
                                <p class="mb-1" style="font-size: 14px">Average Rate :</p>
                            </th>
                            <td>
                                <p class="mb-1 text-center" style="font-size: 14px">876</p>
                            </td>

                        </tr>
                        <tr>
                            <th class="w-50 bg-light" scope="row">
                                <p class="mb-1" style="font-size: 14px">Total Pieces :</p>
                            </th>
                            <td>
                                <p class="mb-1 text-center" style="font-size: 14px">7655</p>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- -------------------------IMAGE-------------------- -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Catalog Image</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex">
                            <img :src="dataSet.product.image"
                                style="height: 400px; width: 500px; object-fit: cover; object-position:top;"
                                class="rounded-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- -------------------------IMAGE-------------------- -->
        <p class="m-0 fs-5 text-center bill mt-4"><span>~ Create Job Work Order ~</span></p>
        <ul class="nav nav-tabs d-flex justify-content-evenly my-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                    role="tab" aria-controls="home" aria-selected="true">Quick</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="smart-tab" data-bs-toggle="tab" data-bs-target="#smart" type="button"
                    role="tab" aria-controls="smart" aria-selected="true">Smart</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                    role="tab" aria-controls="profile" aria-selected="false">Regular</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                    role="tab" aria-controls="contact" aria-selected="false">Advance</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <!-- -----------QUICK------------------ -->
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="my-3">
                    <form @submit.prevent="postData()" method="post">

                        <div class="form-floating my-3">
                            <select class="form-select" id="floatingSelect" v-model="selectedFabricator">
                                <option v-for="fabricator in fabricators" :key="fabricator.sid" :value="fabricator.sid">
                                    {{ fabricator.name }}
                                </option>
                            </select>
                            <label for="floatingSelect">Select Fabricator</label>
                        </div>
                        <!-- <div class="" v-for="(style, styleIndex) in dataSet.product" :key="styleIndex">
                            {{ style.sid }}
                        </div> -->
                        <div class="form-floating my-3">
                            <select class="form-select">
                                <option>{{ dataSet.product.name }}</option>
                                <!-- Add other options here if needed -->
                            </select>
                            <label for="floatingSelect">Catalog</label>
                        </div>

                        <div class="form-floating my-3">
                            <input required type="number" class="form-control" id="floatingInput" v-model="quantity">
                            <label for="floatingInput">Quantity</label>
                            <p class="text-muted m-0 my-2" style="font-size: 12px;">* Total quantity will split in equal
                                propotion between all sizes and colors</p>
                        </div>


                        <p class=" fs-5 bill text-center"><span>~ Actual Order Qty ~</span></p>
                        <div class="d-flex justify-content-between mb-3">

                            <div class="d-flex justify-content-between border container py-2 mx-1"
                                style="background-color: #E8FFCE;">
                                <p class=" fw-bold text-center mb-0">
                                    {{ calculateRegularSizeTotal() }} pcs
                                    <!-- {{ calculateAdvanceSizeTotal() }} pcs -->
                                </p>
                                <p class=" mb-0">Roundoff </p>
                            </div>
                            <!-- <div class="d-flex justify-content-between border container py-2 mx-1"
                                style="background-color: #FFE5AD;">
                                <p class=" mb-0">Max</p>
                                <p class=" fw-bold text-center mb-0">
                                    2538 pcs
                                </p>
                            </div> -->
                        </div>

                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="floatingPassword" v-model="delivery_date">
                            <label for="floatingPassword">Select Expected Date of Delivery</label>
                        </div>

                        <div class="form-floating mb-3">
                            <textarea required class="form-control as" v-model="message" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Message</label>
                        </div>

                        <button @click="showAlert" class="btn text-white w-100" style="background-color: #F48B29;"
                            type="submit">Submit</button>

                    </form>
                </div>
            </div>
            <!-- -----------QUICK------------------ -->

            <!-- -----------SMART------------------ -->
            <div class="tab-pane fade" id="smart" role="tabpanel" aria-labelledby="smart-tab">
                <form @submit.prevent="postData()" method="post">
                    <div class="form-floating my-3">
                        <select class="form-select" id="floatingSelect" v-model="selectedFabricator">
                            <option v-for="fabricator in fabricators" :key="fabricator.sid" :value="fabricator.sid">
                                {{ fabricator.name }}
                            </option>
                        </select>
                        <label for="floatingSelect">Select Fabricator</label>
                    </div>

                    <div class="form-floating my-3">
                        <select class="form-select">
                            <option>{{ dataSet.product.name }}</option>
                            <!-- Add other options here if needed -->
                        </select>
                        <label for="floatingSelect">Catalog</label>
                    </div>

                    <div class="my-3">
                        <div class="d-flex">
                            <p class="m-0 fs-5 mt-3 mb-2">Selected Colors</p>
                        </div>
                        <div class="d-flex flex-wrap gap-2 mb-2">
                            <div v-for="(color, index) in dataSet.product.options" :key="index" @click="toggleColor(color)">
                                <img :src="color.image" class="rounded me-2 p-1"
                                    :style="{ border: color.isSelected ? '2px solid black' : 'none' }"
                                    style="width: 60px; height: 50px; object-fit: cover;" alt="">
                            </div>
                        </div>
                        <p class="text-muted m-0 mb-3" style="font-size: 12px;">* Deselection means you are removing all
                            sizes
                            from the order</p>

                        <p class="m-0 fs-5 mt-1">Selected Sizes</p>
                        <div class="d-flex gap-2 flex-wrap ">
                            <div v-for="(size, index) in dataSet.product.ranges " :key="index" @click="toggleSize(size)"
                                class="rounded my-2" style="width: 60px;"
                                :style="{ border: size.isSelected ? '2px solid black' : 'none' }">
                                <div class="text-center rounded   p-2 m-1 fw-bold  text-white"
                                    style="background-color: #F48B29;" :for="'size' + index">
                                    {{ size.name }}
                                </div>
                            </div>
                        </div>
                        <p class="text-muted m-0 mb-3" style="font-size: 12px;">* Deselection means you are removing all
                            colors
                            from the order</p>

                        <div class="my-4">
                            <div class="form-floating my-3">
                                <input required type="number" class="form-control" id="floatingInput" v-model="quantity">
                                <label for="floatingInput">Quantity</label>
                                <p class="text-muted m-0 my-2" style="font-size: 12px;">* Total quantity will split in equal
                                    propotion between all sizes and colors</p>
                            </div>
                            <p class=" fs-5 bill text-center"><span>~ Actual Order Qty ~</span></p>
                            <div class="d-flex justify-content-between mb-3">

                                <div class="d-flex justify-content-between border container py-2 mx-1"
                                    style="background-color: #E8FFCE;">
                                    <p class=" fw-bold text-center mb-0">
                                        {{ calculateAdvanceSizeTotal() }} pcs
                                    </p>
                                    <p class=" mb-0">Roundoff</p>
                                </div>
                                <!-- <div class="d-flex justify-content-between border container py-2 mx-1"
                                    style="background-color: #FFE5AD;">
                                    <p class=" mb-0">Max</p>
                                    <p class=" fw-bold text-center mb-0">
                                        2538 pcs
                                    </p>
                                </div> -->
                            </div>

                            <div class="form-floating mb-3">
                                <input type="date" class="form-control" id="floatingPassword" v-model="delivery_date">
                                <label for="floatingPassword">Select Expected Date of Delivery</label>
                            </div>

                            <div class="form-floating mb-3">
                                <textarea required class="form-control as" v-model="message"
                                    id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Message</label>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mt-3">
                            <button class="btn text-white w-100" style="background-color: #F48B29;"
                                type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- -----------SMART------------------ -->

            <!-- -----------REGULAR---------------- -->
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="my-3">
                    <form @submit.prevent="postData()" method="post">
                        <div class="form-floating my-3">
                            <select class="form-select" id="floatingSelect" v-model="selectedFabricator">
                                <option v-for="fabricator in fabricators" :key="fabricator.sid" :value="fabricator.sid">
                                    {{ fabricator.name }}
                                </option>
                            </select>
                            <label for="floatingSelect">Select Fabricator</label>
                        </div>

                        <div class="form-floating my-3">
                            <select class="form-select">
                                <option>{{ dataSet.product.name }}</option>
                                <!-- Add other options here if needed -->
                            </select>
                            <label for="floatingSelect">Catalog</label>
                        </div>

                        <p class="m-0 fs-5 text-center bill"><span>~ Enter Your Order Quantity ~</span></p>
                        <div class="table-responsive mt-4" id="scroll">
                            <table class="table border border-1" style="background-color: #f8f9fa;">
                                <thead>
                                    <tr style="line-height: 45px;">
                                        <th class="text-center" scope="col">
                                            <span class="fw-normal">SKU</span>{{ skuCountRegular }}
                                        </th>
                                        <th scope="col" v-for="(headSize, headSizeIndex) in dataSet.product.ranges"
                                            :key="'head-size-' + headSizeIndex">
                                            <div class="fw-bold d-flex flex-column align-items-center">
                                                <p class="m-0">{{ headSize.name }}</p>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(color, colorindex) in dataSet.product.options" :key="'color-' + colorindex"
                                        v-show="colorindex === 0">
                                        <td>
                                            <div
                                                class="rounded-circle m-2 px-1 align-items-center justify-content-center d-flex">
                                                All</div>
                                        </td>
                                        <td class="py-3" v-for="(size, sizeIndex) in dataSet.product.ranges"
                                            :key="'size-' + sizeIndex">
                                            <input type="number" class="form-control text-center" style="width: 5rem;"
                                                v-model="regular[`0_${size.sid}`]">
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <p class=" fs-5 bill text-center"><span>~ Actual Order Qty ~</span></p>
                        <div class="d-flex justify-content-between mb-3">

                            <div class="d-flex justify-content-between border container py-2 mx-1"
                                style="background-color: #E8FFCE;">
                                <p class=" fw-bold text-center mb-0">
                                    {{ calculateRegularSizeTotal() }} pcs
                                </p>
                                <p class=" mb-0">Roundoff</p>
                            </div>
                            <!-- <div class="d-flex justify-content-between border container py-2 mx-1"
                                style="background-color: #FFE5AD;">
                                <p class=" mb-0">Max</p>
                                <p class=" fw-bold text-center mb-0">
                                    2538 pcs
                                </p>
                            </div> -->
                        </div>

                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="floatingPassword" v-model="delivery_date">
                            <label for="floatingPassword">Select Expected Date of Delivery</label>
                        </div>

                        <div class="form-floating mb-3">
                            <textarea required class="form-control as" v-model="message" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Message</label>
                        </div>

                        <div class="d-flex justify-content-center mt-3">
                            <button class="btn text-white w-100" style="background-color: #F48B29;"
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- -----------REGULAR---------------- -->

            <!-- -----------ADVANCE---------------- -->
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="my-3">
                    <form @submit.prevent="postData" method="post">

                        <!-- --------------------FABRICATOR------------------- -->
                        <div class="form-floating my-3">
                            <select class="form-select" id="floatingSelect" v-model="selectedFabricator">
                                <option v-for="fabricator in fabricators" :key="fabricator.sid" :value="fabricator.sid">
                                    {{ fabricator.name }}
                                </option>
                            </select>
                            <label for="floatingSelect">Select Fabricator</label>
                        </div>
                        <!-- --------------------FABRICATOR------------------- -->

                        <!-- --------------------CATALOG------------------- -->
                        <div class="form-floating my-3">
                            <select class="form-select">
                                <option>{{ dataSet.product.name }}</option>
                                <!-- Add other options here if needed -->
                            </select>
                            <label for="floatingSelect">Catalog</label>
                        </div>
                        <!-- --------------------CATALOG------------------- -->

                        <!-- --------------------Quantity------------------- -->
                        <p class="m-0 fs-5 text-center bill"><span>~ Enter Your Order Quantity ~</span></p>
                        <div class="table-responsive mt-4" id="scroll">
                            <table class="table border border-1" style="background-color: #f8f9fa;">
                                <thead>
                                    <tr style="line-height: 45px;">
                                        <th class="text-center" scope="col"><span class="fw-normal">SKU</span>{{
                                            skuCount }}
                                        </th>
                                        <th scope="col" v-for="(headSize, headSizeIndex) in dataSet.product.ranges"
                                            :key="'head-size-' + headSizeIndex">
                                            <div class="fw-bold d-flex flex-column align-items-center">
                                                <p class="m-0">{{ headSize.name }}</p>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(color, colorindex) in dataSet.product.options" :key="'color-' + colorindex">
                                        <td class="text-center">
                                            <img :src="color.image" class="rounded-circle"
                                                style="width: 35px; height: 35px; object-fit: cover;">
                                        </td>
                                        <td v-for="(size, sizeIndex) in dataSet.product.ranges" :key="'size-' + sizeIndex">
                                            <input type="number" class="form-control text-center"
                                                v-model="advance[`${color.sid}_${size.sid}`]">
                                        </td>
                                    </tr>
                                    <tr scope="row">
                                        <th>Total</th>
                                        <td class="text-center" v-for="(footSize, footSizeindex) in dataSet.product.ranges"
                                            :key="'foot-size-' + footSizeindex">
                                            {{ calculateAdvanceTotal(footSizeindex) }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- --------------------Quantity------------------- -->

                        <!-- --------------------Actual------------------- -->
                        <p class=" fs-5 bill text-center"><span>~ Actual Order Qty ~</span></p>
                        <div class="d-flex justify-content-between mb-3">

                            <div class="d-flex justify-content-between border container py-2 mx-1"
                                style="background-color: #E8FFCE;">
                                <p class=" fw-bold text-center mb-0">
                                    {{ calculateAdvanceSizeTotal() }} pcs
                                </p>
                                <p class=" mb-0">Roundoff</p>
                            </div>
                            <!-- <div class="d-flex justify-content-between border container py-2 mx-1"
                                style="background-color: #FFE5AD;">
                                <p class=" mb-0">Max</p>
                                <p class=" fw-bold text-center mb-0">
                                    2538 pcs
                                </p>
                            </div> -->
                        </div>
                        <!-- --------------------Actual------------------- -->

                        <!-- --------------------Expected Date------------------- -->
                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="floatingPassword" v-model="delivery_date">
                            <label for="floatingPassword">Select Expected Date of Delivery</label>
                        </div>
                        <!-- --------------------Expected Date------------------- -->

                        <!-- --------------------Message------------------- -->
                        <div class="form-floating mb-3">
                            <textarea required class="form-control as" v-model="message" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Message</label>
                        </div>
                        <!-- --------------------Message------------------- -->
                        <button class="btn text-white w-100" style="background-color: #F48B29;"
                            type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <!-- -----------ADVANCE---------------- -->
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
// import { mapGetters } from 'vuex';
import catalog from '@/mixing/catalog.js'
import axios from 'axios';
export default {
    mixins: [catalog],
    name: "CatalogDetails",
    data() {
        return {
            dataSet: 1,
            dataReady: false,
            fabricators: [
                { sid: 'F1', name: 'Sardar' },
            ],
            publicPath: process.env.BASE_URL,
            quantity: null,
            regular: [],
            advance: [],
            quantities: [],
            selectedFabricator: 'F1',
            selectedCatalog: null,
            delivery_date: null,
            message: null,
            active: null,

        };
    },
    watch: {
        'dataSet.active': {
            immediate: true, // This ensures it runs immediately on component creation
            handler(newValue) {
                if (newValue) {
                    this.active = newValue;
                }
            }
        }
    },
    computed: {
        statusText() {
            if (this.dataSet.active === true) {
                return "Live";
            } else if (this.dataSet.active === false) {
                return "Draft";
            } else {
                return "Loading..."; // You can change this to a loading message
            }
        },
        stocks() {
            return this.$store.getters.getstocks
        },
        defaultDeliveryDate() {
            const today = new Date();
            today.setDate(today.getDate() + 2);
            return today.toISOString().substr(0, 10);
        },
        // skuCount() {
        //     return this.stock.product.colors.length * this.stock.product.sizes.length;
        // },
        // skuCountRegular() {
        //     return this.stock.product.ranges.length;
        // },
    },
    methods: {
        async toggleStatus() {
            const stockId = this.$route.params.productId;
            const url = 'http://192.168.1.133:8001/api/stocks/' + stockId;
            const newData = {
                active: this.active ? 'false' : 'true',
            };
            try { 
                const response = await axios.put(url, newData);
                if (response.data.active === 'true') {
                    // Update 'active' based on the new status from the API
                    this.active = !this.active;
                } else {
                    console.error('Unexpected response:', response.data);
                    // You may want to handle errors and provide user feedback
                }
            } catch (error) {
                console.error('Error toggling status:', error);
                // You may want to handle errors and provide user feedback
            }
        },
    },

}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none;
}

textarea.form-control {
    min-height: calc(7.5em + 0.75rem + calc(var(--bs-border-width) * 2));
}

.table th:first-child,
.table td:first-child {
    position: sticky;
    left: 0;
    background-color: #e8e8e8;
}

.color-selector input[type="checkbox"] {
    display: none;
}

.color-selector input[type="checkbox"]:checked+label {
    border: 2px solid #000000;
}

.nav-link {
    color: #000000;
}
.nav-tabs {
    --bs-nav-tabs-link-active-color: #F48B29;
}
.form-check-input:checked {
    background-color: green;
    border-color: green;
}
</style>