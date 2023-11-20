<template>
    <div class="container" style="padding-bottom: 100px;">

        <!-- ------------------Po Placed------------------------------- -->
        <div>
            <div data-bs-toggle="collapse" data-bs-target="#collapseorder" aria-expanded="false"
                aria-controls="collapseorder" class="border p-2 py-3 ps-4 mt-3 text-white w-100 rounded-top"
                style="background-color: #F48B29;">
                PO Placed
            </div>
            <div class=" collapse show  bg-white border pb-2 mt-3" id="collapseorder">
                <div class="overflow-x-scroll">
                    <table class="table table-responsive table-striped table-hover">
                        <!-- <thead>
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
                        </thead> -->
                        <tbody>
                            <tr v-for="(color, colorindex) in dataSet.colors" :key="'color-' + colorindex">
                                <td>
                                    <img :src="color.image" class="rounded-circle me-2"
                                        style="width: 38px; height: 38px; object-fit: cover;" alt="">
                                </td>
                                <td v-for="(size, sizeIndex) in dataSet.sizes" :key="'size-' + sizeIndex">
                                    <div class="">
                                        <input type="text" class="form-control text-center px-0" style="width: 4rem;"
                                        v-model="advance[`${color.sid}_${size.sid}`]">
                                        <!-- :value="(color.sid) + '-' + (size.sid)"> -->
                                            <!-- :value="(colorindex + 1) + '_-' + (sizeIndex + 1)"> -->

                                    </div>
                                </td>
                            </tr>
                            <tr scope="row">
                                <th>Total</th>
                                <td class="text-center" v-for="(footSize, footSizeindex) in dataSet.sizes"
                                    :key="'foot-size-' + footSizeindex">222
                                    <!-- {{ calculateAdvanceSizeTotal(footSizeindex) }} -->
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

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'OrderDetails',
    data() {
        return {
            dataSet: 0,
            advance: {},
        }
    },
    mounted() {
        let poId = this.$route.params.posid
        axios.get('http://192.168.1.133:8001/api/jobworkorders/' + poId)
            .then(response => {  this.dataSet = response.data.data })
            .catch(error => { console.error('Error fetching data:', error) });
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
                this.advance = {}; 
            }
            console.log('updateAdvance', this.dataSet.quantities)
            if (this.dataSet && this.dataSet.quantities) {
                this.dataSet.colors.forEach((color, cIndex) => {
                    this.dataSet.sizes.forEach((size, sIndex) => {
                        const keyOne = `${color.sid}_${size.sid}`;
                        console.log(cIndex, sIndex)
                        this.advance[keyOne] = this.dataSet.quantities[keyOne] || 0;
                    });
                });
            }
        },
    }
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