import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import myCompot from './components/myCompot.js';
import main from './main.js';

let  app = createApp(main);
app.component(myCompot.name, myCompot);
app.mount('#app')


