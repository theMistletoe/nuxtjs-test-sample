<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id" class="todo-item">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('toggle-todo', todo.id)"
        class="todo-checkbox"
      >
      <span :class="{ 'completed': todo.completed }">{{ todo.title }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps(['todos'])
defineEmits(['toggle-todo'])
</script>

<style scoped>
.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.todo-item:hover {
  background-color: #f0f0f0;
}

.todo-checkbox {
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

@media (max-width: 600px) {
  .todo-item {
    padding: 8px;
  }
}
</style>
