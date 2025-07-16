<template>
  <div
    class="card-item bg-white flex flex-col gap-1 items-start rounded-xl p-6 shadow-lg/5 transition hover:-translate-y-1"
  >
    <div class="card-icon rounded-xl mb-2" :style="{ backgroundColor: iconBgColor }">
      <img :src="icon" :alt="`${title} icon`" class="icon-image" />
    </div>
    <h3 class="card-title uppercase font-bold text-accent">{{ title }}</h3>
    <p class="card-description text-sm">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    icon: {
      type: String,
      default: '',
    },
    iconBgColor: {
      type: String,
      default: 'var(--primary)',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
