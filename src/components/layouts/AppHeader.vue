<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300 max-w-[1440px] mx-auto ',
      isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-8',
    ]"
  >
    <div class="header-container flex justify-between items-center px-6 lg:px-10">
      <div class="logo-section">
        <RouterLink to="/" class="logo-link">
          <span class="logo-text font-serif text-xl font-bold text-accent">Dream Agency</span>
        </RouterLink>
      </div>

      <nav class="nav-menu hidden md:flex gap-8">
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

      <button
        @click="toggleMobileMenu"
        class="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
      >
        <span
          :class="[
            'block w-6 h-0.5 bg-accent transition-transform duration-300',
            mobileMenuOpen ? 'rotate-45 translate-y-2' : '',
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 bg-accent transition-opacity duration-300',
            mobileMenuOpen ? 'opacity-0' : 'opacity-100',
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 bg-accent transition-transform duration-300',
            mobileMenuOpen ? '-rotate-45 -translate-y-1' : '',
          ]"
        ></span>
      </button>
    </div>

    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white shadow-lg shadow-accent-light/20 mt-2 border-t-2 border-secondary"
    >
      <nav class="flex flex-col">
        <RouterLink
          to="/"
          @click="closeMobileMenu"
          class="mobile-nav-link px-6 py-3 text-accent hover:bg-secondary-light transition"
          active-class="font-bold bg-secondary-light"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          @click="closeMobileMenu"
          class="mobile-nav-link px-6 py-3 text-accent hover:bg-secondary-light transition"
          active-class="font-bold bg-secondary-light"
        >
          About
        </RouterLink>
        <RouterLink
          to="/"
          @click="closeMobileMenu"
          class="mobile-nav-link px-6 py-3 text-accent hover:bg-secondary-light transition"
        >
          Services
        </RouterLink>
        <button
          @click="openModalAndCloseMenu"
          class="mobile-nav-link px-6 py-3 text-accent hover:bg-secondary-light transition text-left"
        >
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
      mobileMenuOpen: false,
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    openModal() {
      this.$emit('open-contact-modal')
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    },
    openModalAndCloseMenu() {
      this.openModal()
      this.closeMobileMenu()
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

.mobile-nav-link::after {
  display: none;
}
</style>
