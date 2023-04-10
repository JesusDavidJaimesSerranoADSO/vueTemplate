import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import navComp from './components/navComp.js';
import contentCopm from './components/contentCopm.js';
import slideCompo from './components/slideCompo.js';
import main from './main.js';

let  app = createApp(main);
app.component(navComp.name, navComp);
app.component(contentCopm.name, contentCopm);
app.component(slideCompo.name, slideCompo);

app.mount('#app')


