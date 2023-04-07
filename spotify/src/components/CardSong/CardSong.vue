<script>
import "./CardSong.sccs"
export default {
   name: "Search",
   props: {
      item: Object,
      song_array: Array,
   },
   data() {
      return {
         isPlay: false
      }
   }
}
</script>


<template>
   <router-link :to="`/user/track/${item?.track_id}`">
      <div class="card_song" :key="item?.id_track">
         <img :src="item?.track_image" />
         <div class="text_block">
            <p class="title_song">{{ item?.track_title }}</p>
            <p class="artist_song">
               <template v-for="(el, index) in item?.users">
                  <router-link :to="`/user/executor/${el?.user_id}`">{{ el.user_name }}</router-link>
                  <span v-if="index !== item.users?.length - 1" style="color: gray">, </span>
               </template>
            </p>
         </div>
         <div class="music_player" :class="(track_id === item?.track_id && isPlay) ? 'how' : ''"
            @click.prevent="track_id === item?.track_id ? (isPlay ? pauseSong() : playSong(item)) : playSong(item)">
            <img
               :src="!isPlay || track_id !== item?.track_id ? `${import.meta.env.BASE_URL}/icons/Player.svg` : `${import.meta.env.BASE_URL}/icons/stop1.svg`" />
         </div>
      </div>
   </router-link>
</template>