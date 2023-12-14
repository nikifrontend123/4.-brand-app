<template>
    <div class="container">
        <div class="border my-2" v-for="(fab, index) in fabricators" :key="index">
            <div class="d-flex gap-3 my-2">
                <img :src="fab.img" style="height: 100px; width: 100px;">
                <div class="">
                    <p class="mb-0">{{ fab.name }}</p>
                    <p class="mb-0">Role: {{ fab.role }}</p>
                    <p class="mb-0">Status: {{ fab.status }}</p>
                </div>
                <div class="flex-fill d-flex flex-column justify-content-between text-end px-3">
                    <i class="bi bi-pencil"></i>
                    <i class="bi bi-telephone"></i>
                    <i class="bi bi-whatsapp"></i>
                </div>
            </div>
        </div>
        <button class="btn btn-primary rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop">
            Add New Fabricator
        </button>

        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">New Fabricator</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form @submit.prevent="submitForm()">
                    <ImageUploadBox @image="image"></ImageUploadBox>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="assignee" placeholder="name@example.com"
                            v-model="form.assignee_code">
                        <label for="assignee">Assignee Code</label>
                    </div>
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
                        <input type="text" class="form-control" id="contact" placeholder="name@example.com"
                            v-model="form.role">
                        <label for="contact">Role</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="contact" placeholder="name@example.com"
                            v-model="form.status">
                        <label for="contact">Status</label>
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
import ImageUploadBox from '@/components/imageBox/ImageUploadBox.vue'

export default {
    data() {
        return {
            form: {
                assignee_code: '',
                name: '',
                contact: '',
                email: '',
                password: '',
                role: '',
                status: '',
                parentImageUrl: '',
            }
        };
    },
    computed: {
        fabricators() {
            return this.$store.getters.getFabricator;
        },
    },
    methods: {
        submitForm() {
            this.$store.dispatch('addToFabricator', this.form).then(() => {
                this.form = {
                    assignee_code: '',
                    name: '',
                    contact: '',
                    email: '',
                    password: '',
                };
            });
        },
        image(value) {
            console.log(value)
            this.form.parentImageUrl = value
        }
    },
    components: { ImageUploadBox, ManageNav }
}
</script>

<style lang="scss" scoped></style>