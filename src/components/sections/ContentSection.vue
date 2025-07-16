<template>
  <section class="content-section py-20 px-6 lg:px-10">
    <div class="content-container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
      <div class="content-image">
        <img :src="imageSrc" :alt="imageAlt" />
      </div>
      <div class="content-text px-0 lg:px-8 flex flex-col gap-6 items-start">
        <h2 class="content-headline text-2xl md:text-3xl lg:text-4xl text-accent tracking-tight">
          <slot name="headline"></slot>
        </h2>

        <!-- To handle multiple paragraphs, if it's an array of different paragraph lines we'll use this to display the content -->
        <div v-if="Array.isArray(intro)" class="flex flex-col gap-4">
          <p v-for="(paragraph, index) in intro" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <!-- And if its just a single string just display the single row -->
        <p v-else>
          {{ intro }}
        </p>
        <Button variant="accent" @click="handleCTAClick">
          {{ ctaText }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../ui/Button.vue'

export default {
  name: 'ContentSection',
  components: {
    Button,
  },
  props: {
    headline: {
      type: String,
      default: '',
    },
    intro: {
      type: [String, Array],
      default: '',
    },
    ctaText: {
      type: String,
      default: '',
    },
    imageSrc: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleCTAClick() {
      this.$emit('cta-clicked')
    },
  },
}
</script>
