<template> 
    <div class="container">
        <h2>Payment Form</h2>
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
                    v-model="form.reference_id">
                <label for="floatingInput">Reference Id</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.amount">
                <label for="floatingInput">Amount</label>
            </div>

            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="form.date">
                <label for="floatingInput">Date</label>
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
                mode: '',
                reference_id: '',
                amount: '',
                date: '',
                status: '',
            }
        };
    },
    methods: {
        submitForm() {
            this.$store.dispatch('addToPayment', this.form);
            this.form = {
                order_id: '',
                mode: '',
                reference_id: '',
                amount: '',
                date: '',
                status: '',
            };
        },
    },
    components: { ManageNav  }
}
</script>

<style lang="scss" scoped></style>