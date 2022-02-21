<template>
    <Header/>
    <Categorias/>
    <main>
        <h2>{{ categorias }}</h2>
    </main>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Categorias from "../components/Categorias.vue";
export default {
    name: 'HomeView',
    components: {
        Header,
        Categorias
    },


}

</script>
