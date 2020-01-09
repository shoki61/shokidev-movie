import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import {router} from "./router"




Vue.use(Vuex);

export const store = new Vuex.Store({
   state : {
       resultList : [],
       moviesList : [],
       page : 1
   },
   mutations : {
       setResult(state){
           axios.get("https://api.themoviedb.org/3/search/movie?api_key=01a8d328332172ec0363661a5a8d24b8&query="+localStorage.getItem("searchName"))
               .then((response)=>{
                   let data = response.data;
                   if(data.results.length===0){
                       router.push("/error")
                   }else{
                       state.resultList = data.results;
                   }
               }).catch(()=>{
               router.push("/error")
           })
       },
       increasePage(state){
           state.page++;
           axios.get("https://api.themoviedb.org/3/discover/movie?api_key=01a8d328332172ec0363661a5a8d24b8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+state.page)
               .then((response)=>{
                   let data = response.data;
                   if(data.results.length===0){
                       router.push("/error")
                   }else{
                       state.moviesList = data.results;
                   }
               }).catch(()=>{
                   router.push("/error")
               });
       },
       decreasePage(state){
           state.page--;
               axios.get("https://api.themoviedb.org/3/discover/movie?api_key=01a8d328332172ec0363661a5a8d24b8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+state.page)
                   .then((response)=>{
                       let data = response.data;
                       if(data.results.length===0){
                           this.$router.push("/error")
                       }else{
                           state.moviesList = data.results;
                       }
                   }).catch(()=>{
                   router.push("/error")
               });
       }
   },
});
