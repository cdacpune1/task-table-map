import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import VueAxios from 'vue-axios'

Vue.use(Vuex);
// Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state: {
    // renderArray: [],
    renderArray:[],
    items: []
  },
  getters: {
    getRenderArray(state) {
      return state.renderArray;
    }
  },

  actions: {
    load({ commit }) {
      axios
        .get("./info.json")
        .then(resp => resp.data)
        .then(renderArray => {
          commit("set_data", renderArray);
        });
    },
    storesdata({ commit }) {
      axios
        .get("./store1.json")
        .then(resp => resp.data)
        .then(items => {
          commit("set", items);
        });
    }
  },
  mutations: {
    set_data(state, renderArray) {
      state.renderArray = renderArray;
    },
    set(state, items) {
      state.items = items;
    }
  }
});
