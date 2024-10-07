<template>
  <div :class="classItem" @click="onEmmit(card.id)">
    <img :src="card.image" :alt="card.image" />
    <div :class="classItemTitle">{{ card.name }}</div>
    <div v-if="card.country" :class="classItemCountry">{{ card.country }}</div>
    <div :class="classItemPrice">{{ card.price }}</div>
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
