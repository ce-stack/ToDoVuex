<template>
  <div id="app">
    <div class="container">
          <add-todo />
          <filter-todo />
      <todos />
  
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import FilterTodo from './components/FilterTodo.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'Apps',
  components: {
    Todos,
    AddTodo,
    FilterTodo
  }
}
</script>

<style>

</style>
