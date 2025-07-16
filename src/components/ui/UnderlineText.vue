<template>
  <span class="underline-text-container relative">
    <span class="text-content z-10 relative">{{ text }}</span>
    <span
      class="underline-effect absolute w-full bottom-0.5 left-0 bg-primary"
      :style="underlineStyle"
    ></span>
  </span>
</template>

<script>
export default {
  name: 'UnderlineText',
  props: {
    text: {
      type: String,
      required: true,
    },
    underlineLength: {
      type: Number,
      default: null,
    },
    underlineHeight: {
      type: String,
      default: '7px',
    },
  },
  computed: {
    underlineStyle() {
      const baseStyle = {
        height: this.underlineHeight,
      }

      if (this.underlineLength !== null) {
        const charWidth = 0.6
        const widthEm = this.underlineLength * charWidth
        baseStyle.width = `${widthEm}em`
      }

      return baseStyle
    },
  },
}
</script>
