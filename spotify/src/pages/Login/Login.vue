<script>
import { mapGetters } from "vuex";
import "./Login.scss";

export default {
   name: "Login",
   data() {
      return {
         email: "",
         password: ""
      }
   },
   methods: {



      Login() {

         const datas = {
            user_email: this.email,
            user_password: this.password
         }
         this.$store.dispatch('LoginUser', {
            datas
         })
      }

   },
   computed: {
      ...mapGetters(['user']),
      isLoggedIn() {
         return Boolean(this.user)
      }
   },
   watch: {
      isLoggedIn(newVal) {
         if (newVal) {
            console.log(this.user);
            this.$router.push('/');
         }
      }
   }
}
</script>

<template>
   <div class="wrapper_all">
      <div class='login_main'>
         <h1 class="title">
            Login
         </h1>
         <div class="block_form">
            <div class="block">
               <h2 class="enter_value">
                  Your email
               </h2>
               <input type="email" v-model="email" />
            </div>
            <div class="block">
               <h2 class="enter_value">
                  Your password
               </h2>
               <input type="password" v-model="password" />
            </div>

            <button class="submit" @click="Login">
               Login
            </button>
            <div class="login">
               <span>Do you account? </span>
               <router-link to="/user/register">Register</router-link>
            </div>
         </div>
      </div>
   </div>
</template>