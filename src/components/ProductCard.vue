<template>
  <div :class="classItem" @click="onEmmit(card.id)">
    <img :src="require(`@/assets/img/${card.img}`)" :alt="card.img" />
    <div :class="classItemTitle">{{ card.title }}</div>
    <div v-if="card.country" :class="classItemCountry">{{ card.country }}</div>
    <div :class="classItemPrice">{{ card.price | addCurrency}}</div>
  </div>
</template>

<script>
  export default {
    props: {
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
      card: {
        type: Object,
        required: true
      }
    },
    methods: {
      onEmmit(id) {
        this.$emit('onNavigate', id)
      }
    }
  }
</script>
