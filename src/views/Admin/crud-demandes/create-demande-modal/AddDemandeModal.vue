<template>
  <!--begin::Modal - Create Demande-->
  <div
    class="modal fade"
    id="kt_modal_add_demande"
    ref="addDemandeModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Title-->
          <h2>Create Demande</h2>
          <!--end::Title-->

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y m-5">
          <!--begin::Stepper-->
          <div
            ref="demandeRef"
            class="stepper stepper-links d-flex flex-column"
            id="kt_create_demande_stepper"
          >
            <!--begin::Nav-->
            <div class="stepper-nav py-5">
              <!--begin::Step 1-->
              <div class="stepper-item current" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Établissement</h3>
              </div>
              <!--end::Step 1-->

              <!--begin::Step 2-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Paramètres du compte</h3>
              </div>
              <!--end::Step 2-->

              <!--begin::Step 3-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Informations principales</h3>
              </div>
              <!--end::Step 3-->

              <!--begin::Step 4-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">Complété</h3>
              </div>
              <!--end::Step 4-->
            </div>
            <!--end::Nav-->

            <!--begin::Form-->

            <form
              enctype="multipart/form-data"
              class="my-auto pb-5"
              novalidate
              id="kt_create_demande_form"
              @submit="handleStep"
            >
              <!--begin::Step 1-->
              <div class="current" data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-15">
                    <!--begin::Heading-->
                    <div class="pb-10 pb-lg-15">
                      <!--begin::Title-->
                      <h5 class="fw-bold text-dark">
                        Informations de l'établissement
                      </h5>
                      <!--end::Title-->
                      <!--begin::Notice-->
                      <div class="text-gray-400 fw-semobold fs-6">
                        Si vous avez besoin de plus d'informations, veuillez
                        consulter
                        <a href="#" class="link-primary fw-bold">Page d'aide</a
                        >.
                      </div>
                      <!--end::Notice-->
                    </div>
                    <!--end::Heading-->

                    <!--begin::Input group-->
                    <div class="mb-4 fv-row">
                      <!--begin::Label-->
                      <label class="required form-label mb-3"
                        >Nom d'établissement</label
                      >
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        type="text"
                        v-model="Dataform.etablisement"
                        class="form-control"
                        name="etablisement"
                      />
                      <ErrorMessage
                        name="etablisement"
                        class="fv-plugins-message-container invalid-feedback"
                      ></ErrorMessage>
                      <!--end::Input-->
                    </div>
                    <!--end::Input group-->
                  </div>
                  <!--end::Heading-->
                  {{ Dataform.typeecole }}
                  <!--begin::Input group-->
                  <div class="fv-row">
                    <!--begin::Row-->
                    <div class="row">
                      <!--begin::Col-->
                      <div class="col-lg-6">
                        <!--begin::Option-->
                        <Field
                          type="radio"
                          class="btn-check"
                          name="typeecole"
                          label="Privé"
                          :value="selectedTypePrive"
                          @click="changeRadioValue(selectedTypePrive)"
                          id="kt_create_demande_form_demande_type_personal"
                          checked
                        />
                        <label
                          class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10"
                          for="kt_create_demande_form_demande_type_personal"
                        >
                          <KTIcon
                            icon-name="address-book"
                            icon-class="fs-3x me-5"
                          />

                          <!--begin::Info-->
                          <span class="d-block fw-semobold text-start">
                            <span class="text-dark fw-bold d-block fs-4 mb-2">
                              Privé
                            </span>
                            <span class="text-gray-400 fw-semobold fs-6"
                              >Établissement d'enseignement privé</span
                            >
                          </span>
                          <!--end::Info-->
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->

                      <!--begin::Col-->
                      <div class="col-lg-6">
                        <!--begin::Option-->
                        <Field
                          type="radio"
                          class="btn-check"
                          name="typeecole"
                          label="Publique"
                          :value="selectedTypePublique"
                          @click="changeRadioValue(selectedTypePublique)"
                          id="kt_create_demande_form_demande_type_corporate"
                        />
                        <label
                          class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center"
                          for="kt_create_demande_form_demande_type_corporate"
                        >
                          <KTIcon
                            icon-name="briefcase"
                            icon-class="fs-3x me-5"
                          />

                          <!--begin::Info-->
                          <span class="d-block fw-semobold text-start">
                            <span class="text-dark fw-bold d-block fs-4 mb-2"
                              >Publique</span
                            >
                            <span class="text-gray-400 fw-semobold fs-6"
                              >Établissement d'enseignement publique</span
                            >
                          </span>
                          <!--end::Info-->
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Col-->

                      <ErrorMessage
                        name="typeecole"
                        class="fv-plugins-message-container invalid-feedback"
                      ></ErrorMessage>
                    </div>
                    <!--end::Row-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 1-->

              <!--begin::Step 2-->
              <div class="" data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-15">
                    <!--begin::Title-->
                    <h5 class="fw-bold text-dark">Informations de compte</h5>
                    <!--end::Title-->
                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-semobold fs-6">
                      Si vous avez besoin de plus d'informations, veuillez
                      consulter
                      <a href="#" class="link-primary fw-bold">Page d'aide</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->
                  <!--begin::Input group-->
                  <div class="row mb-5">
                    <!--begin::Col-->
                    <div class="col-md-6 fv-row">
                      <!--begin::Label-->
                      <label class="required fs-5 fw-semobold mb-2">Nom</label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        type="text"
                        class="form-control"
                        placeholder=""
                        v-model="Dataform.nom"
                        name="nom"
                      />
                      <ErrorMessage
                        name="nom"
                        class="fv-plugins-message-container invalid-feedback"
                      ></ErrorMessage>
                      <!--end::Input-->
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-md-6 fv-row">
                      <!--end::Label-->
                      <label class="required fs-5 fw-semobold mb-2">
                        Prénom</label
                      >
                      <!--end::Label-->

                      <!--end::Input-->
                      <Field
                        type="text"
                        class="form-control"
                        placeholder=""
                        v-model="Dataform.prenom"
                        name="prenom"
                      />
                      <ErrorMessage
                        name="prenom"
                        class="fv-plugins-message-container invalid-feedback"
                      ></ErrorMessage>
                      <!--end::Input-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-5 fv-row">
                    <!--begin::Label-->
                    <label
                      class="d-flex align-items-center fs-5 fw-semobold mb-2"
                    >
                      <span class="required">Pays</span>
                    </label>
                    <!--end::Label-->

                    <!--begin::Select-->
                    <Field
                      v-model="Dataform.country"
                      name="country"
                      class="form-select"
                      as="select"
                    >
                      <option value="">Choisissez un pays...</option>
                      <option
                        v-for="(item, i) in countries"
                        :key="`countries-select-option-${i}`"
                        :value="item.name"
                      >
                        {{ item.name }}
                      </option>
                    </Field>
                    <ErrorMessage
                      name="country"
                      class="fv-plugins-message-container invalid-feedback"
                    ></ErrorMessage>
                    <!--end::Select-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-5 fv-row">
                    <!--begin::Label-->
                    <label class="required fs-5 fw-semobold mb-2"
                      >Adresse 1</label
                    >
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      v-model="Dataform.adresse"
                      class="form-control"
                      placeholder=""
                      name="adresse"
                    />
                    <ErrorMessage
                      name="adresse"
                      class="fv-plugins-message-container invalid-feedback"
                    ></ErrorMessage>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-5 fv-row">
                    <!--begin::Label-->
                    <label class="fs-5 fw-semobold mb-2">Adresse 2</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      v-model="Dataform.address2"
                      class="form-control"
                      placeholder=""
                      name="address2"
                    />

                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-5 fv-row">
                    <!--begin::Label-->
                    <label class="required fs-5 fw-semobold mb-2">Ville</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      v-model="Dataform.ville"
                      class="form-control"
                      placeholder=""
                      name="ville"
                    />
                    <ErrorMessage
                      name="ville"
                      class="fv-plugins-message-container invalid-feedback"
                    ></ErrorMessage>

                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row g-9 mb-5">
                    <!--begin::Col-->
                    <div class="col-md-6 fv-row">
                      <!--begin::Label-->
                      <label class="required fs-5 fw-semobold mb-2">
                        Cité</label
                      >
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        v-model="Dataform.cite"
                        class="form-control"
                        placeholder=""
                        name="cite"
                      />
                      <ErrorMessage
                        name="cite"
                        class="fv-plugins-message-container invalid-feedback"
                      ></ErrorMessage>
                      <!--end::Input-->
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-md-6 fv-row">
                      <!--begin::Label-->
                      <label class="required fs-5 fw-semobold mb-2"
                        >Code postal</label
                      >
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        v-model="Dataform.codepostal"
                        class="form-control"
                        placeholder=""
                        name="codepostal"
                      />
                      <ErrorMessage
                        name="codepostal"
                        class="fv-plugins-message-container invalid-feedback"
                      ></ErrorMessage>
                      <!--end::Input-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 2-->

              <!--begin::Step 3-->
              <div class="" data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-12">
                    <!--begin::Title-->
                    <h5 class="fw-bold text-dark">Informations principales</h5>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-semobold fs-6">
                      Si vous avez besoin de plus d'informations, veuillez
                      consulter
                      <a href="#" class="link-primary fw-bold">Page d'aide</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->
                  <!--begin::Input group-->
                  <div class="fv-row mb-5">
                    <!--begin::Label-->
                    <label class="fs-6 fw-semobold form-label required"
                      >Email</label
                    >
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="email"
                      v-model="Dataform.email"
                      class="form-control form-control-lg form-control-solid"
                      value="corp@support.com"
                      rules="required|email"
                    />
                    <!--end::Input-->
                    <ErrorMessage
                      name="email"
                      class="fv-plugins-message-container invalid-feedback"
                    ></ErrorMessage>

                    <!--end::Input group-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="fs-6 fw-semobold form-label required"
                      >Numéro Telephone</label
                    >
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      type="tel"
                      v-model="Dataform.telephone"
                      name="telephone"
                      class="form-control form-control-lg form-control-solid"
                    />
                    <!--end::Input-->
                    <ErrorMessage
                      name="telephone"
                      class="fv-plugins-message-container invalid-feedback"
                    ></ErrorMessage>

                    <!--end::Input group-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 3-->

              <!--begin::Step 4-->
              <div class="" data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-15">
                    <!--begin::Title-->
                    <h5 class="fw-bold text-dark">Télécharger des fichiers</h5>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-semobold fs-6">
                      Si vous avez besoin de plus d'informations, veuillez
                      consulter
                      <a href="#" class="link-primary fw-bold">Page d'aide</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <div class="w-100">
                    <!--begin::Modal body-->
                    <div class="pb-5">
                      <!-- Begin Input group -->
                      <div class="form-group">
                        <!-- Begin Dropzone -->
                        <div class="dropzone dropzone-queue mb-2">
                          <!-- Begin Controls -->
                          <div class="dropzone-panel mb-4">
                            <!-- Dropzone element with event listeners and class binding -->
                            <div
                              class="dropzone"
                              @click="openFileSelection"
                              @dragover="onDragOver"
                              @dragleave="onDragLeave"
                              @drop="onDrop"
                              :class="{ disabled: !enabled }"
                            >
                              <input
                                ref="fileInput"
                                class="file-input"
                                type="file"
                                accept="image/*"
                                name="images[]"
                                multiple
                                @change="handleFileUpload"
                              />
                            </div>

                            <!-- Delete all button -->
                            <div class="dropzone-panel mb-4">
                              <a
                                v-if="images.length"
                                @click="clearFileList"
                                class="dropzone-select mt-2 btn btn-sm btn-primary me-2"
                              >
                                Supprimer tout
                              </a>
                            </div>
                          </div>
                          <!-- End Controls -->

                          <!-- Begin Items -->
                          <div
                            class="dropzone-items wm-200px"
                            v-for="(item, index) in images"
                            :key="item.id"
                          >
                            <div class="dropzone-item p-5">
                              <!-- Begin File -->
                              <div class="dropzone-file">
                                <div
                                  class="dropzone-filename text-dark"
                                  :title="item.name"
                                >
                                  <div class="symbol symbol-45px symbol-circle">
                                    <img :src="item.src" :alt="item.name" />
                                  </div>
                                  <span data-dz-name="">{{ item.name }}</span>
                                </div>
                                <div
                                  class="dropzone-error mt-0"
                                  data-dz-errormessage=""
                                ></div>
                              </div>
                              <!-- End File -->

                              <!-- Begin Toolbar -->
                              <div class="dropzone-toolbar">
                                <span
                                  class="dropzone-delete"
                                  @click="removeImage(index)"
                                  data-dz-remove=""
                                >
                                  <i class="ki-duotone ki-cross fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                  </i>
                                </span>
                              </div>
                              <!-- End Toolbar -->
                            </div>
                          </div>
                          <!-- End Items -->
                        </div>
                        <!-- End Dropzone -->

                        <!-- Begin Hint -->
                        <span class="form-text fs-6 text-muted">
                          La taille maximale du fichier est de 15 Mo par
                          fichier.
                        </span>
                        <!-- End Hint -->
                      </div>
                      <!-- End Input group -->
                    </div>
                    <!--end::Modal body-->
                  </div>
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 4-->

              <!--begin::Actions-->
              <div class="d-flex flex-stack pt-15">
                <!--begin::Wrapper-->
                <div class="mr-2">
                  <button
                    type="button"
                    class="btn btn-lg btn-light-primary me-3"
                    data-kt-stepper-action="previous"
                    @click="previousStep"
                  >
                    <KTIcon icon-name="arrow-left" icon-class="fs-4 me-1" />
                    Précédent
                  </button>
                </div>
                <!--end::Wrapper-->

                <!--begin::Wrapper-->
                <div>
                  <button
                    :data-kt-indicator="loading ? 'on' : null"
                    type="button"
                    ref="submitButton"
                    class="btn btn-lg btn-primary me-3"
                    data-kt-stepper-action="submit"
                    v-if="currentStepIndex === totalSteps - 1"
                    @click="formSubmit()"
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

                  <button v-else type="submit" class="btn btn-lg btn-primary">
                    Suivant
                    <KTIcon
                      icon-name="arrow-right"
                      icon-class="fs-4 ms-1 me-0"
                    />
                  </button>
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Actions-->
            </form>

            <!--end::Form-->
          </div>
          <!--end::Stepper-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Create demande-->
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted, computed } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { countries } from "@/core/data/countriesFr";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { ErrorMessage, Field, useForm } from "vee-validate";
import { useStudentStore } from "@/stores/student";
import { StepperComponent } from "@/assets/ts/components";
import * as Yup from "yup";

