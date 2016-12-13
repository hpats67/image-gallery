import template from './image-add.html';

export default {
  template,
  bindings: {
    add:'<'
  },
  controller
};

function controller() {

  this.reset = () => {
    this.title = '';
    this.url = '';
    this.description = '';
  };

  this.reset();

  this.addImage = () => {
    this.add({
      title: this.title,
      url: this.url,
      description: this.description
    });
    this.reset();
  };
}