<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${img}`)" :alt="img" />
    <div class="best__item-title">{{ title }}</div>
    <div v-if="country" class="best__item-country">{{ country }}</div>
    <div class="best__item-price">{{ price }}$</div>
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
      classItem: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
    }
  }
</script>
