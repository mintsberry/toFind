<template>
  <div class="app-bar">
    <span class="app-bar_l" @click="$emit('left')">
      <i :class="['icon', `icon-${left}`]"></i>
    </span>
    <h1>{{title}}</h1>
    <span class="app-bar_r" @click="$emit('right')">
      <i :class="['icon', `icon-${right}`]"></i>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.app-bar {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  height: 44px;
  padding-bottom: 20px;
  font-size: 16px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .2);

  h1 {
    display: flex;
    justify-content: center;
    flex: 1;
    font-size: 16px;
  }

  span {
    padding: 0 20px;
  }
}
</style>
