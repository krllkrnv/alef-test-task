import { createStore } from "vuex";

export default createStore({
  state: {
    USER_DATA: {
      name: "Имя",
      age: 0,
      kids: [],
    },
  },
  getters: {
    GET_USER_DATA: (state) => {
      return state.USER_DATA;
    },
  },
  mutations: {
    SET_USER_DATA: (state, payload) => {
      state.USER_DATA = payload;
    },
  },
});
