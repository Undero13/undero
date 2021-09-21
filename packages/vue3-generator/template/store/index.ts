import state from "./state";
import getters from "./getters";
import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export default createStore({
  actions,
  getters,
  mutations,
  state,
});
