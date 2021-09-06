<template>
  <div id="app" class="container">
<b-navbar taggLeable="md" type="dark" variant="success">
  <b-container>
    <b-navbar-toogle target="nav_collapse"></b-navbar-toogle>
   <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
        <b-nav-item :to="{name: 'Client'}">Client</b-nav-item>
        <b-nav-item :to="{name: 'Preu'}">Preu</b-nav-item>
        <b-nav-item :to="{name: 'Magatzem'}">Magatzem</b-nav-item>
        <b-nav-item-dropdown text="Botiga" right>
          <b-dropdown-item :to="{path: '/botiga/alimentacio'}">Alimentació </b-dropdown-item>
          <b-dropdown-item :to="{path: '/botiga/congelats'}">Congelats</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
   </b-collapse>
  </b-container>
</b-navbar>


    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
