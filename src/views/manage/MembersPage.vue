<template>
    <div class="container">
        <h2>Member Details</h2>

        <div class="border my-2" v-for="(mem, index) in members" :key="index">
            <div class="d-flex gap-3 my-2">
                <img :src="`${publicPath}${mem.imgu}`" style="height: 150px; width: 150px;">
                <div class="">
                    <div class="">
                        <p>{{ mem.name }}</p>
                        <p>Role: {{ mem.role }}</p>
                        <p>Department: {{ mem.dept }}</p>
                        <p>Post: {{ mem.post }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-primary rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop">
            Add New Member
        </button>

        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">Members</h5>
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
                        <input type="text" class="form-control" id="dept" placeholder="name@example.com"
                            v-model="form.dept">
                        <label for="dept">Department</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="post" placeholder="name@example.com"
                            v-model="form.post">
                        <label for="post">Post</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="role" placeholder="name@example.com"
                            v-model="form.role">
                        <label for="role">Role</label>
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
            publicPath: process.env.BASE_URL,
            form: {
                name: '',
                role: '',
                dept: '',
                post: '',
            }
        };
    },
    computed: {
        members() {
            return this.$store.getters.getMembers;
        },
    },
    methods: {
        submitForm() {
            this.$store.dispatch('addToMembers', this.form).then(() => {
                this.form = {
                    name: '',
                    role: '',
                    dept: '',
                    post: '',
                };
            });
        },
    },
    components: {ManageNav}
}
</script>

<style lang="scss" scoped></style>