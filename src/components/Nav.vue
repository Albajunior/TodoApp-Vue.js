<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Accueil</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
    
          <li class="nav-item">
            <router-link to="/addtask" class="nav-link" active-class="active">
              Ajouter une tâche
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tasks" class="nav-link" active-class="active">
              Liste des tâches
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" active-class="active">
              Contact
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
// export default {
//   name: 'Navbar',
// };

export default {
  name: 'Navbar',
  setup () {
    
      const message = ref('Bonjour Vue.js 3!');

return { message };}
  
 }

</script>

<style scoped>
nav {
  margin-bottom: 20px;
}
.navbar-brand {
  font-weight: bold;
  font-size: 1.25rem;
}
</style>

