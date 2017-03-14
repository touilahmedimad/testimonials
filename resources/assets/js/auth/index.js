window.authenticated = false
export default {
   login(context, creds, redirect){
        axios.post('api/signin', creds)
            .then( function (response){
                const authtoken = {}
                authtoken.token = response.data.token
                window.localStorage.setItem('authtoken', JSON.stringify(authtoken))
                window.authenticated = true
                axios.defaults.headers.common['Authorization'] = "Bearer"+  authtoken.token
                context.$router.push({name: redirect})
                context.$store.state.ShowloginModal = false
                bus.$emit('Authenticated', true)
            } )
            .catch( function (error){
                console.log(error)
            } )
    },
    checkAuth() {
     var jwt = localStorage.getItem('authtoken')
     if(jwt){
        window.authenticated = true
     }
     else {
        window.authenticated = false
      }
    },
    isAuthenticated(){
        return window.authenticated
    }
}
