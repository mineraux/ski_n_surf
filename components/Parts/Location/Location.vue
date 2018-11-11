<template>
  <div class="row-wrapper">
    <p>Que voulez vous louez ? Sélectionner le produit qui vous intéresse.</p>
    <ShopFilter />
    <PriceTable />
  </div>
</template>

<script>
import ShopFilter from "~/components/Parts/Location/ShopFilter.vue"
import PriceTable from "~/components/Parts/Location/PriceTable.vue"

export default {
  components : {
    ShopFilter,
    PriceTable
  }
  
}
</script>


<style scoped>

</style>

