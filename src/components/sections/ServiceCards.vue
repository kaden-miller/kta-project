<template>
  <section
    id="services"
    class="service-cards-section py-20 px-6 lg:px-10 relative overflow-hidden lg:overflow-visible"
  >
    <div class="container">
      <h2
        class="section-headline text-2xl md:text-3xl lg:text-4xl text-center text-accent pb-10 lg:pb-20"
      >
        <b>What We Do</b><br />
        For Your <UnderlineText text="Business" :underlineLength="6" underlineHeight="10px" />
      </h2>
      <div class="cards-grid gap-8 grid grid-cols-1 z-10 lg:grid-cols-4">
        <CardItem
          v-for="service in services"
          :key="service.id"
          :icon="service.icon"
          :iconBgColor="service.iconBgColor"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
    <div
      class="bg-secondary-light absolute w-full md:w-9/10 h-full left-0 top-0 -z-20 rounded-tr-[100px] md:rounded-tr-[400px]"
    ></div>
    <div class="absolute -right-60 -bottom-20 -z-10 md:-z-30 md:right-0">
      <img src="/images/ellipse.svg" />
    </div>
  </section>
</template>

<script>
import CardItem from '../ui/CardItem.vue'
import ComputerIcon from '../icons/computer-icon.svg'
import MobilePhoneIcon from '../icons/mobile-phone-icon.svg'
import RocketIcon from '../icons/rocket-icon.svg'
import WebsiteIcon from '../icons/website-icon.svg'
import UnderlineText from '../ui/UnderlineText.vue'

export default {
  name: 'ServiceCards',
  components: {
    CardItem,
    UnderlineText,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          icon: WebsiteIcon,
          iconBgColor: 'var(--neutral)',
          title: 'Website Design',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          id: 2,
          icon: ComputerIcon,
          iconBgColor: 'var(--primary-light)',
          title: 'Web Development',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          id: 3,
          icon: MobilePhoneIcon,
          iconBgColor: 'var(--secondary)',
          title: 'Mobile APP Development',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          id: 4,
          icon: RocketIcon,
          iconBgColor: 'var(--neutral-light)',
          title: 'Marketing',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    }
  },
}
</script>
