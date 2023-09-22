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
        to="/account/settings"
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
            {{ fetchedFichData.nom }} {{ fetchedFichData.prenom }}</span
          >
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">Etablisement</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-semobold fs-6">{{
            fetchedFichData.etablisement
          }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted"
          >Type d'établissement</label
        >
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <a href="#" class="fw-semobold fs-6 text-dark text-hover-primary">{{
            fetchedFichData.typeecole
          }}</a>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">
          Numéro du contact
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            v-tooltip
            title="Le numéro de téléphone doit être actif"
          ></i>
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 d-flex align-items-center">
          <span class="fw-bold fs-6 me-2">{{ fetchedFichData.telephone }}</span>

          <span class="badge badge-success">Vérifié</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">
          Pays
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            v-tooltip
            title="
Pays d'origine"
          ></i>
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-dark">{{
            fetchedFichData.country
          }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted"> Adresse </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fs-6 text-dark">{{ fetchedFichData.adresse }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted"> Adresse 2 </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fs-6 text-dark">{{ fetchedFichData.adresse2 }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted"> Ville </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fs-6 text-dark">{{ fetchedFichData.ville }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted"> Cite </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fs-6 text-dark">{{ fetchedFichData.cite }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted"> Code Postal </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fs-6 text-dark">{{ fetchedFichData.codepostal }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">Communication</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span
            class="fw-bold fs-6 text-dark"
            v-if="fetchedFichData.contact_email === 1"
          >
            E-mail</span
          >
          <span
            class="fw-bold fs-6 text-dark"
            v-if="fetchedFichData.contact_phone === 1"
          >
            Téléphone</span
          >
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

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

<!--  &lt;!&ndash;begin::Row&ndash;&gt;-->
<!--  <div class="row gy-10 gx-xl-10">-->
<!--    &lt;!&ndash;begin::Col&ndash;&gt;-->
<!--    <div class="col-xl-6">-->
<!--      <KTChartWidget1-->
<!--        widget-classes="card-xxl-stretch mb-5 mb-xl-10"-->
<!--      ></KTChartWidget1>-->
<!--    </div>-->
<!--    &lt;!&ndash;end::Col&ndash;&gt;-->

<!--    &lt;!&ndash;begin::Col&ndash;&gt;-->
<!--    <div class="col-xl-6">-->
<!--      <KTListWidget1-->
<!--        widget-classes="card-xxl-stretch mb-5 mb-xl-10'"-->
<!--      ></KTListWidget1>-->
<!--    </div>-->
<!--    &lt;!&ndash;end::Col&ndash;&gt;-->
<!--  </div>-->
<!--  &lt;!&ndash;end::Row&ndash;&gt;-->

<!--  &lt;!&ndash;begin::Row&ndash;&gt;-->
<!--  <div class="row gy-10 gx-xl-10">-->
<!--    &lt;!&ndash;begin::Col&ndash;&gt;-->
<!--    <div class="col-xl-6">-->
<!--      <KTListWidget5-->
<!--        widget-classes="card-xxl-stretch mb-5 mb-xl-10"-->
<!--      ></KTListWidget5>-->
<!--    </div>-->
<!--    &lt;!&ndash;end::Col&ndash;&gt;-->

<!--    &lt;!&ndash;begin::Col&ndash;&gt;-->
<!--    <div class="col-xl-6">-->
<!--      <KTTableWidget5-->
<!--        widget-classes="card-xxl-stretch mb-5 mb-xl-10"-->
<!--      ></KTTableWidget5>-->
<!--    </div>-->
<!--    &lt;!&ndash;end::Col&ndash;&gt;-->
<!--  </div>-->
<!--  &lt;!&ndash;end::Row&ndash;&gt;-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import KTListWidget5 from "@/components/widgets/lists/Widget5.vue";
import KTTableWidget5 from "@/components/widgets/tables/Widget5.vue";
import KTListWidget1 from "@/components/widgets/lists/Widget1.vue";
import { useFichStore } from "@/stores/fich";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
interface FichData {
  adresse: string;
  adresse2: string;
  cite: string;
  codepostal: string;
  copie1: string;
  copie2: string;
  copie3: string;
  copie4: string;
  country: string;
  country_code: string;
  created_at: string;
  demande_status: string;
  email: string;
  etablisement: string;
  id: string;
  nom: string;
  photo: string;
  prenom: string;
  tel_format_national: string;
  telephone: string;
  typeecole: string;
  updated_at: string;
  user_id: string;
  ville: string;
  contact_email: number;
  contact_phone: number;
}
export default defineComponent({
  name: "account-overview",
  components: {
    KTChartWidget1,
    KTListWidget5,
    KTTableWidget5,
    KTListWidget1,
  },
  setup() {
    const store = useFichStore();
    const url = import.meta.env.VITE_APP_URL;
    const fetchedFichData = ref<FichData>({
      adresse: "",
      adresse2: "",
      cite: "",
      codepostal: "",
      copie1: "",
      copie2: "",
      copie3: "",
      copie4: "",
      country: "",
      country_code: "",
      created_at: "",
      demande_status: "",
      email: "",
      etablisement: "",
      id: "",
      nom: "",
      photo: "",
      prenom: "",
      tel_format_national: "",
      telephone: "",
      typeecole: "",
      updated_at: "",
      user_id: "",
      ville: "",
      contact_email: 1,
      contact_phone: 1,
    });
    const fetchedFichError = ref(null);
    const capitalized = (name) => {
      if (name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      }
    };

    const getDemande = async () => {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.get("fich")
          .then(({ data }) => {
            fetchedFichData.value = data.data;
            console.log("fetchedFichData", fetchedFichData.value);
          })
          .catch(({ response }) => {
            fetchedFichError.value = response.data.errors;
            console.log("error", fetchedFichError.value);
          });
      } else {
        console.log("error");
      }
    };
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getDemande().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });
    return {
      store,
      url,
      fetchedFichData,
      capitalized,
      getAssetPath,
    };
  },
});
</script>
