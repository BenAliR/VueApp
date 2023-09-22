<template>
  <!--begin::Form-->
  <form class="form" id="kt_modal_create_app_form" @submit="handleStep">
    <!--begin::Step 1-->
    <div class="current" data-kt-stepper-element="content">
      <div class="w-100">
        <!--begin::Input group-->
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
            <span class="required">Nom de l'application</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="Spécifiez votre nom d'application unique"
            ></i>
          </label>
          <!--end::Label-->

          <!--begin::Input-->
          <Field
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="title"
            placeholder=""
            v-model="formData.title"
          />
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="title"
          />
          <!--end::Input-->
        </div>
        <!--end::Input group-->
        <!--begin::Input group-->
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
            <span class="required">Descriptif de l'application</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="Spécifiez votre cadre d'application"
            ></i>
          </label>
          <!--end::Label-->

          <!--begin::Input-->
          <Field
            class="form-control form-control-lg form-control-solid"
            rows="3"
            v-model="formData.description"
            name="description"
            as="textarea"
            placeholder="Tapez ou collez la description ici"
          >
          </Field>
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="description"
          />
          <!--end::Input-->
        </div>
        <!--end::Input group-->
        <!--begin::Input group-->
        <div class="fv-row">
          <!--begin::Label-->
          <label class="d-flex align-items-center fs-5 fw-semobold mb-4">
            <span class="required">Catégorie</span>

            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="
