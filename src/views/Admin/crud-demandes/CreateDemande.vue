<template>
  <KTModalCard
    title="Welcome!"
    description="si vous souhaitez ajouter une nouvelle demande .<br/>cliquez sur nouvelle demande "
    :image="getIllustrationsPath('10.png')"
    button-text="Add Demande"
    modal-id="kt_modal_add_demande"
  ></KTModalCard>

  <AddDemandeModal></AddDemandeModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";

import { getIllustrationsPath } from "@/core/helpers/assets";
import AddDemandeModal from "@/views/Admin/crud-demandes/create-demande-modal/AddDemandeModal.vue";

export default defineComponent({
  name: "create-demande",
  components: {
    AddDemandeModal,
    KTModalCard,

  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
