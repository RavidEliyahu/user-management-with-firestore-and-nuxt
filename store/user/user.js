import firebaseAuth from '@/firebase/app'

export const state = () => ({
  user: null,
  uid: null
})

export const getters = {
  uid(state) {
    console.log('[STORE GETTERS] - SET_UID:', uid)
    return state.uid
  },
  user(state) {
    console.log('[STORE GETTERS] - SET_USER:', user)
    return state.user
  },
}

export const mutations = {
  SET_USER(state, user) {
    console.log('[STORE MUTATIONS] - SET_USER:', user)
    state.commit('user', user)
  },
  SET_UID(state, uid) {
    console.log('[STORE MUTATIONS] - SET_UID:', uid)
    state.commit('uid', uid)
  },
}

export const actions = {
  async signUp({ commit }, payload) {
    try {
      console.log(firebase)
      // create a user in firebase authentication
      const firebaseUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)

      // create the user in the cloud firestore db
      await firebase.firestore().collection('users').add({
        uid: firebaseUser.uid,
        email: firebaseUser.email
      })
      console.log('[STORE ACTIONS] - signUp:', firebaseUser)
    } catch (e) {
      console.error(e)
    }
  }
}