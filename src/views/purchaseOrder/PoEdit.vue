<template>
    <div class="container my-3">
        <form @submit.prevent="update()">
            <!-- --------------------Quantity------------------- -->
            <p class="m-0 fs-5 text-center">Enter Your Order Quantity</p>
            <div class="table-responsive mt-4" id="scroll">
                <table class="table table-responsive table-striped table-hover">
                    <thead>
                        <tr style="line-height: 45px;">
                            <th class="text-center" scope="col"><span class="fw-normal">SKU {{ skuCount }} </span>
                            </th>
                            <th scope="col" v-for="(headSize, headSizeIndex) in data.sizes"
                                :key="'head-size-' + headSizeIndex">
                                <div class="fw-bold d-flex flex-column align-items-center">
                                    <p class="m-0">{{ headSize.name }}</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(color, colorindex) in data.colors" :key="'color-' + colorindex">
                            <td class="d-flex justify-content-center">
                                <img :src="color.image" class="rounded-circle me-2"
                                    style="width: 38px; height: 38px; object-fit: cover;" alt="">
                            </td>
                            <td v-for="(size, sizeIndex) in data.sizes" :key="'size-' + sizeIndex">
                                <div class="d-flex justify-content-center">
                                    <input type="number" class="form-control text-center px-0" style="width: 3rem;"
                                        v-model="advance[`${color.sid}_${size.sid}`]">
                                </div>
                            </td>
                        </tr>
                        <tr class="text-center" scope="row">
                            <th>Total</th>
                            <td class="text-center" v-for="(footSize, footSizeindex) in data.sizes"
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
            <!-- --------------------Quantity------------------- -->

            <!-- --------------------Actual------------------- -->
            <div class="d-flex justify-content-between mb-3">

                <!-- <div class="d-flex justify-content-between border container py-2 mx-1"
                        style="background-color: #E8FFCE;">
                        <p class=" mb-0">Actual</p>
                        <p class=" fw-bold text-center mb-0">
                            {{ calculateAdvanceSizeTotal() }} pcs
                        </p>
                    </div> -->
                <div class="d-flex justify-content-between border container py-2 mx-1" style="background-color: #FFE5AD;">
                    <p class=" mb-0">Max</p>
                    <p class=" fw-bold text-center mb-0">
                        2538 pcs
                    </p>
                </div>
            </div>
            <!-- --------------------Actual------------------- -->

            <!-- --------------------Expected Date------------------- -->
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingPassword" v-model="data.expected_at">
                <label for="floatingPassword">Date</label>
            </div>
            <!-- --------------------Expected Date------------------- -->

            <!-- --------------------Message------------------- -->
            <!-- <div v-if="data" class="form-floating mb-3">
                <textarea class="form-control as" v-model="data.message" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Message</label>
            </div> -->
            <!-- --------------------Message------------------- -->
            <!-- --------------------Status------------------- -->
            <!-- <div v-if="data" class="form-floating mb-3">
                <textarea class="form-control as" v-model="data.status" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Status</label>
            </div> -->
            <!-- --------------------Status------------------- -->

            <button class="btn btn-outline-primary w-100" type="submit">Submit</button>

        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "CatalogDetails",
    data() {
        return {
            dataSetId: '',
            data: {},
            publicPath: process.env.BASE_URL,
        };
    },
    mounted() {
        this.dataSetId = this.$route.params.sid;
    },
    watch: {
        async dataSetId(newDataSetId) {
            try {
                const response = await axios.get('http://192.168.1.133:8001/api/jobworkorders/' + newDataSetId);
                this.data = response.data.data;
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        },

        'data': {
            handler: function (value) {
                this.advance = value.quantities;
                // this.message = value.message; // Update data.message
                this.delivery_date = value.delivery_date; // Update data.delivery_date
                // this.status = value.status; // Update data.delivery_date
            },
            deep: true,
        },

    },
    computed: {
        skuCount() {
            if (this.data && this.data.colors && this.data.sizes) {
                return this.data.colors.length * this.data.sizes.length;
            }
            return 0;
        },
        totalQuantity() {
            let total = 0;

            if (this.data.sizes) {
                for (let footSizeIndex = 0; footSizeIndex < this.data.sizes.length; footSizeIndex++) {
                    total += this.calculateAdvanceSizeTotal(footSizeIndex);
                }
            }
            return total;
        },
    },
    methods: {
        goBack() {
            window.history.back()
        },

        update() {
            const quantitiesArray = [];

            this.data.colors.forEach((color) => {
                this.data.sizes.forEach((size) => {
                    const key = `${color.sid}_${size.sid}`;

                    // Create an object with the color and size combination
                    const quantityObject = {};
                    quantityObject[key] = this.advance[key] || 0; // Use 0 if the quantity is undefined
                    quantitiesArray.push(quantityObject);
                });
            });
            const requestData = {
                quantities: JSON.stringify(quantitiesArray),
                // message: this.data.message, // Use 'this.data.message' instead of 'this.message'
                // status: this.data.status,
                expected_at: this.data.expected_at, // Use 'this.data.expected_at' instead of 'this.expected_at'
            };

            const dataSetId = this.$route.params.sid;

            axios
                .put(`http://192.168.1.133:8001/api/jobworkorders/${dataSetId}`, requestData)
                .then((res) => {
                    if (res.data.status === 'ok') {
                        this.data = res.data.data;
                        console.log('PUT request success:', this.data);
                    } else if (res.data.status === 'error') {
                        alert(res.data.message)
                    } else {
                        alert('Something went wrong! Please try again')
                    }
                })
                .catch((error) => {
                    console.error('PUT request error:', error);
                });
        },

        calculateAdvanceSizeTotal(footSizeIndex) {
            let total = 0;

            this.data.colors.forEach((color) => {
                const sizeId = this.data.sizes[footSizeIndex].sid;
                const colorId = color.sid;
                const key = `${colorId}_${sizeId}`;

                if (Object.prototype.hasOwnProperty.call(this.advance, key)) {
                    total += parseInt(this.advance[key]) || 0;
                }
            });

            return total;
        },
    },
}
</script>

<style lang="scss" scoped></style>