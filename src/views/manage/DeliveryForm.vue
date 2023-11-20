<template> 
    <div class="container">
        <h2>Delivery Form</h2>
        <form @submit.prevent="submitForm">

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.order_id">
                <label for="floatingInput">Order ID</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.mode">
                <label for="floatingInput">Mode</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.type">
                <label for="floatingInput">Type</label>
            </div>


            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.name">
                <label for="floatingInput">Name</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.contact">
                <label for="floatingInput">Contact</label>
            </div>

            <div class="form-floating mb-3">
                <input type="datetime-local" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.datetime">
                <label for="floatingInput">Date And Time</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.note">
                <label for="floatingInput">Note</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.status">
                <label for="floatingInput">Status</label>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    <div class="position-fixed bottom-0 text-center w-100">
            <ManageNav></ManageNav>
        </div>
    </template>

<script> 
import ManageNav from '@/components/Navbar/ManageNav.vue'

export default {
    data() {
        return {
            form: {
                order_id: '',
                type: '',
                mode: '',
                name: '',
                contact: '',
                datetime: '',
                note: '',
                status: '',
            }
        };
    },
    methods: {
        submitForm() {
            this.$store.dispatch('addToDelivery', this.form);
            this.form = {
                order_id: '',
                type: '',
                mode: '',
                name: '',
                contact: '',
                datetime: '',
                note: '',
                status: '',
            };
        },
    },
    components: {  ManageNav }
}
</script>

<style lang="scss" scoped></style>