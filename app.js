import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import navComp from './components/navComp.js';

import main from './main.js';

let  app = createApp(main);
app.component(navComp.name, navComp);

app.mount('#app')


