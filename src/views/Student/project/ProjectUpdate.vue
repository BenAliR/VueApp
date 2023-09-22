<template>

  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h3 class="fw-bold my-2">Tâches du projet</h3>
    <!--end::Heading-->

    <!--begin::Controls-->
    <div class="d-flex flex-wrap my-1">
      <!--begin::Tab nav-->
      <ul class="nav nav-pills me-5" role="tablist">
        <li class="nav-item m-0" role="presentation">
          <a
            class="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary active me-3"
            data-bs-toggle="tab"
            href="#kt_project_targets_card_pane"
            aria-selected="true"
            role="tab"
          >
            <i class="ki-duotone ki-element-plus fs-1"
              ><span class="path1"></span><span class="path2"></span
              ><span class="path3"></span><span class="path4"></span
              ><span class="path5"></span
            ></i>
          </a>
        </li>

        <li class="nav-item m-0" role="presentation">
          <a
            class="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary"
            data-bs-toggle="tab"
            href="#kt_project_targets_table_pane"
            aria-selected="false"
            tabindex="-1"
            role="tab"
          >
            <i class="ki-duotone ki-row-horizontal fs-2"
              ><span class="path1"></span><span class="path2"></span
            ></i>
          </a>
        </li>
      </ul>
      <!--end::Tab nav-->
    </div>
    <!--end::Controls-->
  </div>

  <!--begin::Row-->
  <div class="tab-content">
    <!--begin::Tab pane-->
    <div
      id="kt_project_targets_card_pane"
      class="tab-pane fade active show"
      role="tabpanel"
    >
      <!--begin::Row-->
      <div class="row g-9">
        <!--begin::Col-->
        <div class="col-md-4 col-lg-12 col-xl-4">
          <!--begin::Col header-->
          <div class="mb-9">
            <div class="d-flex flex-stack">
              <div class="fw-bold fs-4">
                Encore à commencer
                <span class="fs-6 text-gray-400 ms-2">{{
                  filteredPending.length
                }}</span>
              </div>

              <!--begin::Menu-->
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i class="ki-duotone ki-element-plus fs-2"
                    ><span class="path1"></span><span class="path2"></span
                    ><span class="path3"></span><span class="path4"></span
                    ><span class="path5"></span
                  ></i>
                </button>

                <!--begin::Menu 1-->
                <div
                  class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                  data-kt-menu="true"
                  style=""
                >
                  <!--begin::Header-->
                  <div class="px-7 py-5">
                    <div class="fs-5 text-dark fw-bold">Filter Options</div>
                  </div>
                  <!--end::Header-->

                  <!--begin::Menu separator-->
                  <div class="separator border-gray-200"></div>
                  <!--end::Menu separator-->

                  <!--begin::Form-->
                  <div class="px-7 py-5">
                    <!--begin::Input group-->
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold">Status:</label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <div>
                        <select
                          class="form-select form-select-solid select2-hidden-accessible"
                          data-kt-select2="true"
                          data-placeholder="Select option"
                          data-allow-clear="true"
                          tabindex="-1"
                          aria-hidden="true"
                          data-kt-initialized="1"
                        >
                          <option></option>
                          <option value="1">Approved</option>
                          <option value="2">Pending</option>
                          <option value="2">In Process</option>
                          <option value="2">Rejected</option>
                        </select>
                      </div>
                      <!--end::Input-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold">Member Type:</label>
                      <!--end::Label-->

                      <!--begin::Options-->
                      <div class="d-flex">
                        <!--begin::Options-->
                        <label
                          class="form-check form-check-sm form-check-custom form-check-solid me-5"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                          <span class="form-check-label"> Author </span>
                        </label>
                        <!--end::Options-->

                        <!--begin::Options-->
                        <label
                          class="form-check form-check-sm form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="2"
                            checked="checked"
                          />
                          <span class="form-check-label"> Customer </span>
                        </label>
                        <!--end::Options-->
                      </div>
                      <!--end::Options-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold"
                        >Notifications:</label
                      >
                      <!--end::Label-->

                      <!--begin::Switch-->
                      <div
                        class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          name="notifications"
                          checked=""
                        />
                        <label class="form-check-label"> Enabled </label>
                      </div>
                      <!--end::Switch-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Actions-->
                    <div class="d-flex justify-content-end">
                      <button
                        type="reset"
                        class="btn btn-sm btn-light btn-active-light-primary me-2"
                        data-kt-menu-dismiss="true"
                      >
                        Reset
                      </button>

                      <button
                        type="submit"
                        class="btn btn-sm btn-primary"
                        data-kt-menu-dismiss="true"
                      >
                        Apply
                      </button>
                    </div>
                    <!--end::Actions-->
                  </div>
                  <!--end::Form-->
                </div>
                <!--end::Menu 1-->
              </div>
              <!--end::Menu-->
            </div>

            <div class="h-3px w-100 bg-warning"></div>
          </div>
          <!--end::Col header-->

          <!--begin::Card-->
          <div
            v-for="(task, index) in filteredPending"
            :key="index"
            class="card mb-6 mb-xl-9"
          >
            <!--begin::Card body-->
            <div class="card-body">
              <!--begin::Header-->
              <div class="d-flex flex-stack mb-3">
                <!--begin::Badge-->
                <div class="card-toolbar">
                  <span
                    :class="getStatusColorClass(task.type)"
                    class="badge fw-bold me-auto px-4 py-3"
                    >{{ task.type }}</span
                  >
                </div>
                <!--end::Badge-->

                <!--begin::Menu-->
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ki-duotone ki-element-plus fs-2"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span><span class="path4"></span
                        ><span class="path5"></span
                      ></i>
                    </button>

                    <!--begin::Menu 1-->
                    <div
                      class="dropdown-menu menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                    >
                      <!--begin::Header-->
                      <div class="px-7 py-5">
                        <div class="fs-5 text-dark fw-bold">
                          Modifier le statut
                        </div>
                      </div>
                      <!--end::Header-->

                      <!--begin::Menu separator-->
                      <div class="separator border-gray-200"></div>
                      <!--end::Menu separator-->

                      <!--begin::Form-->
                      <div class="px-7 py-5">
                        <!--begin::Input group-->
                        <div class="mb-10">
                          <!--begin::Label-->
                          <label class="form-label fw-semibold">Statut:</label>
                          <!--end::Label-->

                          <!--begin::Input-->
                          <div>
                            <select
                              class="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_648732e280af7"
                              data-allow-clear="true"
                              tabindex="-1"
                              aria-hidden="true"
                              data-kt-initialized="1"
                              v-model="task.status"
                            >
                              <option></option>
                              <option value="1">Encore à commencer</option>
                              <option value="2">En cours</option>
                              <option value="3">Complété</option>
                            </select>
                          </div>
                          <!--end::Input-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Actions-->
                        <div class="d-flex justify-content-end">
                          <button
                            type="submit"
                            @click="ChangeStatus(task)"
                            class="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Enregistrer
                          </button>
                        </div>
                        <!--end::Actions-->
                      </div>
                      <!--end::Form-->
                    </div>
                    <!--end::Menu 1-->
                  </div>
                </div>
                <!--end::Menu-->
              </div>
              <!--end::Header-->

              <!--begin::Title-->
              <div class="mb-2">
                <router-link
                  class="cursor-pointer task-title fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                  :to="{
                    name: 'task-overview',
                    params: {
                      slug: route.params.slug,
                      id: task.slug,
                    },
                  }"
                >
                  <div class="task-title">
                    {{ capitalizeFirstLetter(task.title) }}
                  </div></router-link
                >
              </div>
              <!--end::Title-->

              <!--begin::Content-->
              <div class="task-title fs-6 fw-semibold text-gray-600 mb-5">
                {{ task.description }}
              </div>
              <!--end::Content-->

              <!--begin::Footer-->
              <div class="d-flex flex-stack flex-wrapr">
                <!--begin::Users-->
                <div class="symbol-group symbol-hover my-1">
                  <div
                    class="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    :aria-label="task.assigned.fullname"
                    :data-bs-original-title="task.assigned.fullname"
                    :title="task.assigned.fullname"
                    data-kt-initialized="1"
                  >
                    <img
                      alt="Pic"
                      v-if="task.assigned.photo"
                      :src="url + task.assigned.photo"
                    />
                  </div>
                </div>
                <!--end::Users-->

                <!--begin::Stats-->
                <div class="d-flex my-1">
                  <!--begin::Stat-->
                  <div
                    class="border border-dashed border-gray-300 rounded d-flex align-items-center py-2 px-3"
                  >
                    <i class="ki-duotone ki-paper-clip fs-3"></i>
                    <span class="ms-1 fs-7 fw-bold text-gray-600">{{
                        task.subtasks_count
                      }}</span>
                  </div>
                  <!--end::Stat-->

                  <!--begin::Stat-->
                  <div
                    class="border border-dashed border-gray-300 d-flex align-items-center rounded py-2 px-3 ms-3"
                  >
                    <i class="ki-duotone ki-message-text-2 fs-3"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span
                    ></i>
                    <span class="ms-1 fs-7 fw-bold text-gray-600">{{
                      task.comment_count
                    }}</span>
                  </div>
                  <!--end::Stat-->
                </div>
                <!--end::Stats-->
              </div>
              <!--end::Footer-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::Card-->

          <a
            href="#"
            class="btn btn-primary er w-100 fs-6 px-8 py-4"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_task"
            >Créer une nouvelle tâche</a
          >
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-md-4 col-lg-12 col-xl-4">
          <!--begin::Col header-->
          <div class="mb-9">
            <div class="d-flex flex-stack">
              <div class="fw-bold fs-4">
                En cours
                <span class="fs-6 text-gray-400 ms-2">{{
                  filteredInProgress.length
                }}</span>
              </div>

              <!--begin::Menu-->
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i class="ki-duotone ki-element-plus fs-2"
                    ><span class="path1"></span><span class="path2"></span
                    ><span class="path3"></span><span class="path4"></span
                    ><span class="path5"></span
                  ></i>
                </button>

                <!--begin::Menu 1-->
                <div
                  class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                  data-kt-menu="true"
                  id="kt_menu_648732e2809d7"
                  style=""
                >
                  <!--begin::Header-->
                  <div class="px-7 py-5">
                    <div class="fs-5 text-dark fw-bold">Filter Options</div>
                  </div>
                  <!--end::Header-->

                  <!--begin::Menu separator-->
                  <div class="separator border-gray-200"></div>
                  <!--end::Menu separator-->

                  <!--begin::Form-->
                  <div class="px-7 py-5">
                    <!--begin::Input group-->
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold">Status:</label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <div>
                        <select
                          class="form-select form-select-solid select2-hidden-accessible"
                          data-kt-select2="true"
                          data-placeholder="Select option"
                          data-dropdown-parent="#kt_menu_648732e2809d7"
                          data-allow-clear="true"
                          tabindex="-1"
                          aria-hidden="true"
                          data-kt-initialized="1"
                        >
                          <option></option>
                          <option value="1">Approved</option>
                          <option value="2">Pending</option>
                          <option value="2">In Process</option>
                          <option value="2">Rejected</option>
                        </select>
                      </div>
                      <!--end::Input-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold">Member Type:</label>
                      <!--end::Label-->

                      <!--begin::Options-->
                      <div class="d-flex">
                        <!--begin::Options-->
                        <label
                          class="form-check form-check-sm form-check-custom form-check-solid me-5"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                          <span class="form-check-label"> Author </span>
                        </label>
                        <!--end::Options-->

                        <!--begin::Options-->
                        <label
                          class="form-check form-check-sm form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="2"
                            checked="checked"
                          />
                          <span class="form-check-label"> Customer </span>
                        </label>
                        <!--end::Options-->
                      </div>
                      <!--end::Options-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold"
                        >Notifications:</label
                      >
                      <!--end::Label-->

                      <!--begin::Switch-->
                      <div
                        class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          name="notifications"
                          checked=""
                        />
                        <label class="form-check-label"> Enabled </label>
                      </div>
                      <!--end::Switch-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Actions-->
                    <div class="d-flex justify-content-end">
                      <button
                        type="reset"
                        class="btn btn-sm btn-light btn-active-light-primary me-2"
                        data-kt-menu-dismiss="true"
                      >
                        Reset
                      </button>

                      <button
                        type="submit"
                        class="btn btn-sm btn-primary"
                        data-kt-menu-dismiss="true"
                      >
                        Apply
                      </button>
                    </div>
                    <!--end::Actions-->
                  </div>
                  <!--end::Form-->
                </div>
                <!--end::Menu 1-->
              </div>
              <!--end::Menu-->
            </div>

            <div class="h-3px w-100 bg-primary"></div>
          </div>
          <!--end::Col header-->
          <!--begin::Card-->
          <div
            v-for="(task, index) in filteredInProgress"
            :key="index"
            class="card mb-6 mb-xl-9"
          >
            <!--begin::Card body-->
            <div class="card-body">
              <!--begin::Header-->
              <div class="d-flex flex-stack mb-3">
                <!--begin::Badge-->
                <div class="card-toolbar">
                  <span
                    :class="getStatusColorClass(task.type)"
                    class="badge fw-bold me-auto px-4 py-3"
                    >{{ task.type }}</span
                  >
                </div>
                <!--end::Badge-->

                <!--begin::Menu-->
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ki-duotone ki-element-plus fs-2"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span><span class="path4"></span
                        ><span class="path5"></span
                      ></i>
                    </button>

                    <!--begin::Menu 1-->
                    <div
                      class="dropdown-menu menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                    >
                      <!--begin::Header-->
                      <div class="px-7 py-5">
                        <div class="fs-5 text-dark fw-bold">
                          Modifier le statut
                        </div>
                      </div>
                      <!--end::Header-->

                      <!--begin::Menu separator-->
                      <div class="separator border-gray-200"></div>
                      <!--end::Menu separator-->

                      <!--begin::Form-->
                      <div class="px-7 py-5">
                        <!--begin::Input group-->
                        <div class="mb-10">
                          <!--begin::Label-->
                          <label class="form-label fw-semibold">Statut:</label>
                          <!--end::Label-->

                          <!--begin::Input-->
                          <div>
                            <select
                              class="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_648732e280af7"
                              data-allow-clear="true"
                              tabindex="-1"
                              aria-hidden="true"
                              data-kt-initialized="1"
                              v-model="task.status"
                            >
                              <option></option>
                              <option value="1">Encore à commencer</option>
                              <option value="2">En cours</option>
                              <option value="3">Complété</option>
                            </select>
                          </div>
                          <!--end::Input-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Actions-->
                        <div class="d-flex justify-content-end">
                          <button
                            type="submit"
                            @click="ChangeStatus(task)"
                            class="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Enregistrer
                          </button>
                        </div>
                        <!--end::Actions-->
                      </div>
                      <!--end::Form-->
                    </div>
                    <!--end::Menu 1-->
                  </div>
                </div>
                <!--end::Menu-->
              </div>
              <!--end::Header-->

              <!--begin::Title-->
              <div class="mb-2">
                <router-link
                  class="cursor-pointer fs-4 fw-bold mb-1 text-gray-900 text-hover-primary "
                  :to="{
                    name: 'task-overview',
                    params: {
                      slug: route.params.slug,
                      id: task.slug,
                    },
                  }"
                >
                  <div class="task-title">
                    {{ capitalizeFirstLetter(task.title) }}
                  </div>

                  </router-link
                >
              </div>
              <!--end::Title-->

              <!--begin::Content-->
              <div class="task-title fs-6 fw-semibold text-gray-600 mb-5">
                {{ task.description }}
              </div>
              <!--end::Content-->

              <!--begin::Footer-->
              <div class="d-flex flex-stack flex-wrapr">
                <!--begin::Users-->
                <div class="symbol-group symbol-hover my-1">
                  <div
                    class="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    :aria-label="task.assigned.fullname"
                    :data-bs-original-title="task.assigned.fullname"
                    :title="task.assigned.fullname"
                    data-kt-initialized="1"
                  >
                    <img
                      alt="Pic"
                      v-if="task.assigned.photo"
                      :src="url + task.assigned.photo"
                    />
                  </div>
                </div>
                <!--end::Users-->

                <!--begin::Stats-->
                <div class="d-flex my-1">
                  <!--begin::Stat-->
                  <div
                    class="border border-dashed border-gray-300 rounded d-flex align-items-center py-2 px-3"
                  >
                    <i class="ki-duotone ki-paper-clip fs-3"></i>
                    <span class="ms-1 fs-7 fw-bold text-gray-600">{{
                      task.subtasks_count
                    }}</span>
                  </div>
                  <!--end::Stat-->

                  <!--begin::Stat-->
                  <div
                    class="border border-dashed border-gray-300 d-flex align-items-center rounded py-2 px-3 ms-3"
                  >
                    <i class="ki-duotone ki-message-text-2 fs-3"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span
                    ></i>
                    <span class="ms-1 fs-7 fw-bold text-gray-600">{{
                      task.comment_count
                    }}</span>
                  </div>
                  <!--end::Stat-->
                </div>
                <!--end::Stats-->
              </div>
              <!--end::Footer-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::Card-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-md-4 col-lg-12 col-xl-4">
          <!--begin::Col header-->
          <div class="mb-9">
            <div class="d-flex flex-stack">
              <div class="fw-bold fs-4">
                Complété
                <span class="fs-6 text-gray-400 ms-2">{{
                  filteredCompleted.length
                }}</span>
              </div>

              <!--begin::Menu-->
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i class="ki-duotone ki-element-plus fs-2"
                    ><span class="path1"></span><span class="path2"></span
                    ><span class="path3"></span><span class="path4"></span
                    ><span class="path5"></span
                  ></i>
                </button>

                <!--begin::Menu 1-->
                <div
                  class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                  data-kt-menu="true"
                  id="kt_menu_648732e280af7"
                >
                  <!--begin::Header-->
                  <div class="px-7 py-5">
                    <div class="fs-5 text-dark fw-bold">Filter Options</div>
                  </div>
                  <!--end::Header-->

                  <!--begin::Menu separator-->
                  <div class="separator border-gray-200"></div>
                  <!--end::Menu separator-->

                  <!--begin::Form-->
                  <div class="px-7 py-5">
                    <!--begin::Input group-->
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold">Status:</label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <div>
                        <select
                          class="form-select form-select-solid select2-hidden-accessible"
                          data-kt-select2="true"
                          data-placeholder="Select option"
                          data-dropdown-parent="#kt_menu_648732e280af7"
                          data-allow-clear="true"
                          tabindex="-1"
                          aria-hidden="true"
                          data-kt-initialized="1"
                        >
                          <option></option>
                          <option value="1">Approved</option>
                          <option value="2">Pending</option>
                          <option value="2">In Process</option>
                          <option value="2">Rejected</option>
                        </select>
                      </div>
                      <!--end::Input-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold">Member Type:</label>
                      <!--end::Label-->

                      <!--begin::Options-->
                      <div class="d-flex">
                        <!--begin::Options-->
                        <label
                          class="form-check form-check-sm form-check-custom form-check-solid me-5"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                          <span class="form-check-label"> Author </span>
                        </label>
                        <!--end::Options-->

                        <!--begin::Options-->
                        <label
                          class="form-check form-check-sm form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="2"
                            checked="checked"
                          />
                          <span class="form-check-label"> Customer </span>
                        </label>
                        <!--end::Options-->
                      </div>
                      <!--end::Options-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="mb-10">
                      <!--begin::Label-->
                      <label class="form-label fw-semibold"
                        >Notifications:</label
                      >
                      <!--end::Label-->

                      <!--begin::Switch-->
                      <div
                        class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          name="notifications"
                          checked=""
                        />
                        <label class="form-check-label"> Enabled </label>
                      </div>
                      <!--end::Switch-->
                    </div>
                    <!--end::Input group-->

                    <!--begin::Actions-->
                    <div class="d-flex justify-content-end">
                      <button
                        type="reset"
                        class="btn btn-sm btn-light btn-active-light-primary me-2"
                        data-kt-menu-dismiss="true"
                      >
                        Reset
                      </button>

                      <button
                        type="submit"
                        class="btn btn-sm btn-primary"
                        data-kt-menu-dismiss="true"
                      >
                        Apply
                      </button>
                    </div>
                    <!--end::Actions-->
                  </div>
                  <!--end::Form-->
                </div>
                <!--end::Menu 1-->
              </div>
              <!--end::Menu-->
            </div>

            <div class="h-3px w-100 bg-success"></div>
          </div>
          <!--end::Col header-->
          <!--begin::Card-->
          <div
            v-for="(task, index) in filteredCompleted"
            :key="index"
            class="card mb-6 mb-xl-9"
          >
            <!--begin::Card body-->
            <div class="card-body">
              <!--begin::Header-->
              <div class="d-flex flex-stack mb-3">
                <!--begin::Badge-->
                <div class="card-toolbar">
                  <span
                    :class="getStatusColorClass(task.type)"
                    class="badge fw-bold me-auto px-4 py-3"
                    >{{ task.type }}</span
                  >
                </div>
                <!--end::Badge-->

                <!--begin::Menu-->
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ki-duotone ki-element-plus fs-2"
                        ><span class="path1"></span><span class="path2"></span
                        ><span class="path3"></span><span class="path4"></span
                        ><span class="path5"></span
                      ></i>
                    </button>

                    <!--begin::Menu 1-->
                    <div
                      class="dropdown-menu menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                    >
                      <!--begin::Header-->
                      <div class="px-7 py-5">
                        <div class="fs-5 text-dark fw-bold">
                          Modifier le statut
                        </div>
                      </div>
                      <!--end::Header-->

                      <!--begin::Menu separator-->
                      <div class="separator border-gray-200"></div>
                      <!--end::Menu separator-->

                      <!--begin::Form-->
                      <div class="px-7 py-5">
                        <!--begin::Input group-->
                        <div class="mb-10">
                          <!--begin::Label-->
                          <label class="form-label fw-semibold">Statut:</label>
                          <!--end::Label-->

                          <!--begin::Input-->
                          <div>
                            <select
                              class="form-select form-select-solid select2-hidden-accessible"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_648732e280af7"
                              data-allow-clear="true"
                              tabindex="-1"
                              aria-hidden="true"
                              data-kt-initialized="1"
                              v-model="task.status"
                            >
                              <option></option>
                              <option value="1">Encore à commencer</option>
                              <option value="2">En cours</option>
                              <option value="3">Complété</option>
                            </select>
                          </div>
                          <!--end::Input-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Actions-->
                        <div class="d-flex justify-content-end">
                          <button
                            type="submit"
                            @click="ChangeStatus(task)"
                            class="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Enregistrer
                          </button>
                        </div>
                        <!--end::Actions-->
                      </div>
                      <!--end::Form-->
                    </div>
                    <!--end::Menu 1-->
                  </div>
                </div>
                <!--end::Menu-->
              </div>
              <!--end::Header-->

              <!--begin::Title-->
              <div class="mb-2">
                <router-link
                  class="cursor-pointer task-title fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                  :to="{
                    name: 'task-overview',
                    params: {
                      slug: route.params.slug,
                      id: task.slug,
                    },
                  }"
                >
                  <div class="task-title">
                    {{ capitalizeFirstLetter(task.title) }}
                  </div></router-link
                >
              </div>
              <!--end::Title-->

              <!--begin::Content-->
              <div class="task-title fs-6 fw-semibold text-gray-600 mb-5">
                {{ task.description }}
              </div>
              <!--end::Content-->

              <!--begin::Footer-->
              <div class="d-flex flex-stack flex-wrapr">
                <!--begin::Users-->
                <div class="symbol-group symbol-hover my-1">
                  <div
                    class="symbol symbol-35px symbol-circle"
                    data-bs-toggle="tooltip"
                    :aria-label="task.assigned.fullname"
                    :data-bs-original-title="task.assigned.fullname"
                    :title="task.assigned.fullname"
                    data-kt-initialized="1"
                  >
                    <img
                      alt="Pic"
                      v-if="task.assigned.photo"
                      :src="url + task.assigned.photo"
                    />
                  </div>
                </div>
                <!--end::Users-->

                <!--begin::Stats-->
                <div class="d-flex my-1">
                  <!--begin::Stat-->
                  <div
                    class="border border-dashed border-gray-300 rounded d-flex align-items-center py-2 px-3"
                  >
                    <i class="ki-duotone ki-paper-clip fs-3"></i>
                    <span class="ms-1 fs-7 fw-bold text-gray-600">{{
                        task.subtasks_count
                      }}</span>
                  </div>
                  <!--end::Stat-->

                  <!--begin::Stat-->
                  <div
                    class="border border-dashed border-gray-300 d-flex align-items-center rounded py-2 px-3 ms-3"
                  >
                    <i class="ki-duotone ki-message-text-2 fs-3"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span
                    ></i>
                    <span class="ms-1 fs-7 fw-bold text-gray-600">{{
                      task.comment_count
                    }}</span>
                  </div>
                  <!--end::Stat-->
                </div>
                <!--end::Stats-->
              </div>
              <!--end::Footer-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::Card-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
    </div>
    <!--end::Tab pane-->

    <!--begin::Tab pane-->
    <div
      id="kt_project_targets_table_pane"
      class="tab-pane fade"
      role="tabpanel"
    >
      <div class="card card-flush">
        <div class="card-body pt-3">
          <!--begin::Table-->
          <div
            id="kt_profile_overview_table_wrapper"
            class="dataTables_wrapper dt-bootstrap4 no-footer"
          >
            <div class="table-responsive">
              <table
                id="kt_profile_overview_table"
                class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold dataTable no-footer"
              >
                <thead class="fs-7 text-gray-400 text-uppercase">
                  <tr>
                    <th
                      class="min-w-250px sorting"
                      tabindex="0"
                      aria-controls="kt_profile_overview_table"
                      rowspan="1"
                      colspan="1"
                      aria-label="Target: activate to sort column ascending"
                      style="width: 0px"
                    >
                      Tâche
                    </th>
                    <th
                      class="min-w-90px sorting"
                      tabindex="0"
                      aria-controls="kt_profile_overview_table"
                      rowspan="1"
                      colspan="1"
                      aria-label="Section: activate to sort column ascending"
                      style="width: 0px"
                    >
                      Section
                    </th>
                    <th
                      class="min-w-150px sorting"
                      tabindex="0"
                      aria-controls="kt_profile_overview_table"
                      rowspan="1"
                      colspan="1"
                      aria-label="Due Date: activate to sort column ascending"
                      style="width: 0px"
                    >
                      Date d'échéance
                    </th>
                    <th
                      class="min-w-90px sorting"
                      tabindex="0"
                      aria-controls="kt_profile_overview_table"
                      rowspan="1"
                      colspan="1"
                      aria-label="Members: activate to sort column ascending"
                      style="width: 0px"
                    >
                      Membres
                    </th>
                    <th
                      class="min-w-90px sorting"
                      tabindex="0"
                      aria-controls="kt_profile_overview_table"
                      rowspan="1"
                      colspan="1"
                      aria-label="Status: activate to sort column ascending"
                      style="width: 0px"
                    >
                      Statut
                    </th>
                    <th
                      class="min-w-50px sorting"
                      tabindex="0"
                      aria-controls="kt_profile_overview_table"
                      rowspan="1"
                      colspan="1"
                      aria-label=": activate to sort column ascending"
                      style="width: 0px"
                    ></th>
                  </tr>
                </thead>
                <tbody class="fs-6">
                  <tr class="odd" v-for="(task, index) in tasks" :key="index">
                    <td class="fw-bold">
                      <a
                        href="#"
                        class="task-title text-gray-900 text-hover-primary"
                      >
                        {{ capitalizeFirstLetter(task.title) }}</a
                      >
                    </td>
                    <td data-order="Invalid date">
                      <span
                        :class="getStatusColorClass(task.type)"
                        class="badge fw-semibold me-auto"
                        >{{ task.type }}</span
                      >
                    </td>
                    <td>{{ formatDateWithoutTime(task.due_date) }}</td>
                    <td>
                      <div class="symbol-group symbol-hover fs-8">
                        <div
                          class="symbol symbol-25px symbol-circle"
                          data-bs-toggle="tooltip"
                          :aria-label="task.assigned.fullname"
                          :data-bs-original-title="task.assigned.fullname"
                          :title="task.assigned.fullname"
                          :data-kt-initialized="task.assigned.id"
                        >
                          <img
                            alt="Pic"
                            v-if="task.assigned.photo"
                            :src="url + task.assigned.photo"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        :class="getStatus(task.status)"
                        class="badge badge-light-primary fw-bold me-auto"
                        >{{ getStatusName(task.status) }}</span
                      >
                    </td>
                    <td class="text-end">
                      <router-link
                        class="btn btn-bg-light btn-active-color-primary btn-sm"
                        :to="{
                          name: 'task-overview',
                          params: {
                            slug: route.params.slug,
                            id: task.slug,
                          },
                        }"
                      >
                        Voir</router-link
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div
                class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"
              ></div>
              <div
                class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"
              ></div>
            </div>
          </div>
          <!--end::Table-->
        </div>
      </div>
    </div>
    <!--end::Tab pane-->

    <AddNewTaskModal @buttonClick2="ReloadTasks"></AddNewTaskModal>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";