interface IStep1 {
  etablisement: string;
  typeecole: string;
}

interface IStep2 {
  nom: string;
  prenom: string;
  country: string;
  adresse: string;
  address2: string;
  ville: string;
  cite: string;
  codepostal: string;
}

interface IStep3 {
  email: string;
  telephone: number;
}

interface IStep4 {
  images: File[];
  agreed: number;
}
interface Picture {
  id: number;
  src: string;
  name: string;
}
interface CreateDemande extends IStep1, IStep2, IStep3, IStep4 {}
export default defineComponent({
  name: "add-demande-modal",
  components: {
    Field,
    ErrorMessage,
  },
  emits: ["after-hide"],
  setup(props, { emit }) {
    const uploadFiles = ref<File[]>([]);
    const store = useStudentStore();
    const fileData = new FormData();
    const _stepperObj = ref<StepperComponent | null>(null);
    const demandeRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);
    const enabled = ref(true);
    const selectedTypePrive = ref("Privé");
    const selectedTypePublique = ref("Publique");
    const Dataform = ref<CreateDemande>({
      etablisement: "",
      typeecole: "Privé",
      nom: "",
      prenom: "",
      country: "",
      adresse: "",
      address2: "",
      ville: "",
      cite: "",
      codepostal: "",
      email: "",
      telephone: 123456789,
      images: [],
      agreed: 0,
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        demandeRef.value as HTMLElement
      );
    });
    const createDemandeSchema = [
      Yup.object({
        etablisement: Yup.string()
          .required("Le Nom d'établissement est requis")
          .label("Nom d'établissement"),
      }),
      Yup.object({
        nom: Yup.string().required("Le Nom est requis").label("Nom"),
        prenom: Yup.string().required("Le Prénom est requis").label("Prénom"),
        country: Yup.string().required("Le Pays est requis").label("Pays"),
        adresse: Yup.string()
          .required("L'Adresse est requise")
          .label("Address1"),
        ville: Yup.string().required("La Ville est requise").label("Ville"),
        cite: Yup.string().required("La Cité est requise").label("Cité"),
        codepostal: Yup.string()
          .required("Le Code postal est requis")
          .label("Code postal"),
      }),
      Yup.object({
        email: Yup.string()
          .required("L'Email est requis")
          .email("Format d'email invalide")
          .label("Email"),
        telephone: Yup.string()
          .required("Le Numéro de téléphone est requis")
          .label("Numéro de téléphone"),
      }),

      // Yup.object({
      //   businessName: Yup.string().required().label("Business Name"),
      //   businessDescriptor: Yup.string()
      //     .required()
      //     .label("Shortened Descriptor"),
      //   businessType: Yup.string().required().label("Corporation Type"),
      //   businessEmail: Yup.string().required().label("Contact Email"),
      // }),
      // Yup.object({
      //   nameOnCard: Yup.string().required().label("Name On Card"),
      //   cardNumber: Yup.string().required().label("Card Number"),
      //   cardExpiryMonth: Yup.string().required().label("Expiration Month"),
      //   cardExpiryYear: Yup.string().required().label("Expiration Year"),
      //   cardCvv: Yup.string().required().label("CVV"),
      // }),
    ];

    const currentSchema = computed(() => {
      return createDemandeSchema[currentStepIndex.value];
    });

    const { resetForm, handleSubmit } = useForm<
      IStep1 | IStep2 | IStep3 | IStep4
    >({
      validationSchema: currentSchema,
    });

    const totalSteps = computed(() => {
      if (_stepperObj.value) {
        return _stepperObj.value.totalStepsNumber;
      } else {
        return 0;
      }
    });

    resetForm({
      values: {
        ...Dataform.value,
      },
    });

    const handleStep = handleSubmit((values) => {
      console.log("values", values);
      resetForm({
        values: {
          ...Dataform.value,
        },
      });

      Dataform.value = {
        ...Dataform.value,
        ...values,
      };

      currentStepIndex.value++;

      if (!_stepperObj.value) {
        return;
      }

      _stepperObj.value.goNext();
    });
    const handleNextStep = (event) => {
      console.log("event", event);
      Dataform.value.images = event.images;
    };
    const previousStep = () => {
      if (!_stepperObj.value) {
        return;
      }

      currentStepIndex.value--;

      _stepperObj.value.goPrev();
    };
    const images = ref<Picture[]>([]);
    const successfullUploaded = ref(false);
    const clearFileList = () => {
      images.value = [];
      successfullUploaded.value = false;
    };
    const handleFileUpload = (event: Event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files) {
        if (files.length > 4) {
          Swal.fire({
            text: "Désolé, deux photos d'identité,deux photos carte universitaire nécessaires, veuillez réessayer.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "D'accord, j'ai compris !",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(() => {
            images.value.splice(4, images.value.length - 4);
            uploadFiles.value.splice(4, uploadFiles.value.length - 4);
          });
        }
        const target = event.target as HTMLInputElement;
        if (target.files) {
          uploadFiles.value = Array.from(target.files);
          console.log(" uploadFiles.value:", uploadFiles.value);
        }
        for (let j = 1, i = 0; i < files.length; i++, j++) {
          const file = files[i];
          const reader = new FileReader();
          Dataform.value.images.push(files[i]);

          reader.onload = (e: ProgressEvent<FileReader>) => {
            const picture: Picture = {
              id: i + 1,
              src: e.target?.result as string,
              name: file.name,
            };

            images.value.push(picture);
          };
          reader.readAsDataURL(file);
          fileData.append("image" + j, file);
        }
      }
    };
    const removeImage = (index: number) => {
      images.value.splice(index, 1);
      uploadFiles.value.splice(index, 1);
    };
    const formSubmit = async () => {
      if (Dataform.value.images.length < 4) {
        Swal.fire({
          text: "Désolé, deux photos d'identité nécessaires, veuillez réessayer.",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "D'accord, j'ai compris !",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }

      if (Dataform.value.images.length === 4) {
        loading.value = true;
        for (const file of uploadFiles.value) {
          fileData.append("file[]", file);

          // Use your preferred method to send the picture data to the server
          // axios.post('/upload', formData);
        }
        fileData.append("etablisement", Dataform.value.etablisement);
        fileData.append("typeecole", Dataform.value.typeecole);
        fileData.append("nom", Dataform.value.nom);
        fileData.append("prenom", Dataform.value.prenom);
        fileData.append("country", Dataform.value.country);
        fileData.append("adresse", Dataform.value.adresse);
        fileData.append("address2", Dataform.value.address2);
        fileData.append("ville", Dataform.value.ville);
        fileData.append("cite", Dataform.value.cite);
        fileData.append("codepostal", Dataform.value.codepostal);
        fileData.append("email", Dataform.value.email);
        fileData.append("telephone", Dataform.value.telephone.toString());
        fileData.append("agreed", Dataform.value.agreed.toString());

        try {
          loading.value = true;
          const response = await store.CreateDemande(fileData);
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
            hideModal(addDemandeModalRef.value);
            emit("after-hide");
          });
        }
        catch (error) {
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
      }
    };

    const formRef = ref<null | HTMLFormElement>(null);
    const addDemandeModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref({
      prenom: "",
      email: "",
      nom: "",
    });

    const rules = ref({
      prenom: [
        {
          required: true,
          message: "prénom est requis",
          trigger: "change",
        },
      ],
      email: [
        {
          required: true,
          message: "e-mail est requis",
          trigger: "change",
        },
      ],
      nom: [
        {
          required: true,
          message: "nom de famille est requis",
          trigger: "change",
        },
      ],
    });

    async function submit() {
      // ... (rest of the submit function)
      if (!formRef.value) {
        return;
      }

      formRef.value.validate(async (valid: boolean) => {
        if (valid) {
          try {
            loading.value = true;
            const response = await storeAdmin.CreateDemande(formData.value);
            // Do something with the successful response, if needed
            console.log("Demande created successfully:", response);
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
              hideModal(addDemandeModalRef.value);
              emit("after-hide");
            });
          } catch (error) {
            // Handle errors here
            console.error("Error creating Demande:", error);
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
      });

      // ... (rest of the submit function)
    }
    const openFileSelection = () => {
      const fileInput = document.getElementById("fileInput");
      if (fileInput) {
        fileInput.click();
      }
    };

    const onDragOver = (event: DragEvent) => {
      event.preventDefault();
    };

    const onDragLeave = (event: DragEvent) => {
      event.preventDefault();
    };

    const onDrop = (event: DragEvent) => {
      event.preventDefault();
      //  handleFileUpload(event);
    };
    const changeRadioValue = (value) => {
      console.log("value",value);
      Dataform.value.typeecole = value;
      console.log("Dataform.value.typeecole",Dataform.value.typeecole);
    };
    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addDemandeModalRef,
      getAssetPath,
      demandeRef,
      Dataform,
      handleNextStep,
      previousStep,
      handleStep,
      formSubmit,
      totalSteps,
      currentStepIndex,
      getIllustrationsPath,
      countries,
      removeImage,
      clearFileList,
      images,
      handleFileUpload,
      enabled,
      openFileSelection,
      onDragOver,
      onDragLeave,
      onDrop,
      selectedTypePrive,
      selectedTypePublique,
      changeRadioValue,
    };
  },
});
</script>