Sélectionnez votre catégorie d'application"
            ></i>
          </label>
          <!--end::Label-->

          <!--begin:Options-->
          <div class="fv-row">
            <!--begin:Option-->
            <label class="d-flex flex-stack mb-5 cursor-pointer">
              <!--begin:Label-->
              <span class="d-flex align-items-center me-2">
                <!--begin:Icon-->
                <span class="symbol symbol-50px me-6">
                  <span class="symbol-label bg-light-primary">
                    <KTIcon
                      icon-name="compass"
                      icon-class="fs-1 text-primary"
                    />
                  </span>
                </span>
                <!--end:Icon-->

                <!--begin:Info-->
                <span class="d-flex flex-column">
                  <span class="fw-bold fs-6">Projet de Fin d'Etudes</span>

                  <span class="fs-7 text-muted"
                    >Un projet complet en situation professionnelle</span
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
                  name="type"
                  v-model="formData.type"
                  value="Projet de Fin d'Etudes"
                />
              </span>
              <!--end:Input-->
            </label>
            <!--end::Option-->

            <!--begin:Option-->
            <label class="d-flex flex-stack mb-5 cursor-pointer">
              <!--begin:Label-->
              <span class="d-flex align-items-center me-2">
                <!--begin:Icon-->
                <span class="symbol symbol-50px me-6">
                  <span class="symbol-label bg-light-danger">
                    <KTIcon
                      icon-name="category"
                      icon-class="fs-1 text-danger"
                    />
                  </span>
                </span>
                <!--end:Icon-->

                <!--begin:Info-->
                <span class="d-flex flex-column">
                  <span class="fw-bold fs-6">Projet Personnel</span>

                  <span class="fs-7 text-muted"
                    >Un projet personnel évalue de manière officielle les
                    compétences liées aux approches de l'apprentissage</span
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
                  name="type"
                  v-model="formData.type"
                  value="Projet Personnel"
                />
              </span>
              <!--end:Input-->
            </label>
            <!--end::Option-->

            <!--begin:Option-->
            <label class="d-flex flex-stack cursor-pointer">
              <!--begin:Label-->
              <span class="d-flex align-items-center me-2">
                <!--begin:Icon-->
                <span class="symbol symbol-50px me-6">
                  <span class="symbol-label bg-light-success">
                    <KTIcon icon-name="timer" icon-class="fs-1 text-success" />
                  </span>
                </span>
                <!--end:Icon-->

                <!--begin:Info-->
                <span class="d-flex flex-column">
                  <span class="fw-bold fs-6">Projet de Classe</span>

                  <span class="fs-7 text-muted">Un projet pédagogique</span>
                </span>
                <!--end:Info-->
              </span>
              <!--end:Label-->

              <!--begin:Input-->
              <span class="form-check form-check-custom form-check-solid">
                <Field
                  class="form-check-input"
                  type="radio"
                  name="type"
                  v-model="formData.type"
                  value="Projet de Classe"
                />
              </span>
              <!--end:Input-->
            </label>
            <!--end::Option-->
            <ErrorMessage
              class="fv-plugins-message-container invalid-feedback"
              name="type"
            />
          </div>
          <!--end:Options-->
        </div>
        <!--end::Input group-->
      </div>
    </div>
    <!--end::Step 1-->
    <!--begin::Step 2-->
    <div data-kt-stepper-element="content">
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
                v-model="formData.dev_technologie"
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
                v-model="formData.dev_technologie"
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
                v-model="formData.dev_technologie"
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
                <span class="fs-7 text-muted">Cadre léger et réactif</span>
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
                v-model="formData.dev_technologie"
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
              <el-switch
                @change="changeAutre"
                v-model="formData.autre"
              ></el-switch>
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
        <div class="fv-row mb-10" v-if="formData.autre">
          <!--begin::Input-->
          <Field
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="autre"
            placeholder="autre"
            v-model="formData.dev_technologie"
          />

          <!--end::Input-->
        </div>
        <!--end::Input group-->
      </div>
    </div>
    <!--end::Step 2-->
    <!--begin::Step 3-->
    <div data-kt-stepper-element="content">
      <div class="w-100">
        <!--begin::Col-->
        <div class="fv-row mb-10">
          <label class="required fs-6 fw-semobold mb-2">Date d'échéance</label>

          <!--begin::Input-->

          <!--begin::Datepicker-->

          <Field
            v-model="formData.duedate"
            type="date"
            placeholder="Select a date"
            :teleported="false"
            popper-class="override-styles"
            name="duedate"
            class="form-control form-control-lg form-control-solid"
          />
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="duedate"
          />
          <!--end::Datepicker-->

          <!--end::Input-->
        </div>
        <!--end::Col-->
        <!--begin::Input group-->
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="required fs-5 fw-semobold mb-2"
            >Nom de la base de données
          </label>
          <!--end::Label-->

          <!--begin::Input-->
          <Field
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="namedb"
            placeholder=""
            v-model="formData.namedb"
          />
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="namedb"
          />
          <!--end::Input-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="fv-row">
          <!--begin::Label-->
          <label class="d-flex align-items-center fs-5 fw-semobold mb-4">
            <span class="required">Sélectionnez Database Engine</span>

            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              v-tooltip
              title="Sélectionnez votre base de données engine"
            ></i>
          </label>
          <!--end::Label-->

          <!--begin:Option-->
          <label class="d-flex flex-stack cursor-pointer mb-5">
            <!--begin::Label-->
            <span class="d-flex align-items-center me-2">
              <!--begin::Icon-->
              <span class="symbol symbol-50px me-6">
                <span class="symbol-label bg-light-success">
                  <i class="fas fa-database text-success fs-2x"></i>
                </span>
              </span>
              <!--end::Icon-->

              <!--begin::Info-->
              <span class="d-flex flex-column">
                <span class="fw-bold fs-6">MySQL</span>

                <span class="fs-7 text-muted">Base de données MySQL</span>
              </span>
              <!--end::Info-->
            </span>
            <!--end::Label-->

            <!--begin::Input-->
            <span class="form-check form-check-custom form-check-solid">
              <Field
                class="form-check-input"
                type="radio"
                name="typedb"
                value="MySQL"
                v-model="formData.typedb"
              />
            </span>
            <!--end::Input-->
          </label>
          <!--end::Option-->

          <!--begin:Option-->
          <label class="d-flex flex-stack cursor-pointer mb-5">
            <!--begin::Label-->
            <span class="d-flex align-items-center me-2">
              <!--begin::Icon-->
              <span class="symbol symbol-50px me-6">
                <span class="symbol-label bg-light-danger">
                  <i class="fab fa-google text-danger fs-2x"></i>
                </span>
              </span>
              <!--end::Icon-->

              <!--begin::Info-->
              <span class="d-flex flex-column">
                <span class="fw-bold fs-6">Firebase</span>

                <span class="fs-7 text-muted"
                  >Gestion des données d'application basée sur Google</span
                >
              </span>
              <!--end::Info-->
            </span>
            <!--end::Label-->

            <!--begin::Input-->
            <span class="form-check form-check-custom form-check-solid">
              <Field
                class="form-check-input"
                type="radio"
                name="typedb"
                value="Firebase"
                v-model="formData.typedb"
              />
            </span>
            <!--end::Input-->
          </label>
          <!--end::Option-->

          <!--begin:Option-->
          <label class="d-flex flex-stack cursor-pointer">
            <!--begin::Label-->
            <span class="d-flex align-items-center me-2">
              <!--begin::Icon-->
              <span class="symbol symbol-50px me-6">
                <span class="symbol-label bg-light-warning">
                  <i class="fab fa-amazon text-warning fs-2x"></i>
                </span>
              </span>
              <!--end::Icon-->

              <!--begin::Info-->
              <span class="d-flex flex-column">
                <span class="fw-bold fs-6">DynamoDB</span>

                <span class="fs-7 text-muted"
                  >Base de données Amazon Fast NoSQL</span
                >
              </span>
              <!--end::Info-->
            </span>
            <!--end::Label-->

            <!--begin::Input-->
            <span class="form-check form-check-custom form-check-solid">
              <Field
                class="form-check-input"
                type="radio"
                name="typedb"
                value="DynamoDB"
                v-model="formData.typedb"
              />
            </span>
            <!--end::Input-->
          </label>
          <!--end::Option-->

          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="typedb"
          />
        </div>
        <!--end::Input group-->
      </div>
    </div>
    <!--end::Step 3-->
    <!--begin::Step 4-->
    <div data-kt-stepper-element="content">
      <!--begin::Wrapper-->
      <div class="w-100">
        <!--begin::Heading-->
        <div class="pb-10 pb-lg-15">
          <!--begin::Title-->
          <h2 class="fw-bold text-dark">Informations sur l'équipe</h2>
          <!--end::Title-->

          <!--begin::Notice-->
          <div class="text-gray-400 fw-semobold fs-6">
            choisir un nom et un taille idéale pour votre équipe .
          </div>
          <!--end::Notice-->
        </div>
        <!--end::Heading-->
        <!--begin::Input group-->
        <div class="mb-10 fv-row">
          <!--begin::Label-->
          <label class="required d-flex align-items-center form-label mb-3">
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
                id="accountTeamSize1"
                name="team_size"
                value="1-1"
                v-model="formData.team_size"
              />
              <label
                class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                for="accountTeamSize1"
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
                id="accountTeamSize2"
                value="2-5"
                v-model="formData.team_size"
              />
              <label
                class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                for="accountTeamSize2"
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
                id="accountTeamSize3"
                value="5-10"
                v-model="formData.team_size"
              />
              <label
                class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                for="accountTeamSize3"
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
                id="accountTeamSize4"
                value="10+"
                v-model="formData.team_size"
              />
              <label
                class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                for="accountTeamSize4"
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
            la taille optimale pour une bonne équipe se situe entre 2 et 5
            personnes
          </div>
          <!--end::Hint-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="mb-0 fv-row">
          <!--begin::Label-->
          <label class="required d-flex align-items-center form-label mb-5">
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
                class="form-control form-control-lg form-control-solid"
                name="team_name"
                placeholder=""
                v-model="formData.team_name"
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
    </div>
    <!--end::Step 4-->
    <!--begin::Step 5-->
    <div data-kt-stepper-element="content">
      <div class="w-100 text-center">
        <!--begin::Heading-->
        <h1 class="fw-bold text-dark mb-3">Dernière étape!</h1>
        <!--end::Heading-->

        <!--begin::Description-->
        <div class="text-muted fw-semobold fs-3">
          Soumettez votre application pour démarrer votre projet.
        </div>
        <!--end::Description-->

        <!--begin::Illustration-->
        <div class="text-center px-4 py-10">
          <img
            :src="getIllustrationsPath('4.png')"
            alt=""
            class="mw-100 mh-300px"
          />
        </div>
        <!--end::Illustration-->
      </div>
    </div>
    <!--end::Step 5-->

    <!--begin::Actions-->
    <div class="d-flex flex-stack pt-10">
      <!--begin::Wrapper-->
      <div class="me-2">
        <button
          type="button"
          class="btn btn-lg btn-light-primary me-3"
          data-kt-stepper-action="previous"
          @click="previousStep()"
        >
          <KTIcon icon-name="arrow-left" icon-class="fs-3 me-1" />
          Précédent
        </button>
      </div>
      <!--end::Wrapper-->

      <!--begin::Wrapper-->
      <div>
        <button
          type="submit"
          class="btn btn-lg btn-primary"
          v-if="currentStepIndex === totalSteps - 1"
          @click="formSubmit()"
        >
          <span class="indicator-label">
            Enregistrer
            <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" />
          </span>
          <span class="indicator-progress">
            S'il vous plaît, attendez...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>

        <button v-else type="submit" class="btn btn-lg btn-primary">
          Suivant
          <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-1 me-0" />
        </button>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Actions-->
  </form>
  <!--end::Form-->
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";

