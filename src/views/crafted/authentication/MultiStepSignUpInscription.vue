<template>
  <!--begin::Authentication - Multi-steps-->
  <div
    class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep first"
    ref="wizardRef"
    id="kt_create_account_stepper"
  >
    <!--begin::Aside-->
    <div class="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">
      <div
        class="d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center"
        :style="`background-image: url(${getAssetPath(
          '/media/misc/auth-bg.png'
        )})`"
      >
        <!--begin::Header-->
        <div class="d-flex flex-center py-10 py-lg-20 mt-lg-20">
          <!--begin::Logo-->
          <router-link to="/">
            <img
              alt="Logo"
              :src="getAssetPath('media/logos/custom-1.png')"
              class="h-70px"
            />
          </router-link>
          <!--end::Logo-->
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div class="d-flex flex-row-fluid justify-content-center p-10">
          <!--begin::Nav-->
          <div class="stepper-nav">
            <!--begin::Step 1-->
            <div class="stepper-item current" data-kt-stepper-element="nav">
              <!--begin::Wrapper-->
              <div class="stepper-wrapper">
                <!--begin::Icon-->
                <div class="stepper-icon rounded-3">
                  <i class="stepper-check fas fa-check"></i>
                  <span class="stepper-number">1</span>
                </div>
                <!--end::Icon-->
                <!--begin::Label-->
                <div class="stepper-label">
                  <h3 class="stepper-title fs-2">Établissement</h3>
                  <div class="stepper-desc fw-normal">
                    Sélectionnez votre Établissement
                  </div>
                </div>
                <!--end::Label-->
              </div>
              <!--end::Wrapper-->
              <!--begin::Line-->
              <div class="stepper-line h-40px"></div>
              <!--end::Line-->
            </div>
            <!--end::Step 1-->
            <!--begin::Step 2-->
            <div class="stepper-item pending" data-kt-stepper-element="nav">
              <!--begin::Wrapper-->
              <div class="stepper-wrapper">
                <!--begin::Icon-->
                <div class="stepper-icon rounded-3">
                  <i class="stepper-check fas fa-check"></i>
                  <span class="stepper-number">2</span>
                </div>
                <!--end::Icon-->
                <!--begin::Label-->
                <div class="stepper-label">
                  <h3 class="stepper-title fs-2">Paramètres du compte</h3>
                  <div class="stepper-desc fw-normal">
                    Configurez les paramètres de votre compte
                  </div>
                </div>
                <!--end::Label-->
              </div>
              <!--end::Wrapper-->
              <!--begin::Line-->
              <div class="stepper-line h-40px"></div>
              <!--end::Line-->
            </div>
            <!--end::Step 2-->
            <!--begin::Step 3-->
            <div class="stepper-item pending" data-kt-stepper-element="nav">
              <!--begin::Wrapper-->
              <div class="stepper-wrapper">
                <!--begin::Icon-->
                <div class="stepper-icon">
                  <i class="stepper-check fas fa-check"></i>
                  <span class="stepper-number">3</span>
                </div>
                <!--end::Icon-->
                <!--begin::Label-->
                <div class="stepper-label">
                  <h3 class="stepper-title fs-2">Informations principales</h3>
                  <div class="stepper-desc fw-normal">
                    Configurez les détails de votre compte
                  </div>
                </div>
                <!--end::Label-->
              </div>
              <!--end::Wrapper-->
              <!--begin::Line-->
              <div class="stepper-line h-40px"></div>
              <!--end::Line-->
            </div>
            <!--end::Step 3-->
            <!--begin::Step 4-->
            <div class="stepper-item pending" data-kt-stepper-element="nav">
              <!--begin::Wrapper-->
              <div class="stepper-wrapper">
                <!--begin::Icon-->
                <div class="stepper-icon">
                  <i class="stepper-check fas fa-check"></i>
                  <span class="stepper-number">4</span>
                </div>
                <!--end::Icon-->
                <!--begin::Label-->
                <div class="stepper-label">
                  <h3 class="stepper-title">Complété</h3>
                  <div class="stepper-desc fw-normal">
                    Votre compte est crée
                  </div>
                </div>
                <!--end::Label-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Step 4-->
          </div>
          <!--end::Nav-->
        </div>
        <!--end::Body-->
        <!--begin::Footer-->
        <div class="d-flex flex-center flex-wrap px-5 py-10">
          <!--begin::Links-->
          <div class="d-flex fw-normal">
            <a
              href="https://keenthemes.com"
              class="text-success px-5"
              target="_blank"
              >Terms</a
            >
            <a
              href="https://devs.keenthemes.com"
              class="text-success px-5"
              target="_blank"
              >Plans</a
            >
            <a
              href="https://1.envato.market/EA4JP"
              class="text-success px-5"
              target="_blank"
              >Contact Us</a
            >
          </div>
          <!--end::Links-->
        </div>
        <!--end::Footer-->
      </div>
    </div>
    <!--begin::Aside-->

    <!--begin::Body-->
    <div class="d-flex flex-column flex-lg-row-fluid py-10">
      <!--begin::Content-->
      <div class="d-flex flex-center flex-column flex-column-fluid">
        <!--begin::Wrapper-->
        <div class="w-lg-700px p-10 p-lg-15 mx-auto">
          <!--begin::Form-->
          <form
            enctype="multipart/form-data"
            class="my-auto pb-5"
            novalidate
            id="kt_create_account_form"
            @submit="handleStep"
          >
            <!--begin::Step 1-->
            <div class="current" data-kt-stepper-element="content">
              <!--begin::Wrapper-->
              <div class="w-100">
                <!--begin::Heading-->
                <div class="pb-10 pb-lg-15">
                  <!--begin::Title-->
                  <h2 class="fw-bold d-flex align-items-center text-dark">
                    Choisissez votre établissement
                    <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      v-tooltip
                      title="le nom et le type de votre établissement"
                    ></i>
                  </h2>
                  <!--end::Title-->

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
                        id="kt_create_account_form_account_type_personal"
                      />
                      <label
                        class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10"
                        for="kt_create_account_form_account_type_personal"
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
                        id="kt_create_account_form_account_type_corporate"
                      />
                      <label
                        class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center"
                        for="kt_create_account_form_account_type_corporate"
                      >
                        <KTIcon icon-name="briefcase" icon-class="fs-3x me-5" />

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
                  <h2 class="fw-bold text-dark">Informations de compte</h2>
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
                    <label class="required fs-5 fw-semobold mb-2"> Cité</label>
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
                  <h2 class="fw-bold text-dark">Informations principales</h2>
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
                  <h2 class="fw-bold text-dark">Télécharger des fichiers</h2>
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
                    <!--begin::Input group-->
                    <div class="form-group">
                      <!--begin::Dropzone-->
                      <div class="dropzone dropzone-queue mb-2">
                        <!--begin::Controls-->

                        <div class="dropzone-panel mb-4">
                          <div
                            class="dropzone"
                            v-on:click="openFileSelection"
                            v-on:dragover="onDragOver"
                            v-on:dragleave="onDragLeave"
                            v-on:drop="onDrop"
                            v-bind:class="{ disabled: !enabled }"
                          >
                            <input
                              ref="fileInput"
                              class="file-input"
                              type="file"
                              accept="image/*"
                              name="images[]"
                              multiple
                              v-on:change="handleFileUpload"
                            />
                          </div>

                          <div class="dropzone-panel mb-4">
                            <a
                              v-if="images.length"
                              @click="clearFileList"
                              class="dropzone-select mt-2 btn btn-sm btn-primary me-2"
                              >Supprimer tout</a
                            >
                          </div>
                        </div>
                        <!--end::Controls-->
                        <!--begin::Items-->
                        <div
                          class="dropzone-items wm-200px"
                          v-for="(item, index) in images"
                          :key="item.id"
                        >
                          <div class="dropzone-item p-5">
                            <!--begin::File-->
                            <div class="dropzone-file">
                              <div
                                class="dropzone-filename text-dark"
                                title="some_image_file_name.jpg"
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
                            <!--end::File-->
                            <!--begin::Toolbar-->
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
                            <!--end::Toolbar-->
                          </div>
                        </div>
                        <!--end::Items-->
                      </div>
                      <!--end::Dropzone-->
                      <!--begin::Hint-->
                      <span class="form-text fs-6 text-muted"
                        >La taille maximale du fichier est de 15 Mo par
                        fichier.</span
                      >
                      <!--end::Hint-->
                    </div>
                    <!--end::Input group-->
                  </div>
                  <!--end::Modal body-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-stack">
                    <!--begin::Label-->
                    <div class="me-5">
                      <label class="fs-6 fw-semobold form-label"
                        >Conditions générales</label
                      >
                      <div class="fs-7 fw-semobold text-gray-400">
                        Si vous avez besoin de plus d'informations, veuillez
                        consulter ce lien
                      </div>
                    </div>
                    <!--end::Label-->

                    <!--begin::Switch-->
                    <label
                      class="form-check form-switch form-check-custom form-check-solid"
                    >
                      <Field
                        type="checkbox"
                        class="form-check-input"
                        name="agreed"
                      />
                      <span class="form-check-label fw-semobold text-gray-400">
                        Accepter
                      </span>
                    </label>
                    <!--end::Switch-->
                  </div>
                  <!--end::Input group-->
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
                  <KTIcon icon-name="arrow-right" icon-class="fs-4 ms-1 me-0" />
                </button>
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Actions-->
          </form>
          <!--end::Form-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Content-->

      <!--begin::Footer-->
      <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
        <!--begin::Links-->
        <div class="d-flex flex-center fw-semobold fs-6">
          <a href="#" class="text-muted text-hover-primary px-2" target="_blank"
            >About</a
          >

          <a href="#" class="text-muted text-hover-primary px-2" target="_blank"
            >Support</a
          >

          <a href="#" class="text-muted text-hover-primary px-2" target="_blank"
            >Purchase</a
          >
        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Authentication - Multi-steps-->
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import LayoutService from "@/core/services/LayoutService";
import { StepperComponent } from "@/assets/ts/components";
import * as Yup from "yup";
import { useForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useBodyStore } from "@/stores/body";
import { array } from "yup";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { ErrorMessage, Field } from "vee-validate";
import { countries } from "@/core/data/countriesFr";
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
interface CreateAccount extends IStep1, IStep2, IStep3, IStep4 {}

export default defineComponent({
  name: "multi-step-sign-up-2",
  components: {
    Field,
    ErrorMessage,
    // Step1,
    // Step2,
    // Step3,
    // Step4,
  },
  setup() {
    const uploadFiles = ref<File[]>([]);
    const loading = ref<boolean>(false);
    const enabled = ref(false);
    const selectedTypePrive = ref("Privé");
    const selectedTypePublique = ref("Publique");
    const fileData = new FormData();
    const store = useBodyStore();
    const storeInsc = useAuthStore();
    const router = useRouter();
    const _stepperObj = ref<StepperComponent | null>(null);
    const wizardRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);

    const Dataform = ref<CreateAccount>({
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
        wizardRef.value as HTMLElement
      );
      LayoutService.emptyElementClassesAndAttributes(document.body);

      store.addBodyClassname("app-blank");
      store.addBodyClassname("bg-body");

      changeRadioValue("Privé");
    });

    const createAccountSchema = [
      Yup.object({
        etablisement: Yup.string().required().label("Nom d'établissement"),
      }),
      Yup.object({
        nom: Yup.string().required().label("Nom"),
        prenom: Yup.string().required().label("Prénom"),
        country: Yup.string().required().label("Pays"),
        adresse: Yup.string().required().label("Address1"),
        ville: Yup.string().required().label("Ville"),
        cite: Yup.string().required().label("Cité"),
        codepostal: Yup.string().required().label("Code postal"),
      }),
      Yup.object({
        email: Yup.string()
          .required()
          .label("Email")
          .email("Invalid email format"),
        telephone: Yup.string().required().label("Numéro de téléphone"),
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
      return createAccountSchema[currentStepIndex.value];
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
        loading.value = true;
        //Send inscription request
        await storeInsc.inscription(fileData);
        const error = Object.values(storeInsc.errors);

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
            loading.value = true;
            // Go to page after successfully login
            router.push({ name: "sign-in" });
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
          loading.value = true;
        }
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
      console.log("value", value);
      Dataform.value.typeecole = value;
      console.log("Dataform.value.typeecole", Dataform.value.typeecole);
    };
    const openFileSelection = () => {
      const fileInput = document.getElementById("fileInput");
      if (fileInput) {
        fileInput.click();
      }
    };
    return {
      wizardRef,
      Dataform,
      handleNextStep,
      previousStep,
      handleStep,
      formSubmit,
      totalSteps,
      currentStepIndex,
      getIllustrationsPath,
      getAssetPath,
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
      loading,
    };
  },
});
</script>
