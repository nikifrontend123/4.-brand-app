<template>
    <div style="margin-bottom: 70px;">
        <FabFilter class="border-bottom"></FabFilter>
        <p class="p-2 text-center mb-0 fw-bold bg-light">Issued Po</p>
        <div v-if="Object.keys(issuedJobworks).length" class="">
            <div v-for="(jobwork, index) in issuedJobworks" :key="index">
                <router-link :to="'/PoDetail/' + jobwork.sid" class="text-decoration-none text-dark ">
                    <div class="d-flex p-2 border-bottom">
                        <div v-if="jobwork.colors.length > 0">
                            <img :src="jobwork.colors[0].image"
                                class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                                style="height:60px; width:60px;object-fit: fill;">
                        </div>
                        <div class="d-flex flex-column  justify-content-center">
                            <div class="d-flex ">
                                <span class="fw-bold mx-2">{{ jobwork.jwoi }}</span>
                                <span>|</span>
                                <span class="mx-2">Qty : {{ jobwork.quantity }}</span>
                            </div>
                            <div class="mx-2">
                                {{ jobwork.status }}
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else>
            <p class="text-center bg-light">There is no product listed in the Issued PO.</p>
        </div>
        <p class="p-2 text-center mb-0 fw-bold bg-light">Completed Po</p>
        <div v-if="Object.keys(completedJobworks).length" class="">
            <div v-for="(jobwork, index) in completedJobworks" :key="index">
                <router-link :to="'/PoDetail/' + jobwork.sid" class="text-decoration-none text-dark ">
                    <div class="d-flex p-2 border-bottom">
                        <div v-if="jobwork.colors.length > 0">
                            <img :src="jobwork.colors[0].image"
                                class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                                style="height:60px; width:60px;object-fit: fill;">
                        </div>
                        <div class="d-flex flex-column  justify-content-center">
                            <div class="d-flex ">
                                <span class="fw-bold mx-2">{{ jobwork.jwoi }}</span>
                                <span>|</span>
                                <span class="mx-2">Qty : {{ jobwork.quantity }}</span>
                            </div>
                            <div class="mx-2">
                                {{ jobwork.status }}
                            </div>
                        </div>
                    </div>
                </router-link>
                

            </div>
        </div>

        <div v-else>
            <p class="text-center bg-light">There is no product listed in the Completed PO</p>
        </div>
        <div class="position-fixed bottom-0 text-center w-100">
            <PruchaseNav></PruchaseNav>
        </div>
    </div>
</template>


<script>
import FabFilter from '../../components/Filter/FabFilter.vue';
import PruchaseNav from '../../components/Navbar/PurchaseNav.vue';
import pusherApi from '@/mixing/pusherApi';
export default {
    name: "OrderPage",
    mixins: [pusherApi],
    components: { FabFilter, PruchaseNav },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        filteredJobworks() {
            return this.$store.getters.getjobWorks;
        },
        issuedJobworks() {
            return this.filteredJobworks.filter(jobwork => jobwork.status === 'draft');
        },
        completedJobworks() {
            return this.filteredJobworks.filter(jobwork => jobwork.status === 'issued');
        },
        jobworks() {
            // Sort the jobworks by expected_at in descending order
            return this.$store.getters.getjobWorks.slice().sort((a, b) => {
                const dateA = new Date(a.expected_at);
                const dateB = new Date(b.expected_at);
                return dateB - dateA;
            });
        }
    },
    mounted() {
        this.$store.dispatch('fetchJobWorks')
    },
    created() {
        this.connect('fetchJobWorks')
    }
}
</script>

<style lang="scss" scoped></style>