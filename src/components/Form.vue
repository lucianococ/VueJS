<template>
    <div>
        <template v-if="error">
            <p>Error de Validación</p>
        </template>
        <form @submit="Sendform">
            <input type="text" v-model="$v.name.$model">
            <p v-if="!$v.name.minlength">
                Nombre mayor de {{$v.name.$params.minlength.min}} caracteres
            </p>
            <button>Enviar</button>
        </form>

    </div>
</template>
<script type="text/javascript" src="./../Scripts/Form/form.js">
<style src="./../CSS/Form/form.css" scoped></style>