<template>
    <div class="container-fluid">
   <div class="row">
            <div class="col-lg-6">
<div v-for="item in items" class="box">
   <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://images.vexels.com/media/users/3/135248/isolated/preview/c242693ffb353188d2819ad2c6bcaaab-user-sign-with-red-background-by-vexels.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
        <strong>Anonyme </srong><small>{{item.created_at | moment("from", "now")}}</small>
            <br>
            {{ item.message }}
        </p>
      </div>
      <nav class="level pull-right">
        <div class="level-left">
          <a class="level-item">
            <button type="button" class="btn btn-default btn-sm pull-right" aria-label="Left Align" @click="removeitem(item.id)">
             <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
<pagination :data="pagination" v-on:pagination-change-page="getResults"></pagination>

     </div>
            <div class="col-lg-6">
                <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://www.clipartsgram.com/image/962257514-nature-landscape-fence-fencing-fence-snow-sun-road-tree-leaves-leaves-bokeh-blur-tree-macro-nature-background-wallpaper-widescreen-full-screen-widescreen-hd-wallpapers-background-wallpaper-widescreen.jpg" alt="Image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image" style="height: 40px; width: 40px;">
          <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
        </figure>
      </div>
      <div class="media-content">
          <p class="title is-4">{{ user.name }}</p>
          <p class="subtitle is-6">{{user.username}}</p>
      </div>
    </div>

    <div class="content">
        {{ user.bio }}
    </div>
</div>
<footer class="card-footer">
    <p class="card-footer-item"> Messages {{ total }}</a>
</footer>
            </div>
        </div>
    </div>
</template>

<script>
    import pagination from 'laravel-vue-pagination'
    export default {
        name: 'Dashboard',
        components: {
            'pagination': pagination
        },
        data () {
            return {
                msg: 'Dashboard',
                items: {},
                user: {},
                total: {},
                pagination: {}
            }
        },
        created () {
            this.getResults()
        },
        methods: {
            removeitem: function (id){
                console.log(id)
            },
            getResults: function (page){
                var vm = this
                    if (typeof page === 'undefined') {
                     page = 1;
                  }
                axios.get('/api/testimonials?page='+ page)
                .then ( function (response){
                    vm.items = response.data.testimonials.data
                    vm.user = response.data.user
                    vm.total = response.data.testimonials.total
                    vm.pagination = response.data.testimonials
                })
            .catch ( function (error){
                console.log(error)
            } )
  
            }
        },
        filters: {
            datenow: function (date){
               return  moment(date).fromNow()
            }
        }
    }
</script>
