<template>
    <div>
      这里是ComponentD
      &nbsp;
      <input type="text" :value="inputText" @input="$emit('update:inputText', $event.target.value)">
      <hr>
    </div>
</template>

<script>
export default {
  name: 'ComponentD',
  props: ["inputText"],
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