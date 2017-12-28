<template lang="html">
  <div class="">
    <div class="loading" v-if="!$store.state.firebaseReady">
      <div class="mdl-spinner mdl-js-spinner is-active"></div>
    </div>
    <div class="" v-else>
      <div class="not-found" v-if="this.$root.pages.length == 0">
        <i class="material-icons">bug_report</i>
        <h3>LAMAN TIDAK DITEMUKAN</h3>
        <p>Laman yang anda kunjungi belum memiliki konten untuk ditampilkan.</p>
        <p>Tambahkan laman anda dengan mengunjungi laman di bawah dan masukkan semua info yang dibutuhkan.</p>
        <br />
        <router-link v-if="$store.state.canEdit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/tambah_laman" >Tambahkan Laman</router-link>
      </div>
      <section class="section--center mdl-grid" v-else v-for="page in this.$root.pages">
        <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white" style="
            background-size: cover;
        " :style="{ 'background-image': 'url(' + page.images + ')' }"></header>
        <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-shadow--2dp">
          <div class="mdl-card__supporting-text">
            <h4>{{ page.name }}</h4>
            <p><i>{{ page.url.base }}</i></p>
            <p v-html="page.description"></p>
            <h5>Kelebihan</h5>
            <ul>
              <li v-for="k in page.pros.split(',')">{{ k | capitalize | trim }}</li>
            </ul>
            <h5>Kekurangan</h5>
            <ul>
              <li v-for="k in page.cons.split(',')">{{ k | capitalize | trim }}</li>
            </ul>
            <span>Ditambahkan pada {{ page.created_at | formatDate }}</span>
          </div>
          <div class="mdl-card__actions">
            <a target="__blank" :href="page.url.base" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Kunjungi</a>
            <a target="__blank" :href="page.url.pendaftaran" v-if="page.url.pendaftaran" class="mdl-button mdl-js-button mdl-button--primary">Pendaftaran</a>
            <a target="__blank" :href="page.url.privacypolicy" v-if="page.url.privacypolicy" class="mdl-button mdl-js-button mdl-button--primary">Privasi</a>
            <a target="__blank" :href="page.url.tos" v-if="page.url.tos" class="mdl-button mdl-js-button mdl-button--primary">Kebijakan Pengguna</a>
          </div>
          <div class="mdl-card__menu" v-if="$store.state.canEdit">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" @click="$root.$firebaseRefs.pages.child(page['.key']).remove()">
              <i class="material-icons">delete_forever</i>
            </button>
          </div>
        </div>
      </section>
      <div v-if="this.$root.pages.length && $store.state.canEdit">
        <router-link class="add-content-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/tambah_laman">
          <i class="material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    trim: function (value) {
      return value.trim();
    }
  }
}
</script>

<style lang="css" scoped>

h4 {
  margin: 0px !important;
}

.not-found {
  padding-top: 20px;
  color: rgba(0,0,0,.54);
  text-align: center;
}

.not-found > .material-icons {
  padding: 20px;
  font-size: 100px;
}

.add-content-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 998;
}

section > .section__play-btn {
    min-height: 200px;
    max-height: 200px;
}

.mdl-grid {
  max-width: 860px;
}

</style>
