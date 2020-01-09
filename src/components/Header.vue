<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="#" @click="clear">shokidev-movie</a>
  </nav>

</template>

<script>
    export default {
      data(){
        return{
          inputName : ""
        }
      },
      methods : {
        clear(){
          localStorage.removeItem("searchName");
          localStorage.removeItem("movie");
          this.$router.push('/').catch(err => {})
        },
      },
    }
</script>

<style scoped>
.navbar{
  box-shadow: 1px 1px 10px 3px rgba(17, 17, 17, 0.97);
}
@media only screen and (min-device-width : 200px)and (max-device-width : 500px) {
  .navbar{
    height: 140px;
  }
  .navbar-brand{
    font-size: 50px;
  }
}
@media only screen and (min-device-width : 500px)and (max-device-width : 1200px) {
  .navbar{
    height: 90px;
  }
  .navbar-brand{
    font-size: 37px;
  }
}

</style>
