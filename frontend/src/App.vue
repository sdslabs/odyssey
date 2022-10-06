<template>
  <div id="app">
    <Tasks />
    <Usercard username='Perseus-Jackson477'/> <!--  Enter username here -->
  </div>
</template>

<script>
import Tasks from './components/Tasks.vue';
import Usercard from './components/usercard.vue';

export default {
  name: 'App',
  components: {
    Tasks,
    Usercard
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
