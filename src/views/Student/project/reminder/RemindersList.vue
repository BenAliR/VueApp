<template>
  <div>
    <!-- Display message when there is no data -->
    <kt-empty v-if="!filteredTableData.length"></kt-empty>

    <!-- Display reminders if data is available -->
    <div v-else class="row g-5 g-xl-5">
      <div
        class="col-xl-4 mt-10"
        v-for="(reminder, index) in paginatedReminders"
        :key="index"
      >
        <div
          :style="{
            backgroundImage: `url(${getAssetPath(
              'media/svg/shapes/abstract-2.svg'
            )})`,
          }"
          class="card bgi-no-repeat"
          style="background-position: right top; background-size: 30% auto"
        >
          <!--begin::Body-->
          <div class="card-body">
            <router-link
              class="card-title cursor-pointer fw-bold text-muted text-hover-primary fs-4"
              :to="{
                name: 'reminder-overview',
                params: { slug: route.params.slug, id: reminder.id },
              }"
            >
              {{ capitalizeFirstLetter(reminder.title) }}</router-link
            >

            <div class="fw-bold text-primary my-6">
              {{ reminder.reminder_datetime }}
            </div>

            <p class="text-dark-75 fw-semobold fs-5 m-0">
              <span v-html="reminder.description"></span>
            </p>
          </div>
          <!--end::Body-->
        </div>
      </div>

      <!-- Pagination -->
      <div class="d-flex flex-stack flex-wrap pt-10">
        <div class="fs-6 fw-semibold text-gray-700">
          Affichage de {{ startIndex }} à {{ endIndex }} sur
          {{ filteredTableData.length }} entrées
        </div>

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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";

import { useRoute } from "vue-router";
import { getAssetPath } from "@/core/helpers/assets";
import KtEmpty from "@/layouts/main-layout/search/partials/Empty.vue";

import StatisticsWidget from "@/components/widgets/statsistics/Widget1.vue";

// Define your types/interfaces here
interface Reminder {
  title: string;
  description: string;

  start_datetime: string;
  project_id: number;
}
export default defineComponent({
  name: "reminders-listing",
  components: { StatisticsWidget, KtEmpty },

  setup() {
    const filteredPending = ref<Reminder[]>([
      // Your Reminder data here
    ]);

    const reminders = ref([]);
    const route = useRoute();
    const url = import.meta.env.VITE_APP_URL;
    const filteredInProgress = ref([]);
    const filteredCompleted = ref([]);
    const filterStatus = ref("");
    const filterType = ref("");
    const currentPage = ref(1);
    const pageSize = ref(9);
    const getReminders = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "project/task/reminder/list/" + route.params.slug
          );
          reminders.value = response.data.data;

          filteredPending.value = reminders.value.filter(
            (project) => project["status"] === "1"
          );
          filteredInProgress.value = reminders.value.filter(
            (project) => project["status"] === "2"
          );
          filteredCompleted.value = reminders.value.filter(
            (project) => project["status"] === "3"
          );
        } catch (error) {
          console.error("Failed to fetch projects:", error);
          // Handle the error as needed
        }
      }
    };
    // Define your methods here
    const reminderLink = (reminder: Reminder) => ({
      name: "reminder-overview",
      params: {
        slug: route.params.slug,
        id: reminder["slug"],
      },
    });

    const capitalizeFirstLetter = (str: string) =>
      str.charAt(0).toUpperCase() + str.slice(1);

    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getReminders().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });

    const filteredTableData = computed(() => {
      return reminders.value.filter((reminder) => {
        const statusMatch =
          filterStatus.value === "" ||
          reminder["status"] === filterStatus.value;
        const typeMatch =
          filterType.value === "" || reminder["type"] === filterType.value;

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

    const paginatedReminders = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return filteredTableData.value.slice(start, end);
    });

    return {
      getAssetPath,
      reminders,
      capitalizeFirstLetter,
      url,
      reminderLink,
      route,
      filteredTableData,
      pageNumbers,
      endIndex,
      startIndex,
      onPageChange,
      totalPages,
      currentPage,

      paginatedReminders,
    };
  },
});
</script>
<style>
.page-container {
  height: 100vh; /* Set the container's height to 100% of the viewport height */
}

.page-content {
  height: 100%; /* Fill the content area with available space */
}
</style>
