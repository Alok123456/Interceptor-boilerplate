import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

class AppBootstrap {
  constructor() {
    this.loadVueApp();
  }

  private loadVueApp(): void {
    Vue.config.productionTip = false;
    new Vue({
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
}

new AppBootstrap();

