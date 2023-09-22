<template>
  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <!-- begin:: Aside Left -->
    <KTAside
      v-if="asideEnabled"
      :lightLogo="themeLightLogo"
      :darkLogo="themeDarkLogo"
    />
    <!-- end:: Aside Left -->

    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader />

      <!-- begin:: Content -->
      <div id="kt_content" class="content d-flex flex-column flex-column-fluid">
        <!-- begin:: Content Body -->
        <div
          id="kt_content_container"
          :class="{
            'container-fluid': contentWidthFluid,
            'container-xxl': !contentWidthFluid,
          }"
        >
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter />
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop />
  <KTMessengerDrawer />
  <KTActivityDrawer />
  <KTCreateApp />
  <KTInviteFriendsModal />
  <KTUpgradePlanModal />

  <KTAddTaskModal />
  <KTToolbarButtons />
  <KTHelpDrawer />
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import { useRoute } from "vue-router";
import KTAside from "@/layouts/admin-layout/aside/Aside.vue";
import KTHeader from "@/layouts/admin-layout/header/Header.vue";
import KTFooter from "@/layouts/admin-layout/footer/Footer.vue";
import KTScrollTop from "@/layouts/admin-layout/extras/ScrollTop.vue";
import KTActivityDrawer from "@/layouts/admin-layout/drawers/ActivityDrawer.vue";
import KTCreateApp from "@/components/modals/student-modals/create-project-modal/CreateProjectModal.vue";
import KTInviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";

import KTAddTaskModal from "@/components/modals/student-modals/add-new-task/AddNewTaskModal.vue";
import KTUpgradePlanModal from "@/components/modals/general/UpgradePlanModal.vue";
import KTToolbarButtons from "@/layouts/admin-layout/extras/ToolbarButtons.vue";
import KTHelpDrawer from "@/layouts/admin-layout/extras/HelpDrawer.vue";
import KTMessengerDrawer from "@/layouts/admin-layout/extras/MessengerDrawer.vue";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import {
  asideEnabled,
  contentWidthFluid,
  loaderEnabled,
  loaderLogo,
  subheaderDisplay,
  themeDarkLogo,
  themeLightLogo,
  toolbarDisplay,
} from "@/core/helpers/config";
import LayoutService from "@/core/services/LayoutService";

export default defineComponent({
  name: "master-layout",
  components: {
    KTAside,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTCreateApp,
    KTInviteFriendsModal,
    KTUpgradePlanModal,
    KTActivityDrawer,
    KTToolbarButtons,
    KTHelpDrawer,
    KTMessengerDrawer,
    KTAddTaskModal,
  },
  setup() {
    const route = useRoute();


    onBeforeMount(() => {
      LayoutService.init();
    });

    onMounted(() => {
      // Disable loading indicator
      document.body.classList.remove("page-loading");
      document.body.removeAttribute("data-kt-app-page-loading");
      nextTick(() => {
        reinitializeComponents();
      });
    });

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          reinitializeComponents();
        });
      }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      themeLightLogo,
      themeDarkLogo,
    };
  },
});
</script>
