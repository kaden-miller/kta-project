<template>
  <section id="services" class="service-cards-section py-20 px-10 relative">
    <div class="container">
      <h2 class="section-headline text-4xl text-center text-accent pb-20">
        <b>What We Do</b><br />
        For Your <UnderlineText text="Business" :underlineLength="6" underlineHeight="10px" />
      </h2>
      <div class="cards-grid gap-8 grid grid-cols-4">
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
      class="bg-secondary-light absolute w-9/10 h-full left-0 top-0 -z-10 rounded-tr-[400px]"
    ></div>
    <div class="absolute right-0 -bottom-20 -z-20 rounded-tr-[400px]">
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
