<template>
  <!--begin::Row-->
  <div class="tab-content">
    <div class="card card-flush">
      <div class="card-body pt-3">
        <!--begin::Table-->
        <div
          id="kt_profile_overview_table_wrapper"
          class="dataTables_wrapper dt-bootstrap4 no-footer"
        >
          <div class="table-responsive">
            <kt-empty v-if="!tasks.length"> </kt-empty>
            <table
              v-else
              id="kt_profile_overview_table"
              class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold dataTable no-footer"
            >
              <thead class="fs-7 text-gray-400 text-uppercase">
                <tr>
                  <th
                    class="min-w-250px sorting"
                    tabindex="0"
                    aria-controls="kt_profile_overview_table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Target: activate to sort column ascending"
                    style="width: 0px"
                  >
                    Tâche
                  </th>
                  <th
                    class="min-w-90px sorting"
                    tabindex="0"
                    aria-controls="kt_profile_overview_table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Section: activate to sort column ascending"
                    style="width: 0px"
                  >
                    Section
                  </th>
                  <th
                    class="min-w-150px sorting"
                    tabindex="0"
                    aria-controls="kt_profile_overview_table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Due Date: activate to sort column ascending"
                    style="width: 0px"
                  >
                    Date d'échéance
                  </th>
                  <th
                    class="min-w-90px sorting"
                    tabindex="0"
                    aria-controls="kt_profile_overview_table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Members: activate to sort column ascending"
                    style="width: 0px"
                  >
                    Membres
                  </th>
                  <th
                    class="min-w-90px sorting"
                    tabindex="0"
                    aria-controls="kt_profile_overview_table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Status: activate to sort column ascending"
                    style="width: 0px"
                  >
                    Statut
                  </th>
                  <th
                    class="min-w-50px sorting"
                    tabindex="0"
                    aria-controls="kt_profile_overview_table"
                    rowspan="1"
                    colspan="1"
                    aria-label=": activate to sort column ascending"
                    style="width: 0px"
                  ></th>
                </tr>
              </thead>

              <tbody class="fs-6">
                <tr class="odd" v-for="(task, index) in tasks" :key="index">
                  <td class="fw-bold">
                    <a
                      href="#"
                      class="task-title text-gray-900 text-hover-primary"
                    >
                      {{ capitalizeFirstLetter(task.title) }}</a
                    >
                  </td>
                  <td data-order="Invalid date">
                    <span
                      :class="getStatusColorClass(task.type)"
                      class="badge fw-semibold me-auto"
                      >{{ task.type }}</span
                    >
                  </td>
                  <td>{{ formatDateWithoutTime(task.due_date) }}</td>
                  <td>
                    <div class="symbol-group symbol-hover fs-8">
                      <div
                        class="symbol symbol-25px symbol-circle"
                        data-bs-toggle="tooltip"
                        :aria-label="task.assigned.fullname"
                        :data-bs-original-title="task.assigned.fullname"
                        :title="task.assigned.fullname"
                        :data-kt-initialized="task.assigned.id"
                      >
                        <img
                          alt="Pic"
                          v-if="task.assigned.photo"
                          :src="url + task.assigned.photo"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      :class="getStatus(task.status)"
                      class="badge badge-light-primary fw-bold me-auto"
                      >{{ getStatusName(task.status) }}</span
                    >
                  </td>
                  <td class="text-end">
                    <!--                      <router-link-->
                    <!--                        class="btn btn-bg-light btn-active-color-primary btn-sm"-->
                    <!--                        :to="{-->
                    <!--                          name: 'task-overview',-->
                    <!--                          params: {-->
                    <!--                            slug: route.params.slug,-->
                    <!--                            id: task.slug,-->
                    <!--                          },-->
                    <!--                        }"-->
                    <!--                      >-->
                    <!--                        Voir</router-link-->
                    <!--                      >-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div
              class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"
            ></div>
            <div
              class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"
            ></div>
          </div>
        </div>
        <!--end::Table-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";

import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
import { useProjectStore } from "@/stores/project";
import Swal from "sweetalert2/dist/sweetalert2.js";
import AddNewTaskModal from "@/components/modals/student-modals/add-new-task/AddNewTaskModal.vue";
import KtLoading from "@/components/kt-datatable/table-partials/Loading.vue";
import KtEmpty from "@/layouts/main-layout/search/partials/Empty.vue";
export default defineComponent({
  name: "student-tasks-project",
  components: { KtEmpty },
  setup() {
    const store = useProjectStore();
    const taskData = new FormData();
    const tasks = ref([]);
    const route = useRoute();
    const url = import.meta.env.VITE_APP_URL;
    const filteredPending = ref([]);
    const filteredInProgress = ref([]);
    const filteredCompleted = ref([]);
    const getTasks = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "admin/users/projects/tasks/list/" + route.params.id
          );
          tasks.value = response.data.data;

          filteredPending.value = tasks.value.filter(
            (project) => project["status"] === "1"
          );
          filteredInProgress.value = tasks.value.filter(
            (project) => project["status"] === "2"
          );
          filteredCompleted.value = tasks.value.filter(
            (project) => project["status"] === "3"
          );
        } catch (error) {
          console.error("Failed to fetch projects:", error);
          // Handle the error as needed
        }
      }
    };

    function getStatusName(status) {
      if (status === "1") {
        return "Encore à commencer";
      } else if (status === "2") {
        return "En cours";
      } else if (status === "3") {
        return "Complété";
      } else {
        return "Inconnu"; // Default color if status is null or unknown
      }
    }
    function getStatus(status) {
      if (status === "1") {
        return "badge-light-warning";
      } else if (status === "2") {
        return "badge-light-primary";
      } else if (status === "3") {
        return "badge-light-success";
      } else {
        return "badge-light-primary"; // Default color if status is null or unknown
      }
    }
    function getStatusColorClass(status) {
      if (status === "Présentation du projet") {
        return "badge-light-success";
      } else if (status === "Concept de design") {
        return "badge-light-warning";
      } else if (status === "Logiques fonctionnelles") {
        return "badge-light-primary";
      } else if (status === "Development") {
        return "badge-light-danger";
      } else if (status === "Testing") {
        return "badge-light-info";
      } else {
        return "badge-light-primary"; // Default color if status is null or unknown
      }
    }
    function capitalizeFirstLetter(str: string): string {
      if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      } else {
        return "non défini";
      }
    }
    function formatDateWithoutTime(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    function ChangeStatus(task) {
      taskData.append("status", task.status);
      //Send request
      store.UpdateTaskStatus(taskData, task.id);
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {
        getTasks();
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }
    }
    function ReloadTasks() {
      // Handle the button click event
      console.log("Button clicked in child component!");
      getTasks();
    }
    onMounted(() => {
      //  Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getTasks().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });
    return {
      getAssetPath,
      filteredPending,
      filteredInProgress,
      filteredCompleted,
      tasks,
      getStatusColorClass,
      capitalizeFirstLetter,
      url,
      formatDateWithoutTime,
      getStatus,
      getStatusName,
      ChangeStatus,
      route,
      ReloadTasks,
    };
  },
});
</script>
<style>
.task-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
