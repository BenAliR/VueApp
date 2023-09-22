<template>
  <!--begin::Toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h2 class="fs-2 fw-semobold my-2">
      Projets
      <span class="fs-6 text-gray-400 ms-1">par Statut</span>
    </h2>
    <!--end::Heading-->

    <!--begin::Controls-->
    <div class="d-flex flex-wrap my-1">
      <!--begin::Select wrapper-->
      <div class="m-0">
        <!--begin::Select-->
        <select
          v-model="statusFilter"
          @change="onStatusFilterChange"
          name="status"
          data-control="select2"
          data-hide-search="true"
          class="form-select form-select-white form-select-sm fw-bold w-125px"
        >
          <option value="" selected>Tout</option>
          <option value="en attente">En attente</option>
          <option value="en cours de traitement">En cours de traitement</option>
          <option value="active">Active</option>
          <option value="en retard">En retard</option>
          <option value="inactive">Inactive</option>
        </select>
        <!--end::Select-->
      </div>
      <!--end::Select wrapper-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Toolbar-->
  <kt-empty v-if="!filteredProjects.length"> </kt-empty>
  <!--begin::Row-->
  <div v-else class="row g-6 mb-10 g-xl-9">
    <!--begin::Col-->
    <div
      v-for="(project, index) in filteredProjects"
      :key="index"
      class="col-xxl-6"
    >
      <!--begin::Card widget 18-->
      <div class="card card-flush h-xl-100">
        <!--begin::Body-->
        <div class="card-body py-9">
          <!--begin::Row-->
          <div class="row gx-9 h-100">
            <!--begin::Col-->
            <div class="col-sm-5 mb-10 mb-sm-0">
              <!--begin::Image-->
              <div
                class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100"
                :style="{
                  backgroundImage: `url(${getAssetPath('media/stock/600x600/img-75.jpg')})`,
                }"
                style="background-size: 100% 100%"
              ></div>
              <!--end::Image-->
            </div>
            <!--end::Col-->

            <!--begin::Col-->
            <div class="col-sm-7">
              <!--begin::Wrapper-->
              <div class="d-flex flex-column h-100">
                <!--begin::Header-->
                <div class="mb-7">
                  <!--begin::Headin-->
                  <div class="d-flex flex-stack mb-6">
                    <!--begin::Title-->
                    <div class="flex-shrink-0 me-5">
                      <span
                        class="text-gray-400 fs-7 fw-bold me-2 d-block lh-1 pb-1"
                        >{{ project.type }}</span
                      >

                      <span class="text-gray-800 fs-1 fw-bold">
                        {{ generateInitials(project.title) }}</span
                      >
                    </div>
                    <!--end::Title-->

                    <span
                      class="badge flex-shrink-0 align-self-center py-3 px-4 fs-7"
                      :class="getStatusColorClass(project.project_status)"
                      >{{ capitalizeFirstLetter(project.project_status) }}</span
                    >
                  </div>
                  <!--end::Heading-->

                  <!--begin::Items-->
                  <div class="d-flex align-items-center flex-wrap d-grid gap-2">
                    <!--begin::Item-->
                    <div class="d-flex align-items-center me-5 me-xl-13">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px symbol-circle me-3">
                        <img
                          v-if="project.team.owner.photo"
                          alt="Pic"
                          :src="url + project.team.owner.photo"
                        />
                      </div>
                      <!--end::Symbol-->

                      <!--begin::Info-->
                      <div class="m-0">
                        <span class="fw-semibold text-gray-400 d-block fs-8"
                          >Propriétaire</span
                        >
                        <a
                          href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                          v-if="project.team"
                          class="fw-bold text-gray-800 text-hover-primary fs-7"
                          >{{ project.team.owner.fullname }}</a
                        >
                      </div>
                      <!--end::Info-->
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="d-flex align-items-center">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px symbol-circle me-3">
                        <span class="symbol-label bg-success">
                          <i class="ki-duotone ki-abstract-41 fs-5 text-white"
                            ><span class="path1"></span
                            ><span class="path2"></span
                          ></i>
                        </span>
                      </div>
                      <!--end::Symbol-->

                      <!--begin::Info-->
                      <div class="m-0">
                        <span class="fw-semibold text-gray-400 d-block fs-8"
                          >Budget</span
                        >
                        <span class="fw-bold text-gray-800 fs-7">0</span>
                      </div>
                      <!--end::Info-->
                    </div>
                    <!--end::Item-->
                  </div>
                  <!--end::Items-->
                </div>
                <!--end::Header-->

                <!--begin::Body-->
                <div class="mb-6">
                  <!--begin::Text-->
                  <span
                    class="fw-semibold text-gray-600 fs-6 mb-8 d-block project-title"
                  >
                    {{ project.description }}
                  </span>
                  <!--end::Text-->

                  <!--begin::Stats-->
                  <div class="d-flex">
                    <div
                      class="border border-gray-300 border-dashed rounded min-w-80px w-100 py-1 px-2 me-4"
                    >
                      <span class="fs-6 text-gray-700 fw-bold">{{
                        formatDate(project.duedate)
                      }}</span>
                      <div class="fw-semibold text-gray-400">
                        Date d'échéance
                      </div>
                    </div>
                    <div
                      class="border border-gray-300 border-dashed rounded min-w-80px w-100 py-1 px-2"
                    >
                      <span class="fs-6 text-gray-700 fw-bold">{{
                        project.team_size
                      }}</span>
                      <div class="fw-semibold text-gray-400">Team Size</div>
                    </div>
                  </div>
                  <!--end::Stats-->
                </div>
                <!--end::Body-->

                <!--begin::Footer-->
                <div class="d-flex flex-stack mt-auto bd-highlight">
                  <!--begin::Users group-->
                  <template v-if="project.team">
                    <div
                      v-if="project.team.users"
                      class="symbol-group symbol-hover"
                    >
                      <div
                        class="symbol symbol-30px symbol-circle"
                        data-bs-toggle="tooltip"
                        :title="project.team.owner.fullname"
                      >
                        <img
                          v-if="project.team.owner.photo"
                          alt="Pic"
                          :src="url + project.team.owner.photo"
                        />
                        <span
                          v-else
                          class="symbol-label fw-bold bg-light text-inverse-light"
                          >{{
                            generateInitials(project.team.owner.fullname)
                          }}</span
                        >
                      </div>
                      <template
                        v-for="(user, index) in project.team.users"
                        :key="index"
                      >
                        <div
                          class="symbol symbol-30px symbol-circle"
                          data-bs-toggle="tooltip"
                          :title="user.fullname"
                        >
                          <img
                            v-if="user.photo"
                            alt="Pic"
                            :src="url + user.photo"
                          />
                          <span
                            v-else
                            class="symbol-label fw-bold bg-light text-inverse-light"
                            >{{ generateInitials(user.fullname) }}</span
                          >
                        </div>
                      </template>
                    </div>
                  </template>
                  <!--end::Users group-->

                  <!--begin::Actions-->
                  <router-link
                    class="d-flex align-items-center text-primary opacity-75-hover fs-6 fw-semibold"
                    :to="{
                      name: 'project-overview',
                      params: { slug: project.slug },
                    }"
                  >
                    Voir le projet
                    <i class="ki-duotone ki-exit-right-corner fs-4 ms-1"
                      ><span class="path1"></span><span class="path2"></span></i
                  ></router-link>

                  <!--end::Actions-->
                </div>
                <!--end::Footer-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Row-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Card widget 18-->
    </div>
    <!--end::Col-->
    <!--begin::Pagination-->
    <div class="d-flex flex-stack flex-wrap pt-10">
      <div class="fs-6 fw-semobold text-gray-700">
        Affichage de {{ startIndex }} à {{ totalPages }} sur
        {{ filteredProjects.length }} entrées
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
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { useFichStore } from "@/stores/fich";
import KtEmpty from "@/layouts/main-layout/search/partials/Empty.vue";

