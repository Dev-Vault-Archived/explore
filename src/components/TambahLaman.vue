<template>
  <div>
    <section class="section--center mdl-grid">
      <div class="demo-card-square mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">Tambahkan Referensi Laman</h2>
        </div>
        <div class="mdl-card__supporting-text">
          <form>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="name" v-model="result.name">
              <label class="mdl-textfield__label" for="name">Nama Laman</label>
            </div>
            <p>Nama dari laman yang akan dipublish, misalkan <b>ScienceDirect</b>, <b>Perpusnas (Perpustakaan Nasional)</b>.</p>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="name" v-model="result.url.base">
              <label class="mdl-textfield__label" for="name">Tautan Laman</label>
            </div>
            <p>Masukkan tautan dari laman yang anda maksud, misalkan <i>https://sciencedirect.com/</i>.</p>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="description" v-model="result.description">
              <label class="mdl-textfield__label" for="description">Deskripsi Laman</label>
            </div>
            <p>Deskripsi dari laman yang akan dibuat sebagai referensi, gunakan tag <b>&#x3C;br /&#x3E;</b> untuk membuat baris baru.</p>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="title" v-model="result.pros">
              <label class="mdl-textfield__label" for="title">Kelebihan Laman</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="title" v-model="result.cons">
              <label class="mdl-textfield__label" for="title">Kekurangan Laman</label>
            </div>
            <p>Tuliskan menggunakan metode sintesis (secara umum) kelebihan dan/atau kekurangan dari laman tersebut, gunakan <b>tanda koma</b> untuk memisahkan antara kedua kelebihan.</p>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="title" v-model="result.images">
              <label class="mdl-textfield__label" for="title">Gambar Laman</label>
            </div>
            <p>Masukkan gambar yang mewakili dari laman tersebut, anda dapat mencari gambarnya dengan mencari di <b>Google Images</b></p>
            <h5>Data di bawah ini opsional, namun masukkan jika tersedia</h5>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="downloadlink" v-model="result.url.pendaftaran">
              <label class="mdl-textfield__label" for="downloadlink">Kanal Pendaftaran</label>
            </div>
            <p>Kanal pendaftaran dari laman tersebut jika tersedia.</p>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="downloadlink" v-model="result.url.tos">
              <label class="mdl-textfield__label" for="downloadlink">Kanal Term of Service/Use</label>
            </div>
            <p>Kanal persyaratan dari penggunaan dari laman tersebut jika tersedia.</p>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="downloadlink" v-model="result.url.privacypolicy">
              <label class="mdl-textfield__label" for="downloadlink">Kanal Privasi Pengguna</label>
            </div>
            <p>Kanal dari kebijakan privasi pengguna dari laman tersebut jika tersedia.</p>
          </form>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button @click="publishContent" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" :disabled="waiting == 1">
            Publikasi Referensi
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
      result: {
        name: '',
        url: {
          base: '',
          pendaftaran: '',
          tos: '',
          privacypolicy: ''
        },
        cons: '',
        pros: '',
        description: '',
        images: ''
      },
      waiting: 0
    }
  },
  methods: {
    resetInput() {
      this.result = {
        name: '',
        url: {
          base: '',
          pendaftaran: '',
          tos: '',
          privacypolicy: ''
        },
        cons: '',
        pros: '',
        description: '',
        images: ''
      }
    },
    publishContent () {
      this.waiting = 1
      this.$root.$firebaseRefs.pages.push(
        _.assign(this.result, {
          created_at: new Date().getTime() / 1000 | 0
        })
      ).then(() => {
        this.waiting = 0
        this.$router.push('/referensi')
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
