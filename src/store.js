import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
// import router from "@/router";

Vue.use(Vuex);

var config = {
  apiKey: "AIzaSyABPTSOIehOWXrIrTlZLsAfjcou_f3oy1s",
  authDomain: "blog-template-e8082.firebaseapp.com",
  databaseURL: "https://blog-template-e8082.firebaseio.com",
  projectId: "blog-template-e8082",
  storageBucket: "blog-template-e8082.appspot.com",
  messagingSenderId: "589851773038"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,
    isAuthenticated: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
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
        .catch(function(error) {
          alert(error);
          commit("setUser", null);
          commit("setIsAuthenticated", false);
        });
    }
  }
});
