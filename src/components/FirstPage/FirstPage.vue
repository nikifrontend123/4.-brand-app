<template>
    <div class="bg-danger">
        test
        <InstallPrompt></InstallPrompt>
    </div>

    <div class="d-flex flex-column justify-content-around align-items-center"
        style="height:100vh;background: linear-gradient(113deg, #F48B29 31%, #eca25d 97%);">
        <div class="d-flex flex-column align-items-center justify-content-center">
            <img :src="logo" class="d-md-none" style="width: 75vw; object-fit: contain;grey">
            <img :src="logo" class="d-md-block d-none" style="width: 20vw; object-fit: contain;grey">
            <p class="my-4 m-0 fw-bold text-white text-center icon">Brand App</p>
        </div>
        <!-- <select v-if="suppliersList" v-model="selectedSupplier" class="form-select mb-3" style="width: 300px;">
            <option disabled value="">Select Supplier</option>
            <option v-for="supplier in suppliersList" :key="supplier.sid" :value="supplier.sid">{{ supplier.sid }}</option>
        </select> -->
        <!-- <router-link to="/login-page" class="text-white text-decoration-none fs-4">
            Get Started
        </router-link> -->
        <router-link to="/login" class="text-white text-decoration-none fs-4">
            Get Started
        </router-link>
        <router-link to="/dashboard" class="text-white text-decoration-none fs-4">
            Home 
        </router-link>
    </div>

    
</template>

<script>
// import axios from 'axios';
import InstallPrompt from '@/components/InstallPrompt.vue';

export default {
    name: 'RootPage',
    components: { InstallPrompt },
    data() {
        return {
            logo: 'images/logo.png',
            suppliersList: null,
            selectedSupplier: null
        }
    },
    // mounted() {
    //     axios.get('http://192.168.1.184:8000/api/suppliers')
    //         .then(response => {
    //             this.suppliersList = response.data.data
    //         })
    //         .catch((error) => { console.error('error getting suppliers', error) })
    // }
}
</script>

<style lang="scss" scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 2rem;
}
</style>