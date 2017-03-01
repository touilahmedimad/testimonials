<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <i class="glyphicon glyphicon-pencil"></i>
                    Testimonials
                </a>
                <ul class="pull-right">
                    <button v-show="!this.$store.state.Authenticated" class="btn btn-info navbar-btn" @click="showLoginModal">Login</button>
                    <LoginModal></LoginModal>
                    <button  v-show="!this.$store.state.Authenticated" class="btn btn-success navbar-btn" >Sign Up</button>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import LoginModal from './components/Parts/Login.vue'
    export default {
        name: 'master',
        created () {
            var vm = this
            if(localStorage.getItem('authtoken')) {
                axios.get('/api/user')
                    .then(function (response) {
                        vm.$store.state.Authenticated = true
                    })
                .catch(function (error) {
                    vm.$store.state.Authenticated = false
                });
            }
            else {
                this.$store.state.Authenticated = false
            }
        },
        methods: {
            showLoginModal: function () {
                this.$store.state.ShowloginModal = !this.$store.state.ShowloginModal
            },
            showSignUpModal: function () {
                this.signupmodal = true
            }
           
        },
        components: {
            'LoginModal': LoginModal
        }
    }
</script>
