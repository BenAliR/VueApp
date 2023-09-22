
<template>
  <div class="row gy-10 gx-xl-10">
    <el-form
      class="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework"
      @submit.prevent="submit()"
      :model="targetData"
      :rules="rules"
      ref="UpdateProjectRef"
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
              <h3>Catégorie</h3>
            </div>
            <!--end::Card title-->
          </div>
          <!--end::Card header-->

          <!--begin::Card body-->
          <div class="card-body pt-0">
            <!--begin::Select2-->
            <el-form-item prop="type">
              <el-select
                v-model="targetData.type"
                placeholder="Sélectionnez type du projet"
                name="type"
                as="select"
              >
                <el-option value="">Sélectionnez type...</el-option>
                <el-option label="Projet Personnel" value="Projet Personnel"
                  >Projet Personnel</el-option
                >
                <el-option label="Projet de Classe" value="Projet de Classe"
                  >Projet de Classe</el-option
                >
                <el-option
                  label="Projet de Fin d'Etudes"
                  value="Projet de Fin d'Etudes"
                  >Projet de Fin d'Etudes</el-option
                >
              </el-select>
            </el-form-item>
            <!--end::Select2-->

            <!--begin::Description-->
            <div class="text-muted fs-7">Set type du projet.</div>
            <!--end::Description-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Status-->
        <!--begin::duedate-->
        <div class="card card-flush py-4">
          <!--begin::Card header-->
          <div class="card-header">
            <!--begin::Card title-->
            <div class="card-title">
              <h3>Date d'échéance</h3>
            </div>
            <!--end::Card title-->
          </div>
          <!--end::Card header-->

          <!--begin::Card body-->
          <div class="card-body pt-0">
            <!--begin::Datepicker-->
            <el-form-item prop="due_date">
              <el-date-picker
                v-model="targetData.duedate"
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

            <!--begin::Description-->
            <div class="text-muted fs-7">Set Date d'échéance.</div>
            <!--end::Description-->

            <!--begin::Datepicker-->
            <div class="d-none mt-10">
              <label
                for="kt_ecommerce_add_category_status_datepicker"
                class="form-label"
                >Select date d'échéance</label
              >
            </div>
            <!--end::Datepicker-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Status-->
      </div>
      <!--end::Aside column-->

      <!--begin::Main column-->
      <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <!--begin::General options-->
        <div class="card card-flush py-4">
          <!--begin::Card header-->
          <div class="card-header">
            <div class="card-title">
              <h2>General</h2>
            </div>
          </div>
          <!--end::Card header-->

          <!--begin::Card body-->
          <div class="card-body pt-0">
            <!--begin::Input group-->
            <div class="mb-10 fv-row fv-plugins-icon-container">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Titre du projet</span>
              </label>
              <!--end::Label-->

              <el-form-item prop="title">
                <el-input
                  v-model="targetData.title"
                  placeholder="titre du projet"
                  name="title"
                ></el-input>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div>
              <!--begin::Input group-->
              <label class="fs-6 fw-semobold mb-2">Détails du projet</label>

              <el-form-item prop="description">
                <el-input
                  v-model="targetData.description"
                  type="textarea"
                  rows="8"
                  name="description"
                  placeholder="Détails du projet"
                />
              </el-form-item>
              <!--end::Input group-->

              <!--begin::Description-->
              <div class="text-muted mb-10 fs-7">
                Définissez une description du projet pour une meilleure
                visibilité.
              </div>
              <!--end::Description-->
            </div>
            <!--end::Input group-->
            <div class="w-100">
              <!--begin::Input group-->
              <div class="fv-row">
                <!--begin::Label-->
                <label class="d-flex align-items-center fs-5 fw-semobold mb-4">
                  <span class="required">Select Framework</span>
                  <i
                    class="fas fa-exclamation-circle ms-2 fs-7"
                    v-tooltip
                    title="Specify your apps framework"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin:Option-->
                <label class="d-flex flex-stack cursor-pointer mb-5">
                  <!--begin:Label-->
                  <span class="d-flex align-items-center me-2">
                    <!--begin:Icon-->
                    <span class="symbol symbol-50px me-6">
                      <span class="symbol-label bg-light-warning">
                        <i class="fab fa-html5 text-warning fs-2x"></i>
                      </span>
                    </span>
                    <!--end:Icon-->

                    <!--begin:Info-->
                    <span class="d-flex flex-column">
                      <span class="fw-bold fs-6">HTML5</span>

                      <span class="fs-7 text-muted">Projet Web de base</span>
                    </span>
                    <!--end:Info-->
                  </span>
                  <!--end:Label-->

                  <!--begin:Input-->
                  <span class="form-check form-check-custom form-check-solid">
                    <Field
                      class="form-check-input"
                      type="radio"
                      name="dev_technologie"
                      value="HTML5"
                      v-model="targetData.dev_technologie"
                    />
                  </span>
                  <!--end:Input-->
                </label>
                <!--end::Option-->

                <!--begin:Option-->
                <label class="d-flex flex-stack cursor-pointer mb-5">
                  <!--begin:Label-->
                  <span class="d-flex align-items-center me-2">
                    <!--begin:Icon-->
                    <span class="symbol symbol-50px me-6">
                      <span class="symbol-label bg-light-success">
                        <i class="fab fa-react text-success fs-2x"></i>
                      </span>
                    </span>
                    <!--end:Icon-->

                    <!--begin:Info-->
                    <span class="d-flex flex-column">
                      <span class="fw-bold fs-6">ReactJS</span>
                      <span class="fs-7 text-muted"
                        >Cadre d'application robuste et flexible</span
                      >
                    </span>
                    <!--end:Info-->
                  </span>
                  <!--end:Label-->

                  <!--begin:Input-->
                  <span class="form-check form-check-custom form-check-solid">
                    <Field
                      class="form-check-input"
                      type="radio"
                      name="dev_technologie"
                      value="ReactJS"
                      v-model="targetData.dev_technologie"
                    />
                  </span>
                  <!--end:Input-->
                </label>
                <!--end::Option-->

                <!--begin:Option-->
                <label class="d-flex flex-stack cursor-pointer mb-5">
                  <!--begin:Label-->
                  <span class="d-flex align-items-center me-2">
                    <!--begin:Icon-->
                    <span class="symbol symbol-50px me-6">
                      <span class="symbol-label bg-light-danger">
                        <i class="fab fa-angular text-danger fs-2x"></i>
                      </span>
                    </span>
                    <!--end:Icon-->

                    <!--begin:Info-->
                    <span class="d-flex flex-column">
                      <span class="fw-bold fs-6">Angular</span>
                      <span class="fs-7 text-muted"
                        >Gestion puissante des données</span
                      >
                    </span>
                    <!--end:Info-->
                  </span>
                  <!--end:Label-->

                  <!--begin:Input-->
                  <span class="form-check form-check-custom form-check-solid">
                    <Field
                      class="form-check-input"
                      type="radio"
                      name="dev_technologie"
                      value="Angular"
                      v-model="targetData.dev_technologie"
                    />
                  </span>
                  <!--end:Input-->
                </label>
                <!--end::Option-->

                <!--begin:Option-->
                <label class="d-flex flex-stack cursor-pointer mb-5">
                  <!--begin:Label-->
                  <span class="d-flex align-items-center me-2">
                    <!--begin:Icon-->
                    <span class="symbol symbol-50px me-6">
                      <span class="symbol-label bg-light-primary">
                        <i class="fab fa-vuejs text-primary fs-2x"></i>
                      </span>
                    </span>
                    <!--end:Icon-->

                    <!--begin:Info-->
                    <span class="d-flex flex-column">
                      <span class="fw-bold fs-6">Vue</span>
                      <span class="fs-7 text-muted"
                        >Cadre léger et réactif</span
                      >
                    </span>
                    <!--end:Info-->
                  </span>
                  <!--end:Label-->

                  <!--begin:Input-->
                  <span class="form-check form-check-custom form-check-solid">
                    <Field
                      class="form-check-input"
                      type="radio"
                      name="dev_technologie"
                      value="Vue"
                      v-model="targetData.dev_technologie"
                    />
                  </span>
                  <!--end:Input-->
                </label>
                <!--end::Option-->
                <!--begin:Option-->
                <label class="d-flex flex-stack cursor-pointer mb-5">
                  <!--begin:Label-->
                  <span class="d-flex align-items-center me-2">
                    <!--begin:Icon-->
                    <span class="symbol symbol-50px me-6">
                      <span class="symbol-label bg-light-primary">
                        <i class="fab fa-otter text-primary fs-2x"></i>
                      </span>
                    </span>
                    <!--end:Icon-->

                    <!--begin:Info-->
                    <span class="d-flex flex-column">
                      <span class="fw-bold fs-6">Autre</span>
                      <span class="fs-7 text-muted"
                        >cadre d'application avec une syntaxe expressive et
                        élégante.</span
                      >
                    </span>
                    <!--end:Info-->
                  </span>
                  <!--end:Label-->

                  <!--begin:Input-->
                  <span class="form-check form-check-custom form-check-solid">
                    <Field
                      class="form-check-input"
                      type="radio"
                      name="dev_technologie"
                      value="Autre"
                      v-model="targetData.dev_technologie"
                    />
                  </span>
                  <!--end:Input-->
                </label>
                <!--end::Option-->
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="dev_technologie"
                />
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-10">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control"
                  name="autre"
                  placeholder="autre"
                  v-model="targetData.dev_technologie"
                />

                <!--end::Input-->
              </div>
              <!--end::Input group-->
            </div>
          </div>
          <!--end::Card header-->
        </div>
        <!--end::General options-->
        <!--begin::Automation-->
        <div class="card card-flush py-4">
          <!--begin::Card header-->
          <div class="card-header">
            <div class="card-title">
              <h2>L'équipe</h2>
            </div>
          </div>
          <!--end::Card header-->

          <!--begin::Card body-->
          <div class="card-body pt-0">
            <!--begin::Input group-->
            <div>
              <!--begin::Label-->
              <label class="form-label mb-5">
                choisir un nom et un taille idéale pour votre équipe .</label
              >
              <!--end::Label-->

              <!--begin::Methods-->
              <!--begin::Wrapper-->
              <div class="w-100">
                <!--begin::Heading-->

                <!--end::Heading-->
                <!--begin::Input group-->
                <div class="mb-10 fv-row">
                  <!--begin::Label-->
                  <label
                    class="required d-flex align-items-center form-label mb-3"
                  >
                    Spécifiez la taille de l'équipe
                    <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      v-tooltip
                      title="Indiquez la taille de votre équipe"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Row-->
                  <div class="row mb-2" data-kt-buttons="true">
                    <!--begin::Col-->
                    <div class="col">
                      <!--begin::Option-->
                      <Field
                        type="radio"
                        class="btn-check"
                        id="accountUpdateTeamSize1"
                        name="team_size"
                        value="1-1"
                        v-model="targetData.team_size"
                      />
                      <label
                        class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                        for="accountUpdateTeamSize1"
                      >
                        <span class="fw-bold fs-3">1-1</span>
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col">
                      <!--begin::Option-->
                      <Field
                        type="radio"
                        class="btn-check"
                        name="team_size"
                        id="accountUpdateTeamSize2"
                        value="2-5"
                        checked
                        v-model="targetData.team_size"
                      />
                      <label
                        class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                        for="accountUpdateTeamSize2"
                      >
                        <span class="fw-bold fs-3">2-5</span>
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col">
                      <!--begin::Option-->
                      <Field
                        type="radio"
                        class="btn-check"
                        name="team_size"
                        id="accountUpdateTeamSize3"
                        value="5-10"
                        v-model="targetData.team_size"
                      />
                      <label
                        class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                        for="accountUpdateTeamSize3"
                      >
                        <span class="fw-bold fs-3">5-10</span>
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col">
                      <!--begin::Option-->
                      <Field
                        type="radio"
                        class="btn-check"
                        name="team_size"
                        id="accountUpdateTeamSize4"
                        value="10+"
                        v-model="targetData.team_size"
                      />
                      <label
                        class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                        for="accountUpdateTeamSize4"
                      >
                        <span class="fw-bold fs-3">10+</span>
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Row-->

                  <!--begin::Hint-->
                  <div class="form-text">
                    la taille optimale pour une bonne équipe se situe entre 2 et
                    5 personnes
                  </div>
                  <!--end::Hint-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="mb-0 fv-row">
                  <!--begin::Label-->
                  <label
                    class="required d-flex align-items-center form-label mb-5"
                  >
                    Nom de l'équipe
                    <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      v-tooltip
                      title="Nom de l'équipe de votre projet"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Options-->
                  <div class="mb-0">
                    <!--begin:Option-->
                    <label class="d-flex flex-stack mb-5 cursor-pointer">
                      <!--begin::Input-->
                      <Field
                        type="text"
                        class="form-control"
                        name="team_name"
                        placeholder=""
                        v-model="targetData.team_name"
                      />

                      <!--end::Input-->
                    </label>
                    <!--end::Option-->
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="team_name"
                    />
                  </div>
                  <!--end::Options-->
                </div>
                <!--end::Input group-->
              </div>
              <!--end::Wrapper-->

              <div class="separator separator-dashed my-5"></div>
              <!--begin::Input row-->
              <div class="d-flex fv-row">
                <!--begin::Radio-->
                <div class="form-check form-check-custom form-check-solid">
                  <!--begin::Input-->
                  <input
                    class="form-check-input me-3"
                    name="method"
                    type="radio"
                    value="1"
                    id="kt_ecommerce_add_category_automation_1"
                    checked="checked"
                  />
                  <!--end::Input-->

                  <!--begin::Label-->
                  <label
                    class="form-check-label"
                    for="kt_ecommerce_add_category_automation_1"
                  >
                    <div class="fw-bold text-gray-800">Membres</div>
                  </label>
                  <!--end::Label-->
                </div>
                <!--end::Radio-->
              </div>
              <!--end::Input row-->

              <!--end::Methods-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div
              class="mt-10"
              data-kt-ecommerce-catalog-add-category="auto-options"
            >
              <!--begin::Repeater-->
              <div>
                <!--begin::Form group-->
                <div class="form-group" v-if="project">
                  <div
                    data-repeater-list="kt_ecommerce_add_category_conditions"
                    class="d-flex flex-column gap-3"
                  >
                    <div
                      data-repeater-item=""
                      class="form-group d-flex flex-wrap align-items-center gap-5"
                      v-for="(user, index) in project.team.users"
                      :key="index"
                    >
                      <!--begin::Select2-->
                      <div class="w-100 w-md-200px">
                        <span>{{ user.fullname }}</span>
                      </div>
                      <!--end::Select2-->

                      <!--begin::Select2-->
                      <div class="w-100 w-md-200px" v-if="user.role !== null">
                        <span>{{ user.role }}</span>
                      </div>
                      <!--end::Select2-->

                      <!--begin::Input-->

                      <!--end::Input-->

                      <!--begin::Button-->
                      <span
                        type="button"
                        data-repeater-delete=""
                        class="btn btn-sm btn-icon btn-light-danger"
                      >
                        <i class="ki-duotone ki-cross fs-2"
                          ><span class="path1"></span><span class="path2"></span
                        ></i>
                      </span>
                      <!--end::Button-->
                    </div>
                  </div>
                </div>
                <!--end::Form group-->
              </div>
              <!--end::Repeater-->
            </div>
            <!--end::Input group-->
          </div>
          <!--end::Card header-->
        </div>
        <!--end::Automation-->
        <div class="d-flex justify-content-end">
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
import { useStudentStore } from "@/stores/student";
import { useRoute, useRouter } from "vue-router";
import { hideModal } from "@/core/helpers/dom";
import { jsPDF } from "jspdf";
import { ErrorMessage, Field } from "vee-validate";
interface NewAddressData {
  title: string;
  project_slug: string;
  description: string;
  type: string;
  dev_technologie: string;
  autre: string;
  duedate: string;
  namedb: string;
  typedb: string;
  team_size: string;
  team_name: string;
}
export default defineComponent({
  name: "student-project-settings",
  components: { Field, ErrorMessage },
  setup() {
    const UpdateProjectRef = ref<null | HTMLFormElement>(null);
    const userstore = useAuthStore();
    const loading = ref<boolean>(false);
    const store = useStudentStore();
    const members = ref([]);
    const url = import.meta.env.VITE_APP_URL;
    const project = ref(null);
    const id = ref(0);
    const router = useRouter();
    const route = useRoute();
    const targetData = ref<NewAddressData>({
      title: "",
      project_slug: "",
      description: "",
      type: "Projet Personnel",
      dev_technologie: "ReactJS",
      autre: "",
      duedate: "",
      namedb: "",
      typedb: "MySQL",
      team_size: "2-5",
      team_name: "",
    });

    const rules = ref({
      title: [
        {
          required: true,
          message: "Veuillez saisir le titre du projet",
          trigger: "blur",
        },
      ],
      description: [
        {
          required: true,
          message: "Veuillez saisir la description du projet",
          trigger: "blur",
        },
      ],

      type: [
        {
          required: true,
          message: "Sélectionnez l'utilisateur",
          trigger: "change",
        },
      ],
      dev_technologie: [
        {
          required: true,
          message: "Veuillez sélectionner la priorité de la tâche",
          trigger: "change",
        },
      ],
      duedate: [
        {
          required: true,
          message: "Veuillez sélectionner la date d'échéance",
          trigger: "change",
        },
      ],
      team_size: [
        {
          required: true,
          message: "Veuillez sélectionner des tags",
          trigger: "change",
        },
      ],
    });
    const submit = () => {
      console.log("submit", UpdateProjectRef.value);

      if (!UpdateProjectRef.value) {
        console.log("submit2");
        return;
      }
      UpdateProjectRef.value.validate(async (valid: boolean) => {
        console.log("submit3");
        if (valid) {
          loading.value = true;
          try {
            //Send  request
            await store.UpdateStudentProject(targetData.value,route.params.id);
            const error = Object.values(store.errors);
            if (!error.length) {
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
    const getProject = async (id) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("admin/users/projects/" + id);
          project.value = response.data.data;

          if (project.value) {

            targetData.value.title = project.value["title"];
            targetData.value.team_size = project.value["team_size"];
            targetData.value.dev_technologie = project.value["dev_technologie"];
            targetData.value.duedate = project.value["duedate"];
            targetData.value.description = project.value["description"];
            targetData.value.team_name = project.value["team"]["name"];
            targetData.value.type = project.value["type"];
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
    const getTeamMembers = async (id) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("admin/users/projects/members/" + id);
          members.value = response.data.data;
        } catch (error: any) {
          document.body.classList.add("page-loading");
          document.body.setAttribute("data-kt-app-page-loading", "true");
        }
      }
    };

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
          getProject(route.params.id).finally(() => {
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
      if (route.params.id) {
        getTeamMembers(route.params.id);
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
      getAssetPath,
      id,
      userstore,
      members,
      route,
      submit,
      UpdateProjectRef,
      rules,
      targetData,
      loading,
    };
  },
});
</script>
