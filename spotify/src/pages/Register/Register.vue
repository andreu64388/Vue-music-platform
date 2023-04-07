<script>
import { mapGetters } from "vuex";
import "./Register.scss"
export default {
   name: "Pegister",
   data() {
      return {
         months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
         ],
         name: "",
         password: "",
         email: "",
         month: "",
         year: "",
         image: "",
         day: "",
         imageURL: ""

      }
   },

   methods: {
      removeImage() {
         this.image = "";
      },
      registerUser() {

         const monthId = this.months.indexOf(this.month) + 1;
         const formData = new FormData();

         formData.append("name", this.name);
         formData.append("user_email", this.email);
         formData.append("user_password", this.password);
         formData.append("user_date_of_birth", `${this.day}-${monthId}-${this.year}`);
         formData.append("user_role_id", "1");
         formData.append("user_image", this.imageURL);

         const form = {
            user_name: formData.get("name"),
            user_email: formData.get("user_email"),
            user_password: formData.get("user_password"),
            user_date_of_birth: formData.get("user_date_of_birth"),
            user_role_id: formData.get("user_role_id"),
            user_img: formData.get("user_image"),
         }

         this.$store.dispatch('registerUser', form);


      },
      handleImageChange(event) {
         const file = event.target.files[0];
         this.imageURL = file;

         const reader = new FileReader();

         reader.onload = (e) => {
            this.image = e.target.result;
         };
         reader.readAsDataURL(file);
      },
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
      <div class='regiser'>
         <h1 class="title">
            Register
         </h1>
         <div class="block_form">
            <div class="block">
               <h2 class="enter_value">
                  Your email
               </h2>
               <input type="email" v-model="email" placeholder='Andrey...' />
            </div>
            <div class="block">
               <h2 class="enter_value">
                  Your password
               </h2>
               <input type="password" v-model="password" placeholder='Andrey...' />
            </div>
            <div class="block">
               <h2 class="enter_value">
                  Your name
               </h2>
               <input type="text" v-model="name" placeholder='Andrey...' />
            </div>
            <div class="block date">
               <h2 class="enter_value">
                  Your date of birthday
               </h2>
               <div class="dates">
                  <input type="text" v-model="day" maxLength="2" placeholder='12' />
                  <select id="months" v-model="month">
                     <option v-for="el in months" :key="el" :value="el">
                        {{ el }}
                     </option>
                  </select>
                  <input type="text" v-model="year" placeholder='2003' maxLength="4" />
               </div>
            </div>
            <div class="buttom_download">
               <template v-if="!image">
                  <label for="photolabel">
                     <span>Image</span>
                     <img src="http://localhost:5173/icons/download.svg" alt="" />
                  </label>
                  <input type="file" id="photolabel" accept=".jpg, .jpeg, .png" @change="handleImageChange" />
               </template>
               <template v-else>
                  <div class='images'>
                     <img v-if="image" :src="image">
                     <button @click="removeImage">Cansel</button>
                  </div>
               </template>
            </div>
            <div class="message">
               {{ message }}
            </div>
            <button class="submit" @click="registerUser">
               Register
            </button>
            <div class="login">
               <span>Do you account
               </span>
               <router-link to="/user/login">Login</router-link>
            </div>
         </div>
      </div>
   </div>
</template>