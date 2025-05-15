<template>
  <div>
      这里是ComponentA
      <div class="box" v-backgroundColor="backgroundColor"></div>
      <button @click="backgroundColor = 'pink'">changeColor</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  directives: {
      backgroundColor: {
        inserted: function (el, binding) {
          el.style.backgroundColor = binding.value;
        },
        update: function (el, binding) {
          el.style.backgroundColor = binding.value;
        }
      }
  },
  data() {
    return {
      backgroundColor: "skyblue",
    }
    
  }
}
</script>

<style>
.box {
    height: 400px;
    width: 400px;
    border: 4px solid black;
}
</style>