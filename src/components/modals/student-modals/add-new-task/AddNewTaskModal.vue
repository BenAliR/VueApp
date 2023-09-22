<template>
  <!--begin::Modal - New Target-->
  <div
    class="modal fade"
    id="kt_modal_add_task"
    ref="newTargetModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content rounded">
        <!--begin::Modal header-->
        <div class="modal-header pb-0 border-0 justify-content-end">
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
          <!--begin:Form-->
          <el-form
            id="kt_modal_add_task_form"
            @submit.prevent="submit()"
            :model="targetData"
            :rules="rules"
            ref="formRef"
            class="form"
          >
            <!--begin::Heading-->
            <div class="mb-13 text-center">
              <!--begin::Title-->
              <h1 class="mb-3">Créer une nouvelle tâche</h1>

              <!--end::Title-->

              <!--begin::Description-->
              <div class="text-gray-400 fw-semobold fs-5">
                Si vous avez besoin de plus d'informations, veuillez vérifier
                <a href="#" class="fw-bold link-primary">Guide du projet</a>.
              </div>
              <!--end::Description-->
            </div>
            <!--end::Heading-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Titre de la tâche</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a target name for future usage and reference"
                ></i>
              </label>
              <!--end::Label-->

              <el-form-item prop="title">
                <el-input
                  v-model="targetData.title"
                  placeholder="Enter tâche Title"
                  name="title"
                ></el-input>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row g-9 mb-8">
              <!--begin::Col-->
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">Attribuer</label>

                <el-form-item prop="assign_id">
                  <select
                    v-model="targetData.assign_id"
                    placeholder="Sélectionnez un membre de l'équipe"
                    name="assign_id"
                    as="select"
                    class="form-select form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                  >
                    <option
                      v-if="userstore.user"
                      :label="userstore.user.fullname"
                      :value="userstore.user.id"
                    >
                      assignez-vous
                    </option>
                    <option
                      v-for="item in members"
                      :key="item.id"
                      :label="item.fullname"
                      :value="item.id"
                    />
                  </select>
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
            <div class="d-flex flex-column mb-8">
              <label class="fs-6 fw-semobold mb-2">Détails de la tâche</label>

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

            <!--begin::Input group-->
            <div class="row g-9 mb-8">
              <!--begin::Col-->
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">Priorité</label>

                <el-form-item prop="priority">
                  <select
                    v-model="targetData.priority"
                    class="form-select form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                    name="priority"
                  >
                    <option value="">Sélectionnez priorité...</option>
                    <option label="Importante" value="1"></option>
                    <option label="Urgent" value="2"></option>
                    <option label="Haute" value="3"></option>
                    <option label="Faible" value="4"></option>
                    <option label="Moyenne" value="5"></option>
                  </select>
                </el-form-item>
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">Type</label>

                <el-form-item prop="task_type">
                  <select
                    v-model="targetData.task_type"
                    class="form-select form-select-sm"
                    data-control="select2"
                    data-hide-search="true"
                    name="task_type"
                  >
                    <option value="">Sélectionnez type...</option>
                    <option
                      label="Présentation du projet"
                      value="Présentation du projet"
                    >
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
                    <option label="Development" value="Development">
                      Development
                    </option>
                    <option label="Testing" value="Testing">Testing</option>
                  </select>
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
                  title="Specify a target priorty"
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
            <!--begin::Input group-->
            <div class="mb-15 fv-row">
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack">
                <!--begin::Label-->
                <div class="fw-semobold me-5">
                  <label class="fs-6">Notifications</label>

                  <div class="fs-7 text-gray-400">
                    Autoriser les notifications par e-mail
                  </div>
                </div>
                <!--end::Label-->

                <!--begin::Checkboxes-->
                <div class="d-flex align-items-center">
                  <!--begin::Checkbox-->
                  <label
                    class="form-check form-check-custom form-check-solid me-10"
                  >
                    <input
                      class="form-check-input h-20px w-20px"
                      type="checkbox"
                      name="communication[]"
                      value="email"
                      checked
                    />

                    <span class="form-check-label fw-semobold"> Email </span>
                  </label>
                  <!--end::Checkbox-->
                </div>
                <!--end::Checkboxes-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
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
                  <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" />
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
          <!--end:Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Target-->
</template>

<style lang="scss">
.el-select {
  width: 100%;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useProjectStore } from "@/stores/project";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import JwtService from "@/core/services/JwtService";
import { useRoute, useRouter } from "vue-router";
import type { SetupContext } from "vue";
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
  name: "add-new-task-modal",
  components: {},

  setup(_, context: SetupContext) {
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const store = useProjectStore();
    const members = ref([]);
    const route = useRoute();
    const userstore = useAuthStore();
    const router = useRouter();
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
      tags: ["important", "urgent"],
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
      task_type: [
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
    const convertToTimestamp = () => {
      if (targetData.value.due_date) {
        targetData.value.due_date = new Date(targetData.value.due_date);
      }
    };
    const EmitReloadTasks = () => {
      // Emit the custom event
      context.emit("buttonClick2");
    };
    const submit = () => {
      if (typeof route.params.slug === "string") {
        targetData.value.project_slug = route.params.slug;
      }
      if (!formRef.value) {
        return;
      }
      formRef.value.validate(async (valid: boolean) => {
        if (valid) {
          loading.value = true;
          try {
            //Send  request
            await store.CreateProjectTask(targetData.value);
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
                hideModal(newTargetModalRef.value);
                EmitReloadTasks();
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
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");
      // Access the project ID from the route params

      if (route.params.slug) {
        getTeamMembers(route.params.slug).finally(() => {
          // Disable loading indicator
          document.body.classList.remove("page-loading");
          document.body.removeAttribute("data-kt-app-page-loading");
        });
      }
    });
    return {
      targetData,
      submit,
      loading,
      formRef,
      rules,
      newTargetModalRef,
      getAssetPath,
      members,
      userstore,
      convertToTimestamp,
    };
  },
});
</script>

<style lang="scss">
.override-styles {
  z-index: 99999 !important;
  pointer-events: initial;
}
</style>
