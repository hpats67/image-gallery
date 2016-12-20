import template from './album-add.html';
import styles from './album-add.scss';

export default {
  template,
  bindings: {
    add:'<'
    
  },
  controller
};

controller.$inject = ['albumService', '$state'];

function controller(albumService, $state) {

  this.styles = styles;

  this.albums = [];

  albumService.get()
    .then(albums => {
      this.albums = albums;
    });

  this.reset = () => {
    this.name = '';
    this.type = '';
  };

  this.reset();

  this.addAlbum = () => {
    albumService.add({
      name: this.title,
      type: this.type
    })
      .then(saved => this.albums.push(saved));
    this.reset();
    $state.go('images');

  };
}