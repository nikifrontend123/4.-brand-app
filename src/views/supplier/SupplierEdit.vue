<template>
    <div class="container">
        <h1>Edit Supplier</h1>
        <form @submit.prevent="updateSupplier">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="editName" :value="supplier.name">
                <label for="editName">Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="editBusinessName" :value="supplier.business_name">
                <label for="editBusinessName">Business Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="editEmail" :value="supplier.email">
                <label for="editEmail">Email</label>
            </div>
            <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            editedSupplier: {
                name: '',
                business_name: '',
                email: '',
             },
        };
    },
    computed: {
        supplier() {
            let sId = this.$route.params.sId;
            return this.$store.getters.getSupplier(sId)
        }

    },
     
};
</script>
  