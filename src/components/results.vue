<template>
       <div class="container-fluid ">
         <nav class="mt-3">
           <button  disabled><i class="fa fa-search"></i></button>
           <input type="text"
                  v-model="inputName"
                  placeholder="search movie..."
                  @keydown.enter="send"
           >
         </nav>
         <h2>Search results for <strong>"{{search}}"</strong></h2>
         <br>
         <transition name="fade" mode="out-in">
           <div key="a" v-if="lists.length<=0" class="loadingDiv" align="center">
             <div class="spinner-grow" role="status"></div>
           </div>

           <div key="b" v-else class="text-center">
             <div class="film" v-for="list in lists" align="center" @click="addedMovie(list)">
               <div  style="position: relative" align="center">
                 <div class="infoDiv">
                   <p class="infoIcon"><i class="fa fa-info-circle"></i><br><span>Click for details</span></p>
                 </div>
                 <img v-if="list.poster_path!==null" :src="url+list.poster_path" class="img-fluid" >
                 <img v-else class="img-fluid" src="/src/img.png" alt="">
               </div>
               <div class="row">
                 <p class="filmName mx-auto mt-3">{{list.title}}</p>
               </div>
             </div>
           </div>
         </transition>

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
            search: localStorage.getItem("searchName"),
            inputName:"",
        }
    },
    created(){
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=01a8d328332172ec0363661a5a8d24b8&query="+localStorage.getItem("searchName"))
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
      })

    },
    methods : {
      send(){
        if(this.inputName!==""){
          localStorage.setItem("searchName", this.inputName);
            this.$store.commit("setResult");
            this.lists = [];
            setTimeout(()=>{
              this.search = localStorage.getItem("searchName");
              this.lists = this.$store.state.resultList
          },1000);
        }
      },
      addedMovie(value){
        localStorage.setItem("movie", JSON.stringify(value));
        this.$router.push("/movie");
      },
    },
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
    padding-top:150px
  }
  nav{
    display: flex;
    justify-content: flex-end!important;
    padding-right: 80px;
    margin-bottom: 20px;
  }
  button{
    border: 1px solid #8fa5ee;
    border-right:none!important;
    background-color:transparent!important;
    height: 30px;
    border-radius: 100px 0 0 100px;
    padding-left:15px;
    cursor: text;
    color:#9cb2ff;
  }
  input{
    border: 1px solid #8fa5ee;
    border-left:none!important;
    background-color:transparent;
    border-radius: 0 100px 100px 0;
    padding-left: 10px;
    padding-right: 15px;
    height: 30px;
    color: #9cb2ff;
    letter-spacing: 1px;
    font-weight: 100;
    outline: none!important;
  }
  ::placeholder{
    color: #9cb2ff;
    transition: color .3s ease-in-out;
    font-weight: 100;
  }
  input:focus::placeholder{
    color:transparent;
  }
  h2{
    color: #4084d1;
    border-bottom: 2px solid #4084d1;
    display: inline!important;
    margin-left: 50px;
    font-weight: 400;
  }
  strong{
    color: #8fa5ee;
    font-weight: 100;
  }
  .container-fluid{
        min-height: 100vh;
    }
  .film{
    width: 200px;
    display: inline-block;
    margin: 60px 20px 20px;
    color: #8fa5ee;
    letter-spacing:2px;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 15px;
    position : relative;
  }
  .filmName{
    transition: color .4s ease-in-out;
  }
  .film:hover .infoDiv{
    opacity: 1;
  }
  .film:hover .filmName{
    text-decoration: underline ;
    color: #42fff0;
  }
  .infoDiv{
    position: absolute;
    width: 100%;
    background: linear-gradient(-50deg, rgb(0, 0, 0),rgba(110, 7, 128, 0.65), rgba(246, 250, 255, 0.6));
    height: 100%;
    border-radius: 3px;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity .4s ease-in-out;
  }
  .infoIcon{
    font-size: 35px;
    color : whitesmoke;
  }
  span{
    font-size: 18px;
  }
  .film img{
    border-radius: 3px;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px) {
      .spinner-grow{
        width: 150px;
        height: 150px;
        margin-top: 150px;
        background-color: #8fa5ee;
      }
      nav{
        margin-top:30px!important;
        margin-bottom: 80px;
        display:flex;
        justify-content: center!important;
        padding:0!important;
      }
      .film:hover .filmName{
      text-decoration: none!important;
      color: #8fa5ee;
    }
      input{
        font-size: 50px;
        border: 2px solid #8fa5ee!important;
        border-left:transparent!important;
        height: auto;
      }
      .infoDiv{
        display: none;
      }
      button{
        height: auto;
        padding: 3px 20px 3px 25px;
        font-size: 50px;
        border:2px solid #8fa5ee;
        border-right: transparent!important;
      }
      .container-fluid{
        text-align: center;
      }
      h2{
        font-size: 55px;
        color: #4699ec;
        margin:0!important;
      }
      .film{
        width:55%;
        margin-bottom: 60px;
      }
      img{
        width: 100%;
      }
      .filmName {
        font-size: 55px;
      }
    }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px) {
    .spinner-grow{
      width: 120px;
      height: 120px;
      margin-top: 150px;
      background-color: #8fa5ee;
    }
    .infoDiv{
      display: none;
    }
    .film:hover .filmName{
      text-decoration: none!important;
      color: #8fa5ee;
    }
    nav{
      margin-top:30px!important;
      margin-bottom: 50px;
      display:flex;
      justify-content: center!important;
      padding:0!important;
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
    .container-fluid{
      text-align: center;
    }
    h2{
      font-size: 43px;
      color: #4699ec;
      margin:0!important;
    }
    .film{
      width:35%;
      margin-bottom: 60px;
    }
    img{
      width: 100%;
    }
    .filmName {
      font-size: 37px;
    }
    .infoDiv span{
      font-size: 30px;
    }
    .infoDiv i{
      font-size: 70px;
    }
  }
</style>
