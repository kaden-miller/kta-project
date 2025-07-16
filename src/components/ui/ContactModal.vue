<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/20" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-8 text-left align-middle shadow-xl transition relative"
            >
              <button
                type="button"
                @click="closeModal"
                class="absolute top-4 right-4 text-accent-light hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light rounded-full p-2 transition-colors"
                aria-label="Close modal"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <DialogTitle as="h3" class="text-lg font-bold leading-6 text-accent uppercase pb-4">
                Get In Touch
              </DialogTitle>

              <ContactForm @close="closeModal" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog as HeadlessDialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import ContactForm from './ContactForm.vue'

export default {
  name: 'ContactModal',
  components: {
    TransitionRoot,
    TransitionChild,
    HeadlessDialog,
    DialogPanel,
    DialogTitle,
    ContactForm,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>
