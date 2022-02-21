<template>
    <div class="single_post">
        <router-link :to="slug">
        <img :src="imagem"/>
        <h3>{{ titulo }}</h3>
        <p>{{ descricao }}</p>
        </router-link>
        <router-link :to="slug" class="btn">Ler</router-link>
    </div>
</template>

<script>
export default {
    name: "Posts",
    props:{
        imagem: String,
        titulo: String,
        descricao: String,
        slug_post: String,
        slug_categoria: String,
    },
    data(){
        return{
            slug: "/" + this.slug_categoria + "/" + this.slug_post
        }
    }
}
</script>

<style scoped>
.single_post{
width: 33%;
border: 10px solid #fff;
text-align: center;
}

.single_post a{
    text-decoration: none;
    color: #333;
}

h3{
    font-size: 24px;
}

p{
    margin-bottom: 5px;
}

a.btn{
    background-color: orange;
    padding: 6px 25px;
    display: inline-block;
    color: white;
    font-size: 18px;
    transition: 0.5s;
}

a.btn:hover{
    background-color: #ff7200;
}

img{
max-width: 300px;
width: 100%;
}
</style>
