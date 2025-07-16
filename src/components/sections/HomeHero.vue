<template>
  <section class="hero-section pt-90 lg:pt-50 pb-20 lg:pb-40 px-6 lg:px-10 relative">
    <div class="hero-container grid grid-cols-1 lg:grid-cols-5 items-center justify-start">
      <div class="hero-content lg:col-span-2 flex flex-col items-start gap-6 lg:pr-4">
        <h1 class="hero-headline text-3xl md:text-4xl lg:text-6xl text-accent">
          <b>We Help you</b><br />
          to grow your <UnderlineText text="Business" underline-height="18px" />
        </h1>
        <p class="hero-intro text-lg lg:pr-4">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <BaseButton variant="accent" @click="$emit('cta-clicked')"> Get Started </BaseButton>
      </div>
      <div class="hero-image absolute -top-2 right-0 w-80 lg:w-1/2">
        <img
          src="/images/home-header-graphics.webp"
          alt="Two smiling men looking impressed with this applicants project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'
import UnderlineText from '../ui/UnderlineText.vue'

export default {
  name: 'HomeHero',
  emits: ['cta-clicked'],
  components: {
    BaseButton,
    UnderlineText,
  },
}
</script>
