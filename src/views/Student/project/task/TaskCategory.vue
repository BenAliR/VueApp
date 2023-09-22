<template>
  <!--begin::Toolbar-->
  <div v-if="tasks.length" class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h2 class="fs-2 fw-semobold my-2"></h2>
    <!--end::Heading-->

    <!--begin::Controls-->
    <div class="d-flex flex-wrap my-1">
      <!--begin::Select wrapper-->

      <!--begin::Select-->
      <div class="mb-4 me-2">
        <label for="filterStatus" class="form-label"
        >Filtrer par statut :</label
        >
        <select
            @change="onStatusFilterChange"
            v-model="filterStatus"
            id="filterStatus"
            class="form-select"
        >
          <option value="">Sélectionnez statut...</option>
          <option value="1">Encore à commencer</option>
          <option value="2">En cours</option>
          <option value="3">Complété</option>
        </select>
      </div>

      <div class="mb-4 me-2">
        <label for="filterType" class="form-label">Filtrer par Type:</label>
        <select
            @change="onTypeFilterChange"
            v-model="filterType"
            id="filterType"
            class="form-select"
        >
          <option value="">Sélectionnez type...</option>
          <option label="Présentation du projet" value="Présentation du projet">
            Présentation du projet
          </option>
          <option label="Concept de design" value="Concept de design">
            Concept de design
          </option>

          <option
              label="Logiques fonctionnelles"
              value="Logiques fonctionnelles"
          >
            Logiques fonctionnelles
          </option>
          <option label="Development" value="Development">Development</option>
          <option label="Testing" value="Testing">Testing</option>
        </select>
      </div>
      <!--end::Select-->

      <!--end::Select wrapper-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Toolbar-->
  <div v-if="tasks.length" class="row mb-5 g-5 g-xl-8">
    <div
        v-for="(status, index) in taskStatuses"
        :key="index"
        class="col-xl-4"
    >
      <StatisticsWidget6
          :widget-classes="'card-xl-stretch mb-xl-8'"
          :color="status.color"
          :title="status.title"
          :description="status.description"
          :progress="status.progress"
      ></StatisticsWidget6>
    </div>
  </div>


  <kt-empty v-if="!filteredTableData.length"> </kt-empty>
  <!--begin::Row-->
  <div v-if="tasks.length" class="row g-5 g-xl-5">
    <!--begin::Col-->
    <div class="col-xl-4" v-for="(task, index) in paginatedTasks" :key="index">
      <!--begin::Mixed Widget 9-->
      <div class="card card-xl-stretch mb-xl-8">
        <!--begin::Body-->
        <div class="card-body d-flex flex-column pb-5 pb-lg-5">
          <div class="flex-grow-1">
            <!--begin::Info-->
            <div class="d-flex align-items-center pe-2 mb-5">
              <span
                :class="getTypeColorClass(task.type)"
                class="badge fw-bold me-auto px-4 py-3"
                >{{ task.type }}</span
              >

              <div class="symbol symbol-50px">
                <span
                  class="w-bold me-auto px-4 py-3 badge"
                  :class="getStatusColorClass(task.status)"
                >
                  {{ getStatusText(task.status) }}
                </span>
              </div>
            </div>
            <!--end::Info-->
            <div class="mb-2">
              <router-link :to="taskLink(task)">
                <div
                  class="task-title fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                >
                  {{ capitalizeFirstLetter(task.title) }}
                </div>
              </router-link>
            </div>
            <!--begin::Link-->

            <!--end::Link-->

            <!--begin::Desc-->
            <p class="py-3">
              {{ task.description }}
            </p>
            <!--end::Desc-->
          </div>

          <!--begin::Team-->
          <div class="d-flex align-items-center flex-stack flex-wrapr">
            <div
              class="symbol symbol-35px me-2"
              data-bs-toggle="tooltip"
              :aria-label="task.assigned.fullname"
              :data-bs-original-title="task.assigned.fullname"
              :title="task.assigned.fullname"
              data-kt-initialized="1"
            >
              <img
                alt="Pic"
                v-if="task.assigned.photo"
                :src="url + task.assigned.photo"
              />
            </div>
            <!-- Task Stats -->
            <div class="d-flex my-1">
              <div
                class="border border-dashed border-gray-300 rounded d-flex align-items-center py-2 px-3"
              >
                <i class="ki-duotone ki-paper-clip fs-3"></i>
                <span class="ms-1 fs-7 fw-bold text-gray-600">{{
                  task.subtasks_count
                }}</span>
              </div>
              <div
                class="border border-dashed border-gray-300 d-flex align-items-center rounded py-2 px-3 ms-3"
              >
                <i class="ki-duotone ki-message-text-2 fs-3"
                  ><span class="path1"></span><span class="path2"></span
                  ><span class="path3"></span
                ></i>
                <span class="ms-1 fs-7 fw-bold text-gray-600">{{
                  task.comment_count
                }}</span>
              </div>
            </div>
          </div>
          <!--end::Team-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Mixed Widget 9-->
    </div>
    <!--end::Col-->
    <!--begin::Pagination-->
    <div class="d-flex flex-stack flex-wrap pt-10">
      <div class="fs-6 fw-semobold text-gray-700">
        Affichage de {{ startIndex }} à {{ endIndex }} sur
        {{ filteredTableData.length }} entrées
      </div>

      <!--begin::Pages-->
      <ul class="pagination">
        <li class="page-item previous">
          <button
            @click="onPageChange(currentPage - 1)"
            :disabled="currentPage === 1"
            class="cursor-pointer page-link"
          >
            <i class="previous"></i>
          </button>
        </li>
        <li v-for="page in pageNumbers" :key="page" class="page-item">
          <span
            @click="onPageChange(page)"
            :class="{ active: currentPage === page }"
            class="cursor-pointer page-link"
            >{{ page }}</span
          >
        </li>

        <li class="page-item next">
          <button
            @click="onPageChange(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="cursor-pointer page-link"
          >
            <i class="next"></i>
          </button>
        </li>
      </ul>
      <!--end::Pages-->
    </div>
    <!--end::Pagination-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import AddNewTaskModal from "@/components/modals/student-modals/add-new-task/AddNewTaskModal.vue";
