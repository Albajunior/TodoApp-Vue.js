<template>
    <div>
      <h1>Ajouter une Tâche</h1>
      <input v-model="newTask" placeholder="Nouvelle tâche" />
      <button @click="addTask">Ajouter</button>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/taskStore';

  export default {
    setup() {
      const taskStore = useTaskStore();
      const newTask = ref('');
  
      const addTask = () => {
        if (newTask.value.trim()) {
          taskStore.addTask(newTask.value);
          newTask.value = '';
        }
      };
  
      return { newTask, addTask };
    },
  };
  </script>
  