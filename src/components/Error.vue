<template>
    <div class="errorDiv">
        <img class="img-fluid mx-auto d-block" src="/src/errorImg.png" alt="">
        <h5>The movie you are looking for can not be found!</h5>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
.errorDiv{
    text-align: center;
    height: 90vh;
}
img {
    height: 80%;
    position: relative;
}
h5{
    color : white;
    font-weight: 100;
    letter-spacing: 3px;
}
@media only screen and (min-device-width : 200px)and (max-device-width : 1200px) {
  h5{
    font-size: 38px;
  }

}

</style>