import Swal from "sweetalert2/dist/sweetalert2.js";
import { ErrorMessage, Field, useForm } from "vee-validate";
import * as Yup from "yup";
import { StepperComponent } from "@/assets/ts/components";
import { useProjectStore } from "@/stores/project";
import type {
  ICreateApp,
  IStep1,
  IStep2,
  IStep3,
  IStep4,
} from "@/components/modals/student-modals/create-project-modal/types";
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { setLocale } from "yup";
import { hideModal } from "@/core/helpers/dom";
// Set the desired locale or language
setLocale({
  mixed: {
    default: "La validation du champ a échoué",
    required: "Champ requis",
    notType: "format de date invalide",
  },
  string: {
    email: "Format d'email invalide",
  },

  // Add more translations for specific validation types
});
interface Props {
  stepperEl: HTMLElement | null;
}
const emit = defineEmits(["after-hide-add"]);
const props = defineProps<Props>();
const store = useProjectStore();
const currentStepIndex = ref(0);
const stepperObj = ref<StepperComponent | null>(null);

onMounted(() => {
  nextTick(() => {
    if (props.stepperEl) {
      stepperObj.value = StepperComponent.createInsance(props.stepperEl);
    }
  });
});

const formData = ref<ICreateApp>({
  title: "",
  description: "",
  type: "Projet Personnel",
  dev_technologie: "ReactJS",
  autre: false,
  duedate: "",
  namedb: "",
  typedb: "MySQL",
  team_size: "2-5",
  team_name: "",
});

