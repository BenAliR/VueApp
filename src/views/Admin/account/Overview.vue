<template>
  <!--begin::details View-->
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Détails du profil</h3>
      </div>
      <!--end::Card title-->

      <!--begin::Action-->
      <router-link
        to="/admin/account/settings"
        class="btn btn-primary align-self-center"
        >Editer le profil</router-link
      >
      <!--end::Action-->
    </div>
    <!--begin::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">Nom et prénom</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-dark">
            {{ store.user.nom }} {{ store.user.prenom }}</span
          >
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->




      <!--begin::Input group-->
      <div class="row mb-10">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted"
          >Autoriser les modifications</label
        >
        <!--begin::Label-->

        <!--begin::Label-->
        <div class="col-lg-8">
          <span class="fw-semobold fs-6">Oui</span>
        </div>
        <!--begin::Label-->
      </div>
      <!--end::Input group-->

      <div
        class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
      >
        <KTIcon
          icon-name="information-5"
          icon-class="fs-2tx text-warning me-4"
        />
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack flex-grow-1">
          <!--begin::Content-->
          <div class="fw-semobold">
            <h4 class="text-gray-800 fw-bold">We need your attention!</h4>

            <div class="fs-6 text-gray-600">
              Your payment was declined. To start using tools, please
              <a class="fw-bold" href="#">Add Payment Method</a>.
            </div>
          </div>
          <!--end::Content-->
        </div>
        <!--end::Wrapper-->
      </div>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::details View-->



  <!--begin::Row-->
  <div class="row gy-10 gx-xl-10">
    <!--begin::Col-->
    <div class="col-xl-6">
      <KTListWidget5
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></KTListWidget5>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <KTTableWidget5
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></KTTableWidget5>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import KTListWidget5 from "@/components/widgets/lists/Widget5.vue";
import KTTableWidget5 from "@/components/widgets/tables/Widget5.vue";
import KTListWidget1 from "@/components/widgets/lists/Widget1.vue";
import { useAuthStore } from "@/stores/auth";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export default defineComponent({
  name: "account-overview",
  components: {
    KTListWidget5,
    KTTableWidget5,

  },
  setup() {
    const store = useAuthStore();
    const url = import.meta.env.VITE_APP_URL;
    const capitalized = (name) => {
      if (name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      }
    };
    onMounted(() => {

    });
    return {
      store,
      url,
      capitalized,
      getAssetPath,
    };
  },
});
</script>
