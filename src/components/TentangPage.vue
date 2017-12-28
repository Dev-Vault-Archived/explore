<template lang="html">
  <div class="">
    <div class="mdl-fit mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Tentang Kami</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <p>Universitas Sebelas Maret Surakarta biasa disingkat sebagai UNS, atau Universitas Sebelas Maret adalah salah satu universitas negeri di Indonesia yang berada di Kota Surakarta. Universitas yang giat membangun ini, menyediakan berbagai paket pendidikan diploma, sarjana, pascasarjana, dan doktoral (Wikipedia).</p>
        <p>Anggota Kelompok</p>
        <ul>
          <li>DWIKI RAYYANA AGUNG BAYU PUTRA (M0517012)</li>
          <li>GALIH AKBAR MOERBAYAKSA (M0517018)</li>
          <li>WAFIROTUL LAILA (M0517048)</li>
        </ul>
        <p>Laman ini disusun dengan tujuan sebagai portfolio atau daftar dari tugas-tugas mata kuliah bahasa Indonesia yang telah diajarkan di kelas. Selain itu, diharapkan dengan adanya laman ini juga dapat berbagi kepada pengguna internet yang ingin mengunduh dan melihat tugas-tugas dan materi yang diajarkan di kelas Informatika UNS.</p>
        <p>Laman ini dibuat dengan menggunakan teknologi VueJs, NodeJs, Webpack dan teknologi-teknologi SPA lainnya yang bersatu padu menjadi laman yang anda lihat sekarang.</p>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a @click="$router.go(-1)" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Kembali
        </a>
        <a @click="$store.state.canEdit = !$store.state.canEdit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          {{ $store.state.canEdit ? 'OK' : '' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.mdl-fit {
  min-height: 100%;
}
</style>
