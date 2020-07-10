<template>
  <div>
    <h1>
      Cats for Adoption
    </h1>
    <PetTable species="cats" :pets="cats" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PetTable from '@/components/PetsTable.vue';

export default {
  data() {
    return {};
  },

  components: {
    PetTable,
  },

  computed: {
    ...mapState(['cats']),
  },
};
</script>

<style></style>
