<template>
  <kt-empty v-if="!reminder"> </kt-empty>
  <div v-if="reminder">
    <div class="d-flex flex-column flex-lg-row">
      <!--begin::Sidebar-->
      <div
        class="flex-column flex-lg-row-auto w-100 w-lg-200px w-xl-300px mb-10"
      >
        <!--begin::Card-->
        <div class="card card-flush">
          <!--begin::Card body-->
          <div class="card-body pt-3">
            <div class="d-flex flex-stack mb-3">
              <!--begin::Badge-->
              <div class="badge fs-4 badge-light-primary">Reminder</div>
              <!--end::Badge-->

              <!--begin::Menu-->
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_update_reminder"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i class="ki-duotone ki-message-edit fs-2"
                    ><span class="path1"></span><span class="path2"></span
                    ><span class="path3"></span><span class="path4"></span
                    ><span class="path5"></span
                  ></i>
                </button>
              </div>
              <!--end::Menu-->
            </div>
            <!--begin::Permissions-->
            <div class="d-flex flex-column text-gray-600">
              <div class="d-flex align-items-center py-2">
                <span class="bullet bg-primary me-3"></span>
                {{ reminder.title }}
              </div>
              <div class="d-flex align-items-center py-2">
                <span class="bullet bg-primary me-3"></span>
                {{ reminder.description }}
              </div>
              <div class="d-flex align-items-center py-2">
                <span class="bullet bg-primary me-3"></span>
                {{ reminder.reminder_datetime }}
              </div>
              <div
                class="d-flex align-items-center py-2"
                v-if="reminder.checked === 0"
              >
                <span class="me-3"></span>

                <span
                  class="w-bold me-auto px-2 py-2 badge badge-light-warning"
                >
                  décoché
                </span>
              </div>
              <div
                class="d-flex align-items-center py-2"
                v-if="reminder.checked === 1"
              >
                <span class="me-3">
                  <span
                    class="w-bold me-auto px-4 py-3 badge badge-light-success"
                  >
                    vérifié
                  </span>
                </span>
              </div>
            </div>
            <!--end::Permissions-->
          </div>
          <!--end::Card body-->

          <!--begin::Card footer-->
          <div class="card-footer pt-0">
            <button
              type="button"
              class="btn btn-light btn-active-primary me-2"
              @click="deleteReminder(reminder.id)"
            >
              Supprimer
            </button>
          </div>
          <!--end::Card footer-->
        </div>
        <!--end::Card-->

        <!--begin::Modal - Update Reminder Details-->
        <div
          class="modal fade"
          id="kt_modal_update_reminder"
          ref="newTargetModalRef"
          tabindex="-1"
          aria-hidden="true"
        >
          <!--begin::Modal dialog-->
          <div class="modal-dialog modal-dialog-centered mw-750px">
            <!--begin::Modal content-->
            <div class="modal-content">
              <!--begin::Modal header-->
              <div class="modal-header">
                <!--begin::Modal title-->
                <h2 class="fw-bold">Update Reminder</h2>
                <!--end::Modal title-->

                <!--begin::Close-->
                <div
                  class="btn btn-icon btn-sm btn-active-icon-primary"
                  data-bs-dismiss="modal"
                >
                  <i class="ki-duotone ki-cross fs-1"
                    ><span class="path1"></span><span class="path2"></span
                  ></i>
                </div>
                <!--end::Close-->
              </div>
              <!--end::Modal header-->

              <!--begin::Modal body-->
              <div class="modal-body scroll-y mx-5 my-7">
                <!--begin::Form-->
                <el-form
                  id="kt_modal_add_task_form"
                  @submit.prevent="submit()"
                  :model="targetData"
                  :rules="rules"
                  ref="formRef"
                  class="form"
                >
                  <!--begin::Scroll-->
                  <div
                    class="d-flex flex-column scroll-y me-n7 pe-7"
                    style="min-height: 500px"
                    id="kt_modal_update_reminder_scroll"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="{default: false, lg: true}"
                    data-kt-scroll-max-height="auto"
                    data-kt-scroll-dependencies="#kt_modal_update_reminder_header"
                    data-kt-scroll-wrappers="#kt_modal_update_reminder_scroll"
                    data-kt-scroll-offset="300px"
                  >
                    <!--begin::Input group-->
                    <div class="fv-row mb-10 fv-plugins-icon-container">
                      <!--begin::Label-->
                      <label class="fs-5 fw-bold form-label mb-2">
                        <span class="required">Titre</span>
                      </label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <el-form-item prop="title">
                        <el-input
                          v-model="targetData.title"
                          placeholder="Enter reminder Title"
                          name="title"
                        ></el-input>
                      </el-form-item>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Permissions-->
                    <div class="fv-row">
                      <!--begin::Label-->
                      <label class="fs-5 fw-bold form-label mb-2 required"
                        >Description</label
                      >
                      <!--end::Label-->
                      <!--begin::Input group-->
                      <div class="d-flex flex-column mb-8">
                        <el-form-item prop="description">
                          <el-input
                            v-model="targetData.description"
                            type="textarea"
                            rows="3"
                            name="description"
                            placeholder="Type Target Details"
                          />
                        </el-form-item>
                      </div>
                      <!--end::Input group-->
                    </div>
                    <!--end::Permissions-->

                    <div class="d-flex flex-wrap gap-5">
                      <!--begin::Input group-->
                      <div
                        class="fv-row w-100 flex-md-root fv-plugins-icon-container"
                      >
                        <!--begin::Label-->
                        <label class="fs-5 fw-bold form-label mb-2 required"
                          >Date d'échéance</label
                        >

                        <!--begin::Input-->
                        <div class="position-relative align-items-center">
                          <!--begin::Datepicker-->
                          <el-form-item prop="reminder_datetime">
                            <el-date-picker
                              v-model="targetData.reminder_datetime"
                              type="datetime"
                              placeholder="Select a date"
                              :teleported="false"
                              popper-class="override-styles"
                              name="reminder_datetime"
                              format="YYYY/MM/DD hh:mm:ss"
                              value-format="YYYY-MM-DD hh:mm:ss"
                            />
                          </el-form-item>
                          <!--end::Datepicker-->
                        </div>
                        <!--end::Input-->

                        <div
                          class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
                        ></div>
                      </div>
                      <!--end::Input group-->

                      <!--begin::Input group-->
                      <div class="fv-row w-100 flex-md-root">
                        <!--begin::Label-->
                        <label class="fs-5 fw-bold form-label mb-2 required"
                          >Etat</label
                        >
                        <!--end::Label-->

                        <!--begin::Input-->
                        <el-form-item prop="checked">
                          <el-checkbox
                            v-model="targetData.checked"
                            label="vérifié"
                            border
                          ></el-checkbox>
                        </el-form-item>
                        <!--end::Input-->
                      </div>
                      <!--end::Input group-->
                    </div>
                  </div>
                  <!--end::Scroll-->

                  <!--begin::Actions-->
                  <div class="text-center pt-5">
                    <button
                      type="reset"
                      id="kt_modal_add_task_cancel"
                      class="btn btn-light me-3"
                    >
                      Annuler
                    </button>

                    <!--begin::Button-->
                    <button
                      :data-kt-indicator="loading ? 'on' : null"
                      class="btn btn-lg btn-primary"
                      type="submit"
                    >
                      <span v-if="!loading" class="indicator-label">
                        Enregistrer
                      </span>
                      <span v-if="loading" class="indicator-progress">
                        S'il vous plaît, attendez...
                        <span
                          class="spinner-border spinner-border-sm align-middle ms-2"
                        ></span>
                      </span>
                    </button>
                    <!--end::Button-->
                  </div>
                  <!--end::Actions-->
                </el-form>
                <!--end::Form-->
              </div>
              <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
          </div>
          <!--end::Modal dialog-->
        </div>
        <!--end::Modal - Update Reminder Details-->
      </div>
      <!--end::Sidebar-->

      <!--begin::Content-->
      <div class="flex-lg-row-fluid ms-lg-10">
        <!--begin::Card-->

        <div class="card mb-6 mb-xl-9">
          <!-- begin::Body-->
          <div class="card-body py-20">
            <!-- begin::Wrapper-->
            <div class="mw-lg-950px mx-auto w-100">
              <!-- begin::Header-->
              <div
                class="d-flex justify-content-between flex-column flex-sm-row mb-19"
              >
                <router-link
                    class="fw-bolder text-gray-800 fs-1qx pe-5 pb-2 text-uppercase"
                    :to="{
             name: 'task-overview',
          params: { id: reminder.task.slug ,slug:route.params.slug},
            }"
                >

                  {{ reminder.task.title }}
                </router-link>



                <!--end::Logo-->
                <div class="text-sm-end">
                  <!--begin::Logo-->

                  <span
                    class="w-bold me-auto px-4 py-3 badge"
                    :class="getStatusColorClass(reminder.task.status)"
                  >
                    {{ getStatusText(reminder.task.status) }}
                  </span>

                  <!--end::Logo-->

                  <!--begin::Text-->
                  <div class="text-sm-end fw-semibold fs-4 text-muted mt-7">
                    <div>{{ reminder.task.creator.fullname }}</div>
                  </div>
                  <!--end::Text-->
                </div>
              </div>
              <!--end::Header-->

              <!--begin::Body-->
              <div class="border-bottom pb-12">
                <!--begin::Image-->
                <div
                  class="d-flex flex-row-fluid bgi-no-repeat bgi-position-x-center bgi-size-cover card-rounded mb-lg-20"
                >
                  {{ reminder.task.description }}
                </div>
                <!--end::Image-->

                <!--begin::Wrapper-->
                <div
                  class="d-flex justify-content-between flex-column flex-md-row"
                >
                  <!--begin::Content-->
                  <div class="flex-grow-1 pt-8 mb-5">
                    <!--begin::Section-->
                    <div class="d-flex flex-column mw-md-300px w-100">
                      <!--begin::Label-->
                      <div
                        class="fw-semibold fs-5 mb-3 text-dark text-uppercase"
                      >
                        tàche details
                      </div>
                      <!--end::Label-->

                      <!--begin::Item-->
                      <div class="d-flex flex-stack text-gray-800 mb-3 fs-6">
                        <!--begin::Accountname-->
                        <div class="fw-semibold pe-5">Date d'échéance :</div>
                        <!--end::Accountname-->

                        <!--begin::Label-->
                        <div class="text-end fw-norma">
                          {{ formatDateWithoutTime(reminder.task.due_date) }}
                        </div>
                        <!--end::Label-->
                      </div>
                      <!--end::Item-->
                      <div class="d-flex flex-stack text-gray-800 mb-3 fs-6">
                        <!--begin::Accountname-->
                        <div class="fw-semibold pe-5">Priorité :</div>
                        <!--end::Accountname-->

                        <!--begin::Label-->
                        <span
                          :class="getStatusColorClass(reminder.task.priority)"
                          class="badge fw-bold text-end fw-norma"
                          >{{ getPriority(reminder.task.priority) }}</span
                        >
                        <!--end::Label-->
                      </div>
                      <!--begin::Item-->
                      <div class="d-flex flex-stack text-gray-800 mb-3 fs-6">
                        <!--begin::Accountnumber-->
                        <div class="fw-semibold pe-5">Tags</div>
                        <!--end::Accountnumber-->

                        <!--begin::Number-->
                        <div class="text-end fw-norma">
                          <div class="d-flex">
                            <span
                              v-for="(tag, index) in JSON.parse(
                                reminder.task.tags
                              )"
                              :key="index"
                              class="symbol symbol-35px me-2"
                              data-bs-toggle="tooltip"
                              aria-label="Ana Stone"
                              data-bs-original-title="Ana Stone"
                              data-kt-initialized="1"
                            >
                              <span class="badge badge-primary">{{ tag }}</span>
                            </span>
                          </div>
                        </div>
                        <!--end::Number-->
                      </div>
                      <!--end::Item-->

                      <!--begin::Item-->
                      <div class="d-flex flex-stack text-gray-800 fs-6">
                        <!--begin::Code-->
                        <div class="fw-semibold pe-5">Type:</div>
                        <!--end::Code-->

                        <!--begin::Label-->
                        <div class="text-end fw-norma">
                          {{ reminder.task.type }}
                        </div>
                        <!--end::Label-->
                      </div>
                      <!--end::Item-->
                    </div>
                    <!--end::Section-->
                  </div>
                  <!--end::Content-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Body-->
            </div>
            <!-- end::Wrapper-->
          </div>
          <!-- end::Body-->
        </div>

        <!--end::Card-->
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref, watch } from "vue";

