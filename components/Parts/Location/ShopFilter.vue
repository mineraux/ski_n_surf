<template>
    <button class="project-preview-title">{{ price }}</button>
</template>

<script>
export default {
  props: ["price"],

  // methods: {
  //     switched() {
  //       this.$el.classList.toggle('active')
  //     }
  // }
}
</script>


<style scoped>
button {
  display: inline-block;
  padding: 10px 20px;
  box-shadow: none;
  background-color: #4B74FF;
  color: white;
  outline: none;
  border: none; 
  border-radius: 35px;
  margin-right: 15px;
  transition: box-shadow .25s ease;
  cursor: pointer;
}

button.active {
  box-shadow: 0 5px 15px 0 rgba(90, 50, 40, 0.15),
    0 4px 8px 0 rgba(80, 40, 30, 0.1);
}
</style>


