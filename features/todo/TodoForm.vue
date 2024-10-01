<template>
  <form @submit.prevent="submitForm">
    <input v-model="title" type="text" placeholder="新しいTODOを入力" required>
    <button type="submit">追加</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-todo'])
const title = ref('')

const submitForm = () => {
  emit('add-todo', title.value)
  title.value = ''
}
</script>
