import template from './image-view.html';

export default {
  template, 
  bindings: {
    images: '=',
    remove: '<'
  },
  controller
};

function controller () {

  this.trash = (image) => {
    this.remove(image);
  };
}