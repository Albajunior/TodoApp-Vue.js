<template>
  <div>
    <nav>
      <router-link to="/">Ajouter une tâche</router-link> |
      <router-link to="/tasks">Liste des tâches</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}
</style>
