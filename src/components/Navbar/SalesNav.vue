<template>
    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
        class="btn btn-primary my-3 rounded-circle ">
        <i class="bi bi-plus-lg fs-4"></i>
    </button>


    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header d-flex justify-content-center align-items-center">
            <button class=" rounded-circle btn btn-danger position-absolute start-50 translate-middle-x" style="top: -23px;"
                data-bs-dismiss="offcanvas">
                <i class="bi bi-x-lg fs-4"></i>
            </button>
        </div>
        <div class="offcanvas-body small">
            <div class="row row-cols-2 text-center">
                <div class="col border d-flex justify-content-center align-items-center">
                    <router-link to="/SalesOrder" class="text-decoration-none text-dark" exact-active-class="active-link">
                        <span class="fs-5 p-2">New Order</span>
                    </router-link>
                </div>
            <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/ProcessingPage" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">Processing</span>
                </router-link>
            </div>
            <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/DispatchPage" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">Dispatch</span>
                </router-link>
            </div>
            <div class="col border d-flex justify-content-center align-items-center">
                <router-link to="/InTransit" class="text-decoration-none text-dark" exact-active-class="active-link">
                    <span class="fs-5 p-2">InTransit</span>
                </router-link>
            </div>
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
  