<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
             <form class="form-horizontal" v-on:submit.prevent="submitform">
               <fieldset>
                   <div class="form-group">
                       <label class="col-lg-2 control-label">Name</label>
                        <div class="col-lg-10">
                           <input class="form-control" type="text" placeholder="Email" v-model ="user.name">
                       </div>
                   </div>
                   <div class="form-group">
                       <label class="col-lg-2 control-label">Bio</label>
                       <div class="col-lg-10">
                           <textarea class="form-control" rows="3" v-model="user.bio">
                       </div>
                   </div>
                   <div class="form-group">
                       <label class="col-lg-2 control-label">Image</label>
                       <div class="col-lg-10">
                           <input type="file" class="form-control" v-on:change="imageupload">
                       </div>
                   </div>
                   <div class="form-group">
                       <div class="col-lg-10 col-lg-offset-2">
                           <button type="reset" class="btn btn-default">Cancel</button>
                           <button type="submit" class="btn btn-primary" @click="submitform">Submit</button>
                       </div>
                   </div>
             </form>
            </div>
            <div class="col-lg-6">
                Ads
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        created(){
            this.getUser()
        },
        methods: {
            getUser: function (){
                var vm = this
                axios.get('api/user')
                .then( function (response){
                    vm.user = response.data
                })
                .catch( function (error){
                    console.log(error)
                } )
            },
            submitform (){
                var vm = this
                    axios.post('api/updateprofile',{
                        email: vm.user.email,
                        name: vm.user.name,
                        profilepic: vm.user.picture
                    })
                .then ( function (response){
                    console.log(response)
                })
                .catch ( function (error){
                    console.log(error)
                } )
            },
            imageupload: function (e){
                console.log(e)
            }
        }
    }
</script>
