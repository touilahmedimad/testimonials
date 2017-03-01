<template>
  <div class="modal" :class="{'is-active': this.$store.state.ShowloginModal}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Login Modal</p>
      <button class="delete" @click="closemodal"></button>
    </header>
    <section class="modal-card-body">
      <form v-on:submit.prevent="submitform">
        <div class="form-group" :class="{'has-error': errors.has('email') }">
          <label for="email">Email</label>
          <input type="text"
                 name="email"
                 v-model="email"
                 class="form-control"
                 v-validate="'required|email'" data-vv-delay="1000"
                 placeholder="example@example.com">
          <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </div>
        <div class="form-group" :class="{'has-error': errors.has('password')}">
          <label for="password">password</label>
          <input type="password"
                 class="form-control"
                 v-model="password"
                 name="password"
                 v-validate="'required'"
                 placeholder="*****">
          <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
        </div>
        <button type="submit"  class="button is-primary"  @click="submitform">Login</button>
        <a class="button" @click="closemodal">Cancel</a>
      </form>
    </section>
  </div>
</div>
</template>
<script>
  export default {
      name: 'LoginModal',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      closemodal () {
          this.$store.state.ShowloginModal = !this.$store.state.ShowloginModal
      },
      submitform () {
          var vm = this
          this.$validator.validateAll().then(success => {
              if (! success) {
                  // handle error
                  return;
              }
              const authtoken= {}
              axios.post('/api/signin', {
                  email: this.email,
                  password: this.password
              })
                  .then(function (response) {
                      authtoken.token = response.data.token
                      window.localStorage.setItem('authtoken', JSON.stringify(authtoken))
                      vm.$store.state.ShowloginModal = false
                      vm.$router.push({name: 'Dashboard'})
                      vm.$store.state.Authenticated = true
                  })
                  .catch(function (error) {
                      console.log(error)
                  });
          })

      }
    }
  }
</script>
