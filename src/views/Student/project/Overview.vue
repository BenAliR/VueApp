<template>
  <!--begin::Card-->
  <div class="card mb-5 mb-xxl-8" v-if="project">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Description</h2>
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-2 fs-6">
      <!--begin::Section-->
      <div class="mb-7">
        <!--begin::Title-->
        <span class="mb-3">{{ project.description }}</span>
        <!--end::Title-->

        <!--begin::Email-->

        <!--end::Email-->
      </div>
      <!--end::Section-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->

  <!--begin::Row-->
  <div class="row gx-xl-10">
    <!--begin::Col-->
    <div class="col-xl-6">
      <!--begin::List Widget 1-->
      <div class="card card-xxl-stretch mb-5 mb-xl-10">
        <!--begin::Header-->
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <router-link
              class="card-label fw-bold text-dark"
              :to="{
                name: 'task-category',
                params: { slug: route.params.slug },
              }"
            >
              Tasks Overview</router-link
            >

            <span class="text-muted mt-1 fw-semobold fs-7"></span>
          </h3>

          <div class="card-toolbar">
            <!--begin::Menu-->
            <button
              type="button"
              class="btn btn-light-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_add_task"
            >
              <i class="ki-duotone ki-add-files fs-2"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span
              ></i>
              Ajouter une tâche
            </button>
            <!--end::Menu-->
          </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body pt-5">
          <template v-for="(item, index) in items" :key="index">
            <!--begin::Item-->
            <div
              :class="{ 'mb-7': items.length - 1 !== index }"
              class="d-flex align-items-center"
            >
              <!--begin::Symbol-->
              <div class="symbol symbol-50px me-5">
                <span :class="`bg-light-${item.color}`" class="symbol-label">
                  <KTIcon
                    :icon-name="item.icon"
                    :icon-class="`text-${item.color} fs-2x`"
                  />
                </span>
              </div>
              <!--end::Symbol-->

              <!--begin::Text-->
              <div class="d-flex flex-column">
                <router-link
                  class="text-dark text-hover-primary fs-6 fw-bold"
                  :to="{
                    name: 'task-category',
                    params: { slug: route.params.slug },
                  }"
                >
                  {{ item.title }}</router-link
                >
                <span class="text-muted fw-semobold">{{
                  item.description
                }}</span>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </template>
        </div>
        <!--end::Body-->
      </div>
      <!--end::List Widget 1-->
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <Notifications
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></Notifications>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row gy-10 gx-xl-10">
    <!--begin::Col-->
    <div class="col-xl-6">
      <!--begin::List Widget 3-->
      <div class="card card-xxl-stretch mb-5 mb-xl-10">
        <!--begin::Header-->
        <div class="card-header border-0">
          <h3 class="card-title fw-bold text-dark">Reminders</h3>

          <div class="card-toolbar">
            <!--begin::Menu-->
            <router-link
              class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              :to="{
                name: 'reminders-listing',
                params: { slug: route.params.slug },
              }"
            >
              <KTIcon icon-name="category" icon-class="fs-2"
            /></router-link>

            <!--end::Menu-->
          </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body pt-2">
          <template v-for="(item, index) in reminders" :key="index">
            <!--begin::Item-->
            <div
              :class="{ 'mb-8': reminders.length - 1 !== index }"
              class="d-flex align-items-center"
            >
              <!--begin::Bullet-->
              <span
                class="bullet bullet-vertical h-40px"
                :class="`badge-${calculateColorClass(item.reminder_datetime)}`"
              ></span>
              <!--end::Bullet-->

              <!--begin::Checkbox-->
              <div class="form-check form-check-custom form-check-solid mx-5">
                <input class="form-check-input" type="checkbox" value="" />
              </div>
              <!--end::Checkbox-->

              <!--begin::Description-->
              <div class="flex-grow-1">
                <router-link
                  class="text-gray-800 text-hover-primary fw-bold fs-6"
                  :to="{
                    name: 'reminder-overview',
                    params: { slug: route.params.slug, id: item.id },
                  }"
                >
                  {{ item.title }}</router-link
                >
                <span class="text-muted fw-semobold d-block">{{
                  item.reminder_datetime
                }}</span>
              </div>
              <!--end::Description-->

              <span
                class="badge fs-8 fw-bold"
                :class="`badge-light-${calculateColorClass(
                  item.reminder_datetime
                )}`"
                >{{ getChekedText(item.checked) }}</span
              >
            </div>
            <!--end:Item-->
          </template>
        </div>
        <!--end::Body-->
      </div>
      <!--end:List Widget 3-->
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <!--begin::List Widget 5-->
      <div class="card card-xxl-stretch mb-5 mb-xl-10">
        <!--begin::Header-->
        <div class="card-header align-items-center border-0 mt-4">
          <h3 class="card-title align-items-start flex-column">
            <span class="fw-bold mb-2 text-dark">Meetings</span>
            <span class="text-muted fw-semobold fs-7"
              >{{ meetings.length }} Meetings</span
            >
          </h3>

          <div class="card-toolbar">




            <router-link
                class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                :to="{
                name: 'meetings-listing',
                params: { slug: route.params.slug },
              }"
            >
              <KTIcon icon-name="category" icon-class="fs-2"
              /></router-link>
          </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body pt-5">
          <!--begin::Timeline-->
          <div class="timeline-label">
            <!--begin::Item-->
            <div
              class="timeline-item"
              v-for="(meeting, index) in meetings"
              :key="index"
            >
              <!--begin::Label-->
              <div class="timeline-label fw-bold text-gray-800 fs-6">
                {{ getTimeLeft(meeting.start_datetime) }}
              </div>
              <!--end::Label-->

              <!--begin::Badge-->
              <div class="timeline-badge">
                <i :style="{ color: getRandomColor() }" class="fa fa-genderless fs-1"></i>
              </div>
              <!--end::Badge-->

              <!--begin::Text-->
              <div class="fw-mormal timeline-content text-muted ps-3">
                {{ meeting.title }}
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </div>
          <!--end::Timeline-->
        </div>
        <!--end: Card Body-->
      </div>
      <!--end: List Widget 5-->
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";

import Notifications from "@/components/widgets/widgets-project/Notifications.vue";

import { useFichStore } from "@/stores/fich";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { useRoute } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import MeetingCardProjectDropdown from "@/components/dropdown/MeetingCardProject.vue";
export default defineComponent({
  name: "account-overview",
  components: {
    Notifications,
  },
  setup() {
    const store = useFichStore();
    const url = import.meta.env.VITE_APP_URL;
    const project = ref(null);
    const items = [
      {
        icon: "abstract-26",
        color: "success",
        title: "Project Briefing",
        description: "Project Manager",
      },
      {
        icon: "pencil",
        color: "warning",
        title: "Concept Design",
        description: "Art Director",
      },
      {
        icon: "message-text-2",
        color: "primary",
        title: "Functional Logics",
        description: "Lead Developer",
      },
      {
        icon: "disconnect",
        color: "danger",
        title: "Development",
        description: "DevOps",
      },
      {
        icon: "security-user",
        color: "info",
        title: "Testing",
        description: "QA Managers",
      },
    ];
    const capitalized = (name) => {
      if (name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      }
    };
    const route = useRoute();
    const reminders = ref([]);
    const meetings = ref([]);

    const getReminders = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "project/task/reminder/counted/6/" + route.params.slug
          );
          reminders.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch projects:", error);
          // Handle the error as needed
        }
      }
    };
    const getMeetings = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "project/meetings/counted/6/" + route.params.slug
          );
          meetings.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch projects:", error);
          // Handle the error as needed
        }
      }
    };
    function getChekedText(checked) {
      if (checked === 0) {
        return "New";
      } else if (checked === 1) {
        return "Done";
      } else {
        return "Inconnu"; // Default color if status is null or unknown
      }
    }
    function calculateColorClass(reminderDate) {
      const now = new Date();
      const reminder = new Date(reminderDate);

      // Explicitly check that both dates are valid Date objects
      if (!(now instanceof Date) || !(reminder instanceof Date)) {
        return ""; // Return a default color class or handle the error
      }

      // Calculate the difference in days between now and the reminder date
      const daysDifference = Math.floor(
        (reminder.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );

      // Return different color classes based on the days difference
      if (daysDifference < 0) {
        return "danger"; // Ended
      } else if (daysDifference < 3) {
        return "warning"; // Close
      } else {
        return "primary"; // Still has days left
      }
    }
    const getProject = async (slug) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/byslug/" + slug);
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
          }).then(() => {});
        }
      }
    };
    function getTimeLeft(targetDate) {
      const now = new Date();
      const target = new Date(targetDate);

      const timeDifference = target.getTime() - now.getTime(); // Using getTime() to get numeric values

      const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      return daysLeft + "J " + hoursLeft + "H";
    }

    function getRandomColor() {

      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");
      // Access the project ID from the route params
      if (route.params.slug) {
        console.log("Project ID:", route.params.slug);
        getProject(route.params.slug).finally(() => {
          // Disable loading indicator
          getReminders();
          getMeetings();
          document.body.classList.remove("page-loading");
          document.body.removeAttribute("data-kt-app-page-loading");
        });
      }
    });
    return {
      store,
      url,
      capitalized,
      getAssetPath,
      items,
      route,
      reminders,
      meetings,
      getChekedText,
      calculateColorClass,
      project,
      getTimeLeft,
      getRandomColor,
    };
  },
});
</script>
