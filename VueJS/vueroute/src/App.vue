<template>
  <div id="app">
    <b-navbar toggleable="md" type="light">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'About'}">About</b-nav-item>
            <b-nav-item :to="{name: 'Services'}">Services</b-nav-item>
            <b-nav-item :to="{name: 'Grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name: 'Cards'}">Cards</b-nav-item>
            <b-nav-item :to="{name: 'Formularios'}">Formularios</b-nav-item>
            <b-nav-item :to="{name: 'Validacion'}">Validacion</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
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
