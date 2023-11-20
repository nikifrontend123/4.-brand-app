<template>
    
        <div class="mt-3">
            <div class="d-flex align-items-center">
                <div class="border p-2 py-3 ps-4 rounded-top  text-white w-100" style="background-color: #F48B29 ;"
                    data-bs-toggle="collapse" data-bs-target="#collapseExampleNew" aria-expanded="false"
                    aria-controls="collapseExampleNew">
                    Transaction
                </div>
            </div>
            <div class="collapse show bg-white p-2" id="collapseExampleNew">
                <div v-for="(ss, index) in purchase.message" :key="index" :class="ss.type">
                    <div class="message mt-3 mb-2 d-flex flex-column"
                        style="width: calc(100% - 40px) !important; margin-left:auto; margin-right: 0;">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-person fs-4 border rounded-circle me-2"
                                style="padding: 5px 10px !important;"></i>
                            <div class="message-content border w-100"
                                style="background-color: #F48B29;word-wrap: break-word; padding: 10px !important; border-radius: 8px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 0px !important; color: white;">
                                <p class="m0">
                                    <strong>{{ ss.title }}</strong>: {{ ss.body }}
                                </p>
                            </div>
                        </div>
                        <div class="text-end text-muted" style="font-size: 10px;">{{ ss.time }}</div>
                    </div>
                </div>

            </div>
        </div>
        <div class="border bg-white">
            <div class="container pb-2 ">
                <div class="form-check border-bottom py-2 " v-for="(action_name, index) in inputList" :key="index">
                    <div class="d-flex align-items-center ">
                        <input class="form-check-input" :ID="'radio' + index" type="radio" :value="action_name"
                            v-model="actionName">
                        <label class="form-check-label w-100" :for="'radio' + index">
                            <span><i :class="action_name.icon" class="fs-4 mx-3"></i></span>
                            <span class="text-capitalize">{{ action_name.title }}</span>
                        </label>
                    </div>
                </div>

                <div class=" d-flex bg-light p-2 align-items-center">
                    <input v-model="body" type="text" class="form-control" placeholder="Type your message..." />
                    <div @click="sendMessage" class="ms-2 "><i class="bi bi-telegram fs-1   p-3"
                            style="color: #F48B29;"></i>
                    </div>
                </div>
            </div>
        </div>
    
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            inputList: [
                {
                    title: 'Sending Request',
                    icon: 'bi bi-envelope'
                },
                {
                    title: 'Received Quantity',
                    icon: 'bi bi-check2-all'
                },
                {
                    title: 'Chat Message',
                    icon: 'bi bi-chat-dots'
                },
            ],
            messages: [],
        }
    },
    
    methods: {
        sendMessage() {
            if (this.body.trim() !== '') {
                const message = {
                    body: this.body,
                    title: this.actionName.title,
                };

                this.messages.push(message);

                this.actionName = '';
                this.body = '';

                let purchaseId = this.$route.params.sid
                axios.put('http://192.168.1.133:8001/api/purchases/' + purchaseId, {
                    message: JSON.stringify(message)
                })
                    .then(response => {
                        console.log('Response from the API:', response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },
    }
}
</script>

<style lang="scss" scoped></style>