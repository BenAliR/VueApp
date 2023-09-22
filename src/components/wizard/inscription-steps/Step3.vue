<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-12">
      <!--begin::Title-->
      <h2 class="fw-bold text-dark">Informations principales</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-semobold fs-6">
        Si vous avez besoin de plus d'informations, veuillez consulter
        <a href="#" class="link-primary fw-bold">Page d'aide</a>.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->
    <!--begin::Input group-->
    <div class="fv-row mb-5">
      <!--begin::Label-->
      <label class="fs-6 fw-semobold form-label required">Email</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="email"
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
        type="number"
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
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { ErrorMessage, Field } from "vee-validate";

export default defineComponent({
  name: "step-3",
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
