<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row" v-if="demande">
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
              <img :src="demande.photo" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
            >
              {{ demande.nom }} {{ demande.prenom }}
            </a>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-semobold text-muted mb-6">
              <span
                :class="getStatusColorClass(demande.demande_status)"
                class="badge fw-bold me-auto px-4 py-3"
                >{{ capitalizeFirstLetter(demande.demande_status) }}</span
              >
            </div>
            <!--end::Position-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bold rotate collapsible text-uppercase"
              data-bs-toggle="collapse"
              href="#kt_demande_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_demande_view_details"
            >
              Détails
            </div>
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_demande_view_details" class="collapse show">
            <div class="py-5 fs-6">
              <!--begin::Badge-->
              <span
                :class="getStatusColorClass(demande.demande_status)"
                class="badge fw-bold me-auto px-4 py-3"
                >{{ capitalized(demande.demande_status) }}</span
              >

              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Identifiant de compte</div>
              <div class="text-gray-600">ID-45453423</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Email</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary">
                  {{ demande.email }}</a
                >
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Adresse</div>
              <div class="text-gray-600">
                {{ demande.adresse }}
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Pays</div>
              <div class="text-gray-600">{{ demande.country }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Téléphone</div>
              <div class="text-gray-600">{{ demande.telephone }}</div>
              <!--begin::Details item-->
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
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
            href="#kt_demande_view_overview_tab"
            >Overview</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-bs-toggle="tab"
            href="#kt_demande_view_overview_events_and_logs_tab"
            >Events</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-kt-countup-tabs="true"
            data-bs-toggle="tab"
            href="#kt_demande_edit_view"
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
          id="kt_demande_view_overview_tab"
          role="tabpanel"
        >
          <!--begin::Card-->
          <div class="card pt-4 mb-6 mb-xl-9">
            <!--begin::Card header-->
            <div class="card-header border-0">
              <!--begin::Card title-->
              <div class="card-title text-uppercase">
                <h2>Détails De demande</h2>
              </div>
              <!--end::Card title-->

              <!--begin::Card toolbar-->
              <div class="card-toolbar">
                <!--begin::Filter-->
                <!--end::Filter-->
              </div>
              <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->

            <!--begin::Card body-->
            <div class="card-body pt-0 pb-5">
              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Nom et Prénom</div>
                </div>
                <!--end::Col-->
                <!--begin::Col-->

                <div class="col-xl-4">
                  <span class="form-control form-control-solid">{{
                    demande.nom
                  }}</span>
                </div>

                <div class="col-xl-4">
                  <span class="form-control form-control-solid">{{
                    demande.prenom
                  }}</span>
                </div>

                <!--end::Col-->
              </div>
              <!--end::Row-->
              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Email</div>
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-xl-8">
                  <span class="form-control form-control-solid">{{
                    demande.email
                  }}</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->

              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Etablisement</div>
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-xl-8">
                  <span class="form-control form-control-solid">{{
                    demande.etablisement
                  }}</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Type ecole</div>
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-xl-8">
                  <span class="form-control form-control-solid">{{
                    demande.typeecole
                  }}</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->

              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Telephone</div>
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-xl-8">
                  <span class="form-control form-control-solid">{{
                    demande.telephone
                  }}</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Pays</div>
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-xl-8">
                  <span class="form-control form-control-solid">{{
                    demande.country
                  }}</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Ville</div>
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-xl-8">
                  <span class="form-control form-control-solid">{{
                    demande.ville
                  }}</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Cite</div>
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-xl-8">
                  <span class="form-control form-control-solid">{{
                    demande.cite
                  }}</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Adresse</div>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-xl-8">
                  <span class="form-control form-control-solid">{{
                    demande.adresse
                  }}</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Adresse 2</div>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-xl-8">
                  <span class="form-control form-control-solid">
                    {{ demande.adresse2 }}</span
                  >
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->

              <!--begin::Row-->
              <div class="row mb-8">
                <!--begin::Col-->
                <div class="col-xl-3">
                  <div class="fs-6 fw-semibold mt-2 mb-3">Communication</div>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-xl-9">
                  <!--begin::Wrapper-->
                  <div class="d-flex fw-semibold h-100">
                    <!--begin::Checkbox-->
                    <div
                      class="form-check form-check-custom form-check-solid me-9"
                    >
                      <input
                        v-model="isCheckedEmail"
                        disabled
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="email"
                      />
                      <label class="form-check-label ms-3" for="email">
                        Email
                      </label>
                    </div>
                    <!--end::Checkbox-->

                    <!--begin::Checkbox-->
                    <div class="form-check form-check-custom form-check-solid">
                      <input
                        v-model="isCheckedPhone"
                        disabled
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="phone"
                        checked="checked"
                      />
                      <label class="form-check-label ms-3" for="phone">
                        Phone
                      </label>
                    </div>
                    <!--end::Checkbox-->
                  </div>
                  <!--end::Wrapper-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::Card-->
          <div>
            <!-- Fullscreen Image View -->
            <div v-if="showFullscreen" class="fullscreen-image-view">
              <div class="overlay-bg" @click="closeFullscreen"></div>
              <div class="fullscreen-image-container">
                <img
                  :style="{
                    maxWidth: '75%',
                    maxHeight: '75%',
                    width: 'auto',
                    height: 'auto',
                  }"
                  :src="fullscreenImageUrl"
                  alt="Fullscreen Image"
                />
                <button class="close-button" @click="closeFullscreen">
                  Close
                </button>
              </div>
            </div>

            <!-- Card View -->
            <div v-else class="card pb-4 pt-4 mb-xl-9">
              <div class="row g-10 row-cols-2 row-cols-lg-4">
                <div class="col-md-4">
                  <a
                    class="d-block overlay"
                    @click="openFullscreen(url + demande.copie1)"
                  >
                    <div
                      class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                      :style="{
                        backgroundImage: 'url(' + url + demande.copie1 + ')',
                      }"
                    ></div>
                    <div
                      class="overlay-layer card-rounded bg-dark bg-opacity-25"
                    >
                      <i class="ki-duotone ki-eye fs-3x text-white"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span
                      ></i>
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a
                    class="d-block overlay"
                    @click="openFullscreen(url + demande.copie2)"
                  >
                    <div
                      class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                      :style="{
                        backgroundImage: 'url(' + url + demande.copie2 + ')',
                      }"
                    ></div>
                    <div
                      class="overlay-layer card-rounded bg-dark bg-opacity-25"
                    >
                      <i class="ki-duotone ki-eye fs-3x text-white"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span
                      ></i>
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a
                    class="d-block overlay"
                    @click="openFullscreen(url + demande.copie3)"
                  >
                    <div
                      class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                      :style="{
                        backgroundImage: 'url(' + url + demande.copie3 + ')',
                      }"
                    ></div>
                    <div
                      class="overlay-layer card-rounded bg-dark bg-opacity-25"
                    >
                      <i class="ki-duotone ki-eye fs-3x text-white"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span
                      ></i>
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a
                    class="d-block overlay"
                    @click="openFullscreen(url + demande.copie4)"
                  >
                    <div
                      class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                      :style="{
                        backgroundImage: 'url(' + url + demande.copie4 + ')',
                      }"
                    ></div>
                    <div
                      class="overlay-layer card-rounded bg-dark bg-opacity-25"
                    >
                      <i class="ki-duotone ki-eye fs-3x text-white"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span
                      ></i>
                    </div>
                  </a>
                </div>
                <!-- Add more columns with images here if needed -->
              </div>
            </div>
          </div>
        </div>
        <!--end:::Tab pane-->
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_demande_view_overview_events_and_logs_tab"
          role="tabpanel"
        >
          <Events card-classes="mb-6 mb-xl-9"></Events>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div class="tab-pane fade" id="kt_demande_edit_view" role="tabpanel">
          <!--begin::Basic info-->
          <div class="card mb-5 mb-xl-10">
            <!--begin::Card header-->
            <div
              class="card-header border-0 cursor-pointer"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_account__demande_profile_details"
              aria-expanded="true"
              aria-controls="kt_account__demande_profile_details"
            >
              <!--begin::Card title-->
              <div class="card-title m-0">
                <h3 class="fw-bold m-0">Détails du profil</h3>
              </div>
              <!--end::Card title-->
            </div>
            <!--begin::Card header-->

            <!--begin::Content-->
            <div id="kt_account__demande_profile_details" class="collapse show">
              <!--begin::Form-->
              <VForm
                id="kt_account__demande_profile_details_update_form"
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

                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label
                      class="col-lg-4 col-form-label required fw-semobold fs-6"
                      >Etablisement</label
                    >
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <Field
                        type="text"
                        name="etablissement"
                        class="form-control form-control-lg form-control-solid"
                        placeholder="nom etablissement"
                        v-model="profileDetails.etablisement"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="etablissement" />
                        </div>
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->

                  <!--begin::Row-->
                  <div class="row mb-6">
                    <label
                      class="col-lg-4 col-form-label required fw-semobold fs-6"
                      >Type Etablisement</label
                    >

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <!--begin::Option-->
                      <Field
                        as="select"
                        name="typeecole"
                        class="form-select form-select-solid form-select-lg fw-semobold"
                        v-model="profileDetails.typeecole"
                      >
                        <option value="">
                          Choisissez un type d'établissement...
                        </option>
                        <option value="Privé">Privé</option>
                        <option value="Publique">Publique</option>
                      </Field>
                      <!--end::Option-->
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="typeecole" />
                        </div>
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Row-->

                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">
                      <span class="required">Numéro du téléphone</span>

                      <i
                        class="fas fa-exclamation-circle ms-1 fs-7"
                        data-bs-toggle="tooltip"
                        title="Le numéro de téléphone doit être actif"
                      ></i>
                    </label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <Field
                        type="tel"
                        name="phone"
                        class="form-control form-control-lg form-control-solid"
                        placeholder="tel"
                        v-model="profileDetails.telephone"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="phone" />
                        </div>
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6">
                      <span class="required">Pays</span>

                      <i
                        class="fas fa-exclamation-circle ms-1 fs-7"
                        data-bs-toggle="tooltip"
                        title="Pays d'origine"
                      ></i>
                    </label>
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <Field
                        as="select"
                        name="country"
                        class="form-select form-select-solid form-select-lg fw-semobold"
                        v-model="profileDetails.country"
                      >
                        <option value="">Choisissez un pays...</option>
                        <option
                          v-for="(item, i) in countries"
                          :key="`countries-select-option-${i}`"
                          :value="item.name"
                        >
                          {{ item.name }}
                        </option>
                      </Field>
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="country" />
                        </div>
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label
                      class="required col-lg-4 col-form-label fw-semobold fs-6"
                      >Adresse 1</label
                    >
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <Field
                        v-model="profileDetails.adresse"
                        class="form-control form-control-lg form-control-solid"
                        placeholder=""
                        name="adresse"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="adresse"></ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6"
                      >Adresse 2</label
                    >
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <Field
                        v-model="profileDetails.adresse2"
                        class="form-control form-control-lg form-control-solid"
                        placeholder=""
                        name="address2"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="address2"></ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label
                      class="required col-lg-4 col-form-label fw-semobold fs-6"
                      >Ville</label
                    >
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <Field
                        v-model="profileDetails.ville"
                        class="form-control form-control-lg form-control-solid"
                        placeholder=""
                        name="ville"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="ville"></ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label
                      class="required col-lg-4 col-form-label fw-semobold fs-6"
                      >Cité</label
                    >
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <Field
                        v-model="profileDetails.cite"
                        class="form-control form-control-lg form-control-solid"
                        placeholder=""
                        name="cite"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="cite"></ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label
                      class="required col-lg-4 col-form-label fw-semobold fs-6"
                      >Code postal</label
                    >
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <Field
                        v-model="profileDetails.codepostal"
                        class="form-control form-control-lg form-control-solid"
                        placeholder=""
                        name="codepostal"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="codepostal"></ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="row mb-6">
                    <!--begin::Label-->
                    <label class="col-lg-4 col-form-label fw-semobold fs-6"
                      >Communication</label
                    >
                    <!--end::Label-->

                    <!--begin::Col-->
                    <div class="col-lg-8 fv-row">
                      <!--begin::Options-->
                      <div class="d-flex align-items-center mt-3">
                        <!--begin::Option-->
                        <label
                          class="form-check form-check-inline form-check-solid me-5"
                        >
                          <input
                            class="form-check-input"
                            name="communication[]"
                            type="checkbox"
                            v-model="isCheckedEmail"
                          />
                          <span class="fw-semobold ps-2 fs-6"> E-mail </span>
                        </label>

                        <!--end::Option-->

                        <!--begin::Option-->
                        <label
                          class="form-check form-check-inline form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            name="communication[]"
                            type="checkbox"
                            v-model="isCheckedPhone"
                          />
                          <span class="fw-semobold ps-2 fs-6"
                            >Numéro du téléphone
                          </span>
                        </label>
                        <!--end::Option-->
                      </div>
                      <!--end::Options-->
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
                    id="kt_account__demande_profile_details_submit"
                    ref="submitDemandeForm"
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
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";


