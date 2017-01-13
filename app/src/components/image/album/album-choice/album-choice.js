import template from './album-choice.html';

export default {
  template,
  controller,
  bindings: {
    images: '=',
    albums: '<'
  }
};

controller.$inject = ['albumService', 'imageService'];

function controller (albumService, imageService) {

  this.allImages = () => {
    imageService.get()
      .then(images => {
        this.images = images;
      });
  };

  this.updateAlbum = (album) => {
    albumService.getImages(album)
      .then(album =>{
        this.images = album.images;
      });
  };

  
}