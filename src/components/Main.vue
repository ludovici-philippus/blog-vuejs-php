<template>
    <main>
        <h2>Posts</h2>
        <section class="main__posts">
            <div class="container">
                <Posts :key="post.id" v-for="post in posts" :titulo="post.titulo" :descricao="post.descricao"
                :imagem="post.imagem"
                :slug_categoria="post.slug_categoria"
                :slug_post="post.slug"
                /> 
            </div>
        </section>
    </main>
</template>

<script>
import { onUpdated } from 'vue';
import Posts from "./Posts.vue";
export default {
    name: "Main",
    components:{
        Posts
    },
    props:{
        busca: String,
    },
    data(){
        return{
            posts: [],
        }
    },
    methods:{
    get_posts: async function(){
            const posts_fetch = await fetch("http://localhost/reactjs/api/get_posts.php?posts=true").
                then(function(response){
                    return response.text();
                    }).then(function(body){
                        return JSON.parse(body);
                        });
            this.posts = posts_fetch;
        }
    },
    mounted(){
        this.get_posts();
    },
    watch: {
        busca: async function(){
            const posts_fetch = await fetch("http://localhost/reactjs/api/get_posts.php?posts=true&busca="+this.busca).
                then(function(response){
                    return response.text();
                    }).then(function(body){
                        return JSON.parse(body);
                    });
            this.posts = posts_fetch;
        }
    }
}
</script>

<style scoped>
h2{
text-align: center;
margin-top: 20px;
}
</style>