import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRoute, useRouter } from "vue-router";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { useStudentStore } from "@/stores/student";
import { countries } from "@/core/data/countriesFr";
interface ImageItem {
  url: string;
}
interface ProfileDetails {
  nom: string;
  prenom: string;
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

  photo: string;

  tel_format_national: string;
  telephone: string;
  typeecole: string;
  updated_at: string;
  user_id: string;
  ville: string;
  contact_email: number;
  contact_phone: number;
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
  name: "demande-details",
  components: {
    Events,

    Dropdown3,
    NewCardModal,
    ErrorMessage,
    Field,
    VForm,
  },
  setup() {
    const images = [
      { url: "/uploads/default/5.jpg" },
      { url: "/uploads/default/6.jpg" },
      { url: "/uploads/default/7.jpg" },
      { url: "/uploads/default/8.jpg" },
      { url: "/uploads/default/9.jpg" },
    ];
    const fullscreenIndex = ref(-1);
    const fullscreenImageUrl = ref("");
    const showFullscreen = ref(false);
    const demande = ref(null);
    const route = useRoute();
    const projects = ref([]);
    const url = import.meta.env.VITE_APP_URL;
    const store = useStudentStore();
    const getDemande = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "admin/demandes/" + route.params.id
          );

          demande.value = response.data.data;
          if (demande.value !== null) {
            profileDetails.value = demande.value;
            console.log("fetchedFichData", url + profileDetails.value.photo);
            profileDetails.value.photo = url + profileDetails.value.photo;
            if (profileDetails.value.contact_email === 1) {
              isCheckedEmail.value = true;
            } else {
              isCheckedEmail.value = false;
            }
            if (profileDetails.value.contact_phone === 1) {
              isCheckedPhone.value = true;
            } else {
              isCheckedPhone.value = false;
            }
          }

