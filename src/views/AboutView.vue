<script setup>
import AboutHero from '@/components/sections/AboutHero.vue'
</script>

<template>
  <div class="about-view">
    <AboutHero />
  </div>
</template>

<script>
import AboutHero from '@/components/sections/AboutHero.vue'

export default {
  name: 'AboutView',
  components: {
    AboutHero,
  },
}
</script>
