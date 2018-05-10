<template>
  <v-app id="inspire">
    <base_menu></base_menu>
  </v-app>
</template>

<script>
  import menu from '@/components/menu'

  export default {
    components:{ base_menu: menu },
    data: () => ({

    }),
    props: {
      source: String
    },
    computed: {
    },
    mounted() {
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color:#4a4a4a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* 프린트시 출력 제외 CSS */
@media print {
  .page-divide {
    page-break-after: always;
  }

  .no-print-page {
    display: none;
  }
}
</style>
