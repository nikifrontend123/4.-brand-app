<template>
    <div>
        <div class="d-flex justify-content-center">
            <div class=''>
                <div class="d-flex justify-content-center ">
                    <img class="rounded-circle border" src="http://dillisix.com/storage/55/Amit.jpeg"
                        style="height: 100px; width: 100px;">
                </div>
                <div class="d-flex flex-column justify-content-center  text-center">
                    <h3 class="mt-2">Ironman</h3>
                    <h3 class="">#458729</h3>
                </div>


            </div>
        </div>
        <div :class="['w-100', { 'sticky': isNavSticky }]" id="sticky-nav">
            <div class="nav nav-tabs w-100" id="nav-tab" role="tablist">
                <button class="nav-link active w-50" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">Profile</button>
                <button class="nav-link w-50" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Overview</button>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class="container">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <table class="table table-bordered">
                            <tbody v-for="(data, index) in datas" :key="index" class="mb-3">
                                <tr>
                                    <td><b>{{ data.label }}</b></td>
                                    <td> {{ data.input }} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <p class="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt ex,
                            ipsam obcaecati
                            cumque ab recusandae distinctio, iste minus sit commodi impedit quod quaerat ullam sunt dolor.
                            Inventore distinctio laudantium alias. Magni, culpa nemo error eum libero laboriosam quam
                            praesentium.</p>
                        <p class="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt ex,
                            ipsam obcaecati
                            cumque ab recusandae distinctio, iste minus sit commodi impedit quod quaerat ullam sunt dolor.
                            Inventore distinctio laudantium alias. Magni, culpa nemo error eum libero laboriosam quam
                            praesentium.</p>
                        <p class="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt ex,
                            ipsam obcaecati
                            cumque ab recusandae distinctio, iste minus sit commodi impedit quod quaerat ullam sunt dolor.
                            Inventore distinctio laudantium alias. Magni, culpa nemo error eum libero laboriosam quam
                            praesentium.</p>
                        <p class="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt ex,
                            ipsam obcaecati
                            cumque ab recusandae distinctio, iste minus sit commodi impedit quod quaerat ullam sunt dolor.
                            Inventore distinctio laudantium alias. Magni, culpa nemo error eum libero laboriosam quam
                            praesentium.</p>
                        <p class="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt ex,
                            ipsam obcaecati
                            cumque ab recusandae distinctio, iste minus sit commodi impedit quod quaerat ullam sunt dolor.
                            Inventore distinctio laudantium alias. Magni, culpa nemo error eum libero laboriosam quam
                            praesentium.</p>
                        <p class="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt ex,
                            ipsam obcaecati
                            cumque ab recusandae distinctio, iste minus sit commodi impedit quod quaerat ullam sunt dolor.
                            Inventore distinctio laudantium alias. Magni, culpa nemo error eum libero laboriosam quam
                            praesentium.</p>
                        <p class="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt ex,
                            ipsam obcaecati
                            cumque ab recusandae distinctio, iste minus sit commodi impedit quod quaerat ullam sunt dolor.
                            Inventore distinctio laudantium alias. Magni, culpa nemo error eum libero laboriosam quam
                            praesentium.</p>
                        <p class="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt ex,
                            ipsam obcaecati
                            cumque ab recusandae distinctio, iste minus sit commodi impedit quod quaerat ullam sunt dolor.
                            Inventore distinctio laudantium alias. Magni, culpa nemo error eum libero laboriosam quam
                            praesentium.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datas: [
                {
                    id: 1,
                    label: 'Name',
                    input: 'IronMan'
                },
                {
                    id: 2,
                    label: 'Business Name',
                    input: 'Avenger'
                },
                {
                    id: 3,
                    label: 'Mobile No.',
                    input: '8756987852'
                },
                {
                    id: 4,
                    label: 'Email',
                    input: 'ironman777@gmail.com'
                },
                {
                    id: 5,
                    label: 'GST',
                    input: '78954854'
                },
                {
                    id: 4,
                    label: 'PAN',
                    input: 'GIL7895NG'
                },
            ],
            isNavSticky: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() { // Use beforeUnmount instead of beforeDestroy
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Add or remove the "sticky" class based on the scroll position
            if (window.scrollY > 0) {
                this.isNavSticky = true;
            } else {
                this.isNavSticky = false;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.ws-nowarp {
    white-space: nowrap;
}

.nav-tabs {
    --bs-nav-tabs-link-active-color: red;

}

.nav-tabs .nav-link.active {
    border-bottom: 2px solid red;
}

#sticky-nav.sticky {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;
    /* Add a background color if needed */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    /* Add a shadow if needed */
}
</style>