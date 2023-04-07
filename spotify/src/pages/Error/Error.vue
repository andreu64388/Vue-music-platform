<script>
import "./Error.scss"
export default {
   name: "Error",
   data() {
      return {}
   }
}
</script>


<template>
   <div class="error">
      <p>
         Error 404
      </p>
      <router-link to="/">
         <button class="go-home-btn">Go Home</button>
      </router-link>
   </div>
</template>