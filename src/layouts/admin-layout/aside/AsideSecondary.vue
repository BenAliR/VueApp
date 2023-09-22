<template>
  <div
    v-if="asideSecondaryDisplay"
    class="aside-secondary d-flex flex-row-fluid"
  >
    <div class="aside-workspace my-5 p-5" id="kt_aside_wordspace">
      <div class="d-flex h-100 flex-column">
        <div
          class="flex-column-fluid hover-scroll-y"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_aside_wordspace"
          data-kt-scroll-dependencies="#kt_aside_secondary_footer"
          data-kt-scroll-offset="0px"
        >
          <div class="tab-content">
            <div
              class="tab-pane fade active show"
              id="kt_aside_nav_tab_projects"
              role="tabpanel"
            >
              <KTMenu></KTMenu>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_menu"
              role="tabpanel"
            >
              <KTMenu2></KTMenu2>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_subscription"
              role="tabpanel"
            >
              <!--begin::Subscription-->
              <div class="mx-5">
                <!--begin::Container-->
                <div class="text-center pt-10 mb-20">
                  <!--begin::Title-->
                  <h2 class="fs-2 fw-bold mb-7">My Subscription</h2>
                  <!--end::Title-->

                  <!--begin::Description-->
                  <p class="text-gray-400 fs-4 fw-semobold mb-10">
                    There are no customers added yet.<br />
                    Kickstart your CRM by adding a your first customer
                  </p>
                  <!--end::Description-->

                  <!--begin::Action-->
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_upgrade_plan"
                    >Upgrade Plan</a
                  >
                  <!--end::Action-->
                </div>
                <!--end::Container-->

                <!--begin::Illustration-->
                <div class="text-center px-4">
                  <img
                    class="mw-100 mh-300px"
                    alt=""
                    :src="getIllustrationsPath('18.png')"
                  />
                </div>
                <!--end::Illustration-->
              </div>
              <!--end::Subscription-->
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_tasks"
              role="tabpanel"
            >
              <KTTasksOverview></KTTasksOverview>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_notifications"
              role="tabpanel"
            >
              <KTNotifications></KTNotifications>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_authors"
              role="tabpanel"
            >
              <KTAuthors></KTAuthors>
            </div>
          </div>
        </div>

        <div class="flex-column-auto pt-10 px-5" id="kt_aside_secondary_footer">
          <a
            href="https://preview.keenthemes.com/metronic8/vue/docs/#/doc-overview"
            class="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
            data-bs-toggle="tooltip"
            data-bs-custom-class="tooltip-dark"
            data-bs-trigger="hover"
            data-bs-offset="0,5"
            data-bs-dismiss-="click"
          >
            <span class="btn-label">{{ t("docsAndComponents") }}</span>
            <KTIcon icon-name="document" icon-class="btn-icon fs-4 ms-2" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <button
    v-if="asideSecondaryDisplay && minimizationEnabled"
    :class="{ active: minimizedAsideSecondary }"
    class="btn btn-sm btn-icon bg-body btn-color-gray-700 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex mb-5"
    data-kt-toggle="true"
    data-kt-toggle-state="active"
    data-kt-toggle-target="body"
    data-kt-toggle-name="aside-minimize"
    style="margin-bottom: 1.35rem"
  >
    <KTIcon icon-name="arrow-left" icon-class="fs-2 rotate-180" />
  </button>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import KTMenu from "@/layouts/admin-layout/aside/Menu.vue";
import KTMenu2 from "@/layouts/admin-layout/aside/SecondMenu.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import KTTasksOverview from "@/layouts/admin-layout/aside/tabs/TasksOverview.vue";
import KTAuthors from "@/layouts/admin-layout/aside/tabs/Authors.vue";
import KTNotifications from "@/layouts/admin-layout/aside/tabs/Notifications.vue";
import {
  asideSecondaryDisplay,
  minimizationEnabled,
  minimizedAsideSecondary,
} from "@/core/helpers/config";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "kt-aside-secondary",
  components: {
    KTMenu,
    KTMenu2,
    KTTasksOverview,
    KTAuthors,
    KTNotifications,
  },
  setup() {
    const { t } = useI18n();
    const projects = ref([]);
    const getProjects = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/list");
          projects.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch projects:", error);
          // Handle the error as needed
        }
      }
    };
    function generateInitials(title) {
      const words = title.split(" ");
      let initials = "";

      for (const word of words) {
        if (word.length > 0) {
          initials += word[0].toUpperCase();
        }
      }

      return initials;
    }
    onMounted(() => {
      // Enable loading indicator if needed
      // document.body.classList.add("page-loading");
      // document.body.setAttribute("data-kt-app-page-loading", "true");
      //
      // getProjects().finally(() => {
      //   // Disable loading indicator
      //   document.body.classList.remove("page-loading");
      //   document.body.removeAttribute("data-kt-app-page-loading");
      // });
    });
    return {
      minimizedAsideSecondary,
      asideSecondaryDisplay,
      minimizationEnabled,
      getIllustrationsPath,
      t,
      projects,
      generateInitials,
      getAssetPath,
    };
  },
});
</script>
<style>
.project-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
