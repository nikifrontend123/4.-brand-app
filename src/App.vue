<template>
  <TopNav v-if="!hideBottomNav"></TopNav>
  <router-view />
</template>

<script >
import TopNav from './components/Navbar/TopNav.vue';
export default {
  components: {
    TopNav, 
  },
  computed: {
    hideBottomNav() {
      const hiddenPages = ['ProfilePage', 'CatalogDetailPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'LoginPage', 'OTPPage', 'RegistrationPage', 'ResetPasswordPage', 'FirstPage'];
      return hiddenPages.includes(this.$route.name);
    },
  },
}

</script>
<style>
.bill {
  overflow: hidden;
  text-align: center;
}

.bill>span {
  position: relative;
  display: inline-block;
  color: #F48B29;
}

.bill>span:before,
.bill>span:after {
  content: '';
  position: absolute;
  top: 50%;
  border-bottom: 2px solid #F48B29;
  width: 591px;
  margin: 0 20px;
}

.bill>span:before {
  right: 100%;
}

.bill>span:after {
  left: 100%;
}
</style>
