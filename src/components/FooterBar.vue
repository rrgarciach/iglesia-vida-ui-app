<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


</script>

<template>
    <footer class="wrapper style1 align-center" style="background: rgb(31,34,56);
    background: linear-gradient(0deg, rgba(31,34,56,1) 0%, rgba(43,53,83,1) 74%);">
        <div class="pie">
            <div class="split logopie">
                <img src="src/assets/images/logo.low.png" class="fotopie" width="100%" height="200px" alt=""/>
            </div>
            <div class="split redespie" style="text-align: center;">
                <div style="display: inline-block">
                    <a href="https://youtube.com/iglesiavidamx" target="_blank"><div class="itempie"><FontAwesomeIcon icon="fa-brands fa-youtube"></FontAwesomeIcon></div></a>
                    <a href="https://instagram.com/iglesiavida.mx" target="_blank"><div class="itempie"><FontAwesomeIcon icon="fa-brands fa-instagram"></FontAwesomeIcon></div></a>
                    <a href="https://facebook.com/iglesiavida.mx" target="_blank"><div class="itempie"><FontAwesomeIcon icon="fa-brands fa-facebook-f"></FontAwesomeIcon></div></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.split{
    float: left;
    width: 50%;
  }

.pie{
    padding-top: 30px;
    padding-left: 50px;
    height: 350px;
}
.fotopie{
    width: 300px;
    height: auto;
}
.logopie{
    text-align: left;
}
.redespie{
    text-align: right;
    padding-top: 80px;
}
.itempie{
    float: right;
    width: 70px;
    color: #fff;
    font-size: 30px;
}
@media screen and (max-width:1000px){
    .redespie{
        width: 100%;
        text-align: center;
        padding: 0px;
        padding-top: 10px;
        margin: 0px auto;
    }
    .logopie{
        float: none;
        margin: 0 auto;
        text-align: center;
    }
    .itempie{
        width: 50px;
    }
    .fotopie{
        width: 200px;
    }
    .pie{
        padding: 0px;
        padding-top: 30px;
        height: 250px;
    }
}
</style>