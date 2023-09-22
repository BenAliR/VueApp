<template>
  <!--begin::Row-->
  <div class="row gy-10 mb-10 gx-xl-10" v-if="task">
    <el-form
      class="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework"
      id="kt_modal_update_task_form"
      @submit.prevent="submit()"
      :model="targetData"
      :rules="rules"
      ref="UpdateTasklRef"
    >
      <!--begin::Aside column-->
      <div
        class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10"
      >
        <!--begin::Status-->
        <div class="card card-flush py-4">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h2>Statut</h2>
            </div>
            <!--end::Card title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <div
                :class="getStatus(targetData.status)"
                class="rounded-circle w-15px h-15px"
              ></div>
            </div>
            <!--begin::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body pt-5">
            <!--begin::Select store template-->
            <!--begin::Select2-->
            <el-form-item prop="status">
              <el-select
                v-model="targetData.status"
                placeholder="Sélectionnez une Statut"
                name="status"
                as="select"
              >
                <el-option label="Encore à commencer" value="1">
                  Encore à commencer</el-option
                >
                <el-option label="En cours" value="2">En cours </el-option>
                <el-option label="Complété" value="3">Complété </el-option>
              </el-select>
            </el-form-item>

            <!--end::Select2-->

            <!--begin::Description-->
            <div class="text-muted fs-7">Définissez l'état de la tâche.</div>
            <!--end::Description-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Status-->
        <!--begin::Template settings-->
        <div class="card card-flush py-4">
          <!--begin::Card body-->
          <div class="card-body pt-5">
            <!--begin::Select store template-->
            <label class="form-label">Type</label>
            <!--end::Select store template-->

            <!--begin::Select2-->
            <el-form-item prop="task_type">
              <el-select
                v-model="targetData.task_type"
                placeholder="Sélectionnez type de tàche"
                name="task_type"
                as="select"
              >
                <el-option
                  label="Présentation du projet"
                  value="Présentation du projet"
                  >Présentation du projet</el-option
                >
                <el-option label="Concept de design" value="Concept de design"
                  >Concept de design</el-option
                >

                <el-option
                  label="Logiques fonctionnelles"
                  value="Logiques fonctionnelles"
                  >Logiques fonctionnelles</el-option
                >
                <el-option label="Development" value="Development"
                  >Development</el-option
                >
                <el-option label="Testing" value="Testing">Testing</el-option>
              </el-select>
            </el-form-item>
            <!--end::Select2-->

            <!--begin::Description-->
            <div class="text-muted fs-7">Définissez type de la tâche.</div>
            <!--end::Description-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Template settings-->
      </div>
      <!--end::Aside column-->

      <!--begin::Main column-->
      <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <!--begin::General options-->
        <div class="card card-flush py-4">
          <!--begin::Card header-->
          <div class="card-header">
            <div class="card-title">
              <h2>Général</h2>
            </div>
            <div class="d-flex my-4">
              <div class="me-0">
                <!--begin::Menu-->
                <div>
                  <div class="dropdown">
                    <span
                      class="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary cursor-pointer"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ki-duotone ki-element-plus fs-2"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span><span class="path4"></span
                        ><span class="path5"></span
                      ></i>
                    </span>

                    <!--begin::Menu 1-->
                    <!--begin::Menu 2-->
                    <div
                      class="dropdown-menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold w-200px"
                      data-kt-menu="true"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <div
                          class="menu-content fs-6 text-dark fw-bold px-3 py-4"
                        >
                          Actions
                        </div>
                      </div>
                      <!--end::Menu item-->

                      <!--begin::Menu separator-->
                      <div class="separator mb-3 opacity-75"></div>
                      <!--end::Menu separator-->

                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <router-link
                          :to="{
                            name: 'project-tasks',
                            params: { slug: route.params.slug },
                          }"
                          class="menu-link px-3"
                        >
                          Tasks
                        </router-link>
                      </div>
                      <!--end::Menu item-->
                    </div>
                    <!--end::Menu 2-->
                    <!--end::Menu 1-->
                  </div>
                </div>
                <!--end::Menu-->
              </div>
              <!--end::Menu-->
            </div>
          </div>
          <!--end::Card header-->

          <!--begin::Card body-->
          <div class="card-body pt-0">
            <!--begin::Input group-->
            <div class="mb-10 fv-row fv-plugins-icon-container">
              <!--begin::Label-->
              <label class="required form-label">Nom de la tâche</label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="title">
                <el-input
                  v-model="targetData.title"
                  placeholder="Enter tâche Title"
                  name="title"
                ></el-input>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row g-9 mb-8">
              <!--begin::Col-->
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">Attribuer</label>

                <el-form-item prop="assign_id">
                  <el-select
                    v-model="targetData.assign_id"
                    placeholder="Sélectionnez un membre de l'équipe"
                    name="assign_id"
                    as="select"
                  >
                    <el-option
                      v-if="userstore.user"
                      :label="userstore.user.fullname"
                      :value="userstore.user.id"
                      >assignez-vous</el-option
                    >
                    <el-option
                      v-for="item in members"
                      :key="item.id"
                      :label="item.fullname"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2"
                  >Date d'échéance</label
                >

                <!--begin::Input-->
                <div class="position-relative align-items-center">
                  <!--begin::Datepicker-->
                  <el-form-item prop="due_date">
                    <el-date-picker
                      v-model="targetData.due_date"
                      type="date"
                      placeholder="Select a date"
                      :teleported="false"
                      popper-class="override-styles"
                      name="due_date"
                      format="YYYY/MM/DD"
                      value-format="YYYY-MM-DD"
                    />
                  </el-form-item>
                  <!--end::Datepicker-->
                </div>
                <!--end::Input-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <label class="fs-6 fw-semobold mb-2">Détails de la tâche</label>

            <el-form-item prop="description">
              <el-input
                v-model="targetData.description"
                type="textarea"
                rows="8"
                name="description"
                placeholder="Type Target Details"
              />
            </el-form-item>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="row g-9 mb-8">
              <!--begin::Col-->
              <div class="fv-row">
                <label class="required fs-6 fw-semobold mb-2">Priorité</label>

                <el-form-item prop="priority">
                  <el-select
                    v-model="targetData.priority"
                    placeholder="Sélectionnez un Priorité"
                    name="priority"
                    as="select"
                  >
                    <el-option value="">Sélectionnez priorité...</el-option>
                    <el-option label="Importante" value="1"> </el-option>
                    <el-option label="Urgent" value="2"> </el-option>
                    <el-option label="Haute" value="3"> </el-option>
                    <el-option label="Faible" value="4"> </el-option>
                    <el-option label="Moyenne" value="5"> </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Tags</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a target priority"
                ></i>
              </label>
              <!--end::Label-->

              <el-form-item prop="tags">
                <el-select
                  v-model="targetData.tags"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="Choose tags for your target"
                >
                  <el-option label="Importante" value="importante"> </el-option>
                  <el-option label="Urgente" value="urgente"> </el-option>
                  <el-option label="Haute" value="haute"> </el-option>
                  <el-option label="Faible" value="faible"> </el-option>
                  <el-option label="Moyenne" value="moyenne"> </el-option>
                </el-select>
              </el-form-item>
            </div>
            <!--end::Input group-->
          </div>
          <!--end::Card header-->
          <div class="d-flex m-2 justify-content-end">
            <!--begin::Button-->
            <button type="reset" class="btn btn-light me-3">Annuler</button>
            <!--end::Button-->

            <!--begin::Button-->

            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span v-if="!loading" class="indicator-label"> Enregistrer </span>
              <span v-if="loading" class="indicator-progress">
                S'il vous plaît, attendez...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>

            <!--end::Button-->
          </div>
        </div>
        <!--end::General options-->
      </div>
      <!--end::Main column-->
    </el-form>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref, watch } from "vue";

