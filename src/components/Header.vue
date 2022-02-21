<template>
    <header>
        <div class="logo">
            <router-link to="/"><h1>Blog</h1></router-link>
        </div>
        <nav>
            <ul>
                <li><router-link to="/">Posts</router-link></li>
                <span style="color: white"> | </span> 
                <li><router-link to="/sobre">Sobre</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default{
    name: "Header"
}
</script>

<style scoped>
header{
    background-color: steelblue;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

nav{
    margin-top: 8px;
    font-size: 18px;
}

nav a:hover{
    text-decoration: underline;
}

header a{
    color: white;
    text-decoration: none;
}
ul{
    list-style: none;
}

li{
    display: inline-block;
}
</style>
