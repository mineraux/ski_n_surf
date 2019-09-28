<template>
  <div class="price-table-wrapper row-wrapper">
    <div class="empty"></div>
    <div class="category category--red">
      <span>Rouge</span>
    </div>
    <div class="category category--black">
      <span>Noir</span>
    </div>
    <div class="category category--silver">
      <span>Argent</span>
    </div>
    <div class="duration">Saison</div>
    <div class="price"> 56 € </div>
    <div class="price"> 56 € </div>
    <div class="price"> 56 € </div>
    <div class="duration">Semaine</div>
    <div class="price"> 56 € </div>
    <div class="price"> 56 € </div>
    <div class="price"> 56 € </div>
    <div class="duration">1 jour</div>
    <div class="price"> 56 € </div>
    <div class="price"> 56 € </div>
    <div class="price"> 56 € </div>
    <div class="duration">2 jours</div>
    <div class="price"> 56 € </div>
    <div class="price"> 56 € </div>
    <div class="price"> 56 € </div>
  </div>
</template>

<script>
export default {
  computed: {
    // updatePrices() {
    //   const item = this.$store.getters.loadPricesShop[0]
    //   console.log(item)
    //   return item
    // }
  },
  methods : {
    test (){
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
}
</script>


<style scoped>
  .price-table-wrapper{
    display: grid;  
    grid-template-columns: .5fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }

  .price-table-wrapper div {
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;
  }

  .price-table-wrapper div:nth-of-type(4n){
    border-right: 1px solid black; 
  }

  .category, .empty {
    border-top: 1px solid black;
    padding: 30px 65px;
  }

  .price, .duration {
    padding: 30px 65px;
  }

  .category span {
    position: relative;
  }

  .category span:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -50px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    border-radius: 50%;
  }

  .category--red span::before {
    background-color:red;
  }

  .category--black span::before{
    background-color:black;
  }

  .category--silver span::before {
    background-color:yellow;
  }
</style>

