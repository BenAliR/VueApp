<template>
  <KTModalCard
    title="Invite Friends Modal Example"
    description="Click on the below buttons
  to launch <br />
  a friend invitation example."
    :image="getIllustrationsPath('1.png')"
    button-text="Invite Members"
    modal-id="kt_modal_invite_members"
  ></KTModalCard>

  <KTInviteMembersModal></KTInviteMembersModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTInviteMembersModal from "@/components/modals/student-modals/add-new-member/InviteMembersModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "invite-members",
  components: {
    KTModalCard,
    KTInviteMembersModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
