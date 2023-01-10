<script setup lang="ts">

</script>

<template>
    <footer class="wrapper style1 align-center" style="background: rgb(31,34,56);
    background: linear-gradient(0deg, rgba(31,34,56,1) 0%, rgba(43,53,83,1) 74%);">
        <div class="pie">
            <div class="split logopie">
                <img src="src/assets/images/logo.low.png" class="fotopie" width="100%" height="auto" alt=""/>
            </div>
            <div class="split redespie" style="text-align: center;">
                <div style="display: inline-block">
                    <div class="itempie"><a href="https://youtube.com/iglesiavidamx" target="_blank"><i class="fab fa-youtube"></i></a></div>
                    <div class="itempie"><a href="https://instagram.com/iglesiavida.mx" target="_blank"><i class="fab fa-instagram"></i></a></div>
                    <div class="itempie"><a href="https://facebook.com/iglesiavida.mx" target="_blank"><i class="fab fa-facebook-f"></i></a></div>
                    <div class="itempie"><a href="https://seal.godaddy.com/verifySeal?sealID=KMwUBD66gZjSnyDEcvc7lLfgU0bvWMf3Qk3fUzlaITaG2T0RNFY0ITmHf3N6" target="_blank"><img src="src/assets/images/icons8-security-ssl-90.png" width="40" height="40" alt=""/></a></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.pie{
    padding-top: 30px;
    padding-left: 50px;
    height: 350px;
}
.fotopie{
    width: 300px;
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
        text-align: center;
        padding: 0px;
        padding-top: 10px;
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