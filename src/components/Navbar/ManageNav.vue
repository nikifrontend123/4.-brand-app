<template>
    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
        class="btn btn-warning my-3 rounded-circle ">
        <i class="bi bi-plus-lg fs-4"></i>
    </button>


    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header d-flex justify-content-center align-items-center">
            <button class="rounded-circle btn btn-danger position-absolute start-50 translate-middle-x" style="top: -23px;"
                data-bs-dismiss="offcanvas">
                <i class="bi bi-x-lg fs-4"></i>
            </button>
        </div>
        <div class="offcanvas-body small">
            <div class="row row-cols-2 text-center">
            <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/SupplierForm" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">Supplier</span>
                </router-link>
            </div>
            <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/CustomerPage" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">Customer</span>
                </router-link>
            </div>
            <!-- <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/DeliveryForm" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">Delivery</span>
                </router-link>
            </div> -->
            <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/FabricatorForm" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">Fabricator</span>
                </router-link>
            </div>
            <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/MembersPage" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">Members</span>
                </router-link>
            </div>
            <!-- <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/OrderForm" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">Order</span>
                </router-link>
            </div> -->
            <!-- <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/PaymentForm" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">Paymnet</span>
                </router-link>
            </div> -->
        </div>
        </div>
    </div>







 
</template>
  
<script>
export default {

}
</script>
  
<style lang="scss" scoped>
.active-link {
    color: #F48B29 !important;
}
</style>
  