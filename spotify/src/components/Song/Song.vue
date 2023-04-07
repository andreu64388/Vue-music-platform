<script>

import "./Song.scss"
import Modal from "../Modal/Modal.vue"
export default {
   components: {
      Modal
   },
   name: "Song",
   props: {
      isAdd: Boolean,
      item: Object,
      songs_array: Array,
      style: Object,
      isAddDelete: Boolean,
      playlist_id: [Number, String]
   },
   data() {
      return {
         menu: false,
         liked: false,
         add: false,
         modal: false,
         genre: "",
         name: "",
         image: "",
         genres_arr: [],
         your_track: []

      }

   },
   methods: {

   },
   created() {
      if (this.genres) {
         this.genres_arr = [...this.genres];
      }
   },
   computed: {

   }
   ,
   watch: {
      library: {
         handler: function (newVal) {
            if (newVal) {
               if (newVal.find(obj => Number(obj.track_id) === Number(this.item.track_id))) {
                  this.liked = true;
               } else {
                  this.liked = false;
               }
            }
         },
         deep: true
      },
      item: {
         handler: function (newVal) {
            if (this.library) {
               if (this.library.find(obj => Number(obj.track_id) === Number(newVal.track_id))) {
                  this.liked = true;
               } else {
                  this.liked = false;
               }
            }
         },
         deep: true
      }

   }
}
</script>




<template>
   <div class="song" :style="style && { order: style }">
      <img class="play" :src="
      !isPlay || track_id !== item?.track_id
         ? process.env.PUBLIC_URL + '/icons/play.svg'
         : process.env.PUBLIC_URL + '/icons/stop_song.svg'
         " @click="
   track_id === item?.track_id
      ? isPlay
         ? pauseSong()
         : playSong(item)
      : playSong(item)
      " />
      <div class="description">
         <div class="artist">
            <template v-for="(el, index) in item.users">
               <router-link :to="`/user/executor/:${el.user_id}`" style="color: grey">{{ el?.user_name
               }}</router-link><span style="color: gray">{{ index === item.users?.length - 1 ? '' : ',' }}</span>
            </template>
         </div>
         <router-link :to="`/user/track/:${item?.track_id}`" class="name_song outside">{{ item?.track_title
         }}</router-link>
      </div>
      <div class="action">
         <template v-if="!isAdd">
            <img :src="
            !liked
               ? import.meta.env.BASE_URL + '/icons/heart.svg'
               : import.meta.env.BASE_URL + '/icons/full.svg'
               " @click="
   !liked ? AddLibrary(item?.track_id) : DeleteLibrary(item?.track_id)
      " />
            <img class="dot" src="http://localhost:5173/icons/dot.svg" alt="menu" @click="handleDotClick" />
            <div class="menu" v-if="menu">
               <template v-if="playlists_users?.length != 0">
                  <div class="btn" @click="setAdd(!add)">Add in playlist
                     <template v-if="!add">
                        <div class="add_list">
                           <ul>
                              <li v-for="(el, index) in playlists_users" :key="el.playlist_id"
                                 @click="AddInPlayList(item?.track_id, el?.playlist_id)">{{ el?.title }}</li>
                           </ul>
                        </div>
                     </template>
                  </div>
               </template>
               <template v-else>
                  <div style="text-align: center">Not playlist</div>
               </template>
               <template v-if="your_track">
                  <div class="btn" @click="ChangeModal(true)">Edit</div>
                  <div class="btn" @click="DeleteTracks(item?.track_id)">Delete</div>
               </template>
            </div>
         </template>
         <template v-else>
            <template v-if="isAddDelete">
               <p class="plus" style="width: 100%; height: 100%">
                  <button @click="AddInPlayList(item?.track_id)">Add</button>
               </p>
            </template>
            <template v-else>
               <p class="plus" style="width: 100%; height: 100%">
                  <button style="background: red" @click="DeleteTrackInPlaylists(item?.track_id)">Del</button>
               </p>
            </template>
            <Modal v-if="modal" @ChangeModal="changeModalState">
               <div class="modal_content">
                  <h1 class="title">Update track</h1>
                  <h2 class="name">Name</h2>
                  <input type="text" v-model="name" @input="updateName" />
                  <div class="block">
                     <div class="images">
                        <img v-if="image" :src="URL.createObjectURL(image)" alt="" />
                        <img v-else :src="item?.track_image" alt="" />
                        <button @click="setImage(null)">Cancel</button>
                     </div>
                     <label for="photolabel">
                        <span>Image</span>
                        <img :src="`${import.meta.env.BASE_URL}/icons/download.svg`" alt="" />
                     </label>
                     <input type="file" id="photolabel" accept=".jpg, .jpeg, .png" @change="updateImage" />
                  </div>
                  <div class="select">
                     <h2 class="name">Genre</h2>
                     <select class="select" v-model="genre" @change="updateGenre">
                        <option v-for="(item, index) in genres_arr" :key="item?.genre_id" :value="item?.genre_id">
                           {{ item?.genre_name }}
                        </option>
                     </select>
                  </div>
                  <div class="buttons">
                     <button class="submit" @click="UpdateTrackFunc(item?.track_id)">Submit</button>
                  </div>
               </div>
            </Modal>
         </template>
      </div>
   </div>
</template>