import template from './image-delete.html';

export default {
  template, 
  bindings: {
    images: '='
  },
  controller
};

controller.$inject = ['imageService'];

function controller (imageService) {

  this.trash = (image) => {
    imageService.remove(image)
      .then(removed => {
        let theIndex = this.images.indexOf(removed);
        if (theIndex > -1) this.images.splice(theIndex, 1);
      });
  };
}
