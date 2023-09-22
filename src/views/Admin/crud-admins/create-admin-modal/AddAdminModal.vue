<template>
  <div
    class="modal fade"
    id="kt_modal_add_admin"
    ref="addAdminModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_admin_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Ajouter un administrateur</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_admin_close"
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
              id="kt_modal_add_admin_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_admin_header"
              data-kt-scroll-wrappers="#kt_modal_add_admin_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="fv-row mb-7">
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
              <div class="fv-row mb-15">
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
              <div class="fv-row mb-7">
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
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              type="reset"
              id="kt_modal_add_admin_cancel"
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
              <span v-if="!loading" class="indicator-label">
                Sauvegarder

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
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useAdminStore } from "@/stores/admin";

export default defineComponent({
  name: "add-admin-modal",
  components: {},
  emits: ["after-hide"],
  setup(props, { emit }) {
    const store = useAdminStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const addAdminModalRef = ref<null | HTMLElement>(null);
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

      formRef.value.validate( async (valid: boolean) => {
        if (valid) {

          try {
            loading.value = true;
            const response = await store.CreateAdmin(formData.value);
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
              hideModal(addAdminModalRef.value);
              emit("after-hide");
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

        }
      })

      // ... (rest of the submit function)
    }

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addAdminModalRef,
      getAssetPath,
    };
  },
});
</script>
