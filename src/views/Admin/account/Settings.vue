<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_profile_details"
      aria-expanded="true"
      aria-controls="kt_account_profile_details"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Détails du profil</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_profile_details" class="collapse show">
      <!--begin::Form-->
      <VForm
        id="kt_account_profile_details_form"
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
            <label class="col-lg-4 col-form-label required fw-semobold fs-6"
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
            id="kt_account_profile_details_submit"
            ref="submitButton1"
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
      data-bs-target="#kt_account_signin_method"
    >
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Méthode de connexion</h3>
      </div>
    </div>
    <!--end::Card header-->

    <!--begin::Content-->
    <div id="kt_account_signin_method" class="collapse show">
      <!--begin::Card body-->
      <div class="card-body border-top p-9">
        <!--begin::Email Address-->
        <div class="d-flex flex-wrap align-items-center mb-8">
          <div id="kt_signin_email" :class="{ 'd-none': emailFormDisplay }">
            <div class="fs-4 fw-bolder mb-1">Adresse e-mail</div>
            <div class="fs-6 fw-semobold text-gray-600">
              {{ profileDetails.email }}
            </div>
          </div>

          <div
            id="kt_signin_email_edit"
            :class="{ 'd-none': !emailFormDisplay }"
            class="flex-row-fluid"
          >
            <!--begin::Form-->
            <VForm
              id="kt_signin_change_email"
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
                  id="kt_signin_submit"
                  type="submit"
                  ref="updateEmailButton"
                  class="btn btn-primary me-2 px-6"
                >
                  <span class="indicator-label"> Mettre à jour l'e-mail </span>
                  <span class="indicator-progress">
                    S'il vous plaît, attendez...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
                <button
                  id="kt_signin_cancel"
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
            id="kt_signin_email_button"
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
            id="kt_signin_password"
            :class="{ 'd-none': passwordFormDisplay }"
          >
            <div class="fs-4 fw-bolder mb-1">Mot de passe</div>
            <div class="fs-6 fw-semobold text-gray-600">************</div>
          </div>
          <div
            id="kt_signin_password_edit"
            class="flex-row-fluid"
            :class="{ 'd-none': !passwordFormDisplay }"
          >
            <div class="fs-6 fw-semobold text-gray-600 mb-4">
              Le mot de passe doit comporter au moins 8 caractères et contenir
              des symboles
            </div>

            <!--begin::Form-->
            <VForm
              id="kt_signin_change_password"
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
                  ref="updatePasswordButton"
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
            id="kt_signin_password_button"
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

  <!--begin::Connected Accounts-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_connected_accounts"
      aria-expanded="true"
      aria-controls="kt_account_connected_accounts"
    >
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Connected Accounts</h3>
      </div>
    </div>
    <!--end::Card header-->

    <!--begin::Content-->
    <div id="kt_account_connected_accounts" class="collapse show">
      <!--begin::Card body-->
      <div class="card-body border-top p-9">
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
              <div class="fs-6 text-gray-600">
                Two-factor authentication adds an extra layer of security to
                your account. To log in, in you'll need to provide a 4 digit
                amazing code. <a href="#" class="fw-bold">Learn More</a>
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
                <div class="fs-6 fw-semobold text-gray-400">
                  Plan properly your workflow
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div class="form-check form-check-solid form-switch">
                <input
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="googleswitch"
                  checked
                />
                <label class="form-check-label" for="googleswitch"></label>
              </div>
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
                <div class="fs-6 fw-semobold text-gray-400">
                  Keep eye on on your Repositories
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div class="form-check form-check-solid form-switch">
                <input
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="githubswitch"
                  checked
                />
                <label class="form-check-label" for="githubswitch"></label>
              </div>
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
                <div class="fs-6 fw-semobold text-gray-400">
                  Integrate Projects Discussions
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div class="form-check form-check-solid form-switch">
                <input
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="slackswitch"
                />
                <label class="form-check-label" for="slackswitch"></label>
              </div>
            </div>
          </div>
          <!--end::Item-->
        </div>
        <!--end::Items-->
      </div>
      <!--end::Card body-->

      <!--begin::Card footer-->
      <div class="card-footer d-flex justify-content-end py-6 px-9">
        <button class="btn btn-light btn-active-light-primary me-2">
          Discard
        </button>
        <button
          ref="submitButton2"
          class="btn btn-primary"
          @click="saveChanges2()"
        >
          <span class="indicator-label"> Save Changes </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
      <!--end::Card footer-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Connected Accounts-->



  <!--begin::Notifications-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_notifications"
      aria-expanded="true"
      aria-controls="kt_account_notifications"
    >
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Notifications</h3>
      </div>
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_notifications" class="collapse show">
      <!--begin::Form-->
      <form class="form" @submit.prevent="saveChanges4()">
        <!--begin::Card body-->
        <div class="card-body border-top px-9 pt-3 pb-4">
          <!--begin::Table-->
          <div class="table-responsive">
            <table
              class="table table-row-dashed border-gray-300 align-middle gy-6"
            >
              <tbody class="fs-6 fw-semobold">
                <!--begin::Table row-->
                <tr>
                  <td class="min-w-250px fs-4 fw-bold">Notifications</td>
                  <td class="w-125px">
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="kt_settings_notification_email"
                        checked
                        data-kt-check="true"
                        data-kt-check-target="[data-kt-settings-notification=email]"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="kt_settings_notification_email"
                      >
                        Email
                      </label>
                    </div>
                  </td>
                  <td class="w-125px">
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="kt_settings_notification_phone"
                        checked
                        data-kt-check="true"
                        data-kt-check-target="[data-kt-settings-notification=phone]"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="kt_settings_notification_phone"
                      >
                        Phone
                      </label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->

                <!--begin::Table row-->
                <tr>
                  <td>Billing Updates</td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                        id="billing1"
                        checked
                        data-kt-settings-notification="email"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="billing1"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="billing2"
                        checked
                        data-kt-settings-notification="phone"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="billing2"
                      ></label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->

                <!--begin::Table row-->
                <tr>
                  <td>New Team Members</td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="team1"
                        checked
                        data-kt-settings-notification="email"
                      />
                      <label class="form-check-label ps-2" for="team1"></label>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="team2"
                        data-kt-settings-notification="phone"
                      />
                      <label class="form-check-label ps-2" for="team2"></label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->

                <!--begin::Table row-->
                <tr>
                  <td>Completed Projects</td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="project1"
                        data-kt-settings-notification="email"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="project1"
                      ></label>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="project2"
                        checked
                        data-kt-settings-notification="phone"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="project2"
                      ></label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->

                <!--begin::Table row-->
                <tr>
                  <td class="border-bottom-0">Newsletters</td>
                  <td class="border-bottom-0">
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="newsletter1"
                        data-kt-settings-notification="email"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="newsletter1"
                      ></label>
                    </div>
                  </td>
                  <td class="border-bottom-0">
                    <div class="form-check form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="newsletter2"
                        data-kt-settings-notification="phone"
                      />
                      <label
                        class="form-check-label ps-2"
                        for="newsletter2"
                      ></label>
                    </div>
                  </td>
                </tr>
                <!--begin::Table row-->
              </tbody>
            </table>
          </div>
          <!--end::Table-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button class="btn btn-light btn-active-light-primary me-2">
            Discard
          </button>
          <button
            ref="submitButton4"
            type="submit"
            class="btn btn-primary px-6"
          >
            <span class="indicator-label"> Save Changes </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Card footer-->
      </form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Notifications-->

  <!--begin::Deactivate Account-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_deactivate"
      aria-expanded="true"
      aria-controls="kt_account_deactivate"
    >
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Deactivate Account</h3>
      </div>
    </div>
    <!--end::Card header-->

    <!--begin::Content-->
    <div id="kt_account_deactivate" class="collapse show">
      <!--begin::Form-->
      <form
        id="kt_account_deactivate_form"
        class="form"
        @submit.prevent="deactivateAccount()"
      >
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <div
            class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6"
          >
            <KTIcon
              icon-name="information-5"
              icon-class="fs-2tx text-warning me-4"
            />
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-grow-1">
              <!--begin::Content-->
              <div class="fw-semobold">
                <h4 class="text-gray-800 fw-bold">
                  You Are Deactivating Your Account
                </h4>

                <div class="fs-6 text-gray-600">
                  For extra security, this requires you to confirm your email or
                  phone number when you reset yousignr password. <br /><a
                    class="fw-bold"
                    href="#"
                    >Learn more</a
                  >
                </div>
              </div>
              <!--end::Content-->
            </div>
            <!--end::Wrapper-->
          </div>

          <!--begin::Form input row-->
          <div class="form-check form-check-solid fv-row">
            <input
              name="deactivate"
              class="form-check-input"
              type="checkbox"
              value=""
              id="deactivate"
            />
            <label
              class="form-check-label fw-semobold ps-2 fs-6"
              for="deactivate"
              >Confirm Account Deactivation</label
            >
          </div>
          <!--end::Form input row-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            id="kt_account_deactivate_account_submit"
            ref="submitButton5"
            type="submit"
            class="btn btn-danger fw-semobold"
          >
            <span class="indicator-label"> Deactivate Account </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Card footer-->
      </form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Deactivate Account-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { countries } from "@/core/data/countriesFr";
