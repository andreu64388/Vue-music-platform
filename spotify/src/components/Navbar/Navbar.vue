<script >

import { mapGetters } from "vuex";
import "./Navbar.scss"

export default {
  name: 'Navbar',
  data() {
    return {
      isAuth: true,

      items1: [
        {
          id: 1,
          title: "Home",
          path: "/",
          icon: "http://localhost:5173/icons/home.svg",
        },
        {
          id: 2,
          title: "Search",
          path: "/user/search",
          icon: "http://localhost:5173/icons/search.svg",
        },
        {
          id: 3,
          title: "Your Library",
          path: "/user/library",
          icon: "http://localhost:5173/icons/library.svg",
        },
        {
          id: 4,
          title: "Add a track",
          path: "/user/add_track",
          icon: "http://localhost:5173/icons/add.svg",
        },
      ],
      items2: [
        {
          id: 1,
          title: "Profile",
          path: "/user/profile",
          icon: "http://localhost:5173/icons/userprofile.svg",
        },
        {
          id: 2,
          title: "Edit",
          path: "/user/edit",
          icon: "http://localhost:5173/icons/edit.svg",
        },
        {
          id: 3,
          title: "Password",
          path: "/user/password",
          icon: "http://localhost:5173/icons/pass.svg",
        },
      ],
      elements: [],
      isRegister: false,
      isLogin: false,
      isAuth: true,
      isOpen: false,
    }
  },
  methods: {
    ChangeOpen(value) {
      this.isOpen = value;
    },
    isActiveLink(path) {
      return this.$route.path === path;
    }
    ,
    Logaut() {
      this.isOpen = false;
      this.$store.commit("logout")


    }
  },
  mounted() {
    this.isRegister = this.$route.path === "/user/register";
    this.isLogin = this.$route.path === "/user/login";
    const isProfile = this.$route.path === "/user/profile";
    const isEdit = this.$route.path === "/user/edit";
    const isPass = this.$route.path === "/user/password";
    if (isProfile || isPass || isEdit) {

    } else {
      this.elements = this.items1;
    }
  },
  computed: {
    ...mapGetters(["user"]),
  }
  ,
  watch: {
    '$route.path': function (newPath, oldPath) {
      this.isRegister = this.$route.path === "/user/register";
      this.isLogin = this.$route.path === "/user/login";
      const isProfile = this.$route.path === "/user/profile";
      const isEdit = this.$route.path === "/user/edit";
      const isPass = this.$route.path === "/user/password";
      if (isProfile || isPass || isEdit) {
        this.elements = this.items2;
      } else {
        this.elements = this.items1;
      }
    },
  },
};


</script>

<template>
  <div>
    <template v-if="!isRegister && !isLogin">
      <div class="navbar_user">
        <nav class="navbar">
          <div class="logo">
            <router-link to="/">
              <img src="http://localhost:5173/icons/logoG.svg" alt="">
            </router-link>
          </div>
          <ul>
            <template v-for="item in elements" :key="item.id">
              <li>
                <router-link :to="item.path" :class="{ active: isActiveLink(item.path) }">
                  <img :src="`${item.icon}`" :alt="item.icon" />
                  <p>{{ item?.title }}</p>
                </router-link>
              </li>
            </template>
          </ul>
        </nav>
        <nav class="up_nav">
          <template v-if="!isAuth">
            <div class="output">
              <router-link to="/user/register" class="register">Register</router-link>
              <router-link to="/user/login" class="login">Login</router-link>
            </div>
          </template>
          <template v-else>
            <div class="nav_profile">
              <div class="circle">
                <img src="http://localhost:5173/icons/user.svg" alt="profile" />
              </div>
              <div class="name" @click="ChangeOpen(!isOpen)">
                <span>{{ user?.user_name }}</span>
                <img :class="['polygon', isOpen ? 'open' : '']" src="http://localhost:5173/icons/Polygon.svg"
                  alt="polygon" />
              </div>
              <nav :class="['down_nav', isOpen ? 'open' : '']">
                <ul>
                  <li><router-link to="/user/profile" @click="ChangeOpen(false)">Profile</router-link></li>
                  <li><router-link to="/user/settings" @click="ChangeOpen(false)">Setting</router-link></li>
                  <div className="line"></div>
                  <li><router-link to="/user/login" @click="Logaut">Exit</router-link></li>
                </ul>
                <!-- /*@click="LogoutUser"*/ -->
              </nav>
            </div>
          </template>
        </nav>
      </div>
    </template>
    <template v-else>
      <div class="navbar_user">
        <nav class="up_nav">
          <router-link to="/" class="logo">
            <img src="http://localhost:5173/icons/logoG.svg`" alt="">
          </router-link>
        </nav>
      </div>
    </template>
  </div>
</template>