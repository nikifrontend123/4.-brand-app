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
      const hiddenPages = ['ProfilePage', 'CatalogDetailPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'LoginPage', 'OTPPage', 'RegistrationPage', 'ResetPasswordPage'];
      return hiddenPages.includes(this.$route.name);
    },
  },
}

</script>
