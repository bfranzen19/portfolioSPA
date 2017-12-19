console.log('js is linked')

Vue.component('my-img', {
  template: `
    <img v-bind:src="url" v-bind:alt="text" height="100" width="120">
  `,
  props: ['url', 'text'],
})

Vue.component('my-heading', {
  template:`
    <div class="container-fluid">
      <div class="row col-xs-12">
        <h1 class="text-center" id="myHeading"> bt franzen </h1>
      </div>
    </div>
  `
})

Vue.component('carousel-img', {
  template:`
  <div class="carousel-item">
    <img class="d-block w-100" v-bind:src="url" v-bind:alt="altDesc"/>
    <div class="carousel-caption d-none d-md-block">
      <h3 class='carouselImg'> {{imgHead}} </h3>
      <p class='carouselImg'> {{imgDesc}} </p>
    </div>
  </div>
  `,
  props: ['url', 'altDesc', 'imgHead', 'imgDesc'],
})

var myRouter = new VueRouter({
  routes: [
    {
      path: '/',
      component: function(resolve, reject) {
        $.get('/public/index.html', function(htmlFromServer) {
          var newComp = {
            template:
            `<div>
              <img src='/img/flatties.jpg' alt='flatirons' height="400rem" width="100%" />
                <my-heading> bt franzen </my-heading>

              <div class="container" id="welcome">
                <div class="row col-xs-10">
                  welcome to my portfolio site! feel free to add me on social media, contact me, and/or see what i have been working on recently via my github account.
                </div>
              </div>
            </div>`,
            htmlFromServer,
          }
          resolve(newComp)
        })
      } //z component
    },

    {
      path: '/about',
      component: function(resolve,reject) {
        $.get('/partials/about.html', function(htmlFromServer) {
          var newComp = {
            template: htmlFromServer,
          }
          resolve(newComp)
        })
      }
    },

    {
      path: '/webDevelopment',
      component: function(resolve,reject) {
        $.get('/partials/webDev.html', function(htmlFromServer) {
          var newComp = {
            template: htmlFromServer,
          }
          resolve(newComp)
        })
      }
    },

    {
      path: '/socialMedia',
      component: function(resolve,reject) {
        $.get('/partials/socialMedia.html', function(htmlFromServer) {
          var newComp = {
            template: htmlFromServer,
          }
          resolve(newComp)
        })
      }
    },

    {
      path: '/photography',
      component: function(resolve,reject) {
        $.get('/partials/photography.html', function(htmlFromServer) {
          var newComp = {
            template: htmlFromServer,
          }
          resolve(newComp)
        })
      }
    },

    {
      path: '/theskippyproject',
      component: function(resolve,reject) {
        $.get('/partials/theskippyproject.html', function(htmlFromServer) {
          var newComp = {
            template: htmlFromServer,
          }
          resolve(newComp)
        })
      }
    },

    {
      path: '/cartography',
      component: function(resolve,reject) {
        $.get('/partials/cartography.html', function(htmlFromServer) {
          var newComp = {
            template: htmlFromServer,
          }
          resolve(newComp)
        })
      }
    },

  ]
})



var mainVM = new Vue({
  el: '#app',
  router: myRouter,
  data: {},
  methods: {
    navbarCollapse: function(event) {
      $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){$(this).parents('.navbar-collapse').collapse('hide')
    })
    }
  },
}) // mainVM
