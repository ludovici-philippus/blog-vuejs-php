<template>
    <Header/>
    <div class="container">
        <h2>{{ titulo }}</h2>
        <img :src="imagem"/>
        <p>{{ descricao }}</p>
        <hr>
        <p>{{ conteudo }}</p>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
export default {
    name: "PostView",
    data(){
        return{
            titulo: "",
            imagem: "",
            descricao: "",
            conteudo: "",
        }
    },
    components:{
        Header
    },
    methods:{
        pega_post: async function(){
            console.log(this.$route.params);
            const post_slug = this.$route.params.slug;
            const categoria_slug = this.$route.params.slug_categoria;
            const post_info = await fetch("http://localhost/reactjs/api/get_post_single.php?post="+post_slug+"&categoria="+categoria_slug).
                then(function(response){
                    return response.text();
                    }).then(function(body){
                        return JSON.parse(body);
                    });
            this.titulo = post_info.titulo;
            this.imagem = post_info.imagem;
            this.descricao = post_info.descricao;
            this.conteudo = post_info.conteudo;
        }
    },
    mounted(){
        console.log(this.$route);
        this.pega_post();
    }
}
</script>

<style scoped>
.container{
    margin-top: 40px;
    flex-direction: column;
}
img{
max-width: 500px;
display: block;
width: 100%;
margin: 20px auto;
}

h2{
text-align: center;
}

p:nth-of-type(1){
text-align: center;
font-weight: lighter;
margin-bottom: 10px;
}

p:nth-of-type(2){
margin-top: 10px;
font-size: 18px;
}
</style>
