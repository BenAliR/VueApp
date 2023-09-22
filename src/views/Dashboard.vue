<template>
  <!--begin::Toast-->
  <div class="position-fixed top-0 end-0 p-3 z-index-3">
    <div v-for="(toast, index) in toasts" :key="index">
      <Toast
        :show="toast.show"
        :title="toast.title"
        :timestamp="toast.timestamp"
        :message="toast.message"
        @close="closeToast(index)"
      />
    </div>
  </div>
  <!--end::Toast-->
  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">
    <button @click="showToast">Show Toast</button>
    <!--begin::Col-->
    <div class="col-xl-4 mb-xl-10">
      <!--begin::Lists Widget 19-->
      <div class="card card-flush h-xl-100">
        <!--begin::Heading-->
        <div
          class="card-header rounded bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-250px"
          :style="`
        background-image: url('${getAssetPath(
          'media/svg/shapes/top-green.png'
        )}');`"
          data-bs-theme="light"
        >
          <!--begin::Title-->
          <h3 class="card-title align-items-start flex-column text-white pt-15">
            <span class="fw-bold fs-2x mb-3">Mes tâches</span>

            <div class="fs-4 text-white">
              <span class="opacity-75">Vous Avez </span>

              <span class="position-relative d-inline-block">
                <router-link
                  class="link-white opacity-90-hover fw-bold d-block mb-1"
                  :to="{
                    name: 'student-all-tasks-listing',
                  }"
                >
                  {{ PendingTasks.length + InProgressTasks.length }} Tâches
                </router-link>

                <!--begin::Separator-->
                <span
                  class="position-absolute opacity-50 bottom-0 start-0 border-2 border-body border-bottom w-100"
                ></span>
                <!--end::Separator-->
              </span>

              <span class="opacity-75"> à compléter</span>
            </div>
          </h3>
          <!--end::Title-->

          <!--begin::Toolbar-->
          <div class="card-toolbar pt-5">
            <!--begin::Menu-->
            <button
              class="btn btn-sm btn-icon btn-active-color-primary btn-color-white bg-white bg-opacity-25 bg-hover-opacity-100 bg-hover-white bg-active-opacity-25 w-20px h-20px"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-overflow="true"
            >
              <i class="ki-duotone ki-dots-square fs-4"
                ><span class="path1"></span><span class="path2"></span
                ><span class="path3"></span><span class="path4"></span
              ></i>
            </button>

            <!--begin::Menu 2-->
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">
                  Quick Actions
                </div>
              </div>
              <!--end::Menu item-->

              <!--begin::Menu separator-->
              <div class="separator mb-3 opacity-75"></div>
              <!--end::Menu separator-->

              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3"> New Ticket </a>
              </div>
              <!--end::Menu item-->

              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3"> New Customer </a>
              </div>
              <!--end::Menu item-->

              <!--begin::Menu item-->
              <div
                class="menu-item px-3"
                data-kt-menu-trigger="hover"
                data-kt-menu-placement="right-start"
              >
                <!--begin::Menu item-->
                <a href="#" class="menu-link px-3">
                  <span class="menu-title">New Group</span>
                  <span class="menu-arrow"></span>
                </a>
                <!--end::Menu item-->

                <!--begin::Menu sub-->
                <div class="menu-sub menu-sub-dropdown w-175px py-4">
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link px-3"> Admin Group </a>
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link px-3"> Staff Group </a>
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link px-3"> Member Group </a>
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu sub-->
              </div>
              <!--end::Menu item-->

              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3"> New Contact </a>
              </div>
              <!--end::Menu item-->

              <!--begin::Menu separator-->
              <div class="separator mt-3 opacity-75"></div>
              <!--end::Menu separator-->

              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content px-3 py-3">
                  <a class="btn btn-primary btn-sm px-4" href="#">
                    Generate Reports
                  </a>
                </div>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu 2-->

            <!--end::Menu-->
          </div>
          <!--end::Toolbar-->
        </div>
        <!--end::Heading-->

        <!--begin::Body-->
        <div class="card-body mt-n20">
          <!--begin::Stats-->
          <div class="mt-n20 position-relative">
            <!--begin::Row-->
            <div class="row g-3 g-lg-6">
              <!--begin::Col-->
              <div class="col-6">
                <!--begin::Items-->
                <div class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-30px me-5 mb-8">
                    <span class="symbol-label">
                      <i class="ki-duotone ki-files-tablet fs-1 text-primary"
                        ><span class="path1"></span><span class="path2"></span
                      ></i>
                    </span>
                  </div>
                  <!--end::Symbol-->

                  <!--begin::Stats-->
                  <div class="m-0">
                    <!--begin::Number-->
                    <span
                      class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
                      >{{ PendingTasks.length }}</span
                    >
                    <!--end::Number-->

                    <!--begin::Desc-->
                    <span class="text-gray-500 fw-semibold fs-6"
                      >Encore à commencer</span
                    >
                    <!--end::Desc-->
                  </div>
                  <!--end::Stats-->
                </div>
                <!--end::Items-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-6">
                <!--begin::Items-->
                <div class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-30px me-5 mb-8">
                    <span class="symbol-label">
                      <i class="ki-duotone ki-tablet-text-up fs-1 text-primary"
                        ><span class="path1"></span><span class="path2"></span
                      ></i>
                    </span>
                  </div>
                  <!--end::Symbol-->

                  <!--begin::Stats-->
                  <div class="m-0">
                    <!--begin::Number-->
                    <span
                      class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
                      >{{ InProgressTasks.length }}</span
                    >
                    <!--end::Number-->

                    <!--begin::Desc-->
                    <span class="text-gray-500 fw-semibold fs-6">En cours</span>
                    <!--end::Desc-->
                  </div>
                  <!--end::Stats-->
                </div>
                <!--end::Items-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-6">
                <!--begin::Items-->
                <div class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-30px me-5 mb-8">
                    <span class="symbol-label">
                      <i class="ki-duotone ki-award fs-1 text-primary"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span
                      ></i>
                    </span>
                  </div>
                  <!--end::Symbol-->

                  <!--begin::Stats-->
                  <div class="m-0">
                    <!--begin::Number-->
                    <span
                      class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
                      >{{ CompletedTasks.length }}</span
                    >
                    <!--end::Number-->

                    <!--begin::Desc-->
                    <span class="text-gray-500 fw-semibold fs-6">Complété</span>
                    <!--end::Desc-->
                  </div>
                  <!--end::Stats-->
                </div>
                <!--end::Items-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-6">
                <!--begin::Items-->
                <div class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-30px me-5 mb-8">
                    <span class="symbol-label">
                      <i class="ki-duotone ki-tablet-book fs-1 text-primary"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span
                      ></i>
                    </span>
                  </div>
                  <!--end::Symbol-->

                  <!--begin::Stats-->
                  <div class="m-0">
                    <!--begin::Number-->
                    <span
                      class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"
                      >{{ Tasks.length }}</span
                    >
                    <!--end::Number-->

                    <!--begin::Desc-->
                    <span class="text-gray-500 fw-semibold fs-6"
                      >Tâches totales</span
                    >
                    <!--end::Desc-->
                  </div>
                  <!--end::Stats-->
                </div>
                <!--end::Items-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Lists Widget 19-->
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-8 mb-5 mb-xl-10">
      <!--begin::Row-->
      <div class="row g-5 g-xl-10">
        <!--begin::Col-->
        <div class="col-xl-6 mb-xl-10">
          <!--begin::Slider Widget 1-->
          <div
            id="kt_sliders_widget_1_slider"
            class="card card-flush carousel carousel-custom carousel-stretch slide h-xl-100"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <!--begin::Header-->
            <div class="card-header  pt-5">
              <!--begin::Title-->
              <h4 class="card-title d-flex align-items-start flex-column">
                <span class="card-label fw-bold text-gray-800"
                  >Dernier Projets</span
                >
                <span class="text-gray-400 mt-1 fw-bold fs-7"
                  >{{ projects.length }} projets</span
                >
              </h4>
              <!--end::Title-->

              <!--begin::Toolbar-->
              <div class="card-toolbar">
                <!--begin::Carousel Indicators-->
                <ol
                  class="p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-primary"
                >
                  <li
                    v-for="(proj, el) in projects"
                    :key="el"
                    :data-bs-target="'#kt_sliders_widget_' + el + '_slider'"
                    :data-bs-slide-to="el"
                    class="ms-1"
                    :class="{
                      active: el === activeIndex,
                    }"
                    @click="ChangeIndex(el)"
                  ></li>
                </ol>
                <!--end::Carousel Indicators-->
              </div>
              <!--end::Toolbar-->
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body py-6">
              <div class="d-flex align-items-center" v-if="!projects.length">
                <div class="symbol symbol-100px me-5">
                  <img
                    :src="getAssetPath('media/svg/illustrations/easy/3.svg')"
                    alt=""
                  />
                </div>
                <div class="d-flex justify-content-start flex-column">
                  <span class="text-dark fw-bold text-hover-primary fs-6"
                    >Il n'y a pas des projets </span
                  ><span class="text-muted fw-semobold text-muted d-block fs-7"
                    >Récemment</span
                  >
                </div>
              </div>
              <!-- Begin Carousel -->
              <div class="carousel-inner mt-n5">
                <!-- Begin Item -->
                <div
                  v-for="(project, index) in projects"
                  :key="index"
                  :class="{
                    active: index === activeIndex,
                    show: (index = activeIndex),
                  }"
                  class="carousel-item"
                >
                  <!-- Begin Wrapper -->
                  <div class="d-flex align-items-center mb-5">
                    <!-- Begin Chart -->
                    <div class="w-80px flex-shrink-0 me-2">
                      <!--begin::Image-->
                      <div
                        class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-auto ms-n3 initialized"
                        :style="{
                          backgroundImage: `url(${getAssetPath(
                            'media/svg/shapes/widget-bg-1.png'
                          )})`,
                        }"
                        style="height: 100px; min-height: 100px"
                      ></div>
                      <!--end::Image-->
                      <!-- Your chart content goes here -->
                    </div>
                    <!-- End Chart -->

                    <!-- Begin Info -->
                    <div class="m-0">
                      <!-- Begin Subtitle -->
                      <h4 class="fw-bold text-gray-800 mb-3" v-truncate-text:20>
                        {{ project.title }}
                      </h4>
                      <!-- End Subtitle -->

                      <!-- Begin Items -->
                      <!--begin::Items-->
                      <div class="d-flex d-grid gap-5">
                        <!--begin::Item-->
                        <div class="d-flex flex-column flex-shrink-0 me-4">
                          <!--begin::Section-->
                          <span
                            class="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2"
                          >
                            <i
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            {{ project.tasks.length }} Tasks
                          </span>
                          <!--end::Section-->

                          <!--begin::Section-->
                          <span
                            class="d-flex align-items-center text-gray-400 fw-bold fs-7"
                          >
                            <i
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            {{ project.team.users.length }} Members
                          </span>
                          <!--end::Section-->
                        </div>
                        <!--end::Item-->

                        <!--begin::Item-->
                        <div class="d-flex flex-column flex-shrink-0">
                          <!--begin::Section-->
                          <span
                            class="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2"
                          >
                            <i
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            {{ project.meetings.length }} Meetings
                          </span>
                          <!--end::Section-->

                          <!--begin::Section-->
                          <span
                            class="d-flex align-items-center text-gray-400 fw-bold fs-7"
                          >
                            <i
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            {{ project.team_size }} Team
                          </span>
                          <!--end::Section-->
                        </div>
                        <!--end::Item-->
                      </div>
                      <!--end::Items-->
                      <!-- End Items -->
                    </div>
                    <!-- End Info -->
                  </div>
                  <!-- End Wrapper -->

                  <!-- Begin Action -->
                  <div class="m-0">
                    <span
                      @click="ChangeIndex2"
                      class="btn btn-sm btn-light me-2 mb-2"
                      >Sauter ça</span
                    >

                    <router-link
                      class="btn btn-sm btn-primary mb-2"
                      :to="{
                        name: 'project-overview',
                        params: { slug: project.slug },
                      }"
                    >
                      Details</router-link
                    >
                  </div>
                  <!-- End Action -->
                </div>
                <!-- End Item -->
              </div>
              <!-- End Carousel -->
            </div>
            <!--end::Body-->
          </div>
          <!--end::Slider Widget 1-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-6 mb-5 mb-xl-10">
          <!--begin::Slider Widget 2-->
          <div
            id="kt_sliders_widget_events_slider"
            class="card card-flush carousel carousel-custom carousel-stretch slide h-xl-100"
            data-bs-ride="carousel"
            data-bs-interval="5500"
          >
            <!--begin::Header-->
            <div class="card-header pt-5">
              <!--begin::Title-->
              <h4 class="card-title d-flex align-items-start flex-column">
                <span class="card-label fw-bold text-gray-800"
                  >Les événements d'aujourd'hui</span
                >
                <span class="text-gray-400 mt-1 fw-bold fs-7"
                  >{{ events.length }} événements sur toutes les activités</span
                >
              </h4>
              <!--end::Title-->

              <!--begin::Toolbar-->
              <div class="card-toolbar">
                <!--begin::Carousel Indicators-->
                <ol
                  class="p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-success"
                >
                  <li
                    aria-current="true"
                    v-for="(ev, el) in events"
                    :key="el"
                    :data-bs-target="
                      '#kt_sliders_widget_' + ev.title + '_slider'
                    "
                    :data-bs-slide-to="el"
                    class="ms-1"
                    :class="{
                      active: el === activeIndexEvent,
                    }"
                    @click="ChangeIndexEvent(el)"
                  ></li>
                </ol>
                <!--end::Carousel Indicators-->
              </div>
              <!--end::Toolbar-->
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body py-6">
              <div class="d-flex align-items-center" v-if="!events.length">
                <div class="symbol symbol-100px me-5">
                  <img
                    :src="getAssetPath('media/svg/illustrations/easy/2.svg')"
                    alt=""
                  />
                </div>
                <div class="d-flex justify-content-start flex-column">
                  <span class="text-dark fw-bold text-hover-primary fs-6"
                    >Il n'y a pas d'événements </span
                  ><span class="text-muted fw-semobold text-muted d-block fs-7"
                    >Aujourd'hui</span
                  >
                </div>
              </div>
              <!--begin::Carousel-->
              <div class="carousel-inner">
                <!--begin::Item-->
                <div
                  v-for="(ev, index) in events"
                  :key="index"
                  :class="{
                    active: index === activeIndexEvent,
                    show: index === activeIndexEvent,
                  }"
                  class="carousel-item"
                >
                  <!--begin::Wrapper-->
                  <div class="d-flex align-items-center mb-9">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-70px symbol-circle me-5">
                      <span class="symbol-label bg-light-success">
                        <i class="ki-duotone ki-abstract-24 fs-3x text-success"
                          ><span class="path1"></span><span class="path2"></span
                        ></i>
                      </span>
                    </div>
                    <!--end::Symbol-->

                    <!--begin::Info-->
                    <div class="m-0">
                      <!--begin::Subtitle-->
                      <h4 class="fw-bold text-gray-800 mb-3">{{ ev.title }}</h4>
                      <!--end::Subtitle-->

                      <!--begin::Items-->
                      <div class="d-flex d-grid gap-5">
                        <!--begin::Item-->
                        <div class="d-flex flex-column flex-shrink-0 me-4">
                          <!--begin::Section-->
                          <span
                            class="d-flex align-items-center fs-7 fw-bold text-gray-400 mb-2"
                          >
                            <i
                              class="ki-duotone ki-time fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            {{ ev.start_datetime }}
                          </span>
                          <!--end::Section-->

                          <!--begin::Section-->
                          <span
                            class="d-flex align-items-center text-gray-400 fw-bold fs-7"
                          >
                            <i
                              class="ki-duotone ki-time fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            {{ ev.end_datetime }}
                          </span>
                          <!--end::Section-->
                        </div>
                        <!--end::Item-->
                      </div>
                      <!--end::Items-->
                    </div>
                    <!--end::Info-->
                  </div>
                  <!--end::Wrapper-->

                  <!--begin::Action-->
                  <div class="m-0">
                    <span
                      @click="ChangeIndexEvent2"
                      class="btn btn-sm btn-light me-2 mb-2"
                      >Sauter ça</span
                    >

                    <span
                      class="btn btn-sm btn-success mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_campaign"
                      >Details</span
                    >
                  </div>
                  <!--end::Action-->
                </div>
                <!--end::Item-->
              </div>
              <!--end::Carousel-->
            </div>
            <!--end::Body-->
          </div>
          <!--end::Slider Widget 2-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Engage widget 4-->
      <div
        class="card border-transparent"
        data-bs-theme="light"
        style="background-color: #1c325e"
      >
        <!--begin::Body-->
        <div class="card-body d-flex ps-xl-15 mb-10">
          <!--begin::Wrapper-->
          <div class="m-0">
            <!--begin::Title-->
            <div
              class="position-relative fs-2x z-index-2 fw-bold text-white mb-7"
            >
              <span class="me-2">
                Vous avez
                <span class="position-relative d-inline-block text-danger">
                  <a class="text-danger opacity-75-hover"
                    >{{ reminders.length }} Reminder.</a
                  >

                  <!--begin::Separator-->
                  <span
                    class="position-absolute opacity-50 bottom-0 start-0 border-4 border-danger border-bottom w-100"
                  ></span>
                  <!--end::Separator-->
                </span>
              </span>
              assurez-vous <br />
              De tous les faire
            </div>
            <!--end::Title-->

            <!--begin::Action-->
            <div class="mb-3">
              <span
                class="btn btn-danger fw-semibold me-2"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_upgrade_plan"
              >
                Get Reward
              </span>

              <a
                class="btn btn-color-white bg-white bg-opacity-15 bg-hover-opacity-25 fw-semibold"
              >
                How to
              </a>
            </div>
            <!--begin::Action-->
          </div>
          <!--begin::Wrapper-->

          <!--begin::Illustration-->
          <img
            :src="getAssetPath('media/illustrations/sigma-1/17-dark.png')"
            class="position-absolute me-3 bottom-0 end-0 h-200px"
            alt=""
          />
          <!--end::Illustration-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Engage widget 4-->
    </div>
    <!--end::Col-->
  </div>
  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-4">
      <!--begin::List Widget 3-->
      <div class="card card-xxl-stretch mb-xl-3">
        <!--begin::Header-->
        <div class="card-header border-0">
          <h3 class="card-title fw-bold text-dark">Tâches</h3>

          <div class="card-toolbar">
            <!--begin::Menu-->
            <button
              type="button"
              class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <KTIcon icon-name="category" icon-class="fs-2" />
            </button>
            <Dropdown2></Dropdown2>
            <!--end::Menu-->
          </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body pt-2">
          <div
            class="d-flex align-items-center"
            style="max-width: 100%; margin: 0 auto"
            v-if="!ToDayTasks.length"
          >
            <img
              :src="getAssetPath('media/svg/illustrations/easy/8.svg')"
              alt=""
            />
          </div>
          <template v-for="(item, index) in ToDayTasks" :key="index">
            <!--begin::Item-->
            <div
              :class="{ 'mb-8': ToDayTasks.length - 1 !== index }"
              class="d-flex align-items-center scrollable"
              style="max-height: 370px; overflow-y: auto"
            >
              <!--begin::Bullet-->
              <span
                class="bullet bullet-vertical h-40px"
                :class="{ 'bg-danger': isDueDateClose(item.due_date) }"
              ></span>
              <!--end::Bullet-->

              <!--begin::Description-->
              <div class="mx-5 flex-grow-1" v-if="item.project">
                <router-link
                  class="text-hover-primary fw-bold fs-6"
                  v-truncate-text:35
                  :class="{ 'text-danger': isDueDateClose(item.due_date) }"
                  :to="{
                    name: 'task-overview',
                    params: { id: item.slug, slug: item.project.slug },
                  }"
                >
                  {{ item.title }}
                </router-link>

                <span class="text-muted fw-semobold d-block">{{
                  item.due_date
                }}</span>
              </div>
              <!--end::Description-->
            </div>
            <!--end:Item-->
          </template>
        </div>
        <!--end::Body-->
      </div>
      <!--end:List Widget 3-->
    </div>
    <div class="col-xxl-4">
      <!--begin::List Widget 5-->
      <div class="card card-xxl-stretch mb-5 mb-xl-10">
        <!--begin::Header-->
        <div class="card-header align-items-center border-0 mt-4">
          <h3 class="card-title align-items-start flex-column">
            <span class="fw-bold mb-2 text-dark">Activities</span>
            <span class="text-muted fw-semobold fs-7"
              >{{ activities.length }} Activities</span
            >
          </h3>

          <div class="card-toolbar">
            <!--begin::Menu-->
            <button
              type="button"
              class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <KTIcon icon-name="category" icon-class="fs-2" />
            </button>
            <Dropdown1></Dropdown1>
            <!--end::Menu-->
          </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body pt-5">
          <div
            class="d-flex align-items-center"
            style="max-width: 100%; margin: 0 auto"
            v-if="!activities.length"
          >
            <img
              :src="getAssetPath('media/svg/illustrations/easy/8.svg')"
              alt=""
            />
          </div>
          <!--begin::Timeline-->
          <div
            class="timeline-scroll timeline-label"
            style="max-height: 370px; overflow-y: auto"
          >
            <!--begin::Item-->
            <div
              class="timeline-item"
              v-for="(activity, index) in activities"
              :key="index"
            >
              <!--begin::Label-->
              <div class="timeline-label fw-bold text-gray-800 fs-6">
                {{ getTimeSince(activity.created_at) }}
              </div>
              <!--end::Label-->

              <!--begin::Badge-->
              <div class="timeline-badge">
                <i
                  :style="{ color: getRandomColor() }"
                  class="fa fa-genderless fs-1"
                ></i>
              </div>
              <!--end::Badge-->

              <!--begin::Text-->
              <div class="fw-mormal timeline-content text-muted ps-3">
                {{ activity.description }}
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </div>
          <!--end::Timeline-->
        </div>
        <!--end: Card Body-->
      </div>
      <!--end: List Widget 5-->
    </div>
    <div class="col-xxl-4">
      <!--begin::Mixed Widget 7-->
      <div class="card mb-5 card-xxl-stretch-50 mb-xl-8">
        <div
          id="kt_sliders_widget_meetings_slider"
          class="card card-flush carousel carousel-custom carousel-stretch slide"
          data-bs-ride="carousel"
          data-bs-interval="5500"
        >
          <div class="carousel-inner mt-n5">
            <div class="card-header pt-5">
              <span class="card-title fw-bold text-hover-primary fs-4"
              >Calendrier des réunions</span
              >
              <!--begin::Toolbar-->
              <div class="card-toolbar">
                <!--begin::Carousel Indicators-->
                <ol
                    class="p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-primary"
                >
                  <li
                      aria-current="true"
                      v-for="(ev, el) in meetings"
                      :key="el"
                      :data-bs-target="'#kt_sliders_widget_' + ev.title + '_slider'"
                      :data-bs-slide-to="el"
                      class="ms-1 text-danger"
                      :class="{
                    active: el === activeIndexMeeting,
                  }"
                      @click="ChangeIndexMeeting(el)"
                  ></li>
                </ol>
                <!--end::Carousel Indicators-->
              </div>
              <!--end::Toolbar-->
            </div>

            <!--begin::Body-->
            <div class="card-body">
              <div class="d-flex align-items-center" v-if="!meetings.length">
                <div class="symbol symbol-100px me-5">
                  <img
                      :src="getAssetPath('media/svg/illustrations/easy/2.svg')"
                      alt=""
                  />
                </div>
                <div class="d-flex justify-content-start flex-column">
                <span class="text-dark fw-bold text-hover-primary fs-6"
                >Il n'y a pas d'événements </span
                ><span class="text-muted fw-semobold text-muted d-block fs-7"
                >Aujourd'hui</span
                >
                </div>
              </div>

              <!--begin::Carousel-->
              <div class="carousel-inner">
                <!--begin::Item-->
                <div
                    v-for="(meeting, index) in meetings"
                    :key="index"
                    :class="{
                  active: index === activeIndexMeeting,
                  show: index === activeIndexMeeting,
                }"
                    class="carousel-item"
                >
                  <div class="fw-bold text-primary my-6">
                    {{ meeting.start_datetime }}
                  </div>

                  <p class="text-dark-75 fw-semibold fs-5 m-0">
                    {{ meeting.title }}
                  </p>
                </div>
                <!--end::Item-->
              </div>
              <!--end::Carousel-->
            </div>
            <!--end::Body-->
          </div>

        </div>
      </div>
      <!--end::Mixed Widget 7-->

      <!--begin::Mixed Widget 7-->
      <div class="card mb-5 card-xxl-stretch-50 mb-xl-8">
        <!--begin::Body-->
        <div class="card-body">
          <a
            href="#"
            class="card-title fw-bold text-muted text-hover-primary fs-4"
            >Calendrier des réunions</a
          >

          <div class="fw-bold text-primary my-6">3:30PM - 4:20PM</div>

          <p class="text-dark-75 fw-semibold fs-5 m-0">
            Create a headline that is informative<br />
            and will capture readers
          </p>
        </div>
        <!--end::Body-->
      </div>
      <!--end::Mixed Widget 7-->
    </div>
  </div>

  <div class="row gy-5 gx-xl-8">
    <div class="col-xxl-4">
      <ListWidget6 widget-classes="card-xl-stretch mb-xl-8"></ListWidget6>
    </div>
    <div class="col-xxl-8">
      <TableWidget9
        widget-classes="card-xxl-stretch mb-5 mb-xl-8"
      ></TableWidget9>
    </div>
  </div>

  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import TableWidget9 from "@/components/widgets/tables/Widget9.vue";

