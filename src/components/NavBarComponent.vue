<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <nav-item
        classLink="header__item"
        :link="links.main.link"
      >
        <img
          :src="require(`@/assets/logo/Logo.svg`)"
          :alt="links.main.alt"
        />
      </nav-item>
      <nav-item
        v-for="link in links.other"
        :key="link.id"
        classLink="header__item"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
</template>

<script>
  import NavItem from '@/components/NavItem.vue';
  import links from '@/mocks/links.js';

  export default {
    components: { NavItem },
    data() {
      return {
        links,
      }
    }
  };
</script>
