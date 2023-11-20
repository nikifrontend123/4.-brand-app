<template>
    <div>
        <div class="d-flex justify-content-between px-2 py-1 border" style="background-color: #F48B29;">
            <i @click="goBack()"
                class=" fs-5 bi bi-chevron-left d-flex justify-content-center align-items-center text-white"></i>
            <div class="right" style="font-weight: 500;">
                <p class="m-0 py-2 ps-2 text-white">Brand App</p>
            </div>
            <div class="left d-flex align-items-center">
                <i class="bi bi-list fs-5 text-white" type="button" @click="toggleOffcanvas"></i>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" :class="{ 'show': isOffcanvasOpen }">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Menu</h5>
                    <button type="button" class="btn-close" @click="closeOffcanvas"></button>
                </div>
                <div class="offcanvas-body p-0">

                    <RouterLink to="/" class="text-decoration-none text-dark">
                        <div class="d-flex border-bottom my-2 p-2 fs-4">
                            <i class="bi bi-speedometer me-2"></i>
                            <span>Dashboard</span>
                        </div>
                    </RouterLink>
                    <RouterLink to="/Catalog" class="text-decoration-none text-dark">
                        <div class="d-flex border-bottom my-2 p-2 fs-4">
                            <i class="bi bi-layers me-2"></i>
                            <span>Store</span>
                        </div>
                    </RouterLink>
                    <RouterLink to="/PoPage" class="text-decoration-none text-dark">
                        <div class="d-flex border-bottom my-2 p-2 fs-4">
                            <i class="bi bi-journal-arrow-up me-2"></i>
                            <span>PO + Purchased</span>
                        </div>
                    </RouterLink>
                    <!-- <RouterLink to="/PurchasePage" class="text-decoration-none text-dark">
                        <div class="d-flex border-bottom my-2 p-2 fs-4">
                            <i class="bi bi-journal-arrow-down me-2"></i>
                            <span>Purchase</span>
                        </div>
                    </RouterLink> -->
                     <RouterLink to="/SalesOrder" class="text-decoration-none text-dark">
                        <div class="d-flex border-bottom my-2 p-2 fs-4">
                            <i class="bi bi-send me-2"></i>
                            <span>Sales</span>
                        </div>
                    </RouterLink>
                    <RouterLink to="/SupplierForm" class="text-decoration-none text-dark">
                        <div class="d-flex border-bottom my-2 p-2 fs-4">
                            <i class="bi bi-speedometer me-2"></i>
                            <span>Manage</span>
                        </div>
                    </RouterLink>
                    <!--<RouterLink to="/ProfilePage" class="text-decoration-none text-dark">
                        <div class="d-flex border-bottom my-2 p-2 fs-4">
                            <i class="bi bi-person me-2"></i>
                            <span>Profile</span>
                        </div>
                    </RouterLink> -->
                    <RouterLink to="/SupplierPage" class="text-decoration-none text-dark">
                        <div class="d-flex border-bottom my-2 p-2 fs-4">
                            <i class="bi bi-person me-2"></i>
                            <span>Supplier</span>
                        </div>
                    </RouterLink>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    data() {
        return {
            isOffcanvasOpen: false,
        };
    },
    methods: {
        toggleOffcanvas() {
            this.isOffcanvasOpen = !this.isOffcanvasOpen;
        },
        closeOffcanvas() {
            this.isOffcanvasOpen = false;
        },
        goBack() {
            window.history.back()
        }
    },
    created() {
        this.$router.afterEach(() => {
            this.closeOffcanvas();
        });
    },
}
</script>

<style lang="scss" scoped></style>