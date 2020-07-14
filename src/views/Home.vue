<template>
  <div class="home">
    <h1>
      Adopt a new best friend
    </h1>
    <p>{{ animalsCount }} furry friends are waiting for you!</p>
    <button class="btn btn-primary" @click="togglePetForm">
      Add New Pet
    </button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          type="text"
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['Dog', 'Cat']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Pet's age Age:"
        label-for="input-2"
      >
        <b-form-input
          type="number"
          id="input-2"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; //We are importing vuex to be able to access the store files
export default {
  name: 'home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        species: null,
        age: 0,
      },
    };
  },
  computed: {
    ...mapGetters(['animalsCount', 'getByBreed']),
  },
  methods: {
    ...mapActions([
      // We are importing the methods from the actions file
      'addPet',
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, age, name } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age,
        },
      };
      this.addPet(payload); //Here we are using them to create the object. Remember that it will take
      this.togglePetForm(); // an object with species and pet to create

      this.formData = {
        name: '',
        species: null,
        age: 0,
      };
    },
  },
};
</script>
