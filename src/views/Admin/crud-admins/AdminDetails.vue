<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row" v-if="admin">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <img :src="admin.photo" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
            >
              {{ admin.fullname }}
            </a>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-semobold text-muted mb-6">
              {{ capitalized(admin.role) }}
            </div>
            <!--end::Position-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bold rotate collapsible text-uppercase"
              role="button"

            >
              Détails

            </div>


          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_admin_view_details" class="collapse show">
            <div class="py-5 fs-6">
              <!--begin::Badge-->
              <div class="badge badge-light-info d-inline">
                {{ capitalized(admin.role) }}
              </div>
              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Identifiant de compte</div>
              <div class="text-gray-600">ID-45453423</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Email</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary">
                  {{ admin.email }}</a
                >
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Dernière Connexion</div>
              <div class="text-gray-600">
                {{ formatDate(admin.last_login_at) }}
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->

      <!--begin::Connected Accounts-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card header-->
        <div class="card-header border-0">
          <div class="card-title">
            <h3 class="fw-bold m-0">Connected Accounts</h3>
          </div>
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body pt-2">
          <div
            class="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6"
          >
            <KTIcon
              icon-name="design-frame"
              icon-class="fs-2tx text-primary me-4"
            />
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-grow-1">
              <!--begin::Content-->
              <div class="fw-semobold">
                <div class="fs-6 text-gray-700">
                  By connecting an account, you hereby agree to our
                  <a href="#" class="me-1">privacy policy</a>and
                  <a href="#">terms of use</a>.
                </div>
              </div>
              <!--end::Content-->
            </div>
            <!--end::Wrapper-->
          </div>

          <!--begin::Items-->
          <div class="py-2">
            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <div class="d-flex">
                <img
                  :src="getAssetPath('media/svg/brand-logos/google-icon.svg')"
                  class="w-30px me-6"
                  alt=""
                />

                <div class="d-flex flex-column">
                  <a href="#" class="fs-5 text-dark text-hover-primary fw-bold"
                    >Google</a
                  >
                  <div class="fs-6 fw-semobold text-muted">
                    Plan properly your workflow
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end">
                <!--begin::Switch-->
                <label
                  class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
                >
                  <!--begin::Input-->
                  <input
                    class="form-check-input"
                    name="google"
                    type="checkbox"
                    value="1"
                    id="kt_modal_connected_accounts_google"
                    checked
                  />
                  <!--end::Input-->

                  <!--begin::Label-->
                  <span
                    class="form-check-label fw-semobold text-muted"
                    for="kt_modal_connected_accounts_google"
                  ></span>
                  <!--end::Label-->
                </label>
                <!--end::Switch-->
              </div>
            </div>
            <!--end::Item-->

            <div class="separator separator-dashed my-5"></div>

            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <div class="d-flex">
                <img
                  :src="getAssetPath('media/svg/brand-logos/github.svg')"
                  class="w-30px me-6"
                  alt=""
                />

                <div class="d-flex flex-column">
                  <a href="#" class="fs-5 text-dark text-hover-primary fw-bold"
                    >Github</a
                  >
                  <div class="fs-6 fw-semobold text-muted">
                    Keep eye on on your Repositories
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end">
                <!--begin::Switch-->
                <label
                  class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
                >
                  <!--begin::Input-->
                  <input
                    class="form-check-input"
                    name="github"
                    type="checkbox"
                    value="1"
                    id="kt_modal_connected_accounts_github"
                    checked
                  />
                  <!--end::Input-->

                  <!--begin::Label-->
                  <span
                    class="form-check-label fw-semobold text-muted"
                    for="kt_modal_connected_accounts_github"
                  ></span>
                  <!--end::Label-->
                </label>
                <!--end::Switch-->
              </div>
            </div>
            <!--end::Item-->

            <div class="separator separator-dashed my-5"></div>

            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <div class="d-flex">
                <img
                  :src="getAssetPath('media/svg/brand-logos/slack-icon.svg')"
                  class="w-30px me-6"
                  alt=""
                />

                <div class="d-flex flex-column">
                  <a href="#" class="fs-5 text-dark text-hover-primary fw-bold"
                    >Slack</a
                  >
                  <div class="fs-6 fw-semobold text-muted">
                    Integrate Projects Discussions
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <!--begin::Switch-->
                <label
                  class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
                >
                  <!--begin::Input-->
                  <input
                    class="form-check-input"
                    name="slack"
                    type="checkbox"
                    value="1"
                    id="kt_modal_connected_accounts_slack"
                  />
                  <!--end::Input-->

                  <!--begin::Label-->
                  <span
                    class="form-check-label fw-semobold text-muted"
                    for="kt_modal_connected_accounts_slack"
                  ></span>
                  <!--end::Label-->
                </label>
                <!--end::Switch-->
              </div>
            </div>
            <!--end::Item-->
          </div>
          <!--end::Items-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer border-0 d-flex justify-content-center pt-0">
          <button class="btn btn-sm btn-light-primary">Save Changes</button>
        </div>
        <!--end::Card footer-->
      </div>
      <!--end::Connected Accounts-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul
        class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semobold mb-8"
      >
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_admin_view_overview_tab"
            >Overview</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-bs-toggle="tab"
            href="#kt_admin_view_overview_events_and_logs_tab"
            >Events & Logs</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-kt-countup-tabs="true"
            data-bs-toggle="tab"
            href="#kt_admin_view_overview_statements"
            >Statements</a
          >
        </li>
        <!--end:::Tab item-->
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-kt-countup-tabs="true"
            data-bs-toggle="tab"
            href="#kt_admin_edit_view"
          >
            Paramètres</a
          >
        </li>
        <!--end:::Tab item-->
        <!--begin:::Tab item-->
        <li class="nav-item ms-auto">
          <!--begin::Action menu-->
          <a
            href="#"
            class="btn btn-primary ps-7"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            Actions
            <KTIcon icon-name="down" icon-class="fs-2 me-0" />
          </a>
          <Dropdown3></Dropdown3>
          <!--end::Menu-->
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_admin_view_overview_tab"
          role="tabpanel"
        >
          <!--begin::Card-->
          <div class="row row-cols-1 row-cols-md-2 mb-6 mb-xl-9">
            <div class="col">
              <!--begin::Card-->
              <div class="card pt-4 h-md-100 mb-6 mb-md-0">
                <!--begin::Card header-->
                <div class="card-header border-0">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2 class="fw-bold">Membre depuis</h2>
                  </div>
                  <!--end::Card title-->
                </div>
                <!--end::Card header-->

                <!--begin::Card body-->
                <div class="card-body pt-0">
                  <div class="fw-bold fs-2">
                    <div class="d-flex">
                      <i class="ki-duotone ki-timer text-info fs-2x"
                        ><span class="path1"></span><span class="path2"></span
                      ></i>
                      <div class="ms-2">
                        {{ formatDate(admin.created_at) }}
                        <span class="text-muted fs-4 fw-semibold"></span>
                      </div>
                    </div>
                    <div class="fs-7 fw-normal text-muted">
                      date de creation de compte adminstrateur
                    </div>
                  </div>
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Card-->
            </div>

            <div class="col">
              <!--begin::Reward Tier-->
              <a href="#" class="card bg-info hoverable h-md-100">
                <!--begin::Body-->
                <div class="card-body">
                  <i class="ki-duotone ki-award text-white fs-3x ms-n1"
                    ><span class="path1"></span><span class="path2"></span
                    ><span class="path3"></span
                  ></i>
                  <div class="text-white fw-bold fs-2 mt-5">Adminstrateur</div>

                  <div class="fw-semibold text-white">
                    rôle avec le niveau d'accès le plus élevé
                  </div>
                </div>
                <!--end::Body-->
              </a>
              <!--end::Reward Tier-->
            </div>
          </div>
          <!--end::Card-->

          <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>

          <PaymentMethods card-classes="mb-6 mb-xl-9"></PaymentMethods>

        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_admin_view_overview_events_and_logs_tab"
          role="tabpanel"
        >
          <Logs card-classes="mb-6 mb-xl-9"></Logs>
          <Events card-classes="mb-6 mb-xl-9"></Events>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_admin_view_overview_statements"
          role="tabpanel"
        >
          <Earnings card-classes="mb-6 mb-xl-9"></Earnings>
          <Statement card-classes="mb-6 mb-xl-9"></Statement>
        </div>
        <!--end:::Tab pane-->
        <!--begin:::Tab pane-->
        <div class="tab-pane fade" id="kt_admin_edit_view" role="tabpanel">
          <!--begin::Basic info-->
          <div class="card mb-5 mb-xl-10">
            <!--begin::Card header-->
            <div
              class="card-header border-0 cursor-pointer"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_account__admin_profile_details"
              aria-expanded="true"
              aria-controls="kt_account__admin_profile_details"
            >
              <!--begin::Card title-->
              <div class="card-title m-0">
                <h3 class="fw-bold m-0">Détails du profil</h3>
              </div>
              <!--end::Card title-->
            </div>
            <!--begin::Card header-->

            <!--begin::Content-->
            <div id="kt_account__admin_profile_details" class="collapse show">
              <!--begin::Form-->
              <VForm
                id="kt_account__admin_profile_details_update_form"
                class="form"
                novalidate
                @submit="saveChanges1()"
                :validation-schema="profileDetailsValidator"
              >
                <!--begin::Card body-->
                <div class="card-body border-top p-9">
                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6"
                      >Avatar</label
                    >
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8">
                      <!--begin::Image input-->
                      <div
                        class="image-input image-input-outline"
                        data-kt-image-input="true"
                        :style="{
                          backgroundImage: `url(${getAssetPath(
                            '/media/avatars/blank.png'
                          )})`,
                        }"
                      >
                        <!--begin::Preview existing avatar-->
                        <div
                          class="image-input-wrapper w-125px h-125px"
                          :style="`background-image: url(${profileDetails.photo})`"
                        ></div>
                        <!--end::Preview existing avatar-->

                        <!--begin::Label-->
                        <!--                <label-->
                        <!--                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"-->
                        <!--                  data-kt-image-input-action="change"-->
                        <!--                  data-bs-toggle="tooltip"-->
                        <!--                  title="Change avatar"-->
                        <!--                >-->
                        <!--                  <i class="bi bi-pencil-fill fs-7"></i>-->

                        <!--begin::Inputs-->
                        <!--                  <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />-->
                        <input type="hidden" name="avatar_remove" />
                        <!--end::Inputs-->
                        <!--                </label>-->
                        <!--end::Label-->

                        <!--begin::Remove-->
                        <span
                          class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                          data-kt-image-input-action="remove"
                          data-bs-toggle="tooltip"
                          @click="removeImage()"
                          title="Remove avatar"
                        >
                          <i class="bi bi-x fs-2"></i>
                        </span>
                        <!--end::Remove-->
                      </div>
                      <!--end::Image input-->
                      <!--begin:Team-->
                      <div class="col-lg-8 mt-5">
                        <span
                          @click="UpdateImage('media/backendavatars/1.jpg')"
                          class="symbol symbol-35px mt-2 me-2 cursor-pointer"
                          data-bs-toggle="tooltip"
                          title="Ana Stone"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/1.jpg')"
                            alt=""
                          />
                        </span>

                        <span
                          @click="UpdateImage('media/backendavatars/2.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Mark Larson"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/2.jpg')"
                            alt=""
                          />
                        </span>

                        <span
                          @click="UpdateImage('media/backendavatars/3.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Sam Harris"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/3.jpg')"
                            alt=""
                          />
                        </span>
                        <span
                          @click="UpdateImage('media/backendavatars/4.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Ana Stone"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/4.jpg')"
                            alt=""
                          />
                        </span>

                        <a
                          @click="UpdateImage('media/backendavatars/5.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Mark Larson"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/5.jpg')"
                            alt=""
                          />
                        </a>

                        <span
                          @click="UpdateImage('media/backendavatars/6.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Sam Harris"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/6.jpg')"
                            alt=""
                          />
                        </span>
                        <span
                          @click="UpdateImage('media/backendavatars/7.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Ana Stone"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/7.jpg')"
                            alt=""
                          />
                        </span>

                        <span
                          @click="UpdateImage('media/backendavatars/9.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Sam Harris"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/9.jpg')"
                            alt=""
                          />
                        </span>
                        <span
                          @click="UpdateImage('media/backendavatars/11.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Ana Stone"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/11.jpg')"
                            alt=""
                          />
                        </span>

                        <span
                          @click="UpdateImage('media/backendavatars/12.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Sam Harris"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/12.jpg')"
                            alt=""
                          />
                        </span>
                        <span
                          @click="UpdateImage('media/backendavatars/13.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Ana Stone"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/13.jpg')"
                            alt=""
                          />
                        </span>

                        <span
                          @click="UpdateImage('media/backendavatars/14.jpg')"
                          class="symbol symbol-35px me-2 cursor-pointer mt-2"
                          data-bs-toggle="tooltip"
                          title="Mark Larson"
                        >
                          <img
                            :src="getAssetPath('media/backendavatars/14.jpg')"
                            alt=""
                          />
                        </span>
                      </div>
                      <!--end:Team-->
                      <!--begin::Hint-->
                      <div class="form-text">
                        vous pouvez choisir l'un de ces avatars.
                      </div>
                      <!--end::Hint-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label
                      class="col-lg-4 col-form-label required fw-semobold fs-6"
                      >Nom et prénom</label
                    >
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8">
                      <!--begin::Row-->
                      <div class="row">
                        <!--begin::Col-->
                        <div class="col-lg-6 fv-row">
                          <Field
                            type="text"
                            name="nom"
                            class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                            placeholder="nom"
                            v-model="profileDetails.nom"
                          />
                          <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                              <ErrorMessage name="nom" />
                            </div>
                          </div>
                        </div>
                        <!--end::Col-->

                        <!--begin::Col-->
                        <div class="col-lg-6 fv-row">
                          <Field
                            type="text"
                            name="prenom"
                            class="form-control form-control-lg form-control-solid"
                            placeholder="prenom"
                            v-model="profileDetails.prenom"
                          />
                          <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                              <ErrorMessage name="prenom" />
                            </div>
                          </div>
                        </div>
                        <!--end::Col-->
                      </div>
                      <!--end::Row-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->


                </div>
                <!--end::Card body-->

                <!--begin::Actions-->
                <div class="card-footer d-flex justify-content-end py-6 px-9">
                  <button
                    type="reset"
                    class="btn btn-light btn-active-light-primary me-2"
                  >
                    Annuler
                  </button>

                  <button
                    type="submit"
                    id="kt_account__admin_profile_details_submit"
                    ref="submitAdminForm"
                    class="btn btn-primary"
                  >
                    <span class="indicator-label"> Sauvegarder </span>
                    <span class="indicator-progress">
                      S'il vous plaît, attendez...
                      <span
                        class="spinner-border spinner-border-sm align-middle ms-2"
                      ></span>
                    </span>
                  </button>
                </div>
                <!--end::Actions-->
              </VForm>
              <!--end::Form-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Basic info-->

          <!--begin::Sign-in Method-->
          <div class="card mb-5 mb-xl-10">
            <!--begin::Card header-->
            <div
              class="card-header border-0 cursor-pointer"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_account_updateEmail_method"
            >
              <div class="card-title m-0">
                <h3 class="fw-bolder m-0">Méthode de connexion</h3>
              </div>
            </div>
            <!--end::Card header-->

            <!--begin::Content-->
            <div id="kt_account_updateEmail_method" class="collapse show">
              <!--begin::Card body-->
              <div class="card-body border-top p-9">
                <!--begin::Email Address-->
                <div class="d-flex flex-wrap align-items-center mb-8">
                  <div
                    id="kt_account_updateEmail_email"
                    :class="{ 'd-none': emailFormDisplay }"
                  >
                    <div class="fs-4 fw-bolder mb-1">Adresse e-mail</div>
                    <div class="fs-6 fw-semobold text-gray-600">
                      {{ profileDetails.email }}
                    </div>
                  </div>

                  <div
                    id="kt_account_updateEmail_email_edit"
                    :class="{ 'd-none': !emailFormDisplay }"
                    class="flex-row-fluid"
                  >
                    <!--begin::Form-->
                    <VForm
                      id="kt_account_updateEmail_change_email"
                      class="form"
                      novalidate
                      @submit="updateEmail()"
                      :validation-schema="changeEmail"
                    >
                      <div class="row mb-6">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                          <div class="fv-row mb-0">
                            <label
                              for="emailaddress"
                              class="form-label fs-6 fw-bold mb-3"
                              >Saisissez une nouvelle adresse e-mail</label
                            >
                            <Field
                              type="email"
                              class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                              id="emailaddress"
                              v-model="updateEmailInterface.email"
                              placeholder="
