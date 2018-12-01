<template>
  <div class="row-wrapper">
    <p>Que voulez vous louez ? Sélectionner le produit qui vous intéresse.</p>
    <div class="filter-wrapper">
      <ShopFilter 
      v-for="(price, index) in loadPricesShop" 
      :price="price.label"
      :key="index"
      @click="toggleActiveClass()"
      />
    </div>
    <PriceTable />
  </div>
</template>

<script>
import ShopFilter from "~/components/Parts/Location/ShopFilter.vue";
import PriceTable from "~/components/Parts/Location/PriceTable.vue";

export default {
  components: {
    ShopFilter,
    PriceTable
  },
  computed: {
    loadPricesShop() {
      console.log(this.$store.getters.loadPricesShop);
      return this.$store.getters.loadPricesShop;
    }
  },

  methods: {
    toggleActiveClass() {
      const buttonRef = event.target;
      console.log('test')
      const allFilters = document.querySelectorAll('.filter-single')
      allFilters.forEach(filter => {
        filter.classList.remove('active')
      });
      buttonRef.classList.add('active')
    }
  }
};
</script>


<style scoped>
.filter-wrapper {
  margin: 25px 0;
}
</style>

