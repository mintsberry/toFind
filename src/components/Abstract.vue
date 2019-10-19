<template>
  <div class="abstract">
    <ul class="abstract_face">
      <li
        v-for="post in posts"
        :key="post.id"
        :style="{ backgroundImage: `url(${post.faceUrl})` }"
      ></li>
    </ul>
    <div class="abstract_menu">
      <i class="icon icon-list"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
.abstract {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 6px;
  .abstract_face {
    padding: 0 16px;
    opacity: 1;
    transition: all .6s ease;
    margin-left: -16px;
    li {
      display: inline-block;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-size: cover;
      background-position: 0 2px;
      vertical-align: top;
    }
  }
  .abstract_menu {
    color: #ddd;
    .icon {
      font-size: 18px
    }
  }
}

</style>
