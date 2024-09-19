<template>
  <li :class="classLink">
    <router-link :to="link">{{ text }}<slot></slot></router-link>
  </li>
</template>

<script>
  export default {
    props: {
      classLink: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: false
      },
    }
  }
</script>
