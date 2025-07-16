<script>
import { RouterView } from 'vue-router'
import AppHeader from './components/layouts/AppHeader.vue'
import AppFooter from './components/layouts/AppFooter.vue'
import ContactModal from './components/ui/ContactModal.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    AppHeader,
    AppFooter,
    ContactModal,
  },
  data() {
    return {
      isContactModalOpen: false,
    }
  },
  methods: {
    openContactModal() {
      this.isContactModalOpen = true
    },
    closeContactModal() {
      this.isContactModalOpen = false
    },
  },
}
</script>

<template>
  <AppHeader @open-contact-modal="openContactModal" />

  <RouterView @open-contact-modal="openContactModal" />

  <AppFooter @open-contact-modal="openContactModal" />

  <ContactModal :isOpen="isContactModalOpen" @close="closeContactModal" />
</template>
