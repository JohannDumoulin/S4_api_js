import '../css/app.scss';
import {indexHelper} from './helpers/indexHelper';
import Country from './country';

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
      // Start application
      new Country(indexHelper());
    }
}

new App();
