<script setup lang="ts">
</script>

<template>
	
<!-- MENU NORMAL -->
<div class="menucontain" style="font-family: 'Lemon/Milk light Regular';">
	<a href="/"><div class="logotop"><img class="hidden" src="src/assets/images/logo.vida.black.png" width="100%" height="auto" alt="" style="max-width: 170px;" /></div></a>
	<nav>

	<ul class="dropdown">
			<li><a href="equipo.php">CASA</a></li>
            <li><a href="mensajes.php">MENSAJES</a></li>
            <li><a href="campus.php">CAMPUS</a></li>
            <li><a href="/dar">DAR</a></li>
            <li><a href="/libreria/">REGISTRO</a></li>
	  </ul>
	</nav>
</div>
<!-- MENU NORMAL-->

<!-- MENU MOVIL-->
<header id="header" class="alt">
<nav style="color: #333;">
		<a href="#menu" style="text-decoration: none;"><span class="black-white">Menu</span></a>
	</nav>
</header>
 
<nav id="menu">
	<ul class="links">
		<li><a href="index.php"><span class="item-menu">INICIO</span></a></li>
		<li><a href="equipo.php"><span class="item-menu">CASA</span></a></li>
		<li><a href="mensajes.php"><span class="item-menu">MENSAJES</span></a></li>
		<li><a href="campus.php"><span class="item-menu">CAMPUS</span></a></li>
		<li><a href="dar/"><span class="item-menu">DAR</span></a></li>
		<li><a href="registro/"><span class="item-menu">REGISTRO</span></a></li>
		<li><a href="#contacto" class="button primary fit">CONTACTO</a></li>	
	</ul>
</nav>
</template>

<style scoped>
.item-menu{
    color: var(--vt-c-white);
}
.black-white{
	color: var(--color-text-black-to-white);
}
.hidden{
    visibility: hidden;
}
</style>