const formInitData = ref<ICreateApp>(formData.value);

const createAppSchema = [
  Yup.object({
    title: Yup.string().required().label("nom"),
    description: Yup.string().required().label("description"),
    type: Yup.string().required().label("Categorie"),
  }),
  Yup.object({
    dev_technologie: Yup.string().required().label("Framework"),
  }),
  Yup.object({
    duedate: Yup.date()
      .required("Date d'échéance")
      .typeError("Invalid date format"),
    namedb: Yup.string().required().label("nom de la base de données"),
    typedb: Yup.string().required().label("Database engine"),
  }),
  Yup.object({
    team_size: Yup.string().required().label("taille de l'équipe"),
    team_name: Yup.string().required().label("nom de l'équipe"),
  }),
];

// extracts the individual step schema
const currentSchema = computed(() => {
  return createAppSchema[currentStepIndex.value];
});

const totalSteps = computed(() => {
  if (stepperObj.value) {
    return stepperObj.value.totalStepsNumber;
  } else {
    return 1;
  }
});

const { resetForm, handleSubmit } = useForm<IStep1 | IStep2 | IStep3 | IStep4>({
  validationSchema: currentSchema,
  initialValues: formData.value,
});

const previousStep = () => {
  currentStepIndex.value--;

  if (!stepperObj.value) {
    return;
  }

  stepperObj.value.goPrev();
};
const changeAutre = () => {
  formData.value.dev_technologie = "";
};
const handleStep = handleSubmit((values) => {
  console.log(values);

  formData.value = {
    ...formData.value,
    ...values,
  };

  resetForm({
    values: {
      ...formData.value,
    },
  });

  currentStepIndex.value++;

  if (!stepperObj.value) {
    return;
  }

  stepperObj.value.goNext();
});

const formSubmit = async () => {
  //Send inscription request
  await store.CreateProject(formData.value);
  const error = Object.values(store.errors);

  console.log("error", error);
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

      stepperObj.value?.goFirst();
      currentStepIndex.value = 0;
      resetForm({
        values: {
          ...formInitData.value,
        },
      });
      const eventData = { message: "Hello from EventEmitter" };
      emit("after-hide-add", eventData);
      eventBus.clicked.value = true;

      setTimeout(() => {
        const element = document.getElementById("closeModalNewProject");
        if (element) element.click();
      }, 1000);
    });
  } else {
    Swal.fire({
      text: error[0] as string,
      icon: "error",
      buttonsStyling: false,
      confirmButtonText: "Try again!",
      heightAuto: false,
      customClass: {
        confirmButton: "btn fw-semobold btn-light-danger",
      },
    });
  }
};
</script>
