import { createRouter, createWebHistory } from 'vue-router';
import AddTask from './views/AddTask.vue';
import TaskList from './views/TaskList.vue';

const routes = [
  { path: '/', component: AddTask },
  { path: '/tasks', component: TaskList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
