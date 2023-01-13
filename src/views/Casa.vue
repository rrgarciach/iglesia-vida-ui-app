<script setup lang="ts">
import type ContactFormVue from '@/components/ContactForm.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>                    
    <!-- Wrapper -->
    <div id="wrapper" class="divided">
        <ul class="actions special" style="padding-top: 30px;">
            
            <li><a href="/" class="button primary padd"><FontAwesomeIcon icon="fa-solid fa-home"></FontAwesomeIcon> Regresar</a></li>
        </ul>
        <br/>
        <!-- One -->
        <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
            <div class="content">
                <h1>Ps. Jorge y Mónica Morán</h1>
                <p>Son pastores generales de Iglesia Vida. Hace 3 años tomaron el liderazgo de la iglesia principal en cd. Delicias y comenzaron a visionar con un crecimiento expansivo, creyendo en el futuro de ser una iglesia multi-campus en diferentes ciudades. 
Actualmente es una realidad, Iglesia Vida tiene 4 ubicaciones y creemos en fe, que es solo el comienzo.</p>

            </div>
            <div class="image">
                <img src="src/assets/images/jym.jpg" alt="" />
            </div>
        </section>
        <!-- Two -->
        <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
            <div class="content">
                <h2>Ps. Jazziel y Less Prieto</h2>
                <p>Son pastores generales de Iglesia Vida campus Cuauhtémoc.</p>

                <p>&nbsp;</p>
                <p>&nbsp;</p>							
            </div>
            <div class="image">
                <img src="src/assets/images/jazz_y_lesly.jpg" alt="" />
            </div>
        </section>
        <!-- Three -->
        <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
            <div class="content">
                <h2>Ps. Manuel y Karina Jáquez</h2>
                <p>Juntos, son pastores de Iglesia Vida campus Chihuahua. La iglesia ha tenido un gran crecimiento y sabemos que es solo el principio.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>							
            </div>
            <div class="image">
                <img src="src/assets/images/menykarina.jpg" alt="" />
            </div>
        </section>
        
            

        <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
            <div class="content">
                <h2>David y Mari Morán</h2>
                <p>Son pastores en Iglesia Vida campos Parral.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
            <div class="image">
                <img src="src/assets/images/davidymari.jpg" alt="" />
            </div>
        </section>

        <!-- eIGHT --> 
        <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
            <div class="content">
                <h2>Carlos y Emma West</h2>
                <p>Fueron enviados por nuestros pastores Jorge y Monica, para pastorear y liderar una obra misionera en la comunidad “el Alamito”
Misión que actualmente está alcanzando a muchas familias de raramuris que se encuentran en esta región.</p>
            </div>
            <div class="image">
                <img src="src/assets/images/carlosyemma.jpg" alt="" />
            </div>
        </section>
        
            
        <ul class="actions special" style="padding-top: 30px;">
            <i class=""></i>
            <li><a href="/" class="button primary padd"><FontAwesomeIcon icon="fa-solid fa-home"></FontAwesomeIcon> Regresar</a></li>
        </ul>

        <ContactFormVue />
    </div>
</template>

<style scoped>
p{
    color: var(--color-text-black-to-white);
}
.padd{
    padding: 0px 15px;
}
.inner{
    color: var(--color-text-black-to-white);
    font-family: "Source Sans Pro", Helvetica, sans-serif;
}
h1{
    color: var(--color-text-black-to-white);
    font-family: "Source Sans Pro", Helvetica, sans-serif;
}
h2{
    color: var(--color-text-black-to-white);
}
h3{
    color: var(--color-text-black-to-white);
    font-family: "Source Sans Pro", Helvetica, sans-serif;
}
strong{
    color: var(--color-text-black-to-white);
    font-family: "Source Sans Pro", Helvetica, sans-serif;
}

</style>