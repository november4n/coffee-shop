<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-component :title="title" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                v-for="card in cards.goods"
                :key="card.id"
                :title="card.title"
                :price="card.price"
                :img="card.img"
                :country="card.country"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import NavBarComponent from '@/components/NavBarComponent.vue';
  import ProductCard from '@/components/ProductCard.vue';
  import TitleComponent from '@/components/TitleComponent.vue';

  export default {
    components: { NavBarComponent, ProductCard, TitleComponent },
    data() {
      return {
        title: 'For your pleasure',
      }
    },
    computed: {
      cards() {
        return this.$store.getters["getGoodsCards"]
      }
    }
  }
</script>
