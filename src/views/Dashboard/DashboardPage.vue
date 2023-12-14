<template>
    <div>
        <section class="py-4">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-md-6 col-lg-6">
                        <div class="text-start">
                            <p class="m-0">Welcome</p>
                            <h2>Dheeraj Sardar</h2>
                        </div>
                    </div>
                    <div class="col-6 col-md-6 col-lg-6">
                        <div class="text-end">
                            <p class="m-0">Admin</p>
                            <p class="m-0">Last Session</p>
                            <p class="m-0">2 weeks ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row w-100">
                    <div v-for="(data,index) in datas" :key="index" class="col-md-3 col-lg-2  p-2 m-2 border-start border-warning border-4"
                        style="background-color: rgba(255, 179, 0, 0.3);">
                        <div class="div-box ">
                            <h2>{{ data.num }}</h2>
                            <p>{{ data.txt }}</p>
                        </div>
                    </div>
                </div>
                <p>Post Production Summary</p>
                <div class="row w-100">
                    <div v-for="(datapp,index) in datapps" :key="index" class="col-md-3 col-lg-2 p-2 m-2 border-start border-success border-4"
                        style="background-color: rgba(16, 105, 36, 0.3);">
                        <div class="div-box ">
                            <h2>{{ datapp.num }}</h2>
                            <p>{{ datapp.txt }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section21" class="py-5">
            <div class="container">
                <div class="text-center fs-5 fw-bold">
                    <p>Fabricator's Birdview cards</p>
                </div>
                <div class="row">
                    <div v-for="(card,index) in cards" :key="index" class="col-md-3 col-lg-3 col-6 p-2">
                        <div class="card p-2">
                            <div class="txt text-center">
                                <p class="m-0 fw-semibold">{{ card.name }}</p>
                                <p style="font-size: 13px;">Alloted <span class="text-success">{{ card.allot }}</span>
                                    Catelogs</p>
                            </div>
                            <div class="img d-flex justify-content-center">
                                <img :src="`${publicPath}${card.img}`" width="100" alt="" style="border-radius: 100px;">
                            </div>
                            <div class="txt d-flex justify-content-between  ">
                                <p class=" txttxt m-0 ">Active Order</p>
                                <p class=" txttxt m-0 text-danger">{{ card.num }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="section12" class="pb-5">
            <div class="container">
                <div class="text-center fs-5 fw-bold">
                    <p>Order Stagewise Summary</p>
                </div>
                <div class="row">
                    <div class="col-md-4 col-lg-4">
                        <div class="card p-2"> 
                                <div v-for="(data, index) in datass" :key="index" class="p-2 border-bottom">
                                    <div class="row">
                                        <div class="col-md-2 col-lg-2 col-2">
                                            <i class="bi bi-arrow-down-circle-fill fs-5"></i>
                                        </div>
                                        <div class="col-md-8 col-lg-8 col-8">
                                            <p class="m-0">{{data.text}}</p>
                                        </div>
                                        <div class="col-md-2 col-lg-2 col-2">
                                            <p class="m-0">{{ data.num }}</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>



export default {
    name:'DashboardPage',
    data(){
        return{
            publicPath: process.env.BASE_URL,
            datass:[
                {
                    text:'Assignee Accepted',
                    num:'0',
                },
                {
                    text:'Manager Accepted',
                    num:'0',
                },
                {
                    text:'Material Accepted',
                    num:'0',
                },
                {
                    text:'Material Arrranged',
                    num:'2',
                },
                {
                    text:'Material Delivered',
                    num:'14',
                },
                {
                    text:'Product Started',
                    num:'0',
                },
                {
                    text:'Order Ready',
                    num:'1',
                },
                {
                    text:'Order Completed',
                    num:'0',
                },
            ]
        }
    },
    
    computed: {
        datas() {
            return this.$store.getters.getDatas;
        },
        datapps() {
            return this.$store.getters.getDatapps;
        },
        cards() {
            return this.$store.getters.getCards;
        },
    }
}
</script>

<style  scoped>
.txttxt {
    cursor: pointer;
    transition: .3s;
}

.txttxt:hover {
    transform: scale(1.1);
}
@media only screen and (max-width: 600px) {
#section12, #section21{
    position: relative; z-index: -1;   
}
#section12{
    padding-bottom: 5em;
}
}
</style>
