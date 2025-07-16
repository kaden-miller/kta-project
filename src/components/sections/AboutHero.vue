<template>
  <section class="hero-section pt-40 lg:pt-50 pb-20 lg:pb-40 px-6 lg:px-10 relative">
    <div class="hero-container">
      <div class="hero-content col-span-2 flex flex-col items-start gap-6 lg:pr-4">
        <h1 class="hero-headline text-3xl md:text-4xl lg:text-6xl text-accent w-40 lg:w-80">
          <b><UnderlineText text="About Us" :underlineLength="6" underlineHeight="18px" /></b>
          our dream story
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
        <p>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
          dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
          facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <p>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
          nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi.
        </p>
      </div>
      <div class="hero-image absolute -top-2 right-0 max-w-60 md:max-w-full">
        <img src="/images/page-header-graphic.svg" />
      </div>
    </div>
  </section>
</template>

<script>
import UnderlineText from '../ui/UnderlineText.vue'

export default {
  name: 'HomeHero',
  components: {
    UnderlineText,
  },
}
</script>
