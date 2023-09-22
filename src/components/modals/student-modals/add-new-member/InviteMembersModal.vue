<template>
  <!--begin::Modal - Invite Friends-->
  <div
    class="modal fade"
    id="kt_modal_invite_members"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header pb-0 border-0 justify-content-end">
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          <!--begin::Heading-->
          <div class="text-center mb-13">
            <!--begin::Title-->
            <h1 class="mb-3">Inviter un membre</h1>
            <!--end::Title-->
            <p v-if="shouldMakeApiCall">{{ message }}</p>
            <!--begin::Description-->
            <div class="text-gray-400 fw-semobold fs-5">
              Si vous avez besoin de plus d'informations, veuillez consulter
              <a href="#" class="link-primary fw-bold">FAQ</a>.
            </div>
            <!--end::Description-->
          </div>
          <!--end::Heading-->

          <!--begin:Form-->
          <el-form
            @submit.prevent="submit()"
            :model="targetData"
            :rules="rules"
            ref="formRef"
            class="form"
          >
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Email</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a target name for future usage and reference"
                ></i>
              </label>
              <!--end::Label-->

              <el-form-item prop="email">
                <el-input
                  v-model="targetData.email"
                  placeholder="Enter Target email"
                  name="email"
                ></el-input>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
              <button
                type="reset"
                id="kt_modal_invite_members_cancel"
                class="btn btn-light me-3"
              >
                Annuler
              </button>

              <!--begin::Button-->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
              >
                <span v-if="!loading" class="indicator-label">
                  Enregistrer
                  <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" />
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
            <!--end::Actions-->
          </el-form>
          <!--end:Form-->

          <!--begin::Users-->
          <div class="mb-10">
            <!--begin::Heading-->
            <div v-if="users.length" class="fs-6 fw-semobold mb-2">
              Vos invitations
            </div>
            <!--end::Heading-->

            <!--begin::List-->
            <div class="mh-300px scroll-y me-n7 pe-7">
              <template v-for="(user, index) in users" :key="index">
                <!--begin::User-->
                <div
                  class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed"
                >
                  <!--begin::Details-->
                  <div class="d-flex align-items-center">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                      <span
                        :class="`bg-light-info text-info`"
                        class="symbol-label fw-semobold"
                      >
                        {{ user.email.charAt(0) }}
                      </span>
                    </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                      <a
                        href="#"
                        class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >{{ user.email }}</a
                      >

                      <div class="fw-semobold text-gray-400">
                        {{ getTimeSince(user.created_at) }}
                      </div>
                    </div>
                    <!--end::Details-->
                  </div>
                  <!--end::Details-->
                </div>
                <!--end::User-->
              </template>
            </div>
            <!--end::List-->
          </div>
          <!--end::Users-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Invite Friend-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import { useProjectStore } from "@/stores/project";
import Swal from "sweetalert2/dist/sweetalert2.js";
import type { SetupContext } from "vue";
interface NewAddressData {
  email: string;
}
export default defineComponent({
  name: "invite-members-modal",
  components: {},
  props: {
    makeApiCall: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, context: SetupContext) {
    const route = useRoute();
    const users = ref([]);
    const message = ref("");
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const store = useProjectStore();
    const loading = ref<boolean>(false);
    const targetData = ref<NewAddressData>({
      email: "",
    });
    // Function to validate email format

    const shouldMakeApiCall = ref(props.makeApiCall);
    console.log("shouldMakeApiCall1", shouldMakeApiCall);
    // Watch for changes in the makeApiCall prop
    // Watch for changes in the makeApiCall prop
    watch(
        () => props.makeApiCall,
        (newValue) => {
          shouldMakeApiCall.value = newValue;

        }
    );

    function isValidEmail(email) {
      // Regular expression to validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    const rules = ref({
      email: [
        {
          validator: (rule, value, callback) => {
            if (!value) {
              callback(new Error("Veuillez saisir votre adresse e-mail"));
            } else if (!isValidEmail(value)) {
              callback(new Error("Veuillez saisir une adresse e-mail valide"));
            } else {
              callback();
            }
          },
          trigger: "blur",
        },
      ],
    });
    const getTeamInvitations = async (id) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "project/members/pending/" + id
          );
          users.value = response.data.data;
          // Simulated API call
          setTimeout(() => {
            message.value = "Data fetched";
          }, 1000);
        } catch (error: any) {
          document.body.classList.add("page-loading");
          document.body.setAttribute("data-kt-app-page-loading", "true");
        }
      }
    };
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
    function getTimeSince(date) {
      const currentDate = new Date(); // Instantiate currentDate as a Date object
      const elapsedMilliseconds =
        currentDate.getTime() - new Date(date).getTime(); // Use getTime() to get the timestamp
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      const elapsedDays = Math.floor(elapsedHours / 24);

      if (elapsedDays > 0) {
        return `il y a ${elapsedDays} jours`;
      } else if (elapsedHours > 0) {
        return `il y a ${elapsedHours} heures`;
      } else if (elapsedMinutes > 0) {
        return ` il y a ${elapsedMinutes} minutes`;
      } else {
        return `il y a ${elapsedSeconds} instants`;
      }
    }
    const submit = () => {
      console.log("formRef.value", formRef.value);
      if (!formRef.value) {
        return;
      }
      formRef.value.validate(async (valid: boolean) => {
        if (valid) {
          loading.value = true;
          try {
            //Send inscription request
            await store.AddNewMemberToTeam(targetData.value, route.params.slug);
            const error = Object.values(store.errors);
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
                // Refresh page data
                loading.value = false;
                hideModal(newTargetModalRef.value);
              });
            }
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
              loading.value = false;
            });
          }
        } else {
          Swal.fire({
            text: "Désolé, il semble qu'il y ait des erreurs détectées, veuillez réessayer.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "D'accord, j'ai compris!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(() => {
            setTimeout(() => {
              loading.value = false;
              hideModal(newTargetModalRef.value);
            }, 1000);
          });
          return false;
        }
      });
    };
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");
      // Access the project ID from the route params

      if (route.params.slug) {
        getTeamInvitations(route.params.slug).finally(() => {
          // Disable loading indicator
          document.body.classList.remove("page-loading");
          document.body.removeAttribute("data-kt-app-page-loading");
        });
      }
    });
    return {
      users,
      route,
      rules,
      targetData,
      submit,
      getAssetPath,
      getTimeSince,
      loading,
      formRef,
      shouldMakeApiCall,
      message,
    };
  },
});
</script>
