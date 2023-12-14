<template>
    <div>
        <div v-if="showInstallButton" @click="installApp" :class="{ 'install-button': true, 'loading': installing }">
            {{ installing ? 'Installing...' : 'Install App' }}
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showInstallButton: false,
            deferredPrompt: null,
            installing: false,
        };
    },
    mounted() {
        window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
    },
    beforeUnmount() {
        window.removeEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
    },
    methods: {
        handleBeforeInstallPrompt(event) {
            console.log('beforeinstallprompt event received:', event);

            // Prevent the mini-infobar from appearing on mobile
            event.preventDefault();

            // Stash the event so it can be triggered later
            this.deferredPrompt = event;

            // Show the install button or banner
            this.showInstallButton = true;

            console.log('Install button or banner shown.');
        },
        installApp() {
            if (this.deferredPrompt) {
                // Show loading state
                this.installing = true;
                // Show the install prompt
                this.deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                this.deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    } else {
                        console.log('User dismissed the install prompt');
                    }
                    // Reset deferredPrompt and hide loading state
                    this.deferredPrompt = null;
                    this.installing = false;
                    // Hide the install button or banner
                    this.showInstallButton = false;
                });
            }
        },
    },
};
</script>
  
<style scoped>
.install-button {
    cursor: pointer;
    /* Add your styling for the install button */
}

.loading {
    cursor: pointer;
}
</style>