import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useAuthStore } from "@/stores/auth";
import { useProjectStore } from "@/stores/project";
import { useRoute, useRouter } from "vue-router";
import { hideModal } from "@/core/helpers/dom";
import { jsPDF } from "jspdf";
interface NewAddressData {
  parent_id: string;
  title: string;
  status: string;
  assign_id: string;
  due_date: Date;
  description: string;
  priority: string;
  task_type: string;
  tags: Array<string>;
  project_slug: string;
}
export default defineComponent({
  name: "task-overview",
  components: {},
  setup() {
    const UpdateTasklRef = ref<null | HTMLFormElement>(null);
    const userstore = useAuthStore();
    const loading = ref<boolean>(false);
    const store = useProjectStore();
    const members = ref([]);
    const url = import.meta.env.VITE_APP_URL;
    const task = ref(null);
    const id = ref(0);
    const router = useRouter();
    const route = useRoute();
    const targetData = ref<NewAddressData>({
      parent_id: "",
      title: "",
      status: "",
      assign_id: "",
      due_date: new Date(),
      description: "",
      priority: "",
      task_type: "",
      project_slug: "",
      tags: [],
    });

    const rules = ref({
      title: [
        {
          required: true,
          message: "Veuillez saisir le titre de la tâche",
          trigger: "blur",
        },
      ],
      description: [
        {
          required: true,
          message: "Veuillez saisir la description de la tâche",
          trigger: "blur",
        },
      ],

      assign_id: [
        {
          required: true,
          message: "Sélectionnez l'utilisateur",
          trigger: "change",
        },
      ],
      priority: [
        {
          required: true,
          message: "Veuillez sélectionner la priorité de la tâche",
          trigger: "change",
        },
      ],
      type: [
        {
          required: true,
          message: "Veuillez sélectionner le type de la tâche",
          trigger: "change",
        },
      ],
      due_date: [
        {
          required: true,
          message: "Veuillez sélectionner la date d'échéance",
          trigger: "change",
        },
      ],
      tags: [
        {
          required: true,
          message: "Veuillez sélectionner des tags",
          trigger: "change",
        },
      ],
    });
    const submit = () => {
      console.log("submit");
      if (typeof route.params.slug === "string") {
        targetData.value.project_slug = route.params.slug;
      }
      if (!UpdateTasklRef.value) {
        console.log("submit2");
        return;
      }
      UpdateTasklRef.value.validate(async (valid: boolean) => {
        if (valid) {
          loading.value = true;
          try {
            //Send  request
            await store.UpdateTask(targetData.value, id.value);
            Swal.fire({
              text: "félicitations! Maintenant, vous soumettez ce formulaire",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "D'accord, j'ai compris !",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
              },
            }).then(function () {
              // Refresh page data
              loading.value = false;
            });
          } catch (error: any) {
            Swal.fire({
              text: error as string, // Use the error message received from the API
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "D'accord, j'ai compris !",
              heightAuto: false,
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              loading.value = false;
            });
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

    const getTask = async (slug) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/task/byslug/" + slug);
          task.value = response.data.data;
          if (task.value) {
            id.value = response.data.data.id;

            targetData.value.title = task.value["title"];
            targetData.value.status = task.value["status"];
            targetData.value.assign_id = task.value["assign_id"];
            targetData.value.due_date = task.value["due_date"];
            targetData.value.description = task.value["description"];
            targetData.value.priority = task.value["priority"];
            targetData.value.task_type = task.value["type"];
            targetData.value.tags = JSON.parse(task.value["tags"]);
          }
        } catch (error: any) {
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
            router.push({ name: "account-tasks" });
          });
        }
      }
    };
    function getStatus(status) {
      if (status === "1") {
        return "badge-warning";
      } else if (status === "2") {
        return "badge-primary";
      } else if (status === "3") {
        return "badge-success";
      } else {
        return "badge-primary"; // Default color if status is null or unknown
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
          getTask(newParams.id).finally(() => {
            // Disable loading indicator
            document.body.classList.remove("page-loading");
            document.body.removeAttribute("data-kt-app-page-loading");
          });
        }
      }
    );

    onMounted(() => {
      //    Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");
      // Access the project ID from the route params
      if (route.params.slug) {
        console.log("Project ID:", route.params.id);

        getTeamMembers(route.params.slug);
        getTask(route.params.id).finally(() => {
          // Disable loading indicator
          document.body.classList.remove("page-loading");
          document.body.removeAttribute("data-kt-app-page-loading");
        });
      }
    });
    return {
      store,
      url,
      task,
      getStatusColorClass,
      formatDate,
      getAssetPath,
      id,
      formatDateWithoutTime,
      userstore,
      getTimeSince,
      members,
      route,
      submit,
      UpdateTasklRef,
      rules,
      targetData,
      loading,
      getStatus,
    };
  },
});
</script>
