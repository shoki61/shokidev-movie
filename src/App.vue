<template>
<div>
  <app-header></app-header>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <app-footer></app-footer>
  <back-to-top visibleoffset="100" bottom="35px" right="35px">
    <button type="button" class="btn btn-to-top"><i class="fa fa-chevron-up"></i></button>
  </back-to-top>
</div>
</template>

<script>
  import Header from "./components/Header"
  import Footer from "./components/Footer";
  import backtotop from "vue-backtotop"
    export default {
      components : {
         appHeader : Header,
         appFooter : Footer,
         backToTop : backtotop,
      }
    }

</script>

<style>
  .btn-to-top {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    padding-bottom: 7px;
    background-color: rgba(133, 175, 255, 0.72);
  }
  .btn-to-top:hover{
    background-color: #9736ac;
    color: whitesmoke;
  }

  body{
    background-color: #251330;
    padding-top: 60px;
  }
  .fade-enter{
      opacity: 0;
  }
  .fade-enter-active{
      transition: opacity .3s;
  }
  .fade-leave{
  }
  .fade-leave-active{
      transition: opacity .3s;
      opacity: 0;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px){
      body{
          padding-top: 140px;
      }
      .btn-to-top{
        width: 150px;
        height: 150px;
        margin-bottom: 50px;
        font-size: 40px;
      }
  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px){
      body{
          padding-top: 110px;
      }
      .btn-to-top{
      width: 120px;
      height: 120px;
      margin-bottom: 50px;
      font-size: 30px;
    }
  }

</style>
