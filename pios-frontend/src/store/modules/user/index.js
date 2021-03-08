export default {
  state: {
    user: {
      id: null,
      username: "Matija Novosel",
      email: "mnovosel5@gmail.com",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjE3ODM0NDk5fQ.tkx6_G_A_Zfq9xa8hZxL9zH_VZNBjbFF0AAgWchxz_Y"
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    setUser({ commit }, payload) {
      commit("setUser", payload);
    }
  },
  getters: {
    user: state => state.user
  },
}