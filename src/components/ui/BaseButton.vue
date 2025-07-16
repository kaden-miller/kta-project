<template>
  <button
    :class="buttonClasses"
    class="px-8 py-3 uppercase rounded-lg font-bold cursor-pointer transition hover:-translate-y-1"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'accent'].includes(value),
    },
  },
  computed: {
    buttonClasses() {
      return ['btn', `btn--${this.variant}`]
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>

<style scoped>
/* Button color variants */
.btn--primary {
  background-color: var(--primary);
  color: var(--accent);
}

.btn--primary:hover {
  background-color: var(--primary-light);
}

.btn--primary:focus {
  outline: 2px solid var(--primary-light);
  outline-offset: 2px;
}

.btn--accent {
  background-color: var(--accent);
  color: white;
}

.btn--accent:hover {
  background-color: var(--accent-light);
}

.btn--accent:focus {
  outline: 2px solid var(--accent-light);
  outline-offset: 2px;
}
</style>
