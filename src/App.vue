<template>
    <router-view/>
</template>

<script>
    export default{
        name: "App",
        components:{
        }
    }
</script>

<style>
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

.container{
max-width: 900px;
margin: auto;
padding: 0 2%;
display: flex;
flex-wrap: wrap;
}
</style>
