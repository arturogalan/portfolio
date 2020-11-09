<template>
  <a
    href="#"
    class="text-default hover:text-gray-600"
    title="Toggle theme between light and dark"
    aria-label="Toggle theme between light and dark"
    @click.prevent="toggleTheme"
  >
    <font-awesome
      v-if="theme === 'theme-light'"
      size="lg"
      :icon="['fas', 'moon']"
    />
    <font-awesome
      v-else
      size="lg"
      :icon="['fas', 'sun']"
    />
  </a>
</template>

<script>

export default {
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleTheme () {
      const newTheme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      this.$emit('theme-changed', newTheme)
    }
  }
}
</script>
