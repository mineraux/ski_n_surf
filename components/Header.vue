<template>
  <header>
    <h1 class="logo">Ski N Surf</h1>
    <Nav />
  </header>
</template>

<script>
import Nav from './Nav.vue'
export default {
  
  components: {
    Nav
  }
}
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;

  }

  .logo {
    font-weight: 100;
  }
</style>