import { useAuthStore } from "@/stores/auth";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useProjectStore } from "@/stores/project";

import { jsPDF } from "jspdf";
import { hideModal } from "@/core/helpers/dom";
import KtEmpty from "@/layouts/main-layout/search/partials/Empty.vue";
interface ReminderData {
  id: number;
  title: string;
  description: string;
  reminder_datetime: Date;
  checked: number;
  task_id: number;
}

export default defineComponent({
  name: "task-overview",
  components: {KtEmpty},
  setup() {
    const userstore = useAuthStore();
    const loading = ref<boolean>(false);
    const store = useProjectStore();
    const members = ref([]);
    const url = import.meta.env.VITE_APP_URL;
    const reminder = ref(null);
    const id = ref(0);
    const router = useRouter();
    const route = useRoute();
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const targetData = ref<ReminderData>({
      id: 1,
      title: "Maxime quidem omnis sit.",
      description: "Ut expedita quo sunt id. Rerum sed ut nulla ad.",
      reminder_datetime: new Date(),
      checked: 0,
      task_id: 0,
    });
    const rules = ref({
      title: [
        {
          required: true,
          message: "Veuillez saisir le titre",
          trigger: "blur",
        },
      ],
      description: [
        {
          required: true,
          message: "Veuillez saisir la description",
          trigger: "blur",
        },
      ],
      reminder_datetime: [
        {
          required: true,
          message: "Veuillez sélectionner la date d'échéance",
          trigger: "change",
        },
      ],
    });
    const capitalized = (name) => {
      if (name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      }
    };
    const getReminder = async (slug) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "project/task/reminder/" + slug
          );
          reminder.value = response.data.data;
          if (reminder.value) {
            id.value = response.data.data.id;
            targetData.value.id = response.data.data.id;
            targetData.value.title = response.data.data.title;
            targetData.value.description = response.data.data.description;
            targetData.value.reminder_datetime =
              response.data.data.reminder_datetime;
            targetData.value.checked = response.data.data.checked;
            targetData.value.task_id = response.data.data.task_id;
          }
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
          });
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
    function formatDate(date) {
      if (date) {
        return new Date(date).toLocaleDateString();
      } else {
        return "Inconnu";
      }
    }
    function formatDateWithoutTime(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    const getTeamMembers = async (id) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/members/" + id);
          members.value = response.data.data;
        } catch (error: any) {
          document.body.classList.add("page-loading");
          document.body.setAttribute("data-kt-app-page-loading", "true");
        }
      }
    };
    function getTimeSince(date) {
      const currentDate = new Date(); // Instantiate currentDate as a Date object
      const elapsedMilliseconds =
        currentDate.getTime() - new Date(date).getTime(); // Use getTime() to get the timestamp
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      const elapsedDays = Math.floor(elapsedHours / 24);

      if (elapsedDays > 0) {
        return `il y a ${elapsedDays} jours`;
      } else if (elapsedHours > 0) {
        return `il y a ${elapsedHours} heures`;
      } else if (elapsedMinutes > 0) {
        return ` il y a ${elapsedMinutes} minutes`;
      } else {
        return `il y a ${elapsedSeconds} instants`;
      }
    }
    async function deleteItemReminder(id) {
      //Send  request
      try {
        loading.value = true;
        const response = await store.DeleteReminder(id);
        // Do something with the successful response, if needed
        console.log("Admin created successfully:", response);
        // Handle success, show success message, etc.
        Swal.fire({
          text: "Enregistrement effectué avec succès!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "OK",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(() => {
          // Refresh page data or perform any other action
          loading.value = false;
          router.push({
            name: "project-overview",
            params: {
              slug: route.params.slug,
            },
          });
        });
      } catch (error) {
        // Handle errors here
        console.error("Error:", error);
        Swal.fire({
          text: error as string, // Use the error message received from the API
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
        loading.value = false;
      }
    }
    const deleteReminder = (id: number) => {
      // Show the delete confirmation popup
      Swal.fire({
        title: "Es-tu sûr?",
        text: "Une fois supprimé, vous ne pourrez plus récupérer cet élément!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Supprimer",
        cancelButtonText: "Annuler",
        buttonsStyling: true,
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // User confirmed, perform the delete action
          // Call your delete API or delete logic here
          deleteItemReminder(id);
        } else {
          // User cancelled, do nothing or show a cancellation message
          Swal.fire("Annulé", "Suppression annulée.", "info");
        }
      });
    };

    watch(
      () => route.params,
      (newParams, oldParams) => {
        // Handle the parameter changes here
        // Enable loading indicator if needed
        document.body.classList.add("page-loading");
        document.body.setAttribute("data-kt-app-page-loading", "true");
        // Access the project ID from the route params
        if (newParams.id) {
          getReminder(newParams.id).finally(() => {
            // Disable loading indicator
            document.body.classList.remove("page-loading");
            document.body.removeAttribute("data-kt-app-page-loading");
          });
        }
      }
    );
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
    function getPriority(status) {
      if (status === "1") {
        return "Importante";
      } else if (status === "2") {
        return "Urgent";
      } else if (status === "3") {
        return "Haute";
      } else if (status === "4") {
        return "Faible";
      } else if (status === "5") {
        return "Moyenne"; // Default color if status is null or unknown
      } else {
        return "Inconnu"; // Default color if status is null or unknown
      }
    }

    const submit = () => {
      if (typeof route.params.slug === "string") {
        //  targetData.value.project_slug = route.params.slug;
      }
      if (!formRef.value) {
        return;
      }
      formRef.value.validate(async (valid: boolean) => {
        if (valid) {
          loading.value = true;
          try {
            loading.value = true;
            const response =  await store.UpdateReminder(targetData.value, id.value);
            // Do something with the successful response, if needed
            console.log("successfully:", response);
            // Handle success, show success message, etc.
            Swal.fire({
              text: "Enregistrement effectué avec succès!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "OK",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
              },
            }).then(() => {
              // Refresh page data or perform any other action
              loading.value = false;
              hideModal(newTargetModalRef.value);
              getReminder(route.params.id);
            });
          } catch (error)
          {
            // Handle errors here
            console.error("Error creating admin:", error);
            Swal.fire({
              text: error as string, // Use the error message received from the API
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-danger",
              },
            });
            loading.value = false;
          }
        } else {
          Swal.fire({
            text: "Désolé, il semble qu'il y ait des erreurs détectées, veuillez réessayer.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "D'accord, j'ai compris!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(() => {
            setTimeout(() => {
              loading.value = false;
            }, 1000);
          });
          return false;
        }
      });
    };

    onMounted(() => {
      //    Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");
      // Access the project ID from the route params
      if (route.params.slug) {
        console.log("Project ID:", route.params.id);

        getTeamMembers(route.params.slug);
        getReminder(route.params.id).finally(() => {
          // Disable loading indicator
          document.body.classList.remove("page-loading");
          document.body.removeAttribute("data-kt-app-page-loading");
        });
      }
    });
    return {
      store,
      url,
      reminder,
      capitalized,

      capitalizeFirstLetter,
      getStatusColorClass,
      formatDate,
      getAssetPath,
      id,
      formatDateWithoutTime,
      userstore,
      getTimeSince,
      getStatusText,
      loading,
      route,
      deleteReminder,
      getPriority,
      targetData,
      rules,
      submit,
      formRef,
      newTargetModalRef,
    };
  },
});
</script>
<style>
.reminder-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.reminder-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Maximum number of lines */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
