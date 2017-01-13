import template from './album-delete.html';

export default {
  template,
  controller,
  bindings: {
    albums: '='
  }
};

controller.$inject = ['albumService'];

function controller(albumService){

  this.trash = (album) => {
    albumService.remove(album)
      .then(removed => {
        let theIndex = this.albums.indexOf(removed);
        if (theIndex > -1) this.albums.splice(theIndex, 1);
      });
  };
}