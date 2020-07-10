export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length;
  },

  getByBreed: (state) => (species, breed) => {
    return state[species].filter((pet) => {
      return pet.breed === breed;
    });
  },
};
