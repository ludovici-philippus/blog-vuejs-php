<template>
    <Header :pega_busca="pega_busca"/>
    <Main :busca="busca"/>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Categorias from "../components/Categorias.vue";
import Main from "../components/Main.vue";

export default {
    name: 'HomeView',
    data(){
        return{
            busca: ""
        }
    },
    components: {
        Header,
        Categorias,
        Main
    },
    methods: {
        pega_busca: function(busca){
            this.busca = busca;
        }
    }


}

</script>
