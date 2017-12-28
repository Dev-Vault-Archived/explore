<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header has-tabs">
    <header class="mdl-layout__header ">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Computer Explore</span>
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link class="mdl-navigation__link" to="/tentang">Tentang Kami</router-link>
        </nav>
      </div>
      <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
        <router-link class="mdl-layout__tab" to="/" active-class="is-active" exact>Belajar</router-link>
        <router-link class="mdl-layout__tab" to="/referensi" active-class="is-active">Referensi Online</router-link>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Computer Explore</span>
    </div>
    <main class="mdl-layout__content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>

  </div>
</template>

<script>

require('material-design-lite')

export default {
  name: 'app'
}
</script>

<style>

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.3.0/material.teal-indigo.min.css');

.mdl-layout__content {
  background-color: #EFEFEF;
}

.loading {
  text-align: center;
  padding: 40px;
}

.mdl-card {
  width: 100%
}

.mdl-layout.is-upgraded .mdl-layout__tab.is-active::after {
  background-color: rgb(139, 195, 74);
}

</style>
