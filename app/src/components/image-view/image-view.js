import template from './image-view.html';
import styles from './image-view.scss';

export default {
  template, 
  bindings: {
    images: '=',
    remove: '<'
  },
  controller
};

function controller () {
  this.styles = styles;
  this.trash = (image) => {
    this.remove(image);
  };
  
}