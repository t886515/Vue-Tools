// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Quasar from 'quasar-framework'

import 'quasar-extras/roboto-font';
import 'quasar-extras/material-icons';
import 'quasar-framework/dist/quasar.ios.css';

import { QCardActions, QCardSeparator, QItemMain, QRadio, QItemSeparator, QSpinnerDots, QInput, QCard, QTooltip, QBtn, QCheckbox, QIcon, QToolbar, QToolbarTitle, QTooltipQCard, QCardTitle, ListEntry, QField, QList, QItem, QItemSide, QItemTile  } from 'quasar-framework';

import apolloProvider from './apollo';

Vue.config.productionTip = false

Vue.use(Quasar, {
  components: {
    QBtn,
    QCheckbox,
    QIcon,
    QToolbar,
    QToolbarTitle,
    QTooltip,
    QCard,
    QCardTitle,
    QField,
    QList,
    QItem,
    QItemSide,
    QItemTile,
    QInput,
    QSpinnerDots,
    QItemSeparator,
    QRadio,
    QItemMain,
    QCardSeparator,
    QCardActions
  }
})
/* eslint-disable no-new */


new Vue({
  el: '#app',
  apolloProvider,
  router,
  components: { App },
  template: '<App/>',
  // props: ['random']
  // render: h => h(App),
})
