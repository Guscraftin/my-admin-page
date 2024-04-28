<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template> -->

<template>
    <AdminPage/>
</template>

// TODO: (Home page) / = HelloWorld, /admin = AdminPage

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AdminPage from './views/AdminPage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    AdminPage
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
