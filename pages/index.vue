<template>
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainApp',
  components: {
    Main: () => import('../components/Main.vue')
  }
})
</script>
