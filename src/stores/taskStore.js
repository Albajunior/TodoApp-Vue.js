import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(taskText) {
      this.tasks.push({
        id: Date.now(),
        text: taskText,
        completed: false,
      });
    },
    toggleTask(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.completed = !task.completed;
    },
  },
});
