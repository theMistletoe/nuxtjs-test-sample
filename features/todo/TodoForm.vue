<template>
  <form @submit.prevent="submitForm" class="todo-form">
    <input v-model="title" type="text" placeholder="新しいTODOを入力" required class="todo-input">
    <button type="submit" class="todo-button">追加</button>
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

<style scoped>
.todo-form {
  display: flex;
  margin-bottom: 20px;
}

.todo-input {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
}

.todo-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.todo-button:hover {
  background-color: #45a049;
}

@media (max-width: 600px) {
  .todo-form {
    flex-direction: column;
  }
  
  .todo-input {
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .todo-button {
    border-radius: 5px;
  }
}
</style>
