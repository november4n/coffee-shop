<template>
  <main>
    <div class="banner coffepage-banner">
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
            <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl" />
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper" v-if="!isLoading">
              <product-card
                v-for="card in cards.coffee"
                :key="card.id"
                :card="card"
                @onNavigate="navigate"
              />
            </div>
            <spinner-component v-else></spinner-component>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import NavBarComponent from "@/components/NavBarComponent.vue";
  import ProductCard from "@/components/ProductCard.vue";
  import TitleComponent from '@/components/TitleComponent.vue';
  import SpinnerComponent from '../components/SpinnerComponent.vue'

  import { navigate } from '../mixins/navigate';
  import { preloader } from '@/mixins/preloader';

  export default {
    components: { NavBarComponent, ProductCard, TitleComponent, SpinnerComponent },
    data() {
      return {
        title: 'Our Coffee',
        name: 'coffee'
      }
    },
    computed: {
      cards() {
        return this.$store.getters["getCoffeeCards"]
      }
    },
    mixins: [navigate, preloader],
    mounted() {
      fetch('http://localhost:3000/coffee')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          this.$store.dispatch('setCoffeeData', data),
          this.deleteLoader();
        }, 1500)
      })
    }
  };
</script>
