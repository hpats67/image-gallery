routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/',
    component: 'home'
  })
  .state({
    name: 'images',
    url: '/images',
    component: 'imageHome'
  })
  .state({
    name: 'images.galleryAll',
    url: '/gallery/all',
    views: {
      main:{
        component: 'imageChoice'
      }
    }
  })
  .state({
    name: 'images.galleryAll',
    url: '/gallery/all',
    views: {
      main:{
        component: 'imageChoice'
      }
    }
  })
  .state({
    name: 'images.addImage',
    url: '/add/image',
    views: {
      main:{
        component: 'imageAdd'
      }
    }
  })
  .state({
    name: 'images.addImage',
    url: '/add/image',
    views: {
      main:{
        component: 'imageAdd'
      }
    }
  })
  .state({
    name: 'images.delete',
    url: '/delete',
  })
  .state({
    name: 'images.delete.image',
    url: '/delete/image',
    views: {
      main:{
        component: 'imageDelete'
      }
    }
  })
  .state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $urlRouterProvider.otherwise('/');

}