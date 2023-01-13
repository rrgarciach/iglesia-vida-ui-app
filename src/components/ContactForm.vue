<script setup lang="ts">
</script>

<template>
    <section class="wrapper style1 align-center" style="margin-top: 0px; clear: both;">
			<br><br>
			<div class="inner medium text-color" style="padding: 10px;">
				<h2 style="letter-spacing: 10px;">Escríbenos</h2>
				<form method="post" name="formdata" id="formdata">
					<div class="fields">
						<div class="field half">
							<label for="name">Nombre</label>
							<input type="text" name="nombre" id="nombre" form="formdata" value="" />
						</div>
						<div class="field half">
							<label for="email">Email</label>
							<input type="email" name="correo" id="correo" form="formdata" value="" />
						</div>
						<div class="field">
							<label for="message">Mensaje</label>
							<textarea name="mensaje" id="mensaje" form="formdata" rows="6"></textarea>
						</div>
					</div>
					<ul class="actions special">
						<li><input type="button" name="enviar" id="enviar" value="Enviar"/></li>
					</ul>
					<div id="carga" style="clear: both;"></div>
					<div id="mensaje2" style="clear: both;"></div>
				</form>

			</div>
		</section>
</template>

<style scoped>
h2{
	color: var(--color-text-black-to-white);
}
label{
	color: var(--color-text-black-to-white);
}
</style>