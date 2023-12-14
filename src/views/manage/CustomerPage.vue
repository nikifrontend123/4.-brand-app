<template>
    <div class="container">
        <div class="border my-2" v-for="(fab, index) in suppliers" :key="index">
            <div class="d-flex gap-3 my-2">
                <img :src="fab.img" style="height: 100px; width: 100px;">
                <div class="flex-fill">
                    <div class="">
                        <p class="mb-0">{{ fab.name }}</p>
                        <p class="mb-0">Email: {{ fab.email }}</p>
                        <p class="mb-0">Contact: {{ fab.contact }}</p>
                    </div>
                    <div class="d-flex justify-content-end gap-3 px-3 mt-2">
                        <i class="bi bi-pencil btn btn-light"></i>
                        <i class="bi bi-telephone btn btn-light"></i>
                        <i class="bi bi-whatsapp btn btn-light"></i>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-primary rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop">
            Add New Supplier
        </button>

        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form @submit.prevent="submitForm()">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="name" placeholder="name@example.com"
                            v-model="form.name">
                        <label for="name">Full Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="contact" placeholder="name@example.com"
                            v-model="form.contact">
                        <label for="contact">Contact</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="name@example.com"
                            v-model="form.email">
                        <label for="email">Email Id</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" placeholder="name@example.com"
                            v-model="form.password">
                        <label for="password">Password</label>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <div class="position-fixed bottom-0 text-center w-100">
            <ManageNav></ManageNav>
        </div>
    </div>
</template>

<script>
import ManageNav from '@/components/Navbar/ManageNav.vue'
export default {
    data() {
        return {
            form: {
                name: '',
                contact: '',
                email: '',
                password: '',
            }
        };
    },
    computed: {
        suppliers() {
            return this.$store.getters.getSupplier;
        },
    },
    methods: {
        submitForm() {
            this.$store.dispatch('addToCustomer', this.form).then(() => {
                this.form = {
                    name: '',
                    contact: '',
                    email: '',
                    password: '',
                };
            });
        },
    },
    components: { ManageNav }
}
</script>

<style lang="scss" scoped></style>