<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('toggle-todo', todo.id)"
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
