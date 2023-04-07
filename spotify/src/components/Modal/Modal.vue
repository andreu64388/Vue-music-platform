<script>
import "./Modal.scss"
import { mapGetters } from "vuex"

export default {
   name: "Modal",
   props: {
      changeModal: {
         type: Function,
         required: true,
      }
   }
   ,
   data() {
   }
}

</script>


<template>
   <div class="modal">
      <div class="close" @click="changeModal(false)">
         <img src="http://localhost:5173/icons/close.svg" alt="close" />
      </div>
      <slot></slot>
   </div>
</template>