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
    name: 'images.galleryAlbum',
    url: '/gallery/album',
    views: {
      main:{
        component: 'albumChoice'
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
    name: 'images.addAlbum',
    url: '/add/album',
    views: {
      main:{
        component: 'albumAdd'
      }
    }
  })
  .state({
    name: 'images.deleteImage',
    url: '/delete/image',
    views: {
      main:{
        component: 'imageDelete'
      }
    }
  })
  .state({
    name: 'images.deleteAlbum',
    url: '/delete/album',
    views: {
      main:{
        component: 'albumDelete'
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