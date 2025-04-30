import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
if (typeof window !== 'undefined') {
    window.addEventListener('unhandledrejection', event => {
      if (event.reason.message.includes('The message port closed before a response was received')) {
        event.preventDefault();
      }
    });
  }