Adresse e-mail"
                              name="emailaddress"
                              value=""
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="emailaddress" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="fv-row mb-0">
                            <label
                              for="confirmemailpassword"
                              class="form-label fs-6 fw-bold mb-3"
                            >
                              Confirmez le mot de passe</label
                            >
                            <Field
                              autocomplete="off"
                              type="password"
                              v-model="updateEmailInterface.password"
                              class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                              name="confirmemailpassword"
                              id="confirmemailpassword"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="confirmemailpassword" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button
                          id="kt_account_updateEmail_submit"
                          type="submit"
                          ref="updateEmailForm"
                          class="btn btn-primary me-2 px-6"
                        >
                          <span class="indicator-label">
                            Mettre à jour l'e-mail
                          </span>
                          <span class="indicator-progress">
                            S'il vous plaît, attendez...
                            <span
                              class="spinner-border spinner-border-sm align-middle ms-2"
                            ></span>
                          </span>
                        </button>
                        <button
                          id="kt_account_updateEmail_cancel"
                          type="button"
                          class="btn btn-color-gray-400 btn-active-light-primary px-6"
                          @click="emailFormDisplay = !emailFormDisplay"
                        >
                          Annuler
                        </button>
                      </div>
                    </VForm>
                    <!--end::Form-->
                  </div>
                  <div
                    id="kt_account_updateEmail_email_button"
                    :class="{ 'd-none': emailFormDisplay }"
                    class="ms-auto"
                  >
                    <button
                      class="btn btn-light fw-bolder px-6"
                      @click="emailFormDisplay = !emailFormDisplay"
                    >
                      Changer l'e-mail
                    </button>
                  </div>
                </div>
                <!--end::Email Address-->

                <!--begin::Password-->
                <div class="d-flex flex-wrap align-items-center mb-8">
                  <div
                    id="kt_account_updateEmail_password"
                    :class="{ 'd-none': passwordFormDisplay }"
                  >
                    <div class="fs-4 fw-bolder mb-1">Mot de passe</div>
                    <div class="fs-6 fw-semobold text-gray-600">
                      ************
                    </div>
                  </div>
                  <div
                    id="kt_account_updateEmail_password_edit"
                    class="flex-row-fluid"
                    :class="{ 'd-none': !passwordFormDisplay }"
                  >
                    <div class="fs-6 fw-semobold text-gray-600 mb-4">
                      Le mot de passe doit comporter au moins 8 caractères et
                      contenir des symboles
                    </div>

                    <!--begin::Form-->
                    <VForm
                      id="kt_account_updateEmail_change_password"
                      class="form"
                      novalidate
                      @submit="updatePassword()"
                      :validation-schema="changePassword"
                    >
                      <div class="row mb-6">
                        <div class="col-lg-4">
                          <div class="fv-row mb-0">
                            <label
                              for="currentpassword"
                              class="form-label fs-6 fw-bold mb-3"
                              >Mot de passe actuel</label
                            >
                            <Field
                              autocomplete="off"
                              type="password"
                              v-model="updatePasswordInterface.password"
                              class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                              name="currentpassword"
                              id="currentpassword"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="currentpassword" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="fv-row mb-0">
                            <label
                              for="newpassword"
                              class="form-label fs-6 fw-bold mb-3"
                            >
                              Nouveau mot de passe</label
                            >
                            <Field
                              autocomplete="off"
                              type="password"
                              v-model="updatePasswordInterface.newpassword"
                              class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                              name="newpassword"
                              id="newpassword"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="newpassword" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="fv-row mb-0">
                            <label
                              for="confirmpassword"
                              class="form-label fs-6 fw-bold mb-3"
                              >Confirmer le nouveau mot de passe</label
                            >
                            <Field
                              autocomplete="off"
                              type="password"
                              class="form-control form-control-lg form-control-solid fw-semobold fs-6"
                              name="confirmpassword"
                              id="confirmpassword"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="confirmpassword" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button
                          id="kt_password_submit"
                          type="submit"
                          ref="updatePasswordForm"
                          class="btn btn-primary me-2 px-6"
                        >
                          <span class="indicator-label">
                            Mettre à jour le mot de passe
                          </span>
                          <span class="indicator-progress">
                            S'il vous plaît, attendez...
                            <span
                              class="spinner-border spinner-border-sm align-middle ms-2"
                            ></span>
                          </span>
                        </button>
                        <button
                          id="kt_password_cancel"
                          type="button"
                          @click="passwordFormDisplay = !passwordFormDisplay"
                          class="btn btn-color-gray-400 btn-active-light-primary px-6"
                        >
                          Annuler
                        </button>
                      </div>
                    </VForm>
                    <!--end::Form-->
                  </div>
                  <div
                    id="kt_account_updateEmail_password_button"
                    class="ms-auto"
                    :class="{ 'd-none': passwordFormDisplay }"
                  >
                    <button
                      @click="passwordFormDisplay = !passwordFormDisplay"
                      class="btn btn-light fw-bolder"
                    >
                      Réinitialiser le mot de passe
                    </button>
                  </div>
                </div>
                <!--end::Password-->
              </div>
              <!--end::Card body-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Sign-in Method-->
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <div
    class="modal fade"
    id="kt_modal_create_project_app"
    tabindex="-1"
    aria-hidden="true"
    ref="createNewProjectRef"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-900px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>Créer Un Projet</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="closeModalNewProject"
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body py-lg-10 px-lg-10">
          <!--begin::Stepper-->
          <div
            class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
            id="kt_modal_create_project_app_stepper"
            ref="createAppStepperRef"
          >
            <!--begin::Aside-->
            <div
              class="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px"
            >
              <!--begin::Nav-->
              <div class="stepper-nav ps-lg-10">
                <!--begin::Step 1-->
                <div class="stepper-item current" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <!--begin::Icon-->
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">1</span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Label-->
                    <div class="stepper-label">
                      <h3 class="stepper-title">Détails</h3>

                      <div class="stepper-desc">Nommez votre projet</div>
                    </div>
                    <!--end::Label-->
                  </div>

                  <!--begin::Line-->
                  <div class="stepper-line h-40px"></div>
                  <!--end::Line-->
                </div>
                <!--end::Step 1-->

                <!--begin::Step 2-->
                <div class="stepper-item" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <!--begin::Icon-->
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">2</span>
                    </div>
                    <!--begin::Icon-->

                    <!--begin::Label-->
                    <div class="stepper-label">
                      <h3 class="stepper-title">Frameworks</h3>

                      <div class="stepper-desc">
                        Définir le cadre de votre application
                      </div>
                    </div>
                    <!--begin::Label-->
                  </div>

                  <!--begin::Line-->
                  <div class="stepper-line h-40px"></div>
                  <!--end::Line-->
                </div>
                <!--end::Step 2-->

                <!--begin::Step 3-->
                <div class="stepper-item" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <!--begin::Icon-->
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">3</span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Label-->
                    <div class="stepper-label">
                      <h3 class="stepper-title">Base de données</h3>

                      <div class="stepper-desc">
                        Sélectionnez le type de base de données de l'application
                      </div>
                    </div>
                    <!--end::Label-->
                  </div>
                  <!--begin::Line-->
                  <div class="stepper-line h-40px"></div>
                  <!--end::Line-->
                </div>
                <!--end::Step 3-->

                <!--begin::Step 4-->
                <div class="stepper-item" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <!--begin::Icon-->
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">4</span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Label-->
                    <div class="stepper-label">
                      <h3 class="stepper-title">Équipe</h3>

                      <div class="stepper-desc">
                        Créer une équipe pour le projet
                      </div>
                    </div>
                    <!--end::Label-->
                  </div>

                  <!--begin::Line-->
                  <div class="stepper-line h-40px"></div>
                  <!--end::Line-->
                </div>
                <!--end::Step 4-->

                <!--begin::Step 5-->
                <div class="stepper-item" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <!--begin::Icon-->
                    <div class="stepper-icon w-40px h-40px">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">5</span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Label-->
                    <div class="stepper-label">
                      <h3 class="stepper-title">Dernière étape</h3>

                      <div class="stepper-desc">
                        Soumettez votre application
                      </div>
                    </div>
                    <!--end::Label-->
                  </div>
                </div>
                <!--end::Step 5-->
              </div>
              <!--end::Nav-->
            </div>
            <!--begin::Aside-->

            <!--begin::Content-->
            <div class="flex-row-fluid py-lg-5 px-lg-15">
              <!--begin::Form-->
              <CreateAppModalForm
                :stepperEl="createAppStepperRef"
                @after-hide="loadData"
              />
              <!--end::Form-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Stepper-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";
