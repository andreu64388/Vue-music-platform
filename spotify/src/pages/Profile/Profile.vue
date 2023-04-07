<script>
import "./Profile.scss"
export default {
   name: "Profile",
   data() {
      return {}
   }
}
</script>


<template>
   <div class='wrapper'>
      <div class="wrapper_all">
         <div class="profile">
            <div class="block_text_image">
               <h1 class="title">
                  Profile
               </h1>
               <!-- <img src={user?.user_img} /> -->
               image
            </div>
            <div class="block_info_full">
               <div class="block_text">
                  <p class="state">
                     Name
                  </p>

                  <div class="value">
                     <!-- {user?.user_name} -->
                     name
                  </div>
                  <div class="line"></div>
               </div>
               <div class="block_text">
                  <p class="state">
                     Gmail
                  </p>
                  <div class="value">
                  <!-- {user?.user_email} -->
                  test
                  </div>
                  <div class="line"></div>
               </div>
               <div class="block_text">
                  <p class="state">
                     Date of birthday
                  </p>
                  <div class="value">
                     <!-- {
                              date
                              } -->
                     date
                  </div>
                  <div class="line"></div>
               </div>
               <router-link to="/user/edit" class="change"> Change
               </router-link>

            </div>
         </div>
      </div>
   </div>
</template>