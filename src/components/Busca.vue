<template>
    <form>
        <input type="text" placeholder="Busca"/>
        <button @click.prevent="pesquisar()">P</button>
    </form>
</template>

<script>
export default{
    name: "Busca",
    props: ["func"],
    data(){
        return{
            pesquisa: ""
        }
    },
    methods:{
        pesquisar: function(){
            const pesquisa_texto = document.querySelector("input").value;
            this.pesquisa = pesquisa_texto;
            this.func(this.pesquisa)
        },
    }
}
</script>

<style scoped>
form{
max-width: 400px;
width: 100%;
margin: auto;
}

input{
width: 85%;
height: 40px;
padding-left: 4px;
border: 1px solid #ccc;
}

button{
width: 15%;
height: 40px;
border: 1px solid #ccc;
}
</style>
