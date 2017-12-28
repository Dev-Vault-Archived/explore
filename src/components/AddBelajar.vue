<template>
  <div>
    <section class="section--center mdl-grid">
      <div class="demo-card-square mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">Buat Konten</h2>
        </div>
        <div class="mdl-card__supporting-text">
          <form>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="name" v-model="name">
              <label class="mdl-textfield__label" for="name">Nama Anda</label>
            </div>
            <p>Nama digunakan sebagai identitas dari user yang membagikan konten.</p>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="title" v-model="result.title">
              <label class="mdl-textfield__label" for="title">Judul Konten</label>
            </div>
            <p>Judul yang akan ditampilkan pada halaman utama, judul jangan terlalu panjang karena akan mempengaruhi <i>view</i> dari tampilan awal itu sendiri.</p>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="description" v-model="result.description">
              <label class="mdl-textfield__label" for="description">Deskripsi Singkat</label>
            </div>
            <p>Deskripsi singkat dari materi yang akan di publish, deskripsi dimohon untuk tidak terlalu pendek dan diusahakan lebih dari 100 karakter.</p>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="downloadlink" v-model="result.download">
              <label class="mdl-textfield__label" for="downloadlink">Link Download</label>
            </div>
            <p>Link download dapat berupa link dari <a target="__blank" href="http://drive.google.com">Google Drive</a> atau dari link lainnya.</p>
          </form>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button @click="publishContent" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" :disabled="waiting == 1">
            Publish Content
          </button>
          <button @click="resetInput" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" :disabled="waiting == 1">
            Reset
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import _ from 'lodash'

export default {
  name: 'AddBelajar',
  created() {
    this.$nextTick(() => {
      componentHandler.upgradeDom();
      componentHandler.upgradeAllRegistered();
    });
  },
  data () {
    return {
      name: '',
      result: {
        title: '',
        description: '',
        download: ''
      },
      waiting: 0
    }
  },
  methods: {
    resetInput() {
      this.result.title = ''
      this.result.description = ''
      this.result.download = ''
    },
    publishContent () {
      this.waiting = 1
      this.$root.$firebaseRefs.taskList.push(
        _.assign(this.result, {
          name: this.name,
          created_at: new Date().getTime() / 1000 | 0
        })
      ).then(() => {
        this.waiting = 0
        this.resetInput()
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.demo-card-square > .mdl-card__title {
  color: #fff;
  background:
    url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;
}

section.section--center {
    max-width: 600px;
}

</style>
