<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-item
              classLink="footer__item"
              :link="links.footer.link"
            >
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
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

  export default {
    components: { NavItem },
    data() {
      return {
        links: {
          footer: {
            id: 0,
            link: "/",
            icon: "Logo_black.svg",
          },
          other: [
            {
              id: 1,
              link: "/our-coffee",
              text: "Our coffee",
            },
            {
              id: 2,
              link: "/for-your-pleasure",
              text: "For your pleasure",
            },
            {
              id: 3,
              link: "/contacts",
              text: "Contact us",
            },
          ],
        }
      };
    },
  };
</script>