import { useProjectStore } from "@/stores/project";
import { useRoute } from "vue-router";
import { getAssetPath } from "@/core/helpers/assets";
import KtEmpty from "@/layouts/main-layout/search/partials/Empty.vue";
import WidgetsMixed from "@/views/crafted/widgets/Mixed.vue";
import Widget4 from "@/components/widgets/feeds/Widget4.vue";
import WidgetsStatistics from "@/views/crafted/widgets/Statistics.vue";
import StatisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";
import StatisticsWidget6 from "@/components/widgets/statsistics/Widget6.vue";

// Define your types/interfaces here
interface Task {
  status: string;
  title: string;
  description: string;
  assigned: { fullname: string; photo: string };
  subtasks_count: number;
  comment_count: number;
}
export default defineComponent({
  name: "tasks-category",
  components: {StatisticsWidget6 ,KtEmpty },

  setup() {
    const filteredPending = ref<Task[]>([
      // Your task data here
    ]);

    const tasks = ref([]);
    const route = useRoute();
    const url = import.meta.env.VITE_APP_URL;
    const filteredInProgress = ref([]);
    const filteredCompleted = ref([]);
    const filterStatus = ref("");
    const filterType = ref("");
    const currentPage = ref(1);
    const pageSize = ref(9);
    const getTasks = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "project/task/list/" + route.params.slug
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
    // Define your methods here
    const taskLink = (task: Task) => ({
      name: "task-overview",
      params: {
        slug: route.params.slug,
        id: task["slug"],
      },
    });

    const getStatusColorClass = (status: string) => ({
      "badge-primary": status === "1",
      "badge-warning": status === "2",
      "badge-success": status === "3",
    });

    const capitalizeFirstLetter = (str: string) =>
      str.charAt(0).toUpperCase() + str.slice(1);

    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getTasks().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });
    function getTypeColorClass(status) {
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

    function getStatusText(status) {
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

    const filteredTableData = computed(() => {
      return tasks.value.filter((task) => {
        const statusMatch =
          filterStatus.value === "" || task["status"] === filterStatus.value;
        const typeMatch =
          filterType.value === "" || task["type"] === filterType.value;

        return statusMatch && typeMatch;
      });
    });
    const pageNumbers = computed<number[]>(() => {
      const pages: number[] = [];
      for (let page = 1; page <= totalPages.value; page++) {
        pages.push(page);
      }
      return pages;
    });

    const onPageChange = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };
    // Calculate the start and end index for the displayed range
    const startIndex = computed(() => {
      return (currentPage.value - 1) * pageSize.value + 1;
    });

    const endIndex = computed(() => {
      const end = currentPage.value * pageSize.value;
      return end > filteredTableData.value.length
        ? filteredTableData.value.length
        : end;
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredTableData.value.length / pageSize.value);
    });
    const onStatusFilterChange = (event) => {
      filterStatus.value = event.target.value;

      currentPage.value = 1; // Reset the current page when changing the filter
    };
    const onTypeFilterChange = (event) => {
      filterType.value = event.target.value;
      currentPage.value = 1; // Reset the current page when changing the filter
    };
    const paginatedTasks = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return filteredTableData.value.slice(start, end);
    });


    const taskStatuses = computed(() => {
      const statusCounts: { [key: string]: number } = {};
      const totalTasks = tasks.value.length;

      // Calculate status counts
      tasks.value.forEach((task) => {
        if (statusCounts[task["status"]]) {
          statusCounts[task["status"]]++;
        } else {
          statusCounts[task["status"]] = 1;
        }
      });

      // Calculate status percentages and build taskStatus objects
      return Object.keys(statusCounts).map((status) => {
        const count = statusCounts[status];
        const percentage = ((count / totalTasks) * 100).toFixed(2) + "%";


        let color = "";
        switch (status) {

          case "3":
            color = "success";
            break;
          case "1":
            color = "primary";
            break;
          case "2":
            color = "warning";
            break;
          default:
            color = "info"; // Change this to a default color
        }

        return {
          title: count + " Tàches",
          description: getStatusText(status),
          color,
          progress: percentage,
        };
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
      taskLink,
      route,
      getTypeColorClass,
      getStatusText,
      filteredTableData,
      filterStatus,
      filterType,
      pageNumbers,
      onStatusFilterChange,
      endIndex,
      startIndex,
      onPageChange,
      totalPages,
      currentPage,
      onTypeFilterChange,
      paginatedTasks,
      taskStatuses,
    };
  },
});
</script>
