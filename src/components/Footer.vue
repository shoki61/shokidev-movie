<template>
  <footer>
    <div class="col-12 text-center">
      <p class="title">Developed by</p>
      <div class="titleTextDiv">
        <span class="titleText">Sohrat Jumadurdyyev ©2019 </span>
        <a href="" class="fa fa-github"></a>
      </div>
      <p class="title">Powered by</p>
      <a href="https://www.themoviedb.org" target="_blank">
        <img class="logo" src="/src/referenceLogo.png" alt="">
      </a>
    </div>

  </footer>
</template>

<script>

</script>

<style scoped>
  footer{
    padding: 20px;
    width: 100%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    cursor: default;
    background-color: rgba(0, 0, 0, 0.14);
  }
  .fa-github{
    color: #8a8a8a;
    font-size: 20px;
    margin-left: 15px;
  }
  .fa-github:hover{
    color: #aeaeae;
  }
  .logo{
    height: 25px;
    margin-top: 5px;
  }
  .title{
    color : #a0a0a0;
    margin-bottom: 0;
    letter-spacing: 1px;
    font-weight: 400;
    font-size:15px;
  }
  .titleText{
    color : #8a8a8a;
    font-weight: 100;
    letter-spacing: 1px;
    font-size: 12px;
  }
  .titleTextDiv{
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 10px;
  }
  a{
    text-decoration: none;
  }
  .titleText:hover{
    color: #ededed;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px) {
    .title{
      font-size: 35px;
    }
    .titleText{
      font-size:30px;
    }
    .logo{
      height: 50px;
    }
    .fa-github{
      font-size: 50px;
    }
  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px) {
    .title{
      font-size: 30px;
    }
    .titleText{
      font-size:25px;
    }
    .logo{
      height: 50px;
    }
    .fa-github{
      font-size: 45px;
      margin-left: 25px;
    }
  }
</style>
