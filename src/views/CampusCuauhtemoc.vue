<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
<!-- Wrapper -->
    <ul class="actions special">
        <li><a href="/" class="button primary padd"> <FontAwesomeIcon icon="fa-solid fa-home"></FontAwesomeIcon> Regresar</a></li>
    </ul>
    <!-- Five -->
    <section class="wrapper2 style1 align-center">
        <div class="inner">
            <p>&nbsp;</p>
            <h3>CAMPUS CUAUHTÉMOC</h3>
            <p>&nbsp;</p>
        </div>
    </section>
    <section class="wrapper style1 align-center">
        
        <section class="wrapper style1 align-center">
            <div class="inner" style="margin: 0px; padding: 0px; width: 100%">
                <div class="gallery style2 medium lightbox onscroll-fade-in">
                    <article>
                        <a href="src/assets/images/campus/cuauh/1.jpg" class="image">
                            <img src="src/assets/images/campus/cuauh/1.jpg" alt="" />
                        </a>
                    </article>
                    <article>
                        <a href="src/assets/images/campus/cuauh/2.jpg" class="image">
                            <img src="src/assets/images/campus/cuauh/2.jpg" alt="" />
                        </a>
                    </article>
                        <article>
                        <a href="src/assets/images/campus/cuauh/3.jpg" class="image">
                            <img src="src/assets/images/campus/cuauh/3.jpg" alt="" />
                        </a>
                    </article>
                        <article>
                        <a href="src/assets/images/campus/cuauh/4.jpg" class="image">
                            <img src="src/assets/images/campus/cuauh/4.jpg" alt="" />
                        </a>
                    </article>
                        <article>
                        <a href="src/assets/images/campus/cuauh/5.jpg" class="image">
                            <img src="src/assets/images/campus/cuauh/5.jpg" alt="" />
                        </a>
                    </article>
                        <article>
                        <a href="src/assets/images/campus/cuauh/6.jpg" class="image">
                            <img src="src/assets/images/campus/cuauh/6.jpg" alt="" />
                        </a>
                    </article>
                        <article>
                        <a href="src/assets/images/campus/cuauh/7.jpg" class="image">
                            <img src="src/assets/images/campus/cuauh/7.jpg" alt="" />
                        </a>
                    </article>
                        <article>
                        <a href="src/assets/images/campus/cuauh/8.jpg" class="image">
                            <img src="src/assets/images/campus/cuauh/8.jpg" alt="" />
                        </a>
                    </article>
                            <article>
                        <a href="src/assets/images/campus/cuauh/9.jpg" class="image">
                            <img src="src/assets/images/campus/cuauh/9.jpg" alt="" />
                        </a>
                    </article>
                
                </div>
                <div class="items style1 medium onscroll-fade-in">
                    <section>
                        <h3>Ubicación</h3>
                        <p style="font-weight: 400;">Avenida Aldama #1255 Col. Centro</p>
                        <ul class="actions fit small align-center">
                            <li><a href="https://goo.gl/maps/rVZyMmEMFDzb14hZ9" class="button primary fit small align-center">Mapa</a></li>
                        </ul>
                    </section>
                    <section>
                        <!--<span class="icon solid style2 major fa-save"></span>-->
                        <h3>Horarios</h3>
                        <p style="font-weight: 400;">Reunión de oración<br> Miércoles 8pm<br><br>Reunión General <br>Domingo 12pm <br><br> Jóvenes Sábado 6pm</p>
                    </section>
                </div>
            </div>
        </section>
            <!-- Seven -->
                


        <section>
            <div id="map"></div>
        </section>
    </section>					
</template>

<style scoped>
    .clear{
        clear: left;
        padding: 20px;
    }
    .padd{
        padding: 0px 10px;
    }
    a{
        color: #fff;
        text-decoration:none;
    }
    h3{
        letter-spacing:2px;
        color: var(--color-text-black-to-white);
        text-align: center;
    }
    p{
        letter-spacing:2px;
    }
    h2{
        letter-spacing:2px;
    }
    h1{
        letter-spacing:2px;
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
    @media screen and (max-width: 900px) {
        .fotos{
                height: 130px;
            }
        .central{
        margin: 0 auto; 
        text-align: center; 
        margin: 30px; 
        clear: both;
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
    
		
</style>