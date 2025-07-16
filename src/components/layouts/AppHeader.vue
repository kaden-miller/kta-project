<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300 max-w-[1440px] mx-auto ',
      isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-8',
    ]"
  >
    <div class="header-container flex justify-between items-center px-10">
      <div class="logo-section">
        <RouterLink to="/" class="logo-link">
          <span class="logo-text font-serif text-xl font-bold text-accent">Dream Agency</span>
        </RouterLink>
      </div>

      <nav class="nav-menu flex gap-8">
        <RouterLink
          to="/"
          class="nav-link relative text-accent transition"
          active-class="font-bold"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="nav-link relative text-accent transition"
          active-class="font-bold"
        >
          About
        </RouterLink>
        <RouterLink to="/" class="nav-link temp relative text-accent transition">
          Services
        </RouterLink>

        <button @click="openModal" class="nav-link relative text-accent transition cursor-pointer">
          Contact
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  emits: ['open-contact-modal'],
  data() {
    return {
      isScrolled: false,
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    openModal() {
      this.$emit('open-contact-modal')
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 20px;
}

.nav-link:not(.temp).router-link-exact-active::after {
  width: 20px;
}
</style>
