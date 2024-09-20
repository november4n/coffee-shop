<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${img}`)" :alt="img" />
    <div :class="classItemTitle">{{ title }}</div>
    <div v-if="country" :class="classItemCountry">{{ country }}</div>
    <div :class="classItemPrice">{{ price }}$</div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: false,
      },
      classItem: {
        type: String,
        required: false,
        default: "shop__item"
      },
      classItemTitle: {
        type: String,
        required: false,
        default: "shop__item-title"
      },
      classItemCountry: {
        type: String,
        required: false,
        default: "shop__item-country"
      },
      classItemPrice: {
        type: String,
        required: false,
        default: "shop__item-price"
      },
    }
  }
</script>
