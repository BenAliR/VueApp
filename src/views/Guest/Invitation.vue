<template>
  <!--begin::Layout-->
  <div class="app-content flex-column-fluid p-5">
    <div class="card" v-if="invitation.team">
      <!--begin::Body-->
      <div class="card-body p-lg-10">
        <!--begin::Layout-->
        <div class="d-flex flex-column flex-xl-row">
          <!--begin::Content-->
          <div class="flex-lg-row-fluid me-xl-18 mb-10 mb-xl-0">
            <!--begin::Invoice 2 content-->
            <div class="mt-n1">
              <!--begin::Top-->
              <div class="d-flex flex-stack pb-10">
                <!--begin::Logo-->
                <a href="#">
                  <img
                    alt="Logo"
                    :src="getAssetPath('media/logos/custom-1.png')"
                  />
                </a>
                <!--end::Logo-->

                <!--begin::Action-->
                <!--end::Action-->
              </div>
              <!--end::Top-->

              <!--begin::Wrapper-->
              <div class="m-0">
                <!--begin::Label-->
                <div class="fw-bold fs-3 text-gray-800 mb-8">
                  Invitation #{{ invitation.id }}
                </div>
                <!--end::Label-->

                <!--begin::Row-->
                <div class="row g-5 mb-11">
                  <!--end::Col-->
                  <div class="col-sm-6">
                    <!--end::Label-->
                    <div class="fw-semibold fs-7 text-gray-600 mb-1">Date:</div>
                    <!--end::Label-->

                    <!--end::Col-->
                    <div class="fw-bold fs-6 text-gray-800">
                      {{ formatDate(invitation.created_at) }}
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Col-->

                  <!--end::Col-->
                  <div class="col-sm-6" v-if="invitation.team">
                    <!--end::Label-->
                    <div class="fw-semibold fs-7 text-gray-600 mb-1">
                      Objet:
                    </div>
                    <!--end::Label-->

                    <!--end::Info-->
                    <div
                      class="fw-bold fs-6 text-gray-800 d-flex align-items-center flex-wrap"
                    >
                      <span class="pe-2">Rejoindre un projet </span>

                      <span
                        class="fs-7 text-danger d-flex align-items-center"
                        v-if="invitation.team.project"
                      >
                        <span class="bullet bullet-dot bg-danger me-2"></span>

                        {{ invitation?.team.project.type }}
                      </span>
                    </div>
                    <!--end::Info-->
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Row-->

                <!--begin::Row-->
                <div class="row g-5 mb-12">
                  <!--end::Col-->
                  <div class="col-sm-6">
                    <!--end::Label-->
                    <div class="fw-semibold fs-7 text-gray-600 mb-1">
                      Destinataire:
                    </div>
                    <!--end::Label-->

                    <!--end::Text-->
                    <div class="fw-bold fs-6 text-gray-800">
                      {{ invitation.email }}
                    </div>
                    <!--end::Text-->

                    <!--end::Description-->

                    <!--end::Description-->
                  </div>
                  <!--end::Col-->

                  <!--end::Col-->
                  <div class="col-sm-6">
                    <!--end::Label-->
                    <div class="fw-semibold fs-7 text-gray-600 mb-1">
                      Expéditeur /Expéditrice:
                    </div>
                    <!--end::Label-->

                    <!--end::Text-->
                    <div class="fw-bold fs-6 text-gray-800">
                      {{ invitation.sender?.fullname }}
                    </div>
                    <!--end::Text-->
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Row-->

                <!--begin::Content-->
                <div class="flex-grow-1">
                  <!--begin::Form-->
                  <VForm
                    class="form"
                    id="kt_form_new_account_guest_form"
                    @submit="submit"
                    :validation-schema="validationSchema"
                    v-slot="{ errors }"
                  >
                    <!--begin::form header-->
                    <div
                      class="modal-header"
                      id="kt_form_new_account_guest_header"
                    >
                      <!--begin::form title-->
                      <h4>Remplir les informations</h4>
                      <!--end::form title-->
                    </div>
                    <!--end::form header-->

                    <!--begin::form body-->
                    <div class="modal-body py-10 px-lg-17">
                      <!--begin::Scroll-->
                      <div
                        class="scroll-y me-n7 pe-7"
                        id="kt_form_new_account_guest_scroll"
                        data-kt-scroll="true"
                        data-kt-scroll-activate="{default: false, lg: true}"
                        data-kt-scroll-max-height="auto"
                        data-kt-scroll-dependencies="#kt_form_new_account_guest_header"
                        data-kt-scroll-wrappers="#kt_form_new_account_guest_scroll"
                        data-kt-scroll-offset="300px"
                      >
                        <!--begin::Input group-->
                        <div class="row mb-5">
                          <!--begin::Col-->
                          <div class="col-md-6 fv-row">
                            <!--begin::Label-->
                            <label class="required fs-5 fw-semobold mb-2"
                              >Prénom</label
                            >
                            <!--end::Label-->

                            <!--begin::Input-->
                            <Field
                              type="text"
                              class="form-control"
                              :class="errors.prenom ? 'is-invalid' : ''"
                              placeholder=""
                              name="prenom"
                              v-model="newGuestAccountData.prenom"
                            />
                            <ErrorMessage
                              class="invalid-feedback"
                              name="prenom"
                            />
                            <!--end::Input-->
                          </div>
                          <!--end::Col-->

                          <!--begin::Col-->
                          <div class="col-md-6 fv-row">
                            <!--end::Label-->
                            <label class="required fs-5 fw-semobold mb-2"
                              >Nom</label
                            >
                            <!--end::Label-->

                            <!--end::Input-->
                            <Field
                              type="text"
                              class="form-control"
                              :class="errors.nom ? 'is-invalid' : ''"
                              placeholder=""
                              name="nom"
                              v-model="newGuestAccountData.nom"
                            />
                            <ErrorMessage class="invalid-feedback" name="nom" />
                            <!--end::Input-->
                          </div>
                          <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="d-flex flex-column mb-5 fv-row">
                          <!--begin::Label-->
                          <label class="required fs-5 fw-semobold mb-2"
                            >Profession</label
                          >
                          <!--end::Label-->

                          <!--begin::Input-->
                          <Field
                            class="form-control"
                            :class="errors.profession ? 'is-invalid' : ''"
                            placeholder=""
                            name="profession"
                            v-model="newGuestAccountData.profession"
                          />
                          <ErrorMessage
                            class="invalid-feedback"
                            name="profession"
                          />
                          <!--end::Input-->
                        </div>
                        <!--end::Input group-->

                        <!--begin::Input group-->
                        <div class="d-flex flex-column mb-5 fv-row">
                          <!--begin::Label-->
                          <label
                            class="d-flex align-items-center fs-5 fw-semobold mb-2"
                          >
                            <span class="required"
                              >Etablisement / Entreprise</span
                            >
                          </label>
                          <!--end::Label-->

                          <!--begin::Select-->
                          <Field
                            class="form-control"
                            :class="errors.etablisement ? 'is-invalid' : ''"
                            placeholder=""
                            name="etablisement"
                            v-model="newGuestAccountData.etablisement"
                          />
                          <ErrorMessage
                            class="invalid-feedback"
                            name="etablisement"
                          />
                          <!--end::Select-->
                        </div>
                        <!--end::Input group-->

                        <!--begin::Input group-->
                        <div class="d-flex flex-column mb-5 fv-row">
                          <!--begin::Label-->
                          <label class="required fs-5 fw-semobold mb-2"
                            >Addresse</label
                          >
                          <!--end::Label-->

                          <!--begin::Input-->
                          <Field
                            class="form-control"
                            :class="errors.address1 ? 'is-invalid' : ''"
                            placeholder=""
                            name="address1"
                            v-model="newGuestAccountData.address1"
                          />
                          <ErrorMessage
                            class="invalid-feedback"
                            name="address1"
                          />
                          <!--end::Input-->
                        </div>
                        <!--end::Input group-->

                        <!--begin::Input group-->
                        <div class="d-flex flex-column mb-5 fv-row">
                          <!--begin::Label-->
                          <label class="fs-5 fw-semobold mb-2">Ville</label>
                          <!--end::Label-->

                          <!--begin::Input-->
                          <Field
                            class="form-control"
                            :class="errors.ville ? 'is-invalid' : ''"
                            placeholder=""
                            name="ville"
                            v-model="newGuestAccountData.ville"
                          />
                          <ErrorMessage class="invalid-feedback" name="ville" />
                          <!--end::Input-->
                        </div>
                        <!--end::Input group-->

                        <!--begin::Input group-->
                        <div class="row g-9 mb-5">
                          <!--begin::Col-->
                          <div class="col-md-6 fv-row">
                            <!--begin::Label-->
                            <label class="fs-5 fw-semobold mb-2">Cite</label>
                            <!--end::Label-->

                            <!--begin::Input-->
                            <Field
                              class="form-control"
                              :class="errors.cite ? 'is-invalid' : ''"
                              placeholder=""
                              name="cite"
                              v-model="newGuestAccountData.cite"
                            />
                            <ErrorMessage
                              class="invalid-feedback"
                              name="cite"
                            />
                            <!--end::Input-->
                          </div>
                          <!--end::Col-->

                          <!--begin::Col-->
                          <div class="col-md-6 fv-row">
                            <!--begin::Label-->
                            <label class="fs-5 fw-semobold mb-2"
                              >Code postal</label
                            >
                            <!--end::Label-->

                            <!--begin::Input-->
                            <Field
                              class="form-control"
                              :class="errors.codepostal ? 'is-invalid' : ''"
                              placeholder=""
                              name="codepostal"
                              v-model="newGuestAccountData.codepostal"
                            />
                            <ErrorMessage
                              class="invalid-feedback"
                              name="codepostal"
                            />
                            <!--end::Input-->
                          </div>
                          <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                      </div>
                      <!--end::Scroll-->
                    </div>
                    <!--end::form body-->

                    <!--begin::form footer-->
                    <div class="modal-footer flex-center">
                      <!--begin::Button-->
                      <button
                        type="reset"
                        id="kt_form_new_account_guest_cancel"
                        class="btn btn-light me-3"
                      >
                        Discard
                      </button>
                      <!--end::Button-->

                      <!--begin::Button-->
                      <button
                        :data-kt-indicator="loading ? 'on' : null"
                        ref="submitButtonRef"
                        type="submit"
                        id="kt_form_new_account_guest_submit"
                        class="btn btn-primary"
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
                    <!--end::form footer-->
                  </VForm>
                  <!--end::Form-->
                </div>
                <!--end::Content-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Invoice 2 content-->
          </div>
          <!--end::Content-->

          <!--begin::Sidebar-->
          <div class="m-0">
            <!--begin::Invoice 2 sidebar-->
            <div
              class="d-print-none border border-dashed border-gray-300 card-rounded h-lg-100 min-w-md-350px p-9 bg-lighten"
            >
              <!--begin::Labels-->
              <div class="mb-8">
                <span
                  :class="
                    getStatusColorClass(
                      invitation.team?.project?.project_status
                    )
                  "
                  class="badge me"
                  >{{
                    capitalizeFirstLetter(
                      invitation.team?.project?.project_status
                    )
                  }}</span
                >
              </div>
              <!--end::Labels-->

              <!--begin::Title-->
              <h6
                class="mb-8 fw-bolder text-gray-600 text-hover-primary text-uppercase"
              >
                porteur de projet DETAILS
              </h6>
              <!--end::Title-->

              <!--begin::Item-->
              <div class="mb-6">
                <div class="fw-semibold text-gray-600 fs-7">Nom et prénom:</div>

                <div
                  class="fw-bold text-gray-800 fs-6"
                  v-if="invitation.sender"
                >
                  {{ invitation.sender.fullname }}
                </div>
              </div>
              <!--end::Item-->

              <!--begin::Title-->
              <h6 class="mb-8 fw-bolder text-gray-600 text-hover-primary">
                APERÇU DU PROJET
              </h6>
              <!--end::Title-->

              <!--begin::Item-->
              <div class="mb-6">
                <div class="fw-semibold text-gray-600 fs-7">Nom du projet:</div>

                <div class="fw-bold fs-6 text-gray-800">
                  {{ invitation.team?.project.title }}

                  <a href="#" class="link-primary ps-1">View Project</a>
                </div>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="mb-6">
                <div class="fw-semibold text-gray-600 fs-7">
                  Statut du projet:
                </div>

                <span class="badge me">
                  <span class="fw-bold fs-6">
                    {{
                      capitalizeFirstLetter(
                        invitation.team?.project?.project_status
                      )
                    }}</span
                  >
                </span>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="m-0">
                <div class="fw-semibold text-gray-600 fs-7">
                  Date d'échéance:
                </div>

                <div
                  class="fw-bold fs-6 text-gray-800 d-flex align-items-center"
                >
                  {{ formatDate(invitation.team?.project.duedate) }}

                  <span class="fs-7 text-success d-flex align-items-center">
                    <span class="bullet bullet-dot bg-success mx-2"></span>

                    {{
                      daysRemainingFromToday(invitation.team?.project.duedate)
                    }}
                    Jours
                    <span
                      class="badge badge-light-danger mx-2"
                      v-if="hasDatePassed(invitation.team?.project.duedate)"
                      >Expiré</span
                    >
                  </span>
                </div>
              </div>
              <!--end::Item-->
            </div>
            <!--end::Invoice 2 sidebar-->
          </div>
          <!--end::Sidebar-->
        </div>
        <!--end::Layout-->
      </div>
      <!--end::Body-->
    </div>
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getAssetPath } from "@/core/helpers/assets";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {useRoute, useRouter} from "vue-router";
import * as Yup from "yup";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { hideModal } from "@/core/helpers/dom";
import { useAuthStore } from "@/stores/auth";
// Define the nested interfaces first
interface NewGuestAccountData {
  email: string;
  prenom: string;
  nom: string;
  profession: string;
  etablisement: string;
  address1: string;

