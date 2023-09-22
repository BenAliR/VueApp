<template>


  <kt-empty v-if="!filteredTableData.length"> </kt-empty>
  <!--begin::Row-->
  <div v-if="filteredTableData.length" class="row g-5 g-xl-5">
    <!--begin::Col-->
    <div class="col-xl-4 mt-10" v-for="(meeting, index) in paginatedMeetings" :key="index">

        <StatisticsWidget1
            widget-classes="card-xl-stretch mb-xl-8"

            :title="capitalizeFirstLetter(meeting.title)"
            :time="meeting.start_datetime"
            :description="meeting.description"
        ></StatisticsWidget1>
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
import StatisticsWidget1 from "@/components/widgets/statsistics/Widget1.vue";

// Define your types/interfaces here
interface Meeting {
  title: string;
  description: string;

  start_datetime: string;
  project_id: number;
}
export default defineComponent({
  name: "meetings-category",
  components: {StatisticsWidget1, KtEmpty },

  setup() {
    const filteredPending = ref<Meeting[]>([
      // Your meeting data here
    ]);

    const meetings = ref([]);
    const route = useRoute();
    const url = import.meta.env.VITE_APP_URL;
    const filteredInProgress = ref([]);
    const filteredCompleted = ref([]);
    const filterStatus = ref("");
    const filterType = ref("");
    const currentPage = ref(1);
    const pageSize = ref(9);
    const getMeetings = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "project/meetings/list/" + route.params.slug
          );
          meetings.value = response.data.data;

          filteredPending.value = meetings.value.filter(
            (project) => project["status"] === "1"
          );
          filteredInProgress.value = meetings.value.filter(
            (project) => project["status"] === "2"
          );
          filteredCompleted.value = meetings.value.filter(
            (project) => project["status"] === "3"
          );

        } catch (error) {
          console.error("Failed to fetch projects:", error);
          // Handle the error as needed
        }
      }
    };
    // Define your methods here
    const meetingLink = (meeting: Meeting) => ({
      name: "meeting-overview",
      params: {
        slug: route.params.slug,
        id: meeting["slug"],
      },
    });



    const capitalizeFirstLetter = (str: string) =>
      str.charAt(0).toUpperCase() + str.slice(1);

    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getMeetings().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });




    const filteredTableData = computed(() => {
      return meetings.value.filter((meeting) => {
        const statusMatch =
          filterStatus.value === "" || meeting["status"] === filterStatus.value;
        const typeMatch =
          filterType.value === "" || meeting["type"] === filterType.value;

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

    const paginatedMeetings = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return filteredTableData.value.slice(start, end);
    });



    return {
      getAssetPath,
      meetings,
      capitalizeFirstLetter,
      url,
      meetingLink,
      route,
      filteredTableData,
      pageNumbers,
      endIndex,
      startIndex,
      onPageChange,
      totalPages,
      currentPage,

      paginatedMeetings,

    };
  },
});
</script>
