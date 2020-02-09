<template>
  <nav class="navbar fixed-top navbar-expand">
    <a class="navbar-brand" href="#" @click="clear">
      <img src="/src/assets/logo.png" alt="logo">
    </a>
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
  box-shadow: #090912;
  background-color: rgba(39, 30, 61, 0.89);
  padding-bottom: 0;
}
.navbar-brand{
  color: #4fb0ff !important;
}
@media only screen and (min-device-width : 200px)and (max-device-width : 500px) {
  .navbar{
    height: 140px;
  }
  .navbar-brand{
    font-size: 50px;
  }
  img{
    height: 100px;
  }
}
@media only screen and (min-device-width : 500px)and (max-device-width : 1200px) {
  .navbar{
    height: 100px;
  }
  .navbar-brand{
    font-size: 37px;
  }
  img{
    height: 80px;
  }
}

</style>
