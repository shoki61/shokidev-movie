import Vue from "vue";
import VueRouter from "vue-router";
import movies from "./components/movies";
import movie from "./components/movie"
import results from "./components/results";
import Error from "./components/Error"


Vue.use(VueRouter);

export const router = new VueRouter({
  routes : [
    {path : "/", component : movies},
    {path : "/results", component : results},
    {path : "/movie", component : movie},
    {path : "/error", component : Error},
    {path : "*", result : movies}
  ]
});
