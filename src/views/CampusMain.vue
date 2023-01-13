<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';

</script>

<template>
    
    <div class="clear">
        <h3>Actualmente tenemos 4 ubicaciones en distintas ciudades</h3>
    </div>    
 
				
    <section class="wrapper style1 align-center">
        <div style="border-right: 0px solid #555;">
            <h4 style="color: #666; letter-spacing: 10px;">
                <br>
            </h4>
            <!--<a href="asistencia/index.php?campus=1">-->
            <a href="/campus-delicias">
                <div class="boton">
                DELICIAS
                </div>
            </a>
            <!--<a href="asistencia/index.php?campus=2">-->
            <a href="/campus-cuauhtemoc">
                <div class="boton">
                    CUAUHTÉMOC
                </div>
            </a>
            <!--<a href="asistencia/index.php?campus=3">-->
            <a href="/campus-chihuahua">
                <div class="boton">
                    CHIHUAHUA
                </div>
            </a>
            <!--<a href="asistencia/index.php?campus=4">-->
            <a href="/campus-parral">
                <div class="boton">
                    PARRAL
                </div>
            </a>
        </div>
    </section>
    <ContactForm />
</template>

<style scoped>
    .clear{
        clear: left;
        padding: 20px;
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