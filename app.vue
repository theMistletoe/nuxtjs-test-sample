<template>
  <div>
    <h1>TODOリスト</h1>
    <TodoForm @add-todo="addTodo" />
    <TodoList :todos="todos" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoList from './features/todo/TodoList.vue'
import TodoForm from './features/todo/TodoForm.vue'

const todos = ref([])

const addTodo = (title) => {
  todos.value.push({ id: Date.now(), title, completed: false })
}
</script>
