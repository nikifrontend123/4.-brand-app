<template>
    <div>
        <form @submit.prevent="submitForm()">
            <ImageUploadBox @image="image"></ImageUploadBox>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="assignee" placeholder="name@example.com"
                    v-model="form.assignee_code">
                <label for="assignee">Assignee Code</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="name" placeholder="name@example.com" v-model="form.name">
                <label for="name">Full Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="contact" placeholder="name@example.com" v-model="form.contact">
                <label for="contact">Contact</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="form.email">
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

</template>

<script>
import ImageUploadBox from '@/components/imageBox/ImageUploadBox.vue';

export default {
    name: 'SupplierEditPage',
    components: { ImageUploadBox }
}
</script>

<style lang="scss" scoped></style>