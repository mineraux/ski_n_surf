<template>
  <div class="row-wrapper">
    <Map />
    
    <div class="row-wrapper split split--2">
      <div class="contact">
        <h3>Contact</h3>
        <p>53 rue de Courcelles 25400 Arbouans</p>
        <p>Tél : 03 81 98 57 00</p>
        
        <p>E-mail : eurlskinsurf@gmail.com</p>
      </div>
      <div class="schelude">
        <h3>Horaires</h3>
        <p>Du 1er octobre au 30 avril</p>
        <p>Mardi, mercredi, jeudi et vendredi: 10h-12h et 14h-19h</p>
        <p>Samedi: 9h-12h et 14h-19h</p>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '~/components/Parts/AccessAndContact/Map.vue'

export default {
  components: {
    Map
  }  
}
</script>

<style>
  .contact h3, .schelude h3 {
    font-size: 36px;
    font-weight: 500;
  }
</style>