  ville: string;
  cite: string;
  codepostal: string;
  token:string;
}
interface Project {
  id: number;
  title: string;
  description: string;
  project_avatar: string;
  project_status: string;
  type: string;
  dev_technologie: string;
  duedate: string;
  domaine: string;
  slug: string;
  team_id: string;
  team_size: string;
  user_id: number;
  serviceid: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

interface Team {
  id: number;
  owner_id: number;
  name: string;
  created_at: string;
  updated_at: string;
  project: Project;
  // Add other properties specific to the Team object
}

interface Sender {
  id: number;
  fullname: string;
  photo: string;
  // Add other properties specific to the Sender object
}

interface Invitation {
  id: number;
  user_id: number;
  team_id: number;
  type: string;
  email: string;
  accept_token: string;
  deny_token: string;
  created_at: string;
  updated_at: string;
  team: Team;
  sender: Sender;
}
export default defineComponent({
  name: "invitation-display",
  components: {
    ErrorMessage,
    Field,
    VForm,
  },
  setup() {
    const router = useRouter();
    const store = useAuthStore();
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newGuestAccountformRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const newGuestAccountData = ref<NewGuestAccountData>({
     email:"",
      prenom: "",
      nom: "",
      etablisement: "",
      address1: "",
      profession: "",
      ville: "",
      cite: "",
      codepostal: "",
      token:"",
    });

    const validationSchema = Yup.object().shape({
      prenom: Yup.string().required().label("prénom"),
      nom: Yup.string().required().label("nom"),
      profession: Yup.string().required().label("profession"),
      etablisement: Yup.string().required().label("etablisement"),
      address1: Yup.string().required().label("Address Line 1"),

      ville: Yup.string().required().label("Ville"),
      cite: Yup.string().required().label("cite"),
      codepostal: Yup.string().required().label("Code postal"),
    });

    const submit = async () => {
      if (!submitButtonRef.value) {
        return;
      }
      loading.value = true;
      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator


      try {
        loading.value = true;
        const response = await store.CreateGuestAccount(
          newGuestAccountData.value
        );
        // Do something with the successful response, if needed
        console.log("Guest Account created successfully:", response);
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
          if (submitButtonRef.value) {
            submitButtonRef.value.disabled = false;

          }
          router.push({ name: "sign-in" });
        });
      } catch (error) {
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
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }
      }
    };

