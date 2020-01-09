<template>
<div>
  <app-header></app-header>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <app-footer></app-footer>
</div>
</template>

<script>
  import Header from "./components/Header"
  import Footer from "./components/Footer";
    export default {
      components : {
         appHeader : Header,
         appFooter : Footer
      },
    }

</script>

<style>

  body{
    background-color: rgba(20, 30, 50, 0.87);
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

</style>
