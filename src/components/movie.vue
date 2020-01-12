<template>
  <div >
    <div class="container-fluid">
        <div class="mx-auto movieInfo">
          <div align="center">
            <a href="#"></a>
            <img v-if="movie.poster_path!==null" class="img-fluid" :src="urlImage+movie.poster_path" alt="">
            <img v-else src="/src/img.png" class="img-fluid" alt="">
          </div>
          <div class="textContainer pl-4" style="position: relative">
            <div class="row filmNameContainer">
              <h3 class="filmName mt-3">{{movie.title}}</h3>
            </div>
            <div class="row">
              <p class="filmOverview">{{movie.overview}}</p>
            </div>
            <div class="row movieVoteContainer" style="position: absolute;bottom:0;">
              <p><i class="fa fa-user"></i> {{movie.vote_count}}</p>
              <p><i class="fa fa-star"></i> {{movie.vote_average}}/10</p>
              <p><i class="fa fa-calendar"></i> {{movie.release_date}}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
    data(){
      return{
        movie : "",
        urlImage : "https://image.tmdb.org/t/p/w500",
      }
    },
      created(){
        this.movie = JSON.parse(localStorage.getItem("movie"));
      },
    }

</script>

<style scoped>
  .container-fluid{
    min-height: 100vh!important;
  }
  .movieInfo{
    display:flex;
    justify-content: center;
    margin-top: 40px;
    letter-spacing: 2px;
    font-family: sans-serif;
    width: 80%;
  }
  .img-fluid{
    box-shadow: 1px 1px 20px 10px #0c1728;
    border-radius: 3px;
    height: 500px;
  }
  .textContainer{
    width: 50%;
  }
  .filmName{
    color : #9ab0ff;
    margin-left: 10px!important;
    margin-top: 0!important;
    margin-bottom: 25px;
    border-left: 5px solid #5c69b6;
    padding-left: 10px;
  }
  .filmOverview{
    color : #c9c3ff;
    text-align: left;
    font-size: 14px;
  }
  .fa-star{
    color : #ffb411;
  }
  .fa-user{
    color : #ab97b6;
  }
  .fa-calendar{
      color : #c99550
  }
  .movieVoteContainer{
    width: 100%;
    display: flex;
    justify-content: left;
  }
  p{
    color : darkturquoise;
    margin-left: 25px;
  }
    @media only screen and (min-device-width : 200px)and (max-device-width : 500px) {
    .movieInfo{
      display: block;
      margin-top: 70px;
    }
    .img-fluid{
      height: 750px;
    }
    .filmName{
      font-size: 70px;
      border:none;
      margin: auto!important;
      margin-top: 30px!important;
      text-align: center;
    }
    .textContainer{
      width: 100%;
    }
    .filmNameContainer{
      width: 100%;
    }
    .filmOverview{
      font-size: 35px;
      letter-spacing: 4px;
      margin-top: 20px;
      text-align: center;
    }
    .movieVoteContainer{
      position: relative!important;
      font-size: 40px;
      margin-top: 20px;
      justify-content: space-evenly;
    }
  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px) {

    .movieInfo{
      display: block;
      margin-top: 70px;
    }
    .img-fluid{
      height: 600px;
    }
    .filmName{
      font-size: 50px;
      border:none;
      margin: auto!important;
      margin-top: 30px!important;
      text-align: center;
    }
    .textContainer{
      width: 100%;
    }
    .filmNameContainer{
      width: 100%;
    }
    .filmOverview{
      font-size: 27px;
      letter-spacing: 4px;
      margin-top: 20px;
      text-align: center;
    }
    .movieVoteContainer{
      position: relative!important;
      font-size: 35px;
      margin-top: 20px;
      justify-content: space-evenly;
    }
  }

</style>
