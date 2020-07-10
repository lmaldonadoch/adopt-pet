<template>
  <b-table striped hover :items="pets">
    <template v-slot:cell(name)="data">
      <!-- `data.value` is the value after formatted by the Formatter -->
      <!-- We are using the formatter callback to change dynamically the values
              of the links that will take us to the pet profile -->
      <router-link :to="`/pets/${species}/${data.index}`">
        {{ data.value }}
      </router-link>
    </template>
  </b-table>
</template>

<script>
export default {
  props: ['species', 'pets'],
};
</script>

<style></style>
