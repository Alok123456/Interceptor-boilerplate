<template>
  <div id="app">
    <user-component  />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserComponent from "./components/UserComponent/UserComponent.vue";

@Component({
  components: {
    userComponent:UserComponent
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
