import '../styles/styles.css'
import Person from './modules/Person'

if (module.hot) {
  module.hot.accept()
}

/* Lesson example code */

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes zero taxes.");
  }
}


var john = new Person("John Doe", "green");
john.greet();

var jane = new Adult("Jane Smith", "purple");
jane.greet();
jane.payTaxes();