export default defineComponent({
  name: "account-projects",
  components: { KtEmpty },
  setup() {
    const url = import.meta.env.VITE_APP_URL;

    let errors = [];
    const currentPage = ref(1);
    const pageSize = ref(10);
    const store = useFichStore();
    const projects = ref([]);
    const statusFilter = ref("");

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
        return "badge-light";
      } else if (status === "en cours de traitement") {
        return "badge-light-primary";
      } else if (status === "active") {
        return "badge-light-success";
      } else if (status === "en retard") {
        return "badge-light-danger";
      } else if (status === "inactive") {
        return "badge-danger";
      } else {
        return "badge-light-primary"; // Default color if status is null or unknown
      }
    }
    function getBarStatus(status) {
      if (status === "en attente") {
        return "badge-light-primary";
      } else if (status === "en cours de traitement") {
        return "badge-primary";
      } else if (status === "active") {
        return "badge-success";
      } else if (status === "en retard") {
        return "badge-warning";
      } else if (status === "inactive") {
        return "badge-danger";
      } else {
        return "badge-primary"; // Default color if status is null or unknown
      }
    }
    function getBarProgress(status) {
      if (status === "en attente") {
        return 10;
      } else if (status === "en cours de traitement") {
        return 50;
      } else if (status === "active") {
        return 100;
      } else if (status === "en retard") {
        return 75;
      } else {
        return 0; // Default color if status is null or unknown
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
    function formatDate(date) {
      if (date) {
        return new Date(date).toLocaleDateString();
      } else {
        return "Inconnu";
      }
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
      return end > filteredProjects.value.length
        ? filteredProjects.value.length
        : end;
    });

    const filteredProjects = computed(() => {
      if (statusFilter.value) {
        return projects.value.filter(
          (project) => project["project_status"] === statusFilter.value
        );
      }
      return projects.value;
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredProjects.value.length / pageSize.value);
    });
    const onStatusFilterChange = (event) => {
      statusFilter.value = event.target.value;
      currentPage.value = 1; // Reset the current page when changing the filter
    };
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getProjects().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });

    return {
      errors,
      getStatusColorClass,
      getBarStatus,
      getBarProgress,
      projects,
      formatDate,
      getAssetPath,
      generateInitials,
      capitalizeFirstLetter,
      ProjectType,
      currentPage,
      pageSize,
      onPageChange,
      filteredProjects,
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
<style>
.project-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
