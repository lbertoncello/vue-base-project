// Vue Core
import { createApp } from 'vue';
import registerPlugins from '@/plugins';
import App from './App.vue';

// Styles
import '@/assets/styles/style.css';

const app = createApp(App);

// Insert plugins and middlewares
registerPlugins(app);

app.mount('#app');
