import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue';
import AddTask from './views/AddTask.vue';
import TaskList from './views/TaskList.vue';
import Contact from './views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/addtask', component: AddTask },
  { path: '/tasks', component: TaskList },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
