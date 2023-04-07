<script>
import "./Password.scss";
export default {
   name: "Password",
   data() {
      return {
         oldPassword: "",
         newPassword: "",
         newPassword2: "",
      }
   }
   ,
   methods: {
      ChangePassword() {

      }
   }
}
</script>

<template>
   <div class='wrapper'>
      <div class="wrapper_all">
         <div class="password">
            <div class="block_text_image">
               <h1 class="title">
                  Change password
               </h1>
            </div>
            <div class="block_form">
               <div class="block">
                  <h2 class="enter_value">
                     Your old password
                  </h2>
                  <input type="password" v-model="oldPassword" placeholder='Andrey...' />
               </div>

               <div class="block">
                  <h2 class="enter_value">
                     Your new password
                  </h2>
                  <input type="password" v-model="newPassword" placeholder='Andrey...' />
               </div>

               <div class="block">
                  <h2 class="enter_value">
                     Yet new password
                  </h2>
                  <input type="password" v-model="newPassword2" placeholder='Andrey...' />
               </div>
               <button class="save" @click="ChangePassword">
                  Save
               </button>
            </div>
         </div>
      </div>
   </div>
</template>