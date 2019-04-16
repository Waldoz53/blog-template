import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import firebase from "@/firebase/firebase";

Vue.use(Vuex);

const db = firebase.firestore();
let userDetails = [];

firebase.auth().onAuthStateChanged(() => {
  userDetails = [];
  db.collection("userDetails").doc(firebase.auth().currentUser.uid).onSnapshot(function(doc){
    userDetails.push({
      username: doc.data().username,
      admin: doc.data().admin
    })
  })
});

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    isAdmin: false,
    username: ''
  },
  mutations: {
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setUsername(state) {
      state.username = userDetails.username;
    },
    setAdmin(state) {
      state.isAdmin = userDetails.admin;
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
        .then(() => commit("setIsAuthenticated", true),
        router.push("/"))
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
        .catch(function(error) {
          alert(error);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    }
  }
});
