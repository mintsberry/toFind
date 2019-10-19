<template>
  <div id="app">
    <app-bar title="INTERST" left="search" right="planet"></app-bar>
    <tab-list></tab-list>
    <card-list></card-list>
    <card-detail></card-detail>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import TabList from './components/TabList.vue'
import CardList from './components/CardList.vue'
import CardDetail from './components/CardDetail.vue'
export default {
  name: 'app',
  components: {
    AppBar,
    TabList,
    CardList,
    CardDetail
  }
}
</script>

<style lang="scss">
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  color: white;
  background-image: linear-gradient(to top, #99acbe 5%, #a8b3bf 20%, #cfd7dd);
}
</style>
