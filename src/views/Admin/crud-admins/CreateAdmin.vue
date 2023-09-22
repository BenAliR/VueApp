<template>
  <KTModalCard
    title="Bienvenue!"
    description="si vous souhaitez ajouter un nouvel administrateur .<br/>cliquez sur nouvel administrateur"
    :image="getIllustrationsPath('2.png')"
    button-text="Ajouter administrateur"
    modal-id="kt_modal_add_admin"
  ></KTModalCard>

  <AddAdminModal></AddAdminModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";

import { getIllustrationsPath } from "@/core/helpers/assets";
import AddAdminModal from "@/views/Admin/crud-admins/create-admin-modal/AddAdminModal.vue";

export default defineComponent({
  name: "create-admin",
  components: {
    AddAdminModal,
    KTModalCard,

  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
