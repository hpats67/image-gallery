import template from './image-add.html';
import styles from './image-add.scss';

export default {
  template,
  bindings: {
    add:'<'
  },
  controller
};

controller.$inject = ['imageService', '$state'];

function controller(imageService, $state) {

  this.styles = styles;

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
      description: this.description
    })
      .then(saved => this.images.push(saved));
    this.reset();
    $state.go('images');
  };
}