<script lang="ts">
import { defineComponent } from 'vue'

import axios from 'axios'

export default defineComponent({
  data() {
    return{
        yt_data: {}
    }
  },
  methods:{
    async fetchYT(){
      const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLRhHzyryO-il5i8aKlEl1C9Eef_7aNlXr&key=AIzaSyDPnEN7aJwcq5yRZg2j2hGwJ--JUfjfPWc')
      this.yt_data = response.data.items
      console.log(this.yt_data)
    }
  },
  created: function() {
    this.fetchYT();
  },
})
</script>

<!--<li v-for="(items,index) in yt_data">{{ index }} - {{ items.snippet.title }} / {{ items.snippet.resourceId.videoId }}</li>-->
<!--  <h2 :style="`color: ${arrayColores[2]}`">Soy {{ arrayColores[2] }}</h2>-->

<template>
  
  <div id="wrapper" class="wrapperyt">
      <div class="wrapper2 align-center">
        <div class="inner">
          <div  v-for="(item, index) in yt_data" :key="`yt${index}`">
          <div class="video-containerYT">
            
              <h3 class="title">{{ item.snippet.title }}</h3>
              <iframe 
                  width="100%" 
                  height="auto" 
                  style="max-width: 1280px; max-height: 720px;"
                  :src="`https://www.youtube.com/embed/${ item.snippet.resourceId.videoId }`"
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
  </div>
  
</template>

<style>
.title{
  color: var(--color-text-black-to-white);
}
.wrapperyt{
  padding: 30px;
  max-width: 880px;
  margin: 0 auto;
}
.wrapper2{
  padding: 0px;
  margin: 0 auto;
  max-width: 1280px;
}
.video-containerYT { 
  position: relative; 
  padding-bottom: 56.25%; 
  padding-top: 30px; height: 0; 
  overflow: hidden; 
}

.video-containerYT iframe, 
.video-containerYT object, 
.video-containerYT embed { 
  position: absolute; 
  top: 90px; 
  left: 0; 
  width: 100%; 
  height: 100%; 
}
.yt-item{
		width: 50%;
		float: left;
		margin: 20px 0px;
		padding: 50px;
	}

  @media screen and (max-width:1400px){
    .video-container iframe{
    height: 600px;
  }
  }

	@media screen and (max-width:800px){
		.yt-item{
		width: 100%;
		float: none;
		display: inline-block;
			padding: 10px;
	}
  .video-container iframe{
    height: 300px;
  }
}
@media screen and (max-width:480px){
  .video-containerYT iframe, 
.video-containerYT object, 
.video-containerYT embed { 
    height: 220px;
  }
  .video-containerYT { 
  
  padding-bottom: 100%; 
 
}
}
</style>