import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
import { useProjectStore } from "@/stores/project";
import Swal from "sweetalert2/dist/sweetalert2.js";
import AddNewTaskModal from "@/components/modals/student-modals/add-new-task/AddNewTaskModal.vue";
export default defineComponent({
  name: "tasks-project",
  components: { AddNewTaskModal },
  setup() {
    const store = useProjectStore();
    const taskData = new FormData();
    const tasks = ref([]);
    const route = useRoute();
    const url = import.meta.env.VITE_APP_URL;
    const filteredPending = ref([]);
    const filteredInProgress = ref([]);
    const filteredCompleted = ref([]);
    const getTasks = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get(
            "project/task/list/" + route.params.slug
          );
          tasks.value = response.data.data;

          filteredPending.value = tasks.value.filter(
            (project) => project["status"] === "1"
          );
          filteredInProgress.value = tasks.value.filter(
            (project) => project["status"] === "2"
          );
          filteredCompleted.value = tasks.value.filter(
            (project) => project["status"] === "3"
          );
        } catch (error) {
          console.error("Failed to fetch projects:", error);
          // Handle the error as needed
        }
      }
    };

    function getStatusName(status) {
      if (status === "1") {
        return "Encore à commencer";
      } else if (status === "2") {
        return "En cours";
      } else if (status === "3") {
        return "Complété";
      } else {
        return "Inconnu"; // Default color if status is null or unknown
      }
    }
    function getStatus(status) {
      if (status === "1") {
        return "badge-light-warning";
      } else if (status === "2") {
        return "badge-light-primary";
      } else if (status === "3") {
        return "badge-success";
      } else {
        return "badge-primary"; // Default color if status is null or unknown
      }
    }
    function getStatusColorClass(status) {
      if (status === "Présentation du projet") {
        return "badge-light-success";
      } else if (status === "Concept de design") {
        return "badge-light-warning";
      } else if (status === "Logiques fonctionnelles") {
        return "badge-light-primary";
      } else if (status === "Development") {
        return "badge-light-danger";
      } else if (status === "Testing") {
        return "badge-light-info";
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
    function formatDateWithoutTime(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    function ChangeStatus(task) {
      taskData.append("status", task.status);
      //Send request
      store.UpdateTaskStatus(taskData, task.id);
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {
        getTasks();
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
    function ReloadTasks() {
      // Handle the button click event
      console.log("Button clicked in child component!");
      getTasks();
    }
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      getTasks().finally(() => {
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });
    return {
      getAssetPath,
      filteredPending,
      filteredInProgress,
      filteredCompleted,
      tasks,
      getStatusColorClass,
      capitalizeFirstLetter,
      url,
      formatDateWithoutTime,
      getStatus,
      getStatusName,
      ChangeStatus,
      route,
      ReloadTasks,
    };
  },
});
</script>
<style>
.task-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
