<script lang="ts">
import type { counter } from '@fortawesome/fontawesome-svg-core';
import { defineComponent } from 'vue'
import ContactForm from '../components/ContactForm.vue'
import axios from "axios"

export default defineComponent({
  data() {
    return{
      htmlYT: "",
      iframeYT: "",
    }
  },
  methods:{
    async fetchYT(){
      const response = await axios.get('https://iglesiavida.mx/youtube.api.main2.php')
      this.htmlYT = response.data
      this.iframeYT = '<iframe width="100%" height="100%" style="max-width: 1280px; max-height: 720px;" src="https://www.youtube.com/embed/'+this.htmlYT.videoID+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      console.log(this.htmlYT)
    }
  },
  created: function() {
    this.fetchYT();
  },
})
</script>

<template>
  <main>
    <!-- Wrapper -->
		<div id="wrapper" class="divided text-separation">
			<div id="mainpic">
			  <img src="src/assets/images/fotomain.png" width="100%" height="auto" alt=""/>
		  </div>

      <div class="wrapper style1 align-center" style="margin-bottom: 0px; overflow:auto;">
        <div class="inner">
          <h3 style="letter-spacing: 10px; color: #666;">SE PARTE DE NUESTRAS REUNIONES
            <br>
          </h3>
          
          <div class="split" style="border-right: 0px solid #555;"><h4 style="color: #666; letter-spacing: 10px;">PRESENCIALES</h4>
            
            <!--<a href="asistencia/index.php?campus=1">-->
            <a href="campus-delicias/">
              <div class="boton">
              DELICIAS
              </div>
            </a>
            <!--<a href="asistencia/index.php?campus=2">-->
            <a href="campus-cuauhtemoc/">
              <div class="boton">
                CUAUHTÉMOC
              </div>
            </a>
            <!--<a href="asistencia/index.php?campus=3">-->
            <a href="campus-chihuahua/">
              <div class="boton">
                CHIHUAHUA
              </div>
            </a>
            <!--<a href="asistencia/index.php?campus=4">-->
            <a href="campus-parral/">
              <div class="boton">
                PARRAL
              </div>
            </a>
            </div>
            
            
              <div class="split">
                
                <h3 style="letter-spacing: 2px;">{{ htmlYT.title }}</h3>
                <div class="video-container">
                  
                  <div class="frame" v-html="iframeYT"></div>
                  
                </div>
              </div>
        </div>
      </div>
    </div>
				
		<section style="text-align: center; margin: 60px auto; overflow: auto; clear: both; color: #666;">
		<br><br>
			<h2 style="color: #666; letter-spacing: 10px;">DAR</h2>
			<H4 style="color: #666; letter-spacing: 10px;">TENEMOS DIFERENTES FORMAS DE DAR</H4>
			<a href="/dar"><div class="boton" style="max-width: 400px;">VER OPCIONES</div></a>
		</section>
	
		<section style="overflow: auto; clear: both;">
			<a href="#contacto">
			<div class="split">
				<img src="src/assets/images/orar.png" width="100%" height="auto" alt=""/> 
			</div>
			</a>
			<div class="split">
				<a href="plan.login.php"><img src="src/assets/images/plan.png" width="100%" height="auto" alt=""/></a>
			</div>
		</section>
		
		<section>
			<div class="central">
				<a href="http://reformacentral.iglesiavida.mx"><img class="hidden" src="src/assets/images/rcentral.png" style="max-width:700px; min-width: 250px;" width="100%" height="auto" alt=""/></a>
				<br><br><a href="reformacentral/formulario.php"><div class="boton" style="max-width: 400px;">INSCRÍBETE YA!</div></a>
			</div>
		</section>
		
		
		<a name="contacto"></a>
		<ContactForm />
  </main>
</template>

<style scoped>
body
  .text-separation{
    letter-spacing: 10px;
  }
  a{
    color: #fff;
    text-decoration:none;
  }
  .central{
    margin: 0 auto; 
    text-align: center; 
    margin: 150px; 
    clear: both;
  }
  .fotos{
    float: left; 
    width: 33.33%; 
    height: 350px;
  }
  .split{
    float: left;
    width: 50%;
  }
  .hidden{
    visibility: hidden;
  }
  
  @media screen and (max-width: 900px) {
    .fotos{
        height: 130px;
      }
    .central{
    margin: 0 auto; 
    text-align: center; 
    margin: 30px; 
    clear: both;
    background-image: var(--logo-central);
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center 25px;
  }
  }
  @media screen and (max-width: 480px) {
    .fotos{
        
        height: 130px;
      }
  }
  .boton{
    width: 50%;
    min-width: 300px;
    background: var(--color-text-black-to-white);
    color: var(--color-text-white-to-black);
    padding: 15px;
    margin: 25px auto;
  }
  .fotolinea{
    padding-top:65px;
  }
  @media screen and (min-width:1300px){
    .boton{
      min-width: 420px;
    }
    .fotolinea{
    padding-top:35px;
    }
  }
  @media screen and (max-width:1000px){
    .split{
      width: 100%;
      float: none;
      text-align: center;
      margin: 0 auto;
    }
    .fotolinea{
      padding-top:15px;
    }
}
.yt-item{
		width: 50%;
		float: left;
		display: inline-block;
		margin: 20px 0px;
		padding: 50px;
	}
	@media screen and (max-width:800px){
		.yt-item{
		width: 100%;
		float: none;
		display: inline-block;
			padding: 10px;
	}
}
.video-container {
position: relative;
padding-bottom: 56.25%; /* 16:9 */
height: 0;
}
.video-container .frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>