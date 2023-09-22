<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">
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
            <span class="fw-bold fs-2x mb-3">My Tasks</span>

            <div class="fs-4 text-white">
              <span class="opacity-75">You have</span>

              <span class="position-relative d-inline-block">
                <a
                  href="/metronic8/demo7/../demo7/pages/user-profile/projects.html"
                  class="link-white opacity-75-hover fw-bold d-block mb-1"
                  >4 tasks</a
                >

                <!--begin::Separator-->
                <span
                  class="position-absolute opacity-50 bottom-0 start-0 border-2 border-body border-bottom w-100"
                ></span>
                <!--end::Separator-->
              </span>

              <span class="opacity-75">to comlete</span>
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
                      <i class="ki-duotone ki-flask fs-1 text-primary"
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
                      >37</span
                    >
                    <!--end::Number-->

                    <!--begin::Desc-->
                    <span class="text-gray-500 fw-semibold fs-6">Courses</span>
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
                      <i class="ki-duotone ki-bank fs-1 text-primary"
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
                      >6</span
                    >
                    <!--end::Number-->

                    <!--begin::Desc-->
                    <span class="text-gray-500 fw-semibold fs-6"
                      >Certificates</span
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
                      >4,7</span
                    >
                    <!--end::Number-->

                    <!--begin::Desc-->
                    <span class="text-gray-500 fw-semibold fs-6"
                      >Avg. Score</span
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
                      <i class="ki-duotone ki-timer fs-1 text-primary"
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
                      >822</span
                    >
                    <!--end::Number-->

                    <!--begin::Desc-->
                    <span class="text-gray-500 fw-semibold fs-6"
                      >Hours Learned</span
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
            <div class="card-header pt-5">
              <!--begin::Title-->
              <h4 class="card-title d-flex align-items-start flex-column">
                <span class="card-label fw-bold text-gray-800"
                  >Today’s Course</span
                >
                <span class="text-gray-400 mt-1 fw-bold fs-7"
                  >4 lessons, 3 hours 45 minutes</span
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
                    data-bs-target="#kt_sliders_widget_1_slider"
                    data-bs-slide-to="0"
                    class="ms-1"
                  ></li>
                  <li
                    data-bs-target="#kt_sliders_widget_1_slider"
                    data-bs-slide-to="1"
                    class="ms-1"
                  ></li>
                  <li
                    data-bs-target="#kt_sliders_widget_1_slider"
                    data-bs-slide-to="2"
                    class="ms-1 active"
                    aria-current="true"
                  ></li>
                </ol>
                <!--end::Carousel Indicators-->
              </div>
              <!--end::Toolbar-->
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body py-6">
              <!--begin::Carousel-->
              <div class="carousel-inner mt-n5">
                <!--begin::Item-->
                <div class="carousel-item show">
                  <!--begin::Wrapper-->
                  <div class="d-flex align-items-center mb-5">
                    <!--begin::Chart-->
                    <div class="w-80px flex-shrink-0 me-2">
                      <div
                        class="min-h-auto ms-n3 initialized"
                        id="kt_slider_widget_1_chart_1"
                        style="height: 100px; min-height: 100px"
                      >
                        <div
                          id="apexchartsycf6iftw"
                          class="apexcharts-canvas apexchartsycf6iftw"
                          style="width: 0px; height: 100px"
                        ></div>
                      </div>
                    </div>
                    <!--end::Chart-->

                    <!--begin::Info-->
                    <div class="m-0">
                      <!--begin::Subtitle-->
                      <h4 class="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
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
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            3 Topics
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
                            1 Speakers
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
                            50 Min
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
                            72 students
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
                    <a href="#" class="btn btn-sm btn-light me-2 mb-2"
                      >Skip This</a
                    >

                    <a
                      href="#"
                      class="btn btn-sm btn-primary mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_app"
                      >Continue</a
                    >
                  </div>
                  <!--end::Action-->
                </div>
                <!--end::Item-->
                <!--begin::Item-->
                <div class="carousel-item">
                  <!--begin::Wrapper-->
                  <div class="d-flex align-items-center mb-5">
                    <!--begin::Chart-->
                    <div class="w-80px flex-shrink-0 me-2">
                      <div
                        class="min-h-auto ms-n3 initialized"
                        id="kt_slider_widget_1_chart_2"
                        style="height: 100px; min-height: 100px"
                      >
                        <div
                          id="apexchartscj31n99a"
                          class="apexcharts-canvas apexchartscj31n99a"
                          style="width: 0px; height: 100px"
                        ></div>
                      </div>
                    </div>
                    <!--end::Chart-->

                    <!--begin::Info-->
                    <div class="m-0">
                      <!--begin::Subtitle-->
                      <h4 class="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
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
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            3 Topics
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
                            1 Speakers
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
                            50 Min
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
                            72 students
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
                    <a href="#" class="btn btn-sm btn-light me-2 mb-2"
                      >Skip This</a
                    >

                    <a
                      href="#"
                      class="btn btn-sm btn-primary mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_app"
                      >Continue</a
                    >
                  </div>
                  <!--end::Action-->
                </div>
                <!--end::Item-->
                <!--begin::Item-->
                <div class="carousel-item active">
                  <!--begin::Wrapper-->
                  <div class="d-flex align-items-center mb-5">
                    <!--begin::Chart-->
                    <div class="w-80px flex-shrink-0 me-2">
                      <div
                        class="min-h-auto ms-n3 initialized"
                        id="kt_slider_widget_1_chart_3"
                        style="height: 100px; min-height: 101px"
                      >
                        <div
                          id="apexchartsu9j61uz2"
                          class="apexcharts-canvas apexchartsu9j61uz2 apexcharts-theme-light"
                          style="width: 90px; height: 101px"
                        >
                          <svg
                            id="SvgjsSvg1734"
                            width="90"
                            height="100.99999999999999"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            transform="translate(0, 0)"
                            style="background: transparent"
                          >
                            <foreignObject
                              x="0"
                              y="0"
                              width="90"
                              height="100.99999999999999"
                              ><div
                                class="apexcharts-legend"
                                xmlns="http://www.w3.org/1999/xhtml"
                              ></div
                            ></foreignObject>
                            <g
                              id="SvgjsG1736"
                              class="apexcharts-inner apexcharts-graphical"
                              transform="translate(-5, 0)"
                            >
                              <defs id="SvgjsDefs1735">
                                <clipPath id="gridRectMasku9j61uz2">
                                  <rect
                                    id="SvgjsRect1737"
                                    width="106"
                                    height="102"
                                    x="-3"
                                    y="-1"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke="none"
                                    stroke-dasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                                <clipPath id="forecastMasku9j61uz2"></clipPath>
                                <clipPath
                                  id="nonForecastMasku9j61uz2"
                                ></clipPath>
                                <clipPath id="gridRectMarkerMasku9j61uz2">
                                  <rect
                                    id="SvgjsRect1738"
                                    width="104"
                                    height="104"
                                    x="-2"
                                    y="-2"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke="none"
                                    stroke-dasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                              </defs>
                              <g id="SvgjsG1739" class="apexcharts-radialbar">
                                <g id="SvgjsG1740">
                                  <g id="SvgjsG1741" class="apexcharts-tracks">
                                    <g
                                      id="SvgjsG1742"
                                      class="apexcharts-radialbar-track apexcharts-track"
                                      rel="1"
                                    >
                                      <path
                                        id="apexcharts-radialbarTrack-0"
                                        d="M 50 18.84146341463414 A 31.15853658536586 31.15853658536586 0 1 1 49.994561809492424 18.84146388920579"
                                        fill="none"
                                        fill-opacity="1"
                                        stroke="rgba(220,253,253,0.85)"
                                        stroke-opacity="1"
                                        stroke-linecap="round"
                                        stroke-width="8.414634146341463"
                                        stroke-dasharray="0"
                                        class="apexcharts-radialbar-area"
                                        data:pathOrig="M 50 18.84146341463414 A 31.15853658536586 31.15853658536586 0 1 1 49.994561809492424 18.84146388920579"
                                      ></path>
                                    </g>
                                  </g>
                                  <g id="SvgjsG1744">
                                    <g
                                      id="SvgjsG1747"
                                      class="apexcharts-series apexcharts-radial-series"
                                      seriesName="Progress"
                                      rel="1"
                                      data:realIndex="0"
                                    >
                                      <path
                                        id="SvgjsPath1748"
                                        d="M 50 18.84146341463414 A 31.15853658536586 31.15853658536586 0 0 1 81.15853658536585 50"
                                        fill="none"
                                        fill-opacity="0.85"
                                        stroke="rgba(4,200,200,0.85)"
                                        stroke-opacity="1"
                                        stroke-linecap="round"
                                        stroke-width="8.414634146341463"
                                        stroke-dasharray="0"
                                        class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                        data:angle="90"
                                        data:value="25"
                                        index="0"
                                        j="0"
                                        data:pathOrig="M 50 18.84146341463414 A 31.15853658536586 31.15853658536586 0 0 1 81.15853658536585 50"
                                      ></path>
                                    </g>
                                    <circle
                                      id="SvgjsCircle1745"
                                      r="26.951219512195127"
                                      cx="50"
                                      cy="50"
                                      class="apexcharts-radialbar-hollow"
                                      fill="transparent"
                                    ></circle>
                                    <g
                                      id="SvgjsG1746"
                                      class="apexcharts-datalabels-group"
                                      transform="translate(0, 0) scale(1)"
                                      style="opacity: 1"
                                    ></g>
                                  </g>
                                </g>
                              </g>
                              <line
                                id="SvgjsLine1749"
                                x1="0"
                                y1="0"
                                x2="100"
                                y2="0"
                                stroke="#b6b6b6"
                                stroke-dasharray="0"
                                stroke-width="1"
                                stroke-linecap="butt"
                                class="apexcharts-ycrosshairs"
                              ></line>
                              <line
                                id="SvgjsLine1750"
                                x1="0"
                                y1="0"
                                x2="100"
                                y2="0"
                                stroke-dasharray="0"
                                stroke-width="0"
                                stroke-linecap="butt"
                                class="apexcharts-ycrosshairs-hidden"
                              ></line>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <!--end::Chart-->

                    <!--begin::Info-->
                    <div class="m-0">
                      <!--begin::Subtitle-->
                      <h4 class="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
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
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            3 Topics
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
                            1 Speakers
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
                            50 Min
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
                            72 students
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
                    <a href="#" class="btn btn-sm btn-light me-2 mb-2"
                      >Skip This</a
                    >

                    <a
                      href="#"
                      class="btn btn-sm btn-primary mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_app"
                      >Continue</a
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
          <!--end::Slider Widget 1-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-6 mb-5 mb-xl-10">
          <!--begin::Slider Widget 2-->
          <div
            id="kt_sliders_widget_2_slider"
            class="card card-flush carousel carousel-custom carousel-stretch slide h-xl-100"
            data-bs-ride="carousel"
            data-bs-interval="5500"
          >
            <!--begin::Header-->
            <div class="card-header pt-5">
              <!--begin::Title-->
              <h4 class="card-title d-flex align-items-start flex-column">
                <span class="card-label fw-bold text-gray-800"
                  >Today’s Events</span
                >
                <span class="text-gray-400 mt-1 fw-bold fs-7"
                  >24 events on all activities</span
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
                    data-bs-target="#kt_sliders_widget_2_slider"
                    data-bs-slide-to="0"
                    class="ms-1 active"
                    aria-current="true"
                  ></li>
                  <li
                    data-bs-target="#kt_sliders_widget_2_slider"
                    data-bs-slide-to="1"
                    class="ms-1"
                  ></li>
                  <li
                    data-bs-target="#kt_sliders_widget_2_slider"
                    data-bs-slide-to="2"
                    class="ms-1"
                  ></li>
                </ol>
                <!--end::Carousel Indicators-->
              </div>
              <!--end::Toolbar-->
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body py-6">
              <!--begin::Carousel-->
              <div class="carousel-inner">
                <!--begin::Item-->
                <div class="carousel-item show active">
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
                      <h4 class="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
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
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            5 Topics
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
                            1 Speakers
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
                            60 Min
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
                            137 students
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
                    <a href="#" class="btn btn-sm btn-light me-2 mb-2"
                      >Details</a
                    >

                    <a
                      href="#"
                      class="btn btn-sm btn-success mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_campaign"
                      >Join Event</a
                    >
                  </div>
                  <!--end::Action-->
                </div>
                <!--end::Item-->
                <!--begin::Item-->
                <div class="carousel-item">
                  <!--begin::Wrapper-->
                  <div class="d-flex align-items-center mb-9">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-70px symbol-circle me-5">
                      <span class="symbol-label bg-light-danger">
                        <i class="ki-duotone ki-abstract-25 fs-3x text-danger"
                          ><span class="path1"></span><span class="path2"></span
                        ></i>
                      </span>
                    </div>
                    <!--end::Symbol-->

                    <!--begin::Info-->
                    <div class="m-0">
                      <!--begin::Subtitle-->
                      <h4 class="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
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
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            12 Topics
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
                            1 Speakers
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
                            50 Min
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
                            72 students
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
                    <a href="#" class="btn btn-sm btn-light me-2 mb-2"
                      >Details</a
                    >

                    <a
                      href="#"
                      class="btn btn-sm btn-success mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_campaign"
                      >Join Event</a
                    >
                  </div>
                  <!--end::Action-->
                </div>
                <!--end::Item-->
                <!--begin::Item-->
                <div class="carousel-item">
                  <!--begin::Wrapper-->
                  <div class="d-flex align-items-center mb-9">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-70px symbol-circle me-5">
                      <span class="symbol-label bg-light-primary">
                        <i class="ki-duotone ki-abstract-36 fs-3x text-primary"
                          ><span class="path1"></span><span class="path2"></span
                        ></i>
                      </span>
                    </div>
                    <!--end::Symbol-->

                    <!--begin::Info-->
                    <div class="m-0">
                      <!--begin::Subtitle-->
                      <h4 class="fw-bold text-gray-800 mb-3">Ruby on Rails</h4>
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
                              class="ki-duotone ki-right-square fs-6 text-gray-600 me-2"
                              ><span class="path1"></span
                              ><span class="path2"></span
                            ></i>
                            3 Topics
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
                            1 Speakers
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
                            50 Min
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
                            72 students
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
                    <a href="#" class="btn btn-sm btn-light me-2 mb-2"
                      >Details</a
                    >

                    <a
                      href="#"
                      class="btn btn-sm btn-success mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_campaign"
                      >Join Event</a
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
        <div class="card-body d-flex ps-xl-15">
          <!--begin::Wrapper-->
          <div class="m-0">
            <!--begin::Title-->
            <div
              class="position-relative fs-2x z-index-2 fw-bold text-white mb-7"
            >
              <span class="me-2">
                You have got
                <span class="position-relative d-inline-block text-danger">
                  <a class="text-danger opacity-75-hover">2300 bonus</a>

                  <!--begin::Separator-->
                  <span
                    class="position-absolute opacity-50 bottom-0 start-0 border-4 border-danger border-bottom w-100"
                  ></span>
                  <!--end::Separator-->
                </span>
              </span>
              points.<br />
              Feel free to use them in your lessons
            </div>
            <!--end::Title-->

            <!--begin::Action-->
            <div class="mb-3">
              <a
                href="#"
                class="btn btn-danger fw-semibold me-2"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_upgrade_plan"
              >
                Get Reward
              </a>

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

  <div class="row gy-5 gx-xl-8">
    <div class="col-xxl-4">
      <ListWidget3 widget-classes="card-xxl-stretch mb-xl-3"></ListWidget3>
    </div>
    <div class="col-xxl-8">
      <TableWidget9
        widget-classes="card-xxl-stretch mb-5 mb-xl-8"
      ></TableWidget9>
    </div>
  </div>

  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-4">
      <ListWidget6 widget-classes="card-xl-stretch mb-xl-8"></ListWidget6>
    </div>
    <div class="col-xxl-8">
      <TableWidget5
        widget-classes="card-xxl-stretch mb-5 mb-xxl-8"
      ></TableWidget5>
    </div>
  </div>

  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableWidget9 from "@/components/widgets/tables/Widget9.vue";
import TableWidget5 from "@/components/widgets/tables/Widget5.vue";
import ListWidget1 from "@/components/widgets/lists/Widget1.vue";
import ListWidget2 from "@/components/widgets/lists/Widget2.vue";
import ListWidget3 from "@/components/widgets/lists/Widget3.vue";
import ListWidget5 from "@/components/widgets/lists/Widget5.vue";
import ListWidget6 from "@/components/widgets/lists/Widget6.vue";
import MixedWidget2 from "@/components/widgets/mixed/Widget2.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
import MixedWidget7 from "@/components/widgets/mixed/Widget7.vue";
import MixedWidget10 from "@/components/widgets/mixed/Widget10.vue";
import contacts from "@/core/data/contacts";
import { getAssetPath } from "@/core/helpers/assets";


export default defineComponent({
  name: "dashboard-main",
  components: {
    TableWidget9,
    TableWidget5,
    ListWidget3,
    ListWidget6,
  },
  setup() {

    return {
      getAssetPath,
    };
  },
});
</script>
