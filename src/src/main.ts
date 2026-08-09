import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

const app = createApp(App);

const portfolioTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0b1220',
    surface: '#162238',
    header: '#0f192a',
    primary: '#91b7de',
    secondary: '#e0b66f',
    accent: '#e0b66f',
    error: '#e18f92',
    info: '#91b7de',
    success: '#91b99c',
    warning: '#e0b66f',
    'on-background': '#f4f1ea',
    'on-surface': '#f4f1ea',
    'on-primary': '#0b1220',
    'on-secondary': '#0b1220',
    'surface-variant': '#1d2c45',
    'on-surface-variant': '#bdc7d5',
    outline: '#59708c'
  }
};

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'portfolioTheme',
    themes: {
      portfolioTheme
    }
  }
});

// NOTE: 不要のためコメントアウト
// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
