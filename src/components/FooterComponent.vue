<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-item
              classLink="footer__item"
              :link="links.main.link"
            >
              <img
                :src="require(`@/assets/logo/Logo_black.svg`)"
                :alt="links.main.alt"
              />
            </nav-item>
            <nav-item
              v-for="link in links.other"
              :key="link.id"
              classLink="footer__item"
              :link="link.link"
              :text="link.text"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
  import NavItem from '@/components/NavItem.vue';
  import links from '@/mocks/links.js';

  export default {
    components: { NavItem },
    data() {
      return {
        links,
      };
    },
  };
</script>
