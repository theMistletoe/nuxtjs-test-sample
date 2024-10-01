<template>
  <div>
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