import { useFichStore } from "@/stores/fich";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";
import {useAuthStore} from "@/stores/auth";
interface ProfileDetails {
  nom: string;
  prenom: string;

  email: string;

  id: string;

  photo: string;


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
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    VForm,
  },
  setup() {
    const submitButton1 = ref<HTMLElement | null>(null);
    const submitButton2 = ref<HTMLElement | null>(null);
    const submitButton3 = ref<HTMLElement | null>(null);
    const submitButton4 = ref<HTMLElement | null>(null);
    const submitButton5 = ref<HTMLElement | null>(null);
    const updateEmailButton = ref<HTMLElement | null>(null);
    const updatePasswordButton = ref<HTMLElement | null>(null);
    const router = useRouter();
    const emailFormDisplay = ref(false);
    const passwordFormDisplay = ref(false);
    const url = import.meta.env.VITE_APP_URL;
    const fetchedFichError = ref(null);
    const store = useAuthStore();
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
    const isCheckedEmail = ref(false);
    const isCheckedPhone = ref(false);
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
      email: "",
      id: "",
      photo: getAssetPath("media/backendavatars/.jpg"),

    });

    const saveChanges1 = async () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        setTimeout(() => {
          submitButton1.value?.removeAttribute("data-kt-indicator");
        }, 2000);
        var parts = profileDetails.value.photo.split("/");
        let lastSegment = "";
        lastSegment = parts.pop() || ""; // handle potential trailing slash

        profileDetails.value.photo = lastSegment;
        //Send inscription request
        await store.UpdateFich(profileDetails.value);
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

            // Go to page after successfully login
            router.push({ name: "account-overview" });
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

    const saveChanges2 = async () => {
      if (submitButton2.value) {
        // Activate indicator
        submitButton2.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton2.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges3 = () => {
      if (submitButton3.value) {
        // Activate indicator
        submitButton3.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton3.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges4 = () => {
      if (submitButton4.value) {
        // Activate indicator
        submitButton4.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton4.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const deactivateAccount = () => {
      if (submitButton5.value) {
        // Activate indicator
        submitButton5.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton5.value?.removeAttribute("data-kt-indicator");

          Swal.fire({
            text: "Email is successfully changed!",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-light-primary",
            },
          }).then(() => {
            emailFormDisplay.value = false;
          });
        }, 2000);
      }
    };

    const updateEmail = async () => {
      if (updateEmailButton.value) {
        // Activate indicator
        updateEmailButton.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updateEmailButton.value?.removeAttribute("data-kt-indicator");

          emailFormDisplay.value = false;
        }, 2000);
        //Send update email request
        await store.UpdateEmailFunction(
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
            // Refresh page data

            // Go to page after successfully login
            router.push({ name: "account-overview" });
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
      if (updatePasswordButton.value) {
        // Activate indicator
        updatePasswordButton.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updatePasswordButton.value?.removeAttribute("data-kt-indicator");

          passwordFormDisplay.value = false;
        }, 2000);

        //Send update email request
        await store.UpdatePasswordFunction(
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

            // Go to page after successfully login
            router.push({ name: "account-overview" });
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

    onMounted(() => {
      profileDetails.value.photo = url + store.user.photo;
      profileDetails.value.nom = store.user.nom;
      profileDetails.value.prenom = store.user.prenom;
    });
    return {
      submitButton1,
      submitButton2,
      submitButton3,
      submitButton4,
      submitButton5,
      saveChanges1,
      saveChanges2,
      saveChanges3,
      saveChanges4,
      deactivateAccount,
      profileDetails,
      emailFormDisplay,
      passwordFormDisplay,
      removeImage,
      profileDetailsValidator,
      changeEmail,
      changePassword,
      updateEmailButton,
      updatePasswordButton,
      updateEmail,
      updatePassword,
      getAssetPath,
      countries,
      UpdateImage,
      isCheckedEmail,
      isCheckedPhone,
      updateEmailInterface,
      updatePasswordInterface,
    };
  },
});
</script>
