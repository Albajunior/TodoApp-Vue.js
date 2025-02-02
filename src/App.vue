<template>
  <div>

    <Navbar />

    <router-view />

   

  </div>
</template>

<script>
import Navbar from './components/Nav.vue';
export default {
  components: { Navbar },
};
</script>


<style>

nav {
  margin-bottom: 20px;
} 
.navbar-brand {
  font-weight: bold;
  font-size: 1.25rem;
}

</style>
