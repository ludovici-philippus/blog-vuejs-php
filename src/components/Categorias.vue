<template>
    <nav>
        <ul>
            <li v-bind:key=categoria.id v-for="categoria in categorias"><router-link :to="categoria.slug">{{ categoria.nome }}</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Categorias",
    data(){
        return{
            categorias: []
        }
    },
    methods:{
    get_categorias: async function(){
        const categorias_fetch = await fetch("http://localhost/reactjs/api/get_categories.php?pega_categorias=true").then(function(response){
            return response.text()
        }).then(function(body){
            let bodyReal = JSON.parse(body);
            return bodyReal;
        });
            this.categorias = categorias_fetch;
        }
    },
    mounted(){
        this.get_categorias();
    }
}
</script>

<style scoped>
nav{
max-width: 300px;
width: 100%;
margin: auto;
text-align: center;
}

ul{
list-style: none;
}

li{
display: inline-block;
margin-right: 6px;
}

a{
text-decoration: none;
color: darkcyan;
font-size: 18px;
}

a:hover{
    text-decoration: underline;
}
</style>
