<template>
    <HeaderBar/>
    <Categorias v-if="this.$route.name != 'post'"/>
    <Busca v-if="this.$route.name != 'post' && this.$route.name != 'sobre'" :get_value_text_input="busca_pesquisa"/>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import Categorias from "./Categorias.vue";
import Busca from "./Busca.vue";

export default{
    name: "Header",
    props: ["pega_busca"],
    components:{
        HeaderBar,
        Categorias,
        Busca
    },
    methods:{
        busca_pesquisa: function(busca){
            this.pega_busca(busca);
        }
    }
}

</script>

<style scoped>
</style>