import ListWidget3 from "@/components/widgets/lists/Widget3.vue";
import ListWidget5 from "@/components/widgets/lists/Widget5.vue";
import ListWidget6 from "@/components/widgets/lists/Widget6.vue";

import MixedWidget7 from "@/components/widgets/mixed/Widget7.vue";
import MixedWidget10 from "@/components/widgets/mixed/Widget10.vue";
import { getAssetPath } from "@/core/helpers/assets";
import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
  StickyComponent,
  SwapperComponent,
  ToggleComponent,
} from "@/assets/ts/components";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import Toast from "@/views/Toast.vue";

// Define a type for your tasks
type Task = {
  status: string;
  due_date: string;
  slug: string;
  // Add other properties here
};
// Define the type of a toast object
type ToastObject = {
  show: boolean;
  title: string;
  timestamp: string;
  message: string;
};
export default defineComponent({
  name: "dashboard-main",
  components: {
    Dropdown1,
    Dropdown2,
    TableWidget9,
    ListWidget6,
    Toast,
  },
  directives: {
    "truncate-text": {
      mounted(el, binding) {
        const maxLength = binding.arg || 100; // Default to 100 characters if no argument is provided
        const text = el.innerText;

        if (text.length > maxLength) {
          el.innerText = text.substring(0, maxLength) + "...";
        }
      },
    },
  },
  setup() {
    const reminders = ref([]);
    const InProgressTasks = ref<Task[]>([
      {
        status: "1",
        due_date: "2023-09-05 04:13:08", // Replace with your actual date format
        slug: "",
        // other properties
      },
      // Other tasks
    ]);
    const PendingTasks = ref<Task[]>([
      {
        status: "1",
        due_date: "2023-09-05 04:13:08", // Replace with your actual date format
        slug: "",
        // other properties
      },
      // Other tasks
    ]);
    const CompletedTasks = ref<Task[]>([
      {
        status: "1",
        due_date: "2023-09-05 04:13:08", // Replace with your actual date format
        slug: "",
        // other properties
      },
      // Other tasks
    ]);
    const projects = ref([]);
    const activeIndex = ref(0);
    const activeIndexEvent = ref(0);
    const activeIndexMeeting = ref(0);

    const events = ref([]);
    const activities = ref([]);
    const meetings = ref([]);

    const ToDayTasks = ref<Task[]>([
      {
        status: "1",
        due_date: "2023-09-05 04:13:08", // Replace with your actual date format
        slug: "",
        // other properties
      },
      // Other tasks
    ]);

    // Assuming you have a ref for Tasks
    const Tasks = ref<Task[]>([
      {
        status: "1",
        due_date: "2023-09-05 04:13:08", // Replace with your actual date format
        slug: "",
        // other properties
      },
      // Other tasks
    ]);

    const ChangeIndex = (index) => {
      activeIndex.value = index;
    };
    const ChangeIndexEvent = (index) => {
      activeIndexEvent.value = index;
    };
    const ChangeIndex2 = () => {
      if (activeIndex.value < projects.value.length) {
        activeIndex.value = activeIndex.value + 1;
      }
    };
    const ChangeIndexEvent2 = () => {
      if (activeIndexEvent.value < events.value.length) {
        activeIndexEvent.value = activeIndexEvent.value + 1;
      }
    };
    const ChangeIndexMeeting = (index) => {
      activeIndexMeeting.value = index;
    };

    const getTasks = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/task/all");
          Tasks.value = response.data.data;
          PendingTasks.value = Tasks.value.filter(
            (task) => task["status"] === "1"
          );
          InProgressTasks.value = Tasks.value.filter(
            (task) => task["status"] === "2"
          );
          CompletedTasks.value = Tasks.value.filter(
            (task) => task["status"] === "3"
          );

          // Current date in ISO format (YYYY-MM-DD)
          const currentDate = new Date().toISOString().split("T")[0];

          ToDayTasks.value = Tasks.value.filter((task) => {
            const taskDate = task["due_date"].split(" ")[0];
            return task["status"] != "3" && taskDate >= currentDate;
          });
          console.log("ToDayTasks", ToDayTasks);
        } catch (error) {
          console.error("Failed to fetch Tasks:", error);
          // Handle the error as needed
        }
      }
    };

    const getEvents = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/task/event/fromtoday");
          events.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch Tasks:", error);
          // Handle the error as needed
        }
      }
    };
    const getReminders = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/task/reminder/all");
          reminders.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch Tasks:", error);
          // Handle the error as needed
        }
      }
    };
    const getActivities = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("account/today/activity");
          activities.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch Tasks:", error);
          // Handle the error as needed
        }
      }
    };
    const getMeetings = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/meetings/fromtoday");
          meetings.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch Tasks:", error);
          // Handle the error as needed
        }
      }
    };
    const getProjects = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/all");
          projects.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch projects:", error);
          // Handle the error as needed
        }
      }
    };
    const isDueDateClose = (dueDate) => {
      // Convert dueDate and currentDate to Date objects
      const dueDateObj = new Date(dueDate);
      const currentDateObj = new Date();

      // Calculate the time difference in milliseconds
      const timeDifference = dueDateObj.getTime() - currentDateObj.getTime();

      // Check if the due date is within, for example, 3 days (adjust as needed)
      const closeThreshold = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
      return timeDifference <= closeThreshold;
    };
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
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
        return `${elapsedDays} J`;
      } else if (elapsedHours > 0) {
        return `${elapsedHours} H`;
      } else if (elapsedMinutes > 0) {
        return `  ${elapsedMinutes} M`;
      } else {
        return `${elapsedSeconds} S`;
      }
    }

    // Initialize toasts as an array of ToastObject
    const toasts = ref<Array<ToastObject>>([]);

    const showToast = () => {
      const newToast: ToastObject = {
        show: true,
        title: "Keenthemes",
        timestamp: "11 mins ago",
        message: "Hello, world! This is a toast message.",
      };
      toasts.value.push(newToast);
    };

    const closeToast = (index: number) => {
      toasts.value[index].show = false;
    };

    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getProjects().finally(() => {
        getTasks();
        getEvents();
        getReminders();
        getActivities();
        getMeetings();
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });
    return {
      getAssetPath,
      InProgressTasks,
      PendingTasks,
      CompletedTasks,
      Tasks,
      projects,
      ChangeIndex,
      activeIndex,
      ChangeIndex2,
      events,
      activeIndexEvent,
      ChangeIndexEvent,
      ChangeIndexEvent2,
      ToDayTasks,
      isDueDateClose,
      reminders,
      getRandomColor,
      getTimeSince,
      activities,
      toasts,
      showToast,
      closeToast,
      meetings,
      activeIndexMeeting,
      ChangeIndexMeeting,
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
.task-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Maximum number of lines */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
