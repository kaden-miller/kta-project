<template>
  <section class="hero-section pt-50 pb-40 px-10 relative">
    <div class="hero-container grid grid-cols-5 items-center justify-start">
      <div class="hero-content col-span-2 flex flex-col items-start gap-6 pr-4">
        <h1 class="hero-headline text-6xl text-accent">
          <b>We Help you</b><br />
          to grow your <UnderlineText text="Business" underline-height="18px" />
        </h1>
        <p class="hero-intro text-lg pr-4">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Button variant="accent" @click="$emit('cta-clicked')"> Get Started </Button>
      </div>
      <div class="hero-image absolute -top-2 right-0 w-1/2">
        <img
          src="/images/home-header-graphics.webp"
          alt="Two smiling men looking impressed with this applicants project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../ui/Button.vue'
import UnderlineText from '../ui/UnderlineText.vue'

export default {
  name: 'HomeHero',
  emits: ['cta-clicked'],
  components: {
    Button,
    UnderlineText,
  },
}
</script>
