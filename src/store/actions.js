export default {
  addPet: ({ commit }, payload) => {
    console.log(payload);
    commit('appendPet', payload);
  },
};
