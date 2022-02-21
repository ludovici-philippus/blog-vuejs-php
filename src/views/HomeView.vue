<template>
    <Header/>
    <Categorias/>
    <Main/>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Categorias from "../components/Categorias.vue";
import Main from "../components/Main.vue";

export default {
    name: 'HomeView',
    components: {
        Header,
        Categorias,
        Main
    },


}

</script>
