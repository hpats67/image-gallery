import template from './album-delete.html';
import styles from './album-delete.scss';

export default {
  template, 
  bindings: {
    remove: '<',
    images: '='
  },
  controller
};

controller.$inject = ['albumService', '$state'];

function controller (albumService, $state) {

  this.styles = styles;

  this.albums= [];

  albumService.get()
    .then(albums => {
      this.albums = albums;
    });

  this.trash = (album) => {

    albumService.remove(album)
      .then(removed => {
        let theIndex = this.albums.indexOf(removed);
        if (theIndex > -1) this.albums.splice(theIndex, 1);
        albumService.get();
        $state.go('images');
      });
  };
}