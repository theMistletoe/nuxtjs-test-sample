<template>
  <div class="todo-app">
    <h1>TODOリスト</h1>
    <TodoForm @add-todo="addTodo" />
    <TodoList :todos="todos" @toggle-todo="toggleTodo" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'

const todos = ref([])

const addTodo = (title) => {
  todos.value.push({ id: Date.now(), title, completed: false })
}

const toggleTodo = (id) => {
  const todo = todos.value.find(todo => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}
</script>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

@media (max-width: 600px) {
  .todo-app {
    padding: 10px;
  }
  
  h1 {
    font-size: 24px;
  }
}
</style>
