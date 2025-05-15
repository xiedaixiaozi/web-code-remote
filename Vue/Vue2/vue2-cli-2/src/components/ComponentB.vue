<template>
  <div>
      这里是ComponentB
      <br>
      <!-- 默认插槽 - 默认值 -->
      <slot>slot</slot>
      <!-- 具名插槽 - 默认值 -->
      <br>
      <slot name="slot-1">slot-1</slot>
      <br>
      <slot name="slot-2">slot-2</slot>
      <br>
      <slot name="slot-3">slot-3</slot>
      <br>
      <!-- 作用域插槽 -->
      <slot name="msg" :message="'作用域插槽'"></slot>
  </div>
</template>

<script>
export default {
  name: 'ComponentB',
  data() {
    return {

    }
    
  }
}
</script>

<style>

</style>