<template>
  <div>
    <div class="loading" v-if="!$store.state.firebaseReady">
      <div class="mdl-spinner mdl-js-spinner is-active"></div>
    </div>
    <div class="mdl-grid" v-else>
      <div class="mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col" v-if="this.$root.taskList.length == 0">
        <div class="mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Tidak ada konten</h2>
          </div>
          <div class="mdl-card__supporting-text">
            Saat ini laman ini belum memiliki konten apapun yang ditambahkan, tambahkan
            konten anda sekarang juga!
          </div>
          <div class="mdl-card__actions mdl-card--border" v-if="$store.state.canEdit">
            <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to="/add_content">Create Content</router-link>
          </div>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col" v-else v-for="(tasks, key) in this.$root.taskList">
        <div class="mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">{{ tasks.title }}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            {{ tasks.description }}
          </div>
          <div class="mdl-card__supporting-text">
            <small>Dipublikasikan oleh <b>{{ tasks.name }}</b> pada
            at {{ tasks.created_at | formatDate }}</small>
          </div>
          <div class="mdl-card__actions mdl-card--border" v-if="$store.state.canEdit">
            <button class="mdl-button mdl-js-button mdl-button--colored" @click="$root.$firebaseRefs.taskList.child(tasks['.key']).remove()">
              Hapus Konten
            </button>
          </div>
          <div class="mdl-card__menu">
            <a class="mdl-button mdl-js-button mdl-button--icon" :href="tasks.download" target="__blank" :disabled="tasks.download == ''">
              <i class="material-icons">file_download</i>
            </a>
          </div>
        </div>
      </div>
      <div v-if="this.$root.taskList.length && $store.state.canEdit">
        <router-link class="add-content-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/add_content">
          <i class="material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mdl-card {
  min-height: 0px !important;
}

.mdl-card__title-text {
    font-size: 18px !important;
}

.add-content-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 998;
}

.mdl-card__title-text {
  font-size: 22px;
  padding-right: 40px;
}

</style>