    const invitation = ref<Invitation[]>([]);
    const route = useRoute();
    const getInvitation = async () => {
      try {
        const response = await ApiService.get(
          "invitation/" + route.params.token
        );
        invitation.value = response.data.data;
        if (invitation.value){
          newGuestAccountData.value.email = invitation.value["email"];
          newGuestAccountData.value.token = route.params.token as string  ;
        }
        console.log("invitation:", invitation.value);
      } catch (error) {
        if (typeof error === "object" && error !== null) {
          Swal.fire({
            text: error["response"]["data"]["errors"][0] as string,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Try again!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-danger",
            },
          });
        }
        // Handle the error as needed
      }
    };
    function formatDate(date) {
      if (date) {
        return new Date(date).toLocaleDateString();
      } else {
        return "Inconnu";
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
    function capitalizeFirstLetter(str: string): string {
      if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      } else {
        return "non défini";
      }
    }
    // Function to check if a date has passed (is in the past)
    // Function to check if a date has passed (is in the past)
    function hasDatePassed(val: Date): boolean {
      const today = new Date();
      const date = new Date(val);
      return date.getTime() < today.getTime();
    }
    function getDifferenceInDays(date1: Date, date2: Date): number {
      const timeDiff = date1.getTime() - date2.getTime();
      const dayDiff = timeDiff / (1000 * 3600 * 24);
      return Math.ceil(dayDiff);
    }
    function daysRemainingFromToday(dueDate: Date): number {
      const today = new Date();
      const dueDateObject = new Date(dueDate);

      // To get the difference in days, call the getDifferenceInDays function
      return getDifferenceInDays(dueDateObject, today);
    }
    onMounted(async () => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      await getInvitation();
      // Disable loading indicator
      document.body.classList.remove("page-loading");
      document.body.removeAttribute("data-kt-app-page-loading");
    });
    return {
      newGuestAccountData,
      validationSchema,
      submit,
      submitButtonRef,
      newGuestAccountformRef,
      getAssetPath,
      invitation,
      formatDate,
      getStatusColorClass,
      capitalizeFirstLetter,
      daysRemainingFromToday,
      hasDatePassed,
      loading,
    };
  },
});
</script>
