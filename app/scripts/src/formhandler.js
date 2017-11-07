import $ from 'jquery';

export class FormHandler{
  constructor(selector){
    console.log('Hello Es6!');
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$form = $(selector);
    if (this.$form === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }
  addSubmitHandler (){
    console.log('Setting submit handler for form');
    this.$form.on('submit', function(event) {
      event.preventDefault();
      let data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
      });
      console.log(data);
      this.reset();
      this.elements[0].focus();
    });
  }
}
export default FormHandler;
