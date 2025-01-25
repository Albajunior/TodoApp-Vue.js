<template>
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        <li v-for="task in taskStore.tasks" :key="task.id">
          <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
            {{ task.text }}
          </span>
          <button @click="toggleTask(task.id)">✔</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>

   import { useTaskStore } from '../stores/taskStore';
  
  export default {
    setup() {
      const taskStore = useTaskStore();
      const toggleTask = (id) => taskStore.toggleTask(id);
  
      return { taskStore, toggleTask };
    },
  };
  </script>
  