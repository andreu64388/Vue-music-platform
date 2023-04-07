<script>
import "./EditProfile.scss";
export default {
   name: "ProfileEdit",
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
         day: "",
         month: "",
         year: "",
         image: null,
         user: {}, // assuming you have a user object with a user_img property
      };
   },
   methods: {
      handleImageChange(event) {
         this.image = event.target.files[0];
      },
      save() {
         // handle save logic here
      },
   },
};
</script>

<template>
   <div class="wrapper">
      <div class="wrapper_all">
         <div class="profile_edit">
            <div class="block_text_image">
               <h1 class="title">Change profile</h1>
               <div class="img">
                  <img v-if="image" :src="URL.createObjectURL(image)" alt="" />
                  <img v-else :src="user?.user_img" alt="" />
                  <div class="div">
                     <label for="photolabel">
                        <span>Image</span>
                     </label>
                     <input type="file" id="photolabel" accept=".jpg, .jpeg, .png" @change="handleImageChange" />
                  </div>
               </div>
            </div>
            <div class="block_form">
               <div class="block">
                  <h2 class="enter_value">Your name</h2>
                  <input type="text" v-model="name" placeholder="Andrey..." />
               </div>
               <div class="block date">
                  <h2 class="enter_value">Your date of birthday</h2>
                  <div class="dates">
                     <input type="text" v-model="day" placeholder="12" />
                     <select id="months" v-model="month">
                        <option v-for="(month, index) in months" :key="index" :value="index + 1">
                           {{ month }}
                        </option>
                     </select>
                     <input type="text" v-model="year" placeholder="2003" />
                  </div>
               </div>
               <button class="save" @click="save">Save</button>
            </div>
         </div>
      </div>
   </div>
</template>