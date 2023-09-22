<template>
  <KTModalCard
      title="Bienvenue!"
      description="si vous souhaitez ajouter un nouveau projet .<br/>cliquez sur nouveau projet"
      :image="getIllustrationsPath('2.png')"
      button-text="Creé Un Projet"
      modal-id="kt_modal_create_app"
  ></KTModalCard>


</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";

import { getIllustrationsPath } from "@/core/helpers/assets";


export default defineComponent({
  name: "student-create-new-project",
  components: {
    KTModalCard,

  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
