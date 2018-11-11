<template>
  <div class="site-container">
    <!-- TODO: Refacto en lien mail en verifier les balises (main, section etc de tout le site) -->
    <Header />
    <IntroPart title="Location" />
    <Location />
    <IntroPart title="Atelier" />
    <Shop />
    <IntroPart title="Accès & Contact" />
    <AccessAndContact />
    <Footer />
  </div>
  
</template>

<script>
import Header from '~/components/Header.vue'
import IntroPart from '~/components/Intro_part.vue'
import Location from '~/components/Parts/Location/Location.vue'
import Shop from '~/components/Parts/Shop/Shop.vue'
import AccessAndContact from '~/components/Parts/AccessAndContact/AccessAndContact.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    IntroPart,
    Location,
    Shop,
    AccessAndContact,
    Footer
  }
}
</script>

<style scoped>
  .site-container {
    padding: 30px 50px;
  }
</style>

