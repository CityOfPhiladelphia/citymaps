import axios from 'axios';
import Vue from 'vue';
import createStore from './store';
import configMixin from './util/config-mixin';
import WebMapViewer from './components/WebMapViewer';
import mergeDeep from './util/merge-deep';

// import controllerMixin from './controller';
import * as controllerMixinShell from '@cityofphiladelphia/phila-vue-datafetch';
const controllerMixin = controllerMixinShell.controllerMixin;

export default (clientConfig) => {
  const baseConfigUrl = clientConfig.baseConfig;

  // get base config
  return axios.get(baseConfigUrl).then(response => {
    const data = response.data;
    const baseConfigFn = eval(data);
    const { gatekeeperKey } = clientConfig;
    const baseConfig = baseConfigFn({ gatekeeperKey });

    // deep merge base config and client config
    const config = mergeDeep(baseConfig, clientConfig);

    // make config accessible from each component via this.$config
    Vue.use(configMixin, config);

    // create store
    const store = createStore(config);

    // mix in controller
    Vue.use(controllerMixin, { config, store });

    // mount main vue
    const vm = new Vue({
      el: config.el || '#webmap-viewer',
      render: (h) => h(WebMapViewer),
      store
    });

  }, response => {
    console.error('AXIOS ERROR loading base config');
  });
};
