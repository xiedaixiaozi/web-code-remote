<template>
    <div>
      <hr>
      这里是ComponentC
      <select :value="value" @change="$emit('input', $event.target.value)">
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="广州">广州</option>
        <option value="深圳">深圳</option>
        <option value="武汉">武汉</option>
      </select>
      <hr>
    </div>
</template>

<script>
export default {
  name: 'ComponentC',
  model: {
    prop: "value",  // 指定v-model绑定的prop（默认value）
    event: "input"  // 指定v-model监听的事件（默认input）
  },
  props: ["value"],
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>