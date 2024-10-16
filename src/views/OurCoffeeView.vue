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
            <img
              class="shop__girl"
              src="@/assets/img/coffee_girl.jpg"
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
                @input="onSearch($event)"
              />
              {{searchValue}}
              <!-- v-model="searchValue" -->
              <!--  @input="onSearch($event)" -->
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label" @click="onFilterReset()">
                Or filter
              </div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">
                  Brazil
                </button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">
                  Kenya
                </button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">
                  Columbia
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper" v-if="!isLoading">
              <product-card
                v-for="card in cards"
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
import TitleComponent from "@/components/TitleComponent.vue";
import SpinnerComponent from "../components/SpinnerComponent.vue";

import { navigate } from "../mixins/navigate";
import { preloader } from "@/mixins/preloader";
import debounce from "debounce";

export default {
  components: {
    NavBarComponent,
    ProductCard,
    TitleComponent,
    SpinnerComponent,
  },
  data() {
    return {
      title: "Our Coffee",
      name: "coffee",
    };
  },
  computed: {
    cards() {
      return this.$store.getters["getCoffeeCards"];
    },
    searchValue: {
      set(value) {
        this.$store.dispatch("setSearchValue", value);
      },
      get() {
        return this.$store.getters["getSearchValue"];
      },
    },
  },
  mixins: [navigate, preloader],
  async mounted() {
    try {
      let res = await fetch("http://localhost:3000/coffee");
      let data = await res.json();
      setTimeout(() => {
          this.$store.dispatch("setCoffeeData", data), this.deleteLoader();
        }, 1500);
    } catch (err) {
      console.error('Ошибка при получении данных')
    }
  },
  methods: {
    // onSort(value) {
    //   this.$store.dispatch("setSortValue", value)
    // },
    onFilterReset() {
      this.$store.dispatch("setSortValue", "");
      this.$store.dispatch("setSearchValue", "");
    },
    onSearch: debounce(function (event) {
      this.onSort(event.target.value);
    }, 500),
    // сортировка на сервере
    async onSort(value) {
      let res = await fetch(`http://localhost:3000/coffee?q=${value}`);

      let data =  await res.json();
      this.$store.dispatch("setCoffeeData", data);
      console.log(data)
    },
  },
};
</script>
