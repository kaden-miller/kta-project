<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/layouts/AppHeader.vue'
import AppFooter from './components/layouts/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <RouterView />

  <AppFooter />
</template>