          console.log("demande:", demande.value);
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
    function getStatusColorClass(status) {
      if (status === "en attente") {
        return "badge-light-primary";
      } else if (status === "en cours de traitement") {
        return "badge-light-primary";
      } else if (status === "active") {
        return "badge-light-success";
      } else if (status === "en retard") {
        return "badge-light-danger";
      } else if (status === "inactive") {
        return "badge-light-danger";
      } else {
        return "badge-light-primary"; // Default color if status is null or unknown
      }
    }

    function getBarStatus(status) {
      if (status === "en attente") {
        return "badge-light-primary";
      } else if (status === "en cours de traitement") {
        return "badge-light-primary";
      } else if (status === "active") {
        return "badge-light-success";
      } else if (status === "en retard") {
        return "badge-light-warning";
      } else if (status === "inactive") {
        return "badge-light-danger";
      } else {
        return "badge-light-primary"; // Default color if status is null or unknown
      }
    }
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

    const removeImage = () => {
      profileDetails.value.photo = "/media/avatars/blank.png";
    };
    const UpdateImage = (link) => {
      profileDetails.value.photo = link;
    };

    const profileDetailsValidator = Yup.object().shape({
      nom: Yup.string().required().label("nom"),
      prenom: Yup.string().required().label("prenom"),
      etablissement: Yup.string().required().label("etablissement"),
      typeecole: Yup.string().required().label("type etablissement"),
      phone: Yup.string().required().label("Numéro du téléphone"),
      country: Yup.string().required().label("pays"),
      adresse: Yup.string().required().label("Address1"),
      ville: Yup.string().required().label("Ville"),
      cite: Yup.string().required().label("Cité"),
      codepostal: Yup.string().required().label("Code postal"),
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

      photo: getAssetPath("media/backendavatars/blank.png"),

      tel_format_national: "",
      telephone: "",
      typeecole: "",
      updated_at: "",
      user_id: "",
      ville: "",
      contact_email: 1,
      contact_phone: 1,
    });
    const submitDemandeForm = ref<HTMLElement | null>(null);
    const saveChanges1 = async () => {
      console.log("test", profileDetails.value.user_id);
      if (submitDemandeForm.value) {
        // Activate indicator
        submitDemandeForm.value.setAttribute("data-kt-indicator", "on");
        setTimeout(() => {
          submitDemandeForm.value?.removeAttribute("data-kt-indicator");
        }, 2000);
        var parts = profileDetails.value.photo.split("/");
        let lastSegment = "";
        lastSegment = parts.pop() || ""; // handle potential trailing slash

        profileDetails.value.photo = lastSegment;
        if (isCheckedEmail.value === true) {
          profileDetails.value.contact_email = 1;
        } else {
          profileDetails.value.contact_email = 0;
        }
        if (isCheckedPhone.value === true) {
          profileDetails.value.contact_phone = 1;
        } else {
          profileDetails.value.contact_phone = 0;
        }
        //Send inscription request
        await store.UpdateDemande(
          profileDetails.value,
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
            getDemande();
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

      await getDemande();
      // Disable loading indicator
      document.body.classList.remove("page-loading");
      document.body.removeAttribute("data-kt-app-page-loading");
    });
    // Function to load data (you should replace this with your actual data loading logic)
    const loadData = async () => {};

    function openFullscreen(imageUrl: string) {
      fullscreenImageUrl.value = imageUrl;
      showFullscreen.value = true;
    }
    function closeFullscreen() {
      fullscreenImageUrl.value = "";
      showFullscreen.value = false;
    }
    return {
      closeFullscreen,
      openFullscreen,
      showFullscreen,
      fullscreenImageUrl,
      images,
      getAssetPath,
      demande,
      url,
      capitalized,
      tableHeader,
      tableData,
      projects,
      deleteRecord,
      getStatusColorClass,
      getBarStatus,
      capitalizeFirstLetter,
      formatDate,
      profileDetails,
      saveChanges1,
      profileDetailsValidator,
      UpdateImage,
      emailFormDisplay,
      passwordFormDisplay,
      isCheckedPhone,
      isCheckedEmail,
      countries,
      updatePasswordInterface,
      updateEmailInterface,
      removeImage,
      submitDemandeForm,
      updateEmailForm,
      updatePasswordForm,
      createAppStepperRef,
      loadData,
    };
  },
});
</script>
<style scoped>
/* Your custom styles for fullscreen view */
.fullscreen-image-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fullscreen-image-container {
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.fullscreen-image-container img {
  max-width: 100%;
  max-height: 100%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 12px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

</style>
