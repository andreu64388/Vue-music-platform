import { createStore } from "vuex";
import user from "./User/User";

const store = createStore({
  modules: {
    user,
  },
});

export default store;
