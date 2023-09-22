<template>
  <KTModalCard
    title="Welcome!"
    description="There are no customers added yet. <br/>Kickstart your CRM by adding a your first customer"
    :image="getIllustrationsPath('2.png')"
    button-text="Add New Invite"
    modal-id="kt_modal_add_new_invite"
  ></KTModalCard>

  <AddNewInviteModal></AddNewInviteModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import AddNewInviteModal from "@/views/Admin/crud-invites/create-invite-modal/AddInviteModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "create-student",
  components: {
    KTModalCard,
    AddNewInviteModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
