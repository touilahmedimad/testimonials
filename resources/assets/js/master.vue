<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <i class="glyphicon glyphicon-pencil"></i>
                    Testimonials
                </a>
                <ul  v-show="!this.$store.state.Authenticated" class="pull-right">
                    <button class="btn btn-info navbar-btn" @click="showLoginModal">{{ this.$store.state.messages.login }}</button>
                         <LoginModal></LoginModal>
                         <button class="btn btn-success navbar-btn" > {{ this.$store.state.messages.signup }}</button>
                </ul>
                    <div class="nav navbar-nav navbar-right" v-show="this.$store.state.Authenticated">
                        <li><a href="#/dashboard">Dashboard</a></li>
                    </div>
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
        beforeCreate () {
            var vm = this
            if(localStorage.getItem('authtoken')) {
               this.$store.state.Authenticated = true
            }
            else {
                this.$store.state.Authenticated = false
            }
            axios.get('api/user_language')
                .then (function (response){
                    vm.$store.state.messages.login = response.data.Login
                    vm.$store.state.messages.signup = response.data.Sign_up
                    vm.$store.state.messages.email = response.data.Email
                    vm.$store.state.messages.password = response.data.Password
                })
            .catch (function (error) {
                console.log(error)
            });
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
