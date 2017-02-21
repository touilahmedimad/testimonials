<template>
  <div class="modal" :class="{'is-active': this.$store.state.ShowloginModal}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Login Modal</p>
      <button class="delete" @click="closemodal"></button>
    </header>
    <section class="modal-card-body">
      <div class="form-group">
        <label for="Email">Email</label>
        <input type="text" v-model="email" class="form-control" placeholder="">
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="password" class="form-control"v-model="password" placeholder="">
      </div>
    </section>
    <footer class="modal-card-foot">
      <a class="button is-primary" @click="submitform">Login</a>
      <a class="button" @click="closemodal">Cancel</a>
    </footer>
  </div>
</div>
</template>
<script>
  export default {
      name: 'LoginModal',
    data () {
      return {
        email: 'ahmedimadtouil@gmail.com',
        password: 'secret'
      }
    },
    methods: {
      closemodal () {
          this.$store.state.ShowloginModal = !this.$store.state.ShowloginModal
      },
      submitform () {
        console.log(this.email + this.password)
      }
    }
  }
</script>
