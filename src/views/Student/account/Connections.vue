<template>
  <!--begin::Followers toolbar-->

  <kt-empty v-if="!connections.length"> </kt-empty>
  <div v-else class="d-flex flex-wrap flex-stack mb-6">
    <!--begin::Title-->
    <h3 class="fw-bold my-2">
      Mes connexions
      <span class="fs-6 text-gray-400 fw-semobold ms-1"
        >({{ filteredConnections.length }})</span
      >
    </h3>
    <!--end::Title-->
  </div>
  <!--end::Followers toolbar-->

  <!--begin::Row-->
  <div v-if="connections.length" class="row g-6 mb-6 g-xl-9 mb-xl-9">
    <!--begin::Followers-->
    <!--begin::Col-->
    <div
      class="col-md-4 col-xxl-3"
      v-for="(connection, index) in filteredConnections"
      :key="index"
    >
      <!--begin::Card-->
      <div class="card">
        <!--begin::Card body-->
        <div class="card-body d-flex flex-center flex-column p-9">
          <!--begin::Avatar-->
          <div
            v-if="connection.photo"
            class="symbol symbol-65px symbol-circle mb-5"
          >
            <img :src="url + connection.photo" alt="image" />
          </div>
          <div v-else class="symbol symbol-65px symbol-circle mb-5"></div>
          <!--end::Avatar-->

          <!--begin::Name-->
          <a
            href="#"
            class="fs-4 text-gray-800 text-hover-primary fw-bold mb-0"
            >{{ connection.fullname }}</a
          >
        </div>
        <!--begin::Card body-->
      </div>
      <!--begin::Card-->
    </div>
    <!--end::Col-->

    <!--end::Followers-->
    <!--begin::Pagination-->
    <div class="d-flex flex-stack flex-wrap pt-10">
      <div class="fs-6 fw-semobold text-gray-700">
        Affichage de {{ startIndex }} à {{ endIndex }} sur
        {{ filteredConnections.length }} entrées
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
  <!--end::Row-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import KtEmpty from "@/layouts/main-layout/search/partials/Empty.vue";

export default defineComponent({
  name: "account-connections",
  components: {KtEmpty},
  setup() {
    const url = import.meta.env.VITE_APP_URL;

    let errors = [];
    const currentPage = ref(1);
    const pageSize = ref(10);
    const connections = ref([]);
    const statusFilter = ref("");

    function capitalizeFirstLetter(str: string): string {
      if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      } else {
        return "non défini";
      }
    }

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
      return end > filteredConnections.value.length
        ? filteredConnections.value.length
        : end;
    });

    const filteredConnections = computed(() => {
      if (statusFilter.value) {
        return connections.value.filter(
          (project) => project["project_status"] === statusFilter.value
        );
      }
      return connections.value;
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredConnections.value.length / pageSize.value);
    });
    const onStatusFilterChange = (event) => {
      statusFilter.value = event.target.value;
      currentPage.value = 1; // Reset the current page when changing the filter
    };

    const getConnections = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("account/connection");
          connections.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch Connections:", error);
          // Handle the error as needed
        }
      }
    };

    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getConnections().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });
    return {
      getAssetPath,
      errors,

      generateInitials,
      capitalizeFirstLetter,
      connections,
      currentPage,
      pageSize,
      onPageChange,
      filteredConnections,
      pageNumbers,
      totalPages,
      startIndex,
      endIndex,
      onStatusFilterChange,
      statusFilter,
      url,
    };
  },
});
</script>
