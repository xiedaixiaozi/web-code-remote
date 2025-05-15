<template>
  <div>
    <!-- <hr> -->
    <!-- <input class="input-1" type="text" placeholder="全局自定义指令" v-globalFocus> -->
    <!-- <hr> -->
    <!-- <input class="input-2" type="text" placeholder="局部自定义指令" v-localFocus> -->
    <!-- <hr> -->
    <!-- <ComponentA></ComponentA> -->
    <!-- <hr> -->
    <ComponentB>
      <!-- 默认插槽 - 实际值 -->
      Hello Slot
      <!-- 具名插槽 - 实际值 -->
      <template v-slot:slot-1>Hello Slot1</template>
      <template #slot-2>Hello Slot2</template>
      <template #slot-3>Hello Slot3</template>
      <!-- 作用域插槽 -->
      <template #msg="{ message }">{{ message }}</template>
    </ComponentB>
  </div>
</template>

<script>
// import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
export default {
  name: 'App',
  // 局部自定义指令
  // directives: {
  //   localFocus: {
  //     inserted: function (el) {
  //       el.focus();
  //     }
  //   }
  // },
  components: {
    // ComponentA,
    ComponentB,
  }
}
</script>

<style scoped>
.input-1,
.input-2 {
  outline: none;
  border: 3px solid black;
}
.input-1:focus {
  border-color: skyblue;
}
.input-2:focus {
  border-color: pink;
}
</style>