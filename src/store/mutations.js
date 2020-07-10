export default {
  appendPet: (state, { species, pet }) => {
    state[species.toLowerCase() + 's'].push(pet);
  },
};
