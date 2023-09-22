<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bold text-dark">Informations de compte</h2>
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
        <label class="required fs-5 fw-semobold mb-2"> Prénom</label>
        <!--end::Label-->

        <!--end::Input-->
        <Field
          type="text"
          class="form-control"
          placeholder=""
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
      <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
        <span class="required">Pays</span>
      </label>
      <!--end::Label-->

      <!--begin::Select-->
      <Field name="country" class="form-select" as="select">
        <option value="">Choisissez un pays...</option>
        <option
          v-for="(item, i) in countries"
          :key="`countries-select-option-${i}`"
          :value="item.alpha2"
        >
          {{ item.name }}
        </option>
      </Field>
      <ErrorMessage
        name=" "
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Select-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="d-flex flex-column mb-5 fv-row">
      <!--begin::Label-->
      <label class="required fs-5 fw-semobold mb-2">Adresse 1</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field class="form-control" placeholder="" name="adresse" />
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
      <Field class="form-control" placeholder="" name="address2" />

      <!--end::Input-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="d-flex flex-column mb-5 fv-row">
      <!--begin::Label-->
      <label class="required fs-5 fw-semobold mb-2">Ville</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field class="form-control" placeholder="" name="ville" />
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
        <Field class="form-control" placeholder="" name="cite" />
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
        <label class="required fs-5 fw-semobold mb-2">Code postal</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field class="form-control" placeholder="" name="codepostal" />
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
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { ErrorMessage, Field } from "vee-validate";
import { countries } from "@/core/data/countriesFr";

export default defineComponent({
  name: "step-2-inscription",
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    return {
      getAssetPath,
      countries,
    };
  },
});
</script>
