<template>
  <div
    class="card"
    :class="{ active: card.active, selected: selected }"
  >
    <CardFront :card="card" @click.native="toggleCard({ card })"/>
    <CardBack :card="card" @click.native="handleClick"></CardBack>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import CardFront from './CardFront.vue'
import CardBack from './CardBack.vue'
export default {
  components: {
    CardFront,
    CardBack
  },
  props: {
    card: {
      type: Object
    },
    selected: {
      type: Boolean
    }
  },
  methods: {
    handleClick () {
      const appRect = document.querySelector('#app').getBoundingClientRect()
      const elRect = this.$el.getBoundingClientRect()
      const card = this.card
      const rect = {}
      rect.top = elRect.top - appRect.top
      rect.left = elRect.left - appRect.left
      rect.width = elRect.width
      rect.height = elRect.height
      rect.appWidth = appRect.width
      rect.appHeight = appRect.height
      this.$emit('select', { rect, card })
    },
    ...mapMutations(['toggleCard'])
  }
}
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  flex-direction: columns;
  width: 100%;
  height: 100%;

  &.selected {
    visibility: hidden;
  }
  &.active {
    .card_back {
      transform: scale(1);
      opacity: 1;
    }
    .card_front {
      transform: translate3d(0, -100px, 0)
    }
  }
}
</style>
