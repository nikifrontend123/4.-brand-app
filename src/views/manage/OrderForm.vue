<template> 
  <div class="container">
    <h2>Order Form</h2>
    <form @submit.prevent="submitForm">

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
          v-model="form.billing_address_id">
        <label for="floatingInput">Billing Address ID</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
          v-model="form.payment_mode">
        <label for="floatingInput">Payment Mode</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="form.status">
        <label for="floatingInput">Status</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
          v-model="form.color_size_id">
        <label for="floatingInput">Color Size Id</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
          v-model="form.quantity">
        <label for="floatingInput">Quantity</label>
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
                billing_address_id: '',
                payment_mode: '',
                status: '',
                color_size_id: '',
                quantity: ''
            }
        };
    },
    methods: {
        submitForm() {
            this.$store.dispatch('addToOrder', this.form);
            this.form = {
                billing_address_id: '',
                payment_mode: '',
                status: '',
                color_size_id: '',
                quantity: '',
            };
        },
    },
    components: {  ManageNav }
};
</script>
 
