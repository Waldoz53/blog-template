import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import firebase from "@/firebase/firebase";

Vue.use(Vuex);

const db = firebase.firestore();

export default new Vuex.Store({
  state: {
    isAuthenticated: false
  },
  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
    userSignup({ commit }, { username, email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() =>
          db
            .collection("userDetails")
            .doc(firebase.auth().currentUser.uid)
            .set({
              username: username,
              admin: false
            })
        )
        .then(() => commit("setIsAuthenticated", true), router.push("/"))
        .catch(function(error) {
          alert(error);
          commit("setIsAuthenticated", false);
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => commit("setIsAuthenticated", true), router.push("/"))
        .catch(function(error) {
          alert(error);
          commit("setIsAuthenticated", false);
        });
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    }
  }
});
