<template>
  <div class="row-wrapper">
    <p>Que voulez vous louez ? Sélectionner le produit qui vous intéresse.</p>
    <div class="filter-wrapper">
      <ShopFilter 
      v-for="(price, index) in loadPricesShop" 
      :label="price.label"
      :key="index"
      v-on:filter_clicked=filterDatas($event)
      />
    </div>
    <PriceTable />
  </div>
</template>

<script>
/**
 * Get id pressed button
 * Pass correct data with the previous id (database key) to the priceTable component
 */
import ShopFilter from "~/components/Parts/Location/ShopFilter.vue";
import PriceTable from "~/components/Parts/Location/PriceTable.vue";

export default {
  components: {
    ShopFilter,
    PriceTable
  },
  created() {
    // this.player.on("playing", event => {
    //   this.$root.$emit("playerPlaying", this.player);
    // });
    //this.$root.$on("enableAutoScroll",
    // this.$on('filter_clicked', (args) => {
    //   console.log('test')
    // })
  },
  computed: {
    loadPricesShop() {
      const prices = this.$store.getters.loadPricesShop
      console.log(prices)
      
      return prices;
    }
  },
  methods: {
    filterDatas(event) {
      console.log('test', event)
      // console.log(Object.keys(prices).length)

      const prices = Object.entries(this.$store.getters.loadPricesShop)

      prices.forEach(price => {
        console.log(price)
      });

      const test = prices.filter(price => {
        if (price[0] == "raquettes") {
          return price
        }
      })

      console.log(test)
    }
    
  }
};
</script>


<style scoped>
.filter-wrapper {
  margin: 25px 0;
}
</style>

