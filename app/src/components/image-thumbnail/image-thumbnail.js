import styles from './image-thumbnail.css';
import template from './image-thumbnail.html';

export default {
  template,
  bindings: {
    images: '='
  },
  controller () {this.styles = styles;}
};