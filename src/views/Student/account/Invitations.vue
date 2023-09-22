<template>
  <kt-empty v-if="!filteredInvitations.length"></kt-empty>
  <div class="`card pt-4 card-xxl-stretch mb-5 mb-xl-10" v-else>
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="fw-bold mb-0">Invitations</h2>
      </div>
      <!--end::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <span
          class="btn btn-sm btn-flex btn-light-primary cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_accept_all" v-if="filteredInvitations.length"
        >
          <KTIcon icon-name="check" icon-class="fs-3" />
          Accepter tout</span
        >
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body pt-0" >

      <!--begin::Option-->
      <div
        class="py-0"
        data-kt-customer-invitation-details="row"
        v-for="(invitation, index) in filteredInvitations"
        :key="index"
      >
        <!--begin::Header-->
        <div class="py-3 d-flex flex-stack flex-wrap">
          <!--begin::Toggle-->
          <div
            class="d-flex align-items-center collapsible rotate collapsed"
            data-bs-toggle="collapse"
            href="#kt_customer_view_invitation_details_1"
            role="button"
            aria-expanded="false"
            aria-controls="kt_customer_view_invitation_details_1"
          >
            <!--begin::Arrow-->
            <div class="me-3 rotate-90">
              <KTIcon icon-name="right" icon-class="fs-3" />
            </div>
            <!--end::Arrow-->
            <!--begin::Logo-->
            <img
              :src="getAssetPath('media/svg/illustrations/easy/2.svg')"
              class="w-40px me-3"
              alt=""
            />
            <!--end::Logo-->
            <!--begin::Summary-->
            <div class="me-3">
              <div class="d-flex align-items-center">
                <div class="text-gray-800 fw-bold">
                  Invitation {{ invitation.team.name }}
                </div>
                <div class="badge badge-light-primary ms-5">
                  {{ invitation.type }}
                </div>
              </div>
              <div class="text-muted">
                {{ formatDate(invitation.created_at) }}
              </div>
            </div>
            <!--end::Summary-->
          </div>
          <!--end::Toggle-->
          <!--begin::Toolbar-->
          <div class="d-flex my-3 ms-9">
            <!--begin::Edit-->
            <span
                @click="acceptInvite(invitation.accept_token)"
              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3 cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_accept_all"
            >
              <span
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                title=""
                data-bs-original-title="Edit"
              >
                <KTIcon icon-name="check" icon-class="fs-3" />
              </span>
            </span>
            <!--end::Edit-->
            <!--begin::Delete-->
            <span
              @click="deleteInvite(invitation.accept_token)"
              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3 cursor-pointer"
              data-bs-toggle="tooltip"
              title=""
              data-kt-customer-invitation-details="delete"
              data-bs-original-title="Delete"
            >
              <KTIcon icon-name="trash" icon-class="fs-3" />
            </span>
            <!--end::Delete-->
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold w-150px py-3"
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a
                  href="#"
                  class="menu-link px-3"
                  data-kt-invitation-mehtod-action="set_as_primary"
                  >Set as Primary</a
                >
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
            <!--end::More-->
          </div>
          <!--end::Toolbar-->
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div
          id="kt_customer_view_invitation_details_1"
          class="fs-6 ps-10 collapse"
          data-bs-parent="#kt_customer_view_invitation_details"
          style=""
        >
          <!--begin::Details-->
          <div class="d-flex flex-wrap py-5">
            <!--begin::Col-->
            <div class="flex-equal me-5">
              <table class="table table-flush fw-semobold gy-1">
                <tbody>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">Expéditeur</td>
                    <td class="text-gray-800">
                      {{ capitalizeFirstLetter(invitation.sender.fullname) }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">
                      Taille de l'équipe
                    </td>
                    <td class="text-gray-800">
                      {{ invitation.team.project.team_size }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--end::Col-->
            <!--begin::Col-->
            <div class="flex-equal">
              <table class="table table-flush fw-semobold gy-1">
                <tbody>
                  <tr>
                    <td class="text-muted min-w-125px w-125px me-2">
                      Nom du projet
                    </td>
                    <td class="text-gray-800 me-2">
                      {{ capitalizeFirstLetter(invitation.team.project.title) }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px">
                      Type du projet
                    </td>
                    <td class="text-gray-800">
                      {{ invitation.team.project.type }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted min-w-125px w-125px me-2">
                      Statut du projet
                    </td>
                    <td class="text-gray-800 me-2">
                      <span
                        :class="
                          getStatusColorClass(
                            invitation.team.project.project_status
                          )
                        "
                        class="badge fw-bold me-auto"
                        >{{
                          capitalizeFirstLetter(
                            invitation.team.project.project_status
                          )
                        }}</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Details-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Option-->
      <div class="separator separator-dashed"></div>
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useProjectStore } from "@/stores/project";
import KtEmpty from "@/layouts/main-layout/search/partials/Empty.vue";
export default defineComponent({
  name: "account-invitations",
  components: {KtEmpty},
  props: {
    cardClasses: String,
  },
  setup() {
    const url = import.meta.env.VITE_APP_URL;
    const store = useProjectStore();
    let errors = [];
    const currentPage = ref(1);
    const pageSize = ref(10);
    const invitations = ref([]);
    const statusFilter = ref("");

    function capitalizeFirstLetter(str: string): string {
      if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      } else {
        return "non défini";
      }
    }

    function generateInitials(title) {
      const words = title.split(" ");
      let initials = "";

      for (const word of words) {
        if (word.length > 0) {
          initials += word[0].toUpperCase();
        }
      }

      return initials;
    }

    const pageNumbers = computed<number[]>(() => {
      const pages: number[] = [];
      for (let page = 1; page <= totalPages.value; page++) {
        pages.push(page);
      }
      return pages;
    });

    const onPageChange = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };
    // Calculate the start and end index for the displayed range
    const startIndex = computed(() => {
      return (currentPage.value - 1) * pageSize.value + 1;
    });

    const endIndex = computed(() => {
      const end = currentPage.value * pageSize.value;
      return end > filteredInvitations.value.length
        ? filteredInvitations.value.length
        : end;
    });

    const filteredInvitations = computed(() => {
      if (statusFilter.value) {
        return invitations.value.filter(
          (project) => project["project_status"] === statusFilter.value
        );
      }
      return invitations.value;
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredInvitations.value.length / pageSize.value);
    });
    const onStatusFilterChange = (event) => {
      statusFilter.value = event.target.value;
      currentPage.value = 1; // Reset the current page when changing the filter
    };
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getInvitations().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });
    const getInvitations = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("account/invitations");
          invitations.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch Invitations:", error);
          // Handle the error as needed
        }
      }
    };
    function formatDate(dateString) {
      if (dateString) {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedDateTime = `${year}-${month
          .toString()
          .padStart(2, "0")}-${day.toString().padStart(2, "0")} ${hours
          .toString()
          .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;

        return formattedDateTime;
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

    function deleteItemInvite(token) {
      //Send  request
      const formData = new FormData();
      formData.append("invitation_token", token);
      store.DeleteInvite(formData);
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {

        // Show success message after successful deletion
        Swal.fire("Supprimé!", "L'élément a été supprimé.", "success");
        // Go to page after successfully login
        getInvitations();
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
      }
    }
    const deleteInvite = (token: string) => {
      // Show the delete confirmation popup
      Swal.fire({
        title: "Es-tu sûr?",
        text: "Une fois supprimé, vous ne pourrez plus récupérer cet élément!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Supprimer",
        cancelButtonText: "Annuler",
        buttonsStyling: true,
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // User confirmed, perform the delete action
          // Call your delete API or delete logic here
          deleteItemInvite(token);

        } else {
          // User cancelled, do nothing or show a cancellation message
          Swal.fire("Annulé", "Suppression annulée.", "info");
        }
      });
    };


    function acceptItemInvite(token) {
      //Send  request
      const formData = new FormData();
      formData.append("invitation_token", token);
      store.AcceptInvite(formData);
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {

        // Show success message after successful acceptation
        Swal.fire("Supprimé!", "L'élément a été supprimé.", "success");
        getInvitations();
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
      }
    }
    const acceptInvite = (token: string) => {
      // Show the accept confirmation popup
      Swal.fire({
        title: "Es-tu sûr?",
        text: "Accepter l'invitation !",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Accepter",
        cancelButtonText: "Annuler",
        buttonsStyling: true,
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // User confirmed, perform the accept action
          // Call your delete API or delete logic here
          acceptItemInvite(token);

        } else {
          // User cancelled, do nothing or show a cancellation message
          Swal.fire("Annulé", "Acceptation annulée.", "info");
        }
      });
    };


    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getInvitations().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });
    return {
      getAssetPath,
      errors,
      generateInitials,
      capitalizeFirstLetter,
      formatDate,
      currentPage,
      pageSize,
      onPageChange,
      filteredInvitations,
      pageNumbers,
      totalPages,
      startIndex,
      endIndex,
      onStatusFilterChange,
      statusFilter,
      url,
      getStatusColorClass,
      deleteInvite,
      acceptInvite,
    };
  },
});
</script>
