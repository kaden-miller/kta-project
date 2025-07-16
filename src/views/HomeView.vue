<template>
  <div class="home-view">
    <HomeHero @cta-clicked="handleHeroCTA" />

    <ServiceCards />

    <ContentSection
      imageSrc="/images/about-graphics.webp"
      imageAlt="A group of 4 smiling people discussing hiring a great candidate"
      headline="<b>About Us</b><br> Fake or Real"
      :intro="[
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      ]"
      ctaText="Explore More"
      @cta-clicked="handleContentCTA"
    />

    <PreFooter
      leftText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
      rightHeadline="Get In Touch"
      ctaText="Request More Information"
      @cta-clicked="handlePreFooterCTA"
    />
  </div>
</template>

<script>
import HomeHero from '@/components/sections/HomeHero.vue'
import ServiceCards from '@/components/sections/ServiceCards.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import PreFooter from '@/components/sections/PreFooter.vue'

export default {
  name: 'HomeView',
  emits: ['open-contact-modal'],
  components: {
    HomeHero,
    ServiceCards,
    ContentSection,
    PreFooter,
  },
  methods: {
    handleHeroCTA() {
      this.$emit('open-contact-modal')
    },

    handleContentCTA() {
      this.$router.push('/about')
    },

    handlePreFooterCTA() {
      this.$emit('open-contact-modal')
    },
  },
}
</script>
