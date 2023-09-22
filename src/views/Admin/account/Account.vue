<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
          >
            <img :src="url + store.user.photo" alt="image" />
            <div
              class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"
            ></div>
          </div>
        </div>
        <!--end::Pic-->

        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="d-flex justify-content-between align-items-start flex-wrap mb-2"
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bold me-1"
                  >{{ store.user.fullname }}</a
                >
                <a href="#">
                  <KTIcon icon-name="verify" icon-class="fs-1 text-primary" />
                </a>

                <a
                  href="#"
                  class="btn btn-sm btn-light-success fw-bold ms-2 fs-8 py-1 px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_upgrade_plan"
                  >Upgrade to Pro</a
                >
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="d-flex flex-wrap fw-semobold fs-6 mb-4 pe-2">
                <span
                  class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                >
                  <KTIcon icon-name="profile-circle" icon-class="fs-4 me-1" />
                  {{ capitalized(store.user.role) }}
                </span>
                <span
                  class="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
                >
                  <KTIcon icon-name="sms" icon-class="fs-4 me-1" />
                  {{ store.user.email }}
                </span>
              </div>
              <!--end::Info-->
            </div>
            <!--end::User-->

            <!--begin::Actions-->
            <div class="d-flex my-4">
              <!--              <a-->
              <!--                href="#"-->
              <!--                class="btn btn-sm btn-light me-2"-->
              <!--                id="kt_user_follow_button"-->
              <!--              >-->
              <!--                <KTIcon icon-name="check" icon-class="fs-3 d-none" />-->
              <!--                Follow-->
              <!--              </a>-->

              <!--              <a-->
              <!--                href="#"-->
              <!--                class="btn btn-sm btn-primary me-3"-->
              <!--                data-bs-toggle="modal"-->
              <!--                data-bs-target="#kt_modal_offer_a_deal"-->
              <!--                >Hire Me</a-->
              <!--              >-->

              <!--begin::Menu-->
              <div class="me-0">
                <button
                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <i class="bi bi-three-dots fs-3"></i>
                </button>
                <!--begin::Menu-->
                <div
                  class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semobold py-4 w-250px fs-6"
                  data-kt-menu="true"
                >
                  <!--begin::Menu item-->
                  <div class="menu-item px-5">
                    <div
                      class="menu-content text-muted pb-2 px-5 fs-7 text-uppercase"
                    >
                      Payments
                    </div>
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu item-->
                  <div class="menu-item px-5">
                    <a href="#" class="menu-link px-5"> Create invoice </a>
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu item-->
                  <div class="menu-item px-5">
                    <a href="#" class="menu-link flex-stack px-5">
                      Create payments

                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Specify a target name for future usage and reference"
                      ></i>
                    </a>
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu item-->
                  <div
                    class="menu-item px-5"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="left-start"
                  >
                    <a href="#" class="menu-link px-5">
                      <span class="menu-title">Subscription</span>
                      <span class="menu-arrow"></span>
                    </a>

                    <!--begin::Menu sub-->
                    <div class="menu-sub menu-sub-dropdown w-175px py-4">
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-5"> Apps </a>
                      </div>
                      <!--end::Menu item-->

                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-5"> Billing </a>
                      </div>
                      <!--end::Menu item-->

                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-5"> Statements </a>
                      </div>
                      <!--end::Menu item-->

                      <!--begin::Menu separator-->
                      <div class="separator my-2"></div>
                      <!--end::Menu separator-->

                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <div class="menu-content px-3">
                          <label
                            class="form-check form-switch form-check-custom form-check-solid"
                          >
                            <input
                              class="form-check-input w-30px h-20px"
                              type="checkbox"
                              value=""
                              name="notifications"
                              checked
                              id="kt_user_menu_notifications"
                            />
                            <span
                              class="form-check-label text-muted fs-6"
                              for="kt_user_menu_notifications"
                            >
                              Notifications
                            </span>
                          </label>
                        </div>
                      </div>
                      <!--end::Menu item-->
                    </div>
                    <!--end::Menu sub-->
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu separator-->
                  <div class="separator my-3"></div>
                  <!--end::Menu separator-->

                  <!--begin::Menu item-->
                  <div class="menu-item px-5">
                    <div
                      class="menu-content text-muted pb-2 px-5 fs-7 text-uppercase"
                    >
                      Account
                    </div>
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu item-->
                  <div class="menu-item px-5">
                    <a href="#" class="menu-link px-5"> Reports </a>
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu item-->
                  <div class="menu-item px-5 my-1">
                    <a href="#" class="menu-link px-5"> Account Settings </a>
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu item-->
                  <div class="menu-item px-5">
                    <a href="#" class="menu-link text-danger px-5">
                      Delete customer
                    </a>
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu-->
              </div>
              <!--end::Menu-->
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->
          <div class="d-flex flex-wrap flex-stack">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <!--begin::Stats-->
              <div class="d-flex flex-wrap">
                <!--begin::Stat-->

                <!--end::Stat-->

                <!--begin::Stat-->

                <!--end::Stat-->
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Progress-->

            <!--end::Progress-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap"
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/admin/account/overview"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Aperçu
            </router-link>
          </li>
          <!--end::Nav item-->

          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/admin/account/activities"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Activités
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/admin/account/settings"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Paramètres
            </router-link>
          </li>
          <!--end::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <router-view></router-view>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  name: "kt-account",
  components: {},
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
      // Enable
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "on");
      setTimeout(() => {
        // Disable
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      }, 2000);
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
