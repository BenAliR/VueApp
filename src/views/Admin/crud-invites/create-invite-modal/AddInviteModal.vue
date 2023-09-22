<template>
  <div
    class="modal fade"
    id="kt_modal_add_new_invite"
    ref="addNewInviteModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_new_invite_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Add a NewInvite</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_new_invite_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form
          @submit.prevent="submit()"
          :model="formData"
          :rules="rules"
          ref="formRef"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_add_new_invite_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_new_invite_header"
              data-kt-scroll-wrappers="#kt_modal_add_new_invite_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="fv-row mb-5">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Prenom</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="prenom">
                  <el-input
                    v-model="formData.prenom"
                    type="text"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-5">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Nom</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="nom">
                  <el-input v-model="formData.nom" type="text" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-5">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Email</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="L'adresse e-mail doit être active"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="email">
                  <el-input v-model="formData.email" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Billing toggle-->
              <div
                class="fw-bold fs-3 rotate collapsible mb-5"
                data-bs-toggle="collapse"
                href="#kt_modal_add_new_invite_billing_info"
                role="button"
                aria-expanded="false"
                aria-controls="kt_new_invite_view_details"
              >
                Informations du compte
                <span class="ms-2 rotate-180">
                  <KTIcon icon-name="down" icon-class="fs-3" />
                </span>
              </div>
              <!--end::Billing toggle-->

              <!--begin::Billing form-->
              <div
                id="kt_modal_add_new_invite_billing_info"
                class="collapse show"
              >
                <!--begin::Input group-->
                <div class="d-flex flex-column mb-5 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2">Adresse</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="address1">
                    <el-input v-model="formData.address1" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="d-flex flex-column mb-5 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Etablissement</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="etablissement">
                    <el-input v-model="formData.etablissement" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="d-flex flex-column mb-5 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Profession</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="profession">
                    <el-input v-model="formData.profession" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="d-flex flex-column mb-5 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2">Ville</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="ville">
                    <el-input v-model="formData.ville" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row g-9 mb-5">
                  <!--begin::Col-->
                  <div class="col-md-6 fv-row">
                    <!--begin::Label-->
                    <label class="required fs-6 fw-semobold mb-2">Cite</label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <el-form-item prop="cite">
                      <el-input v-model="formData.cite" />
                    </el-form-item>
                    <!--end::Input-->
                  </div>
                  <!--end::Col-->

                  <!--begin::Col-->
                  <div class="col-md-6 fv-row">
                    <!--begin::Label-->
                    <label class="required fs-6 fw-semobold mb-2"
                      >Code Postal</label
                    >
                    <!--end::Label-->

                    <!--begin::Input-->
                    <el-form-item prop="codepostal">
                      <el-input v-model="formData.codepostal" />
                    </el-form-item>
                    <!--end::Input-->
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
              </div>
              <!--end::Billing form-->
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              type="reset"
              id="kt_modal_add_new_invite_cancel"
              class="btn btn-light me-3"
            >
              Annuler
            </button>

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
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { countries } from "@/core/data/countries";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useInviteStore } from "@/stores/invites";
import * as Yup from "yup";
export default defineComponent({
  name: "add-new_invite-modal",
  components: {},
  emits: ["after-hide"],
  setup(props, { emit }) {
    const store = useInviteStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const addNewInviteModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref({
      prenom: "",
      email: "",
      nom: "",
      etablissement: "",
      address1: "",
      profession: "",
      ville: "",
      cite: "",
      codepostal: "",
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
      profession: [
        {
          required: true,
          message: "profession est requis",
          trigger: "change",
        },
      ],
      etablissement: [
        {
          required: true,
          message: "etablissement est requis",
          trigger: "change",
        },
      ],
      address1: [
        {
          required: true,
          message: "adresse est requis",
          trigger: "change",
        },
      ],

      ville: [
        {
          required: true,
          message: "ville est requis",
          trigger: "change",
        },
      ],
      cite: [
        {
          required: true,
          message: "cite est requis",
          trigger: "change",
        },
      ],
      codepostal: [
        {
          required: true,
          message: "code postal est requis",
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
            const response = await store.CreateInvite(formData.value);
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
              hideModal(addNewInviteModalRef.value);
              emit("after-hide");
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
          }
        }
      });

      // ... (rest of the submit function)
    }

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addNewInviteModalRef,
      getAssetPath,
      countries,
    };
  },
});
</script>