import CreditBalance from "@/components/customers/cards/overview/CreditBalance.vue";
import Invoices from "@/components/customers/cards/overview/Invoices.vue";

import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import Logs from "@/components/customers/cards/events-and-logs/Logs.vue";

import Earnings from "@/components/customers/cards/statments/Earnings.vue";
import Statement from "@/components/customers/cards/statments/Statement.vue";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRoute, useRouter } from "vue-router";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { useAdminStore } from "@/stores/admin";
import { countries } from "@/core/data/countriesFr";
interface ProfileDetails {
  nom: string;
  prenom: string;
  user_id: string;
  created_at: string;
  photo: string;
  email: string;

  id: string;
}

interface UpdateEmailInterface {
  password: string;

  email: string;
}
interface UpdatePasswordInterface {
  password: string;

  newpassword: string;
}
export default defineComponent({
  name: "admin-details",
  components: {
    PaymentRecords,
    PaymentMethods,
    Events,
    Logs,
    Earnings,
    Statement,
    Dropdown3,
    NewCardModal,
    ErrorMessage,
    Field,
    VForm,
  },
  setup() {
    const admin = ref(null);
    const route = useRoute();
    const projects = ref([]);
    const url = import.meta.env.VITE_APP_URL;
    const store = useAdminStore();
    const getAdmin = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "admin/users/admins/" + route.params.id
          );

          admin.value = response.data.data;
          if (admin.value !== null) {
            profileDetails.value = admin.value;
            profileDetails.value.user_id = admin.value["id"];
            console.log("fetchedFichData", profileDetails.value);
            profileDetails.value.photo = url + profileDetails.value.photo;
          }

          console.log("admin:", admin.value);
        } catch (error) {
          if (typeof error === "object" && error !== null) {
            Swal.fire({
              text: error["response"]["data"]["errors"][0] as string,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-danger",
              },
            });
          }
          // Handle the error as needed
        }
      }
    };
    const capitalized = (name) => {
      if (name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      }
    };

    function capitalizeFirstLetter(str: string): string {
      if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      } else {
        return "non défini";
      }
    }
    function formatDate(date) {
      if (date) {
        return new Date(date).toLocaleDateString();
      } else {
        return "Inconnu";
      }
    }
    const tableHeader = ref([
      {
        columnName: "Titre",
        columnLabel: "title",
        sortEnabled: false,
      },
      {
        columnName: "statut",
        columnLabel: "project_status",
        sortingField: "project_status",
        sortEnabled: false,
      },
      {
        columnName: "description",
        columnLabel: "description",
        sortEnabled: false,
      },
      {
        columnName: "Date d'échéance",
        columnLabel: "duedate",
        sortEnabled: false,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
      },
    ]);
    const tableData = ref([]);

    const deleteRecord = (invoice: number) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i]["id"] === invoice) {
          tableData.value.splice(i, 1);
        }
      }
    };

    const updateEmailForm = ref<HTMLElement | null>(null);
    const updatePasswordForm = ref<HTMLElement | null>(null);
    const router = useRouter();
    const emailFormDisplay = ref(false);
    const passwordFormDisplay = ref(false);
    const updateEmail = async () => {
      console.log("test", updateEmailInterface.value);
      if (updateEmailForm.value) {
        // Activate indicator
        updateEmailForm.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updateEmailForm.value?.removeAttribute("data-kt-indicator");

          emailFormDisplay.value = false;
        }, 2000);
        //Send update email request
        await store.UpdateAdminEmail(
          updateEmailInterface.value,
          profileDetails.value.id
        );
        const error = Object.values(store.errors);
        console.log("error", error);
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
            // Go to page admins-overview
            router.push({
              name: "admins-overview",
              params: { id: profileDetails.value.user_id },
            });
          });
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
    };

    const updatePassword = async () => {
      if (updatePasswordForm.value) {
        // Activate indicator
        updatePasswordForm.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updatePasswordForm.value?.removeAttribute("data-kt-indicator");

          passwordFormDisplay.value = false;
        }, 2000);

        //Send update email request
        await store.UpdateAdminPassword(
          updatePasswordInterface.value,
          profileDetails.value.id
        );
        const error = Object.values(store.errors);
        console.log("error", error);
        if (!error.length) {
          Swal.fire({
            text: "Le mot de passe a été changé avec succès",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "D'accord, j'ai compris !",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          }).then(function () {
            // Refresh page data

            // Go to page admins-overview
            router.push({
              name: "admins-overview",
              params: { id: profileDetails.value.user_id },
            });
          });
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
    };

    const removeImage = () => {
      profileDetails.value.photo = "/media/avatars/blank.png";
    };
    const UpdateImage = (link) => {
      profileDetails.value.photo = link;
    };

    const profileDetailsValidator = Yup.object().shape({
      nom: Yup.string().required().label("nom"),
      prenom: Yup.string().required().label("prenom"),
    });

    const changeEmail = Yup.object().shape({
      emailaddress: Yup.string().required().email().label("E-mail"),
      confirmemailpassword: Yup.string().required().label("Mot de passe"),
    });

    const changePassword = Yup.object().shape({
      currentpassword: Yup.string().required().label("Mot de passe actuel"),
      newpassword: Yup.string().min(4).required().label("Mot de passe"),
      confirmpassword: Yup.string()
        .min(4)
        .required()
        .oneOf(
          [Yup.ref("newpassword"), null],
          "Les mots de passe doivent correspondre"
        )
        .label("Confirmation mot de passe"),
    });
    const updateEmailInterface = ref<UpdateEmailInterface>({
      email: "",
      password: "",
    });

    const updatePasswordInterface = ref<UpdatePasswordInterface>({
      password: "",
      newpassword: "",
    });

    const profileDetails = ref<ProfileDetails>({
      nom: "",
      prenom: "",
      created_at: "",
      email: "",
      id: "",
      user_id: "",

      photo: getAssetPath("media/backendavatars/blank.png"),
    });
    const submitAdminForm = ref<HTMLElement | null>(null);
    const saveChanges1 = async () => {
      console.log("test", profileDetails.value.user_id);
      if (submitAdminForm.value) {
        // Activate indicator
            submitAdminForm.value.setAttribute("data-kt-indicator", "on");
        setTimeout(() => {
          submitAdminForm.value?.removeAttribute("data-kt-indicator");
        }, 2000);
        let parts = profileDetails.value.photo.split("/");
        let lastSegment = "";
        lastSegment = parts.pop() || ""; // handle potential trailing slash

        profileDetails.value.photo = lastSegment;
        //Send inscription request
        await store.UpdateAdmin(
          profileDetails.value,
          profileDetails.value.user_id
        );
        const error = Object.values(store.errors);
        profileDetails.value.photo = getAssetPath("media/backendavatars/1.jpg");
        console.log("error", error);
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

            // Go to page admins-overview
            router.push({
              name: "admins-overview",
              params: { id: profileDetails.value.user_id },
            });
          });
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
    };
    const createAppStepperRef = ref<HTMLElement | null>(null);
    onMounted(async () => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      await getAdmin();
      // Disable loading indicator
      document.body.classList.remove("page-loading");
      document.body.removeAttribute("data-kt-app-page-loading");
    });
    // Function to load data (you should replace this with your actual data loading logic)
    const loadData = async () => {};
    return {
      getAssetPath,
      admin,
      url,
      capitalized,
      tableHeader,
      tableData,
      projects,
      deleteRecord,

      capitalizeFirstLetter,
      formatDate,
      profileDetails,
      saveChanges1,
      profileDetailsValidator,
      UpdateImage,
      emailFormDisplay,
      passwordFormDisplay,

      updatePasswordInterface,
      updatePassword,
      changePassword,
      updateEmailInterface,
      updateEmail,
      changeEmail,
      removeImage,
      submitAdminForm,
      updateEmailForm,
      updatePasswordForm,
      createAppStepperRef,
      loadData,
    };
  },
});
</script>
<style>
.project-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
