<template>
    <button class="project-preview-title" @click="toggleActiveFilter()">{{ label }}</button>
</template>

<script>
export default {
  props: ["label", "id"],

  methods: {
    toggleActiveFilter() {
      this.$emit('filter_clicked', this.label)

      // const buttonRef = event.target;
      // const allFilters = document.querySelectorAll('.filter-single')
      // allFilters.forEach(filter => {
      //   filter.classList.remove('active')
      // });
      // buttonRef.classList.add('active')
    }
  }
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


