<template>
  <div class="form-wrapper">
    <div v-if="submitted" class="bg-secondary-light text-accent px-4 py-3 rounded-md">
      <p>
        Thank you for reaching out! We'll review your submission and get back to you as soon as we
        can. In the meantime, you can find more information about our services
        <span class="underline hover:font-bold cursor-pointer" @click="closeModal">here</span>.
      </p>
    </div>

    <form
      v-else
      @submit.prevent="handleSubmit"
      class="flex flex-col lg:flex-row flex-wrap gap-x-2 gap-y-4 lg:gap-y-6"
    >
      <div class="flex-1">
        <label for="fullName" class="block text-sm text-accent mb-1 uppercase">Full Name</label>
        <input
          id="fullName"
          v-model="form.fullName"
          type="text"
          class="w-full px-3 py-2 border rounded-md text-accent focus:outline-none focus:ring-2 focus:ring-accent-light focus:border-accent-light transition-colors"
          :class="{
            'border-red-500 focus:ring-red-500 focus:border-red-500': errors.fullName,
            'border-accent': !errors.fullName,
          }"
        />
        <span v-if="errors.fullName" class="text-red-500 text-sm mt-1 block">{{
          errors.fullName
        }}</span>
      </div>

      <div class="flex-1">
        <label for="email" class="block text-sm text-accent mb-1 uppercase">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full px-3 py-2 border rounded-md text-accent focus:outline-none focus:ring-2 focus:ring-accent-light focus:border-accent-light transition-colors"
          :class="{
            'border-red-500 focus:ring-red-500 focus:border-red-500': errors.email,
            'border-accent': !errors.email,
          }"
        />
        <span v-if="errors.email" class="text-red-500 text-sm mt-1 block">{{ errors.email }}</span>
      </div>

      <div class="w-full">
        <label for="message" class="block text-sm text-accent mb-1 uppercase">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          class="w-full px-3 py-2 border rounded-md text-accent focus:outline-none focus:ring-2 focus:ring-accent-light focus:border-accent-light transition-colors"
          :class="{
            'border-red-500 focus:ring-red-500 focus:border-red-500': errors.message,
            'border-accent': !errors.message,
          }"
          rows="5"
        ></textarea>
        <span v-if="errors.message" class="text-red-500 text-sm mt-1 block">{{
          errors.message
        }}</span>
      </div>

      <Button variant="accent" @click="handleSubmit"> Send </Button>
    </form>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'ContactForm',
  components: {
    Button,
  },
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        message: '',
      },
      errors: {},
      submitted: false,
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      let isValid = true

      if (this.form.fullName === '') {
        this.errors.fullName = 'Please enter your name'
        isValid = false
      }

      if (this.form.email === '') {
        this.errors.email = 'Please enter your email'
        isValid = false
      } else if (!this.form.email.includes('@')) {
        this.errors.email = 'Invalid email'
        isValid = false
      }

      if (this.form.message === '') {
        this.errors.message = 'Please enter a message'
        isValid = false
      }

      return isValid
    },

    handleSubmit() {
      if (this.validateForm()) {
        this.submitted = true
      }
    },
    closeModal() {
      console.log('closeModal clicked')
      this.$emit('close')
    },
  },
}
</script>
