<template>
    <Header/>
    <main>
        <h2>Olá, mundo</h2>
    </main>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>
