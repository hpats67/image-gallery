import template from './image-add.html';
import styles from './image-add.scss';

export default {
  template,
  bindings: {
    add:'<'
    
  },
  controller
};

controller.$inject = ['imageService', 'albumService'];

function controller(imageService, albumService) {

  this.styles = styles;

  this.albums = [];

  albumService.get()
    .then(albums => {
      this.albums = albums;
    });

  this.reset = () => {
    this.title = '';
    this.url = '';
    this.description = '';
  };

  this.reset();

  this.addImage = () => {
    imageService.add({
      title: this.title,
      url: this.url,
      description: this.description,
      album: this.album._id
    })
      .then(saved => this.images.push(saved));
    this.reset();
    $state.go('images');

  };
}