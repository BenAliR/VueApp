<template>
  <div class="card" v-if="project">
    <!--begin::Body-->
    <div class="card-body p-lg-20 pb-lg-0">
      <!--begin::Layout-->
      <div class="d-flex flex-column flex-xl-row">
        <!--begin::Content-->
        <div class="flex-lg-row-fluid me-xl-15">
          <!--begin::Post content-->
          <div class="mb-17">
            <!--begin::Wrapper-->
            <div class="mb-8">


              <!--begin::Title-->
              <a href="#" class="text-dark text-hover-primary fs-2 fw-bold">
            {{  project.title}}

                <span class="fw-bold text-muted fs-5 ps-1"> {{ calculateReadingTime(project.description) }}</span>
              </a>
              <!--end::Title-->


            </div>
            <!--end::Wrapper-->

            <!--begin::Description-->
            <div class="fs-5 fw-semibold text-gray-600">
              <!--begin::Text-->
              <p class="mb-8">

                {{project.description
                }}
              </p>
              <!--end::Text-->

            </div>
            <!--end::Description-->

            <!--begin::Block-->
            <div class="d-flex align-items-center border-1 border-dashed card-rounded p-5 p-lg-10 mb-14">
              <!--begin::Section-->
              <div class="text-center flex-shrink-0 me-7 me-lg-13">
                <!--begin::Avatar-->
                <div class="symbol symbol-70px symbol-circle mb-2" v-if="project.team.owner">
                  <img :src="url+project.team.owner.photo" class="" alt="">
                </div>
                <!--end::Avatar-->

                <!--begin::Info-->
                <div class="mb-0">
                  <span  class="text-gray-700 fw-bold text-hover-primary"  v-if="project.team.owner" >{{project.team.owner.fullname}}</span>


                </div>
                <!--end::Info-->
              </div>
              <!--end::Section-->

              <!--begin::Text-->
              <div class="mb-0 fs-6">
                <div class="text-muted fw-semibold lh-lg mb-2">

                </div>

                <span  class="fw-semibold link-primary">Profil de l'auteur</span>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Block-->

          </div>
          <!--end::Post content-->








        </div>
        <!--end::Content-->

        <!--begin::Sidebar-->
        <div class="flex-column flex-lg-row-auto w-100 w-xl-300px mb-10">

          <!--begin::Catigories-->
          <div class="mb-16">
            <h4 class="text-dark mb-7">Informations de base</h4>

            <!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted mb-4">
              <!--begin::Text-->
              <span class="text-muted text-hover-primary pe-2">
                Statut         </span>
              <!--end::Text-->

              <!--begin::Number-->
              <div class="m-0">
                {{ capitalized(project.project_status) }}   </div>
              <!--end::Number-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted mb-4">
              <!--begin::Text-->
              <span class="text-muted text-hover-primary pe-2">
                Type </span>
              <!--end::Text-->

              <!--begin::Number-->
              <div class="m-0">
                {{ project.type }}       </div>
              <!--end::Number-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted mb-4">
              <!--begin::Text-->
              <span class="text-muted text-hover-primary pe-2">
                Technologie           </span>
              <!--end::Text-->

              <!--begin::Number-->
              <div class="m-0">
                {{ project.dev_technologie }}         </div>
              <!--end::Number-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted mb-4">
              <!--begin::Text-->
              <span class="text-muted text-hover-primary pe-2">
                Date d'échéance        </span>
              <!--end::Text-->

              <!--begin::Number-->
              <div class="m-0">
                {{ formatDate(project.duedate) }}            </div>
              <!--end::Number-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted mb-4">
              <!--begin::Text-->
              <a href="#" class="text-muted text-hover-primary pe-2">
                domaine            </a>
              <!--end::Text-->

              <!--begin::Number-->
              <div class="m-0" v-if="project.domaine != null">
                {{ project.domaine }}              </div>
              <div class="m-0" v-else>
                <i class="bi bi-exclamation-circle fs-1"
                ><span class="path1"></span><span class="path2"></span
                ></i>          </div>
              <!--end::Number-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted ">
              <!--begin::Text-->
              <span class="text-muted text-hover-primary pe-2">
                slug     </span>
              <!--end::Text-->

              <!--begin::Number-->
              <div class="m-0">
                {{ project.slug }}
              </div>
              <!--end::Number-->
            </div>
            <!--end::Item-->

          </div>
          <!--end::Catigories-->


                 </div>
        <!--end::Sidebar-->
      </div>
      <!--end::Layout-->








    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import {defineComponent, onMounted, ref, watch} from "vue";

import { useFichStore } from "@/stores/fich";

import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { readingTimeFilter } from '@/filters/readingTime';
import {useRoute} from "vue-router";
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
  name: "student-project-overview",
  components: {


  },
  setup() {
    const route = useRoute();
    const store = useFichStore();
    const url = import.meta.env.VITE_APP_URL;
    const project = ref(null);
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

    const getProject = async (id) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("admin/users/projects/" + id);
          project.value = response.data.data;
        } catch (error: any) {
          document.body.classList.add("page-loading");
          document.body.setAttribute("data-kt-app-page-loading", "true");
          Swal.fire({
            text: error.response?.data?.errors[0],
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "D'accord, j'ai compris !",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(() => {
            // Go to page after successfully login
            // router.push({ name: "account-projects" });
          });
        }
      }
    };
    const calculateReadingTime = (text: string) => {
      const wordsPerMinute = 200; // Adjust this value based on your estimation
      const words = text.split(/\s+/).filter(Boolean).length;
      const minutes = Math.ceil(words / wordsPerMinute);
      return `${minutes} min read`;
    };
    // Watch for changes in the route parameters
    watch(
        () => route.params,
        (newParams, oldParams) => {
          // Handle the parameter changes here
          // Enable loading indicator if needed
          document.body.classList.add("page-loading");
          document.body.setAttribute("data-kt-app-page-loading", "true");
          // Access the project ID from the route params
          if (newParams.id) {
            getProject(newParams.id).finally(() => {
              // Disable loading indicator
              document.body.classList.remove("page-loading");
              document.body.removeAttribute("data-kt-app-page-loading");
            });
          }
        }
    );
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");
      // Access the project ID from the route params
      if (route.params.id) {
        console.log("Project ID:", route.params.id);
        getProject(route.params.id).finally(() => {
          // Disable loading indicator
          document.body.classList.remove("page-loading");
          document.body.removeAttribute("data-kt-app-page-loading");
        });
      }
    });
    function formatDate(date) {
      if (date) {
        return new Date(date).toLocaleDateString();
      } else {
        return "Inconnu";
      }
    }
    return {
      store,
      url,
      fetchedFichData,
      capitalized,
      getAssetPath,
      calculateReadingTime,
      project,
      formatDate,
    };
  },
});
</script>
