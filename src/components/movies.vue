<template>
  <div>
    <div class="container-fluid">
      <nav class="mt-3">
        <button  disabled><i class="fa fa-search"></i></button>
        <input type="text"
               v-model="inputName"
               placeholder="search movie..."
               @keydown.enter="send"
        >
      </nav>
      <h1 class="popularText mt-3 mb-4">Popular movies</h1>
      <transition name="fade" mode="out-in">
        <div key="a" v-if="lists.length<=0" class="loadingDiv" align="center">
          <div class="spinner-grow" role="status"></div>
        </div>

        <div key="b" v-else class="text-center">
          <div class="film" v-for="list in lists" align="center" @click="addedMovie(list)">
            <div  style="position: relative;" align="center">
              <img v-if="list.poster_path!==null" :src="url+list.poster_path" class="img-fluid" alt="">
              <img v-else class="img-fluid" src="/src/img.png" alt="">
            </div>
            <div class="row">
              <p class="filmName mx-auto mt-3">{{list.title}}</p>
            </div>
          </div>

          <div class="containerNext">
            <div class="nextDiv">
              <a class="nextText" href="#"  @click="decreasePage"  v-if="$store.state.page!==1"><i class="fa fa-angle-left pr-2"></i>Previous</a>
              <a class="nextText" href="#" @click="increasePage" >Next<i class="fa fa-angle-right pl-2 my-auto"></i></a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
      data(){
        return {
          lists: [],
          url: "https://image.tmdb.org/t/p/w500",
          img: [{img:"../img.png"}],
          inputName:"",
        }
      },
      created(){
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=01a8d328332172ec0363661a5a8d24b8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+this.$store.state.page)
                .then((response)=>{
                    setTimeout(()=>{
                      let data = response.data;
                      if(data.results.length===0){
                        this.$router.push("/error")
                      }else{
                        this.lists = data.results;
                      }
                    },1000)
                  }).catch(()=>{
                    this.$router.push("/error")
        });
      },
      methods : {
        send(){
          if(this.inputName!==""){
            localStorage.setItem("searchName", this.inputName);
            setTimeout(()=>{
              this.$store.commit("setResult");
            },1000);
            this.$router.push("/results");
          }
        },
        increasePage(){
          this.$store.commit("increasePage");
          this.lists = [];
          setTimeout(()=>{
            this.lists = this.$store.state.moviesList;
          },1000)
        },
        decreasePage(){
          this.$store.commit("decreasePage");
          this.lists = [];
          setTimeout(()=>{
            this.lists = this.$store.state.moviesList
          },1000)
        },
        addedMovie(value){
          localStorage.setItem("movie", JSON.stringify(value));
          this.$router.push("/movie");
        }
      }
    }
</script>

