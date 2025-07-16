<template>
  <section class="prefooter-section bg-accent px-10 pt-9 pb-8 text-white rounded-tr-[128px]">
    <div class="prefooter-container grid grid-cols-5 gap-9">
      <div class="prefooter-left col-span-2">
        <div class="logo-section pb-4">
          <span class="logo-text font-serif text-2xl font-bold">Dream Agency</span>
        </div>
        <p class="prefooter-text pr-4">
          {{ leftText || 'This is a great section to set up to be reused on other pages.' }}
        </p>
      </div>
      <div class="prefooter-right col-span-3 flex flex-col gap-4 justify-end items-start">
        <h3 class="prefooter-cta-headline text-white uppercase font-bold text-lg">
          {{ rightHeadline || 'Right CTA headline that goes above button.' }}
        </h3>
        <Button variant="primary" @click="handleCTAClick">
          {{ ctaText || 'CTA button text we can adjust on other pages.' }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../ui/Button.vue'
export default {
  name: 'PreFooter',
  components: {
    Button,
  },
  props: {
    leftText: {
      type: String,
      default: '',
    },
    rightHeadline: {
      type: String,
      default: '',
    },
    ctaText: {
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
