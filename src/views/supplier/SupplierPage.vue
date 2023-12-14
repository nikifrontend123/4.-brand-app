<template>
    <FabFilter>
        <button class="btn btn-outline-primary rounded-2" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
            <i class="bi bi-plus-lg"></i>
        </button>
    </FabFilter>
    <div class="container">
        <div class="border my-3 bg-light" v-for="(fab, index) in suppliers" :key="index">
            <div class="d-flex gap-3 my-2">
                <!-- <img :src="fab.img" style="height: 100px; width: 100px;"> -->
                <img src="http://dillisix.com/storage/55/Amit.jpeg" style="height: 100px; width: 100px;">
                <div class="">
                    <div class="">
                        <p class="mb-0"> <b>Name : </b>{{ fab.name }}</p>
                        <p class="mb-0"> <b>Business Name : </b>{{ fab.business_name }}</p>
                        <p class="mb-0"> <b>Email : </b>{{ fab.email }}</p>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between w-100">
                <div class="w-100">
                    <RouterLink :to="'/SupplierEdit/' + fab.sid">
                        <button type="button" class="btn btn-primary rounded-0 " style="width: 100%;"><i
                                class="bi bi-telephone me-2 "></i>Call</button>
                    </RouterLink>
                </div>
                <div class="w-100">

                    <RouterLink :to="'/SupplierEdit/' + fab.sid">
                        <button type="button" class="btn btn-primary rounded-0 " style="width: 100%;"><i
                                class="bi bi-whatsapp me-2 "></i>Message</button>
                    </RouterLink>
                </div>
                <div class="w-100">

                    <RouterLink :to="'/SupplierEdit/' + fab.sid">
                        <button type="button" class="btn btn-primary rounded-0 " style="width: 100%;"><i
                                class="bi bi-shield-check me-2 "></i>Edit</button>
                    </RouterLink>
                </div>
            </div>
        </div>


        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form @submit.prevent="submitForm()">
                    <ImageUploadBox @image="image"></ImageUploadBox>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="assignee" placeholder="name@example.com"
                            v-model="form.name">
                        <label for="assignee">First Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="name" placeholder="name@example.com"
                            v-model="form.business_name">
                        <label for="name">Business Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="contact" placeholder="name@example.com"
                            v-model="form.email">
                        <label for="contact">Email</label>
                    </div>
                    <!--  <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="name@example.com"
                            v-model="form.email">
                        <label for="email">Email Id</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" placeholder="name@example.com"
                            v-model="form.password">
                        <label for="password">Password</label>
                    </div> -->

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>


    </div>
</template>

<script>
import ImageUploadBox from '@/components/imageBox/ImageUploadBox.vue'
import FabFilter from '@/components/Filter/FabFilter.vue';

export default {
    components: { ImageUploadBox, FabFilter },
    data() {
        return {
            form: {
                name: '',
                business_name: '',
                // contact: '',
                // email: '',
                // password: '',
                // role: '',
                // status: '',
                // parentImageUrl: '',
            }
        };
    },
    computed: {
        suppliers() {
            return this.$store.getters.getSuppliers;
        },
    },
    mounted() {
        this.$store.dispatch('fetchSuppliers')
    },
    methods: {
        submitForm() {
            this.$store.dispatch('addToSupplier', this.form)
            this.form = {
                name: '',
                business_name: '',
                // contact: '',
                // email: '',
                // password: '',
            };

        },
        image(value) {
            console.log(value)
            this.form.parentImageUrl = value
        }
    },
}
</script>

<style lang="scss" scoped></style>