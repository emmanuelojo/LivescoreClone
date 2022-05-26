import { createRouter, createWebHistory } from "vue-router";
import GameDetails from "../views/GameDetails.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/games/:id",
    name: "Game Details",
    component: GameDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
