<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xl-10" v-if="project">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4"
          >
            <span class="fs-2qx fw-bold bg-light">
              {{ generateInitials(project.title) }}
            </span>
          </div>
        </div>
        <!--end::Pic-->
        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="d-flex justify-content-between align-items-start flex-wrap mb-2"
          >
            <!--begin::Project-->
            <div class="d-flex flex-column">

              <!--begin::Status-->
              <div class="d-flex align-items-center mb-1">
                <span

                    class="text-gray-800 text-hover-primary fs-2 fw-bold me-3 task-title1"
                >{{ capitalizeFirstLetter(project.title) }}</span
                >
                <span
                    class="badge me-auto"
                    :class="getStatusColorClass(project.project_status)"
                >{{ capitalizeFirstLetter(project.project_status) }}</span
                >
              </div>
              <!--end::Status-->
            </div>
            <!--end::Project-->

            <!--begin::Actions-->
            <div class="d-flex my-4">
              <span
                class="cursor-pointer btn btn-sm btn-light-danger  me-2"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_invite_members"
              >
                <KTIcon icon-name="check" icon-class="fs-3 d-none" />
               Supprimer
              </span>




            </div>
            <!--end::Actions-->
            <!--begin::Description-->

            <!--end::Description-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->
          <div class="d-flex flex-wrap flex-stack">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <!--begin::Stats-->
              <div class="d-flex flex-wrap justify-content-start">
                <!--begin::Stats-->
                <div class="d-flex flex-wrap">
                  <!--begin::Stat-->
                  <div
                    class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                  >
                    <!--begin::Number-->
                    <div class="d-flex align-items-center">
                      <div class="fs-4 fw-bold">
                        {{ formatDate(project.duedate) }}
                      </div>
                    </div>
                    <!--end::Number-->

                    <!--begin::Label-->
                    <div class="fw-semibold fs-6 text-gray-400">
                      Date d'échéance
                    </div>
                    <!--end::Label-->
                  </div>
                  <!--end::Stat-->

                  <!--begin::Stat-->
                  <div
                    class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                  >
                    <!--begin::Number-->
                    <div class="d-flex align-items-center">
                      <div
                        class="fs-4 fw-bold counted"
                        data-kt-countup="true"
                        data-kt-countup-value="75"
                        data-kt-initialized="1"
                      >
                        {{ ProjectType(project.type) }}
                      </div>
                    </div>
                    <!--end::Number-->

                    <!--begin::Label-->
                    <div class="fw-semibold fs-6 text-gray-400">Type</div>
                    <!--end::Label-->
                  </div>
                  <!--end::Stat-->
                </div>
                <!--end::Stats-->
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap"
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              :to="{
                name: 'student-project-overview',
                params: { id: project.id },
              }"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Aperçu
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              :to="{
                name: 'student-project-tasks',
                params: { id: project.id },
              }"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Tasks
            </router-link>
          </li>
          <!--end::Nav item-->

          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              :to="{
                name: 'student-project-members',
                params: { id: project.id },
              }"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Membres
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/project/activities"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Activity
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              :to="{
                name: 'student-project-settings',
                params: { id: project.id },
              }"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Settings
            </router-link>
          </li>
          <!--end::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <AddNewTaskModal
    @buttonClick2="ReloadTasks"
    v-if="project"
    :id="id"
  ></AddNewTaskModal>
  <AddNewMemberModal
    v-if="project"
    :makeApiCall="shouldMakeApiCall"
    :id="id"
  ></AddNewMemberModal>
  <!--end::Navbar-->
  <router-view v-if="project"></router-view>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref, watch } from "vue";
import Dropdown from "@/components/dropdown/dropdown-student/TaskDropdown.vue";
import { useAuthStore } from "@/stores/auth";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import AddNewTaskModal from "@/components/modals/student-modals/add-new-task/AddNewTaskModal.vue";
import AddNewMemberModal from "@/components/modals/student-modals/add-new-member/InviteMembersModal.vue";
import Pusher from "pusher-js";
export default defineComponent({
  name: "student-project-overview",
  components: {
    Dropdown,
    AddNewTaskModal,
    AddNewMemberModal,
  },
  setup() {
    const store = useAuthStore();
    const userstore = useAuthStore();
    const url = import.meta.env.VITE_APP_URL;
    const project = ref(null);
    const id = ref(0);
    const router = useRouter();
    const route = useRoute();
    const shouldMakeApiCall = ref(false); // Set this value based on your condition
    const messages = ref<string[]>([]);

    const capitalized = (name) => {
      if (name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      }
    };
    function ReloadTasks() {
      // Handle the button click event
      console.log("Button clicked in child component!");
      router.push({
        name: "project-tasks",
        params: {
          id: route.params.id,
        },
      });
    }

    const getProject = async (id) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("admin/users/projects/" + id);
          project.value = response.data.data;
        } catch (error: any) {
          document.body.classList.add("page-loading");
          document.body.setAttribute("data-kt-app-page-loading", "true");
          Swal.fire({
            text: error.response?.data?.errors[0],
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "D'accord, j'ai compris !",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(() => {
            // Go to page after successfully login
            // router.push({ name: "account-projects" });
          });
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
    function capitalizeFirstLetter(str: string): string {
      if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      } else {
        return "non défini";
      }
    }
    function ProjectType(name) {
      if (name) {
        const initials = name
          .toUpperCase()
          .split(" ")
          .map((name) => name[0])
          .join("");
        return initials;
      }
      return "";
    }
    function getStatusColorClass(status) {
      if (status === "en attente") {
        return "badge-light-primary";
      } else if (status === "en cours de traitement") {
        return "badge-light-primary";
      } else if (status === "active") {
        return "badge-light-success";
      } else if (status === "en retard") {
        return "badge-light-danger";
      } else if (status === "inactive") {
        return "badge-light-danger";
      } else {
        return "badge-light-primary"; // Default color if status is null or unknown
      }
    }
    function formatDate(date) {
      if (date) {
        return new Date(date).toLocaleDateString();
      } else {
        return "Inconnu";
      }
    }

    // Watch for changes in the route parameters
    watch(
      () => route.params,
      (newParams, oldParams) => {
        // Handle the parameter changes here
        // Enable loading indicator if needed
        document.body.classList.add("page-loading");
        document.body.setAttribute("data-kt-app-page-loading", "true");
        // Access the project ID from the route params
        if (newParams.id) {
          getProject(newParams.id).finally(() => {
            // Disable loading indicator
            document.body.classList.remove("page-loading");
            document.body.removeAttribute("data-kt-app-page-loading");
          });
        }
      }
    );
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");
      // Access the project ID from the route params
      if (route.params.id) {
        console.log("Project ID:", route.params.id);
        getProject(route.params.id).finally(() => {
          // Disable loading indicator
          document.body.classList.remove("page-loading");
          document.body.removeAttribute("data-kt-app-page-loading");
        });
      }
    });
    return {
      store,
      url,
      project,
      capitalized,
      generateInitials,
      capitalizeFirstLetter,
      getStatusColorClass,
      ProjectType,
      formatDate,
      getAssetPath,
      id,
      ReloadTasks,
      userstore,
      shouldMakeApiCall,
      messages,
    };
  },
});
</script>
<style>

.task-title1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Maximum number of lines */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
