import template from './image-gallery.html'; 
import styles from './image-gallery.css';

export default {
  template,
  bindings: {
    images: '='
  },
  controller (){this.styles = styles;}
};