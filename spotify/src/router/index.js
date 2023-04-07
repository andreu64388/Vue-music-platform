import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home/Home.vue";
import Search from "../pages/Search/Search.vue";
import Library from "../pages/Library/Library.vue";
import PageAddTrack from "../pages/PageAddTrack/PageAddTrack.vue";
import Settings from "../pages/Settings/Settings.vue";
import Register from "../pages/Register/Register.vue";
import Login from "../pages/Login/Login.vue";
import Profile from "../pages/Profile/Profile.vue";
import Track from "../pages/Track/Track.vue";
import Executor from "../pages/Executor/Executor.vue";
import Playlist from "../pages/Playlist/Playlist.vue";
import Password from "../pages/Password/Password.vue";
import EditProfile from "../pages/EditProfile/EditProfile.vue";
import Error from "../pages/Error/Error.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/user/search",
      name: "search",
      component: Search,
    },
    {
      path: "/user/library",
      name: "Library",
      component: Library,
    },
    {
      path: "/user/add_track",
      name: "PageAddTrack",
      component: PageAddTrack,
    },
    {
      path: "/user/track/:track_id",
      name: "Track",
      component: Track,
    },
    {
      path: "/user/executor/:executor_id",
      name: "Executor",
      component: Executor,
    },
    {
      path: "/user/playlist/:playlist_id",
      name: "Playlist",
      component: Playlist,
    },
    {
      path: "/user/password",
      name: "Password",
      component: Password,
    },
    {
      path: "/user/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/user/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/user/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/user/settings",
      name: "Settings",
      component: Settings,
    },
    {
      path: "/user/edit",
      name: "EditProfile",
      component: EditProfile,
    },
    {
      path: "/:catchAll(.*)",
      name: "Error",
      component: Error,
    },
  ],
});

export default router;