<style scoped>
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
  .spinner-grow{
    width: 70px;
    height: 70px;
    background-color: #8fa5ee;
  }
  .loadingDiv{
    min-height: 95vh;
    position: relative;
    padding-top:130px
  }
  nav{
    display: flex;
    justify-content: flex-end!important;
    padding-right: 80px;
  }
  button{
    border: 1px solid #8fa5ee;
    border-right:none;
    background-color:transparent!important;
    height: 30px;
    border-radius: 100px 0 0 100px;
    padding-left:15px;
    cursor: text;
    color:#9cb2ff;
  }
  input{
    border: 1px solid #8fa5ee;
    border-left:none;
    background-color:transparent;
    border-radius: 0 100px 100px 0;
    padding-left: 10px;
    padding-right: 15px;
    height: 30px;
    color: #9cb2ff;
    letter-spacing: 1px;
    font-weight: 100;
  }
  ::placeholder{
    color: #9cb2ff;
    transition: color .3s ease-in-out;
    font-weight: 100;
  }
  input:focus{
    outline: none;
  }
  input:focus::placeholder{
    color:transparent;
  }
  .container-fluid{
    margin-top: 20px;
    min-height: 100vh;
  }
  .popularText{
    color: #8fa5ee;
    font-weight: 100;
    display: flex;
    justify-content: center;
    letter-spacing: 1px;
  }
  .film{
    width: 250px;
    height: 380px;
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    margin:20px 5px;
    color: #8fa5ee;
    letter-spacing:2px;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 15px;
    position : relative;
    transition: background-color .3s ease-in-out;
  }
  .film img{
    width: 200px;
    transition:box-shadow .2s ease-in, width .2s ease-in;
  }
  .filmName{
    transition: color .4s ease-in-out;
    padding:15px 60px;
  }
  .film:hover img{
    width: 230px;
    box-shadow:0 0 45px #3f6aa0;
  }
  span{
    font-size: 15px;
    font-weight: 100!important;
  }
  .film img{
    border-radius: 5px;
  }
  .containerNext{
    width: 100%;
    margin: 40px auto auto;
  }
  .nextDiv{
    width: 90%;
    position: relative;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    height: 0;
  }
  .nextText{
    width: 130px;
    height: 40px;
    color:#8fa5ee;
    border-radius: 100px;
    border: 1px solid #8fa5ee;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    font-weight: 100;
    transition: background-color .2s ease-in-out,margin-top .2s ease-out;
    cursor: pointer;
    text-decoration: none;
  }
  .nextText:hover{
    background-color: #b301ff;
    color: #b3fdff;
    border: 1px solid #b301ff;
    position: relative;
    margin-top: -10px;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px) {
    .spinner-grow{
      width: 150px;
      height: 150px;
      background-color: #8fa5ee;
    }
    .film:hover .filmName{
      text-decoration: none!important;
      color: #8fa5ee;
    }
    nav{
      margin-top:30px!important;
      margin-bottom: 80px;
      display:flex;
      justify-content: center!important;
      padding:0!important;
    }
    input{
      font-size: 50px;
      border:2px solid #8fa5ee;
      border-left:transparent!important;
      height: auto;
    }
    button{
      height: auto;
      padding: 3px 20px 3px 25px;
      font-size: 50px;
      border:2px solid #8fa5ee;
      border-right: transparent!important;
    }
    h1{
      font-size: 90px!important;
      margin: 30px auto 50px;
      border-bottom: 2px solid #8fa5ee;
      width: 700px;
    }
    .film{
      width:45%;
      height:auto;
      margin: 5px 5px 60px;
    }
    .film img{
      border-radius: 10px!important;
    }
    img{
      width:90%!important;
      box-shadow: none!important;
    }
    .filmName{
      font-size: 35px;
      padding:0 40px!important;
    }
    .nextText{
      width: 250px;
      height: 90px;
      font-size: 40px;
      border: 2px solid #8fa5ee;
    }
    .nextText{
      margin-top: 0!important;
    }
    .popularText {
      font-size: 65px;
      margin-bottom: 60px !important;
      padding-bottom: 20px !important;
    }
  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px) {
    .spinner-grow{
      width: 120px;
      height: 120px;
      margin-top: 100px;
      background-color: #8fa5ee;
    }
    nav{
      margin-top:30px!important;
      margin-bottom: 50px;
      display:flex;
      justify-content: center!important;
      padding:0!important;
    }
    .film:hover .filmName{
      text-decoration: none!important;
      color: #8fa5ee;
    }
    input{
      font-size: 37px;
      border:2px solid #8fa5ee;
      border-left:transparent!important;
      height: auto;
    }
    button{
      height: auto;
      padding: 3px 20px 4px 25px;
      font-size: 37px;
      border:2px solid #8fa5ee;
      border-right: transparent!important;
    }
    h1{
      font-size: 70px!important;
      margin: auto auto 30px;
      border-bottom: 2px solid #8fa5ee;
      width: 70%;
    }
    .film{
      width:30%;
      height:auto;
      margin: 5px 5px 60px;
    }
    .film img{
      border-radius: 10px!important;
    }
    img{
      width:90%!important;
      box-shadow: none!important;
    }
    .filmName{
      font-size: 28px;
      padding: 0 40px;
    }
    .nextText{
      width: 230px;
      height: 70px;
      font-size: 30px;
      border: 2px solid #8fa5ee;
    }
    .nextText{
      margin-top: 0!important;
    }
    .popularText{
      font-size: 65px;
      padding-bottom:20px!important;
      margin-bottom:45px!important;
    }
  }
</style>
