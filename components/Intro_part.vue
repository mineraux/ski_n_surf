<template>
  <div class="row-wrapper split split--2">
    <h2 class="title-part">
      {{ title }}
      <span class="clone-title">{{ title }}</span>
    </h2>    
    <img class="thumbnail" src="~/assets/img/off-road.jpg" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }      
  }
}
</script>


<style scoped>
  .title-part {
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    font-size: 36px;
    letter-spacing: .6em;
    align-self: center;
    text-align: center;
  }

  .clone-title {
    position: absolute;
    right: -10%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 96px;
    opacity: 0.08;
  }

  .thumbnail {
    position: relative;
    z-index: -1;
  }
</style>

