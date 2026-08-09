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
  dark: false,
  colors: {
    background: '#e8ece9',
    surface: '#f6f7f3',
    primary: '#2f7466',
    secondary: '#799652',
    accent: '#3489b5',
    error: '#a75652',
    info: '#3489b5',
    success: '#799652',
    warning: '#b98b54',
    'on-background': '#173f39',
    'on-surface': '#173f39',
    'surface-variant': '#d9ddc9',
    'on-surface-variant': '#416158',
    outline: '#8ba195'
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
