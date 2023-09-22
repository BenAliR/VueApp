<template>
  <kt-empty v-if="!task"> </kt-empty>
  <div v-if="task">
    <div class="row gy-10 gx-xl-10">
      <!--begin::List Widget 1-->
      <div class="card mb-12">
        <!--begin::Header-->
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold text-dark">Aperçu de tache</span>
            <span class="text-muted mt-1 fw-semobold fs-7"
              >détails de la tâche</span
            >
          </h3>

          <div class="card-toolbar">
            <!--begin::Menu-->
            <div class="dropdown">
              <button
                id="TaskEdit"
                class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <KTIcon icon-name="category" icon-class="fs-2" />
              </button>
              <!--begin::Menu 2-->
              <div
                class="dropdown-menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold w-200px"
                data-kt-menu="true"
                aria-labelledby="dropdownMenuButton"
              >
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">
                    Actions
                  </div>
                </div>
                <!--end::Menu item-->

                <!--begin::Menu separator-->
                <div class="separator mb-3 opacity-75"></div>
                <!--end::Menu separator-->

                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <router-link
                    :to="{
                      name: 'task-update',
                      params: { slug: route.params.slug, id: task.slug },
                    }"
                    class="menu-link px-3"
                  >
                    Edit
                  </router-link>
                </div>
                <!--end::Menu item-->

                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_add_subtask"
                    class="cursor-pointer menu-link px-3"
                  >
                    Nouvelle sous-tâche
                  </span>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_add_reminder"
                    class="cursor-pointer menu-link px-3"
                  >
                    Ajouter Reminder
                  </span>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <span
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_add_event"
                      class="cursor-pointer menu-link px-3"
                  >
                    Ajouter Événement
                  </span>
                </div>
                <!--end::Menu item-->


                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <span
                    @click="deleteTask(task.id)"
                    class="menu-link px-3 cursor-pointer"
                    >Supprimer
                  </span>
                </div>
                <!--end::Menu item-->

                <!--begin::Menu separator-->
                <div class="separator mt-3 opacity-75"></div>
                <!--end::Menu separator-->

                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <div class="menu-content px-3 py-3">
                    <span
                      @click="generatePDF(task)"
                      class="btn btn-primary btn-sm px-4 cursor-pointer"
                    >
                      Générer PDF
                    </span>
                  </div>
                </div>
                <!--end::Menu item-->
              </div>
              <!--end::Menu 2-->
            </div>
            <!--end::Menu-->
          </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body pt-5"></div>
        <!--end::Body-->
      </div>
      <!--end::List Widget 1-->
    </div>
    <div
      ref="newUpdateCommentModalRef"
      class="modal fade"
      tabindex="-1"
      id="kt_modal_edit_comment"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Mettre à jour le commentaire</h5>

            <!--begin::Close-->
            <div
              class="btn btn-icon btn-sm btn-active-light-primary ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span class="svg-icon svg-icon-2x">X</span>
            </div>
            <!--end::Close-->
          </div>

          <div class="modal-body">
            <!--begin::Col-->
            <div class="fv-row mb-3">
              <label class="fs-6 fw-semibold mb-2">Commentaire</label>
              <el-form-item prop="commentbody">
                <el-input
                  v-model="CommentBody"
                  :autosize="{ minRows: 4, maxRows: 8 }"
                  type="textarea"
                  placeholder="Veuillez entrer un commentaire"
                />
              </el-form-item>
            </div>
            <!--end::Col-->
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">
              Annuler
            </button>
            <!--begin::Submit-->

            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-primary"
              type="submit"
              @click="updateComment()"
            >
              <span v-if="!loading" class="indicator-label"> Enregistrer </span>
              <span v-if="loading" class="indicator-progress">
                S'il vous plaît, attendez...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>

            <!--end::Submit-->
          </div>
        </div>
      </div>
    </div>

    <!--begin::Modal - ADD Reminder Details-->
    <div
      class="modal fade"
      id="kt_modal_add_reminder"
      ref="NewReminderModalRef"
      tabindex="-1"
      aria-hidden="true"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-750px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bold">Ajouter Reminder</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              class="btn btn-icon btn-sm btn-active-icon-primary"
              data-bs-dismiss="modal"
            >
              <i class="ki-duotone ki-cross fs-1"
                ><span class="path1"></span><span class="path2"></span
              ></i>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->

          <!--begin::Modal body-->
          <div class="modal-body scroll-y mx-5 my-7">
            <!--begin::Form-->
            <el-form
              id="kt_modal_add_reminder_form"
              @submit.prevent="addReminder()"
              :model="targetData"
              :rules="rules"
              ref="formRef"
              class="form"
            >
              <!--begin::Scroll-->
              <div
                class="d-flex flex-column scroll-y me-n7 pe-7"
                style="min-height: 500px"
                id="kt_modal_add_reminder_scroll"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_modal_add_reminder_header"
                data-kt-scroll-wrappers="#kt_modal_add_reminder_scroll"
                data-kt-scroll-offset="300px"
              >
                <!--begin::Input group-->
                <div class="fv-row mb-10 fv-plugins-icon-container">
                  <!--begin::Label-->
                  <label class="fs-5 fw-bold form-label mb-2">
                    <span class="required">Titre</span>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="title">
                    <el-input
                      v-model="targetData.title"
                      placeholder="Enter reminder Title"
                      name="title"
                    ></el-input>
                  </el-form-item>
                </div>
                <!--end::Input group-->

                <!--begin::Permissions-->
                <div class="fv-row">
                  <!--begin::Label-->
                  <label class="fs-5 fw-bold form-label mb-2 required"
                    >Description</label
                  >
                  <!--end::Label-->
                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-8">
                    <el-form-item prop="description">
                      <el-input
                        v-model="targetData.description"
                        type="textarea"
                        rows="3"
                        name="description"
                        placeholder="Type Target Details"
                      />
                    </el-form-item>
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Permissions-->

                <div class="d-flex flex-wrap gap-5">
                  <!--begin::Input group-->
                  <div
                    class="fv-row w-100 flex-md-root fv-plugins-icon-container"
                  >
                    <!--begin::Label-->
                    <label class="fs-5 fw-bold form-label mb-2 required"
                      >Date d'échéance</label
                    >

                    <!--begin::Input-->
                    <div class="position-relative align-items-center">
                      <!--begin::Datepicker-->
                      <el-form-item prop="reminder_datetime">
                        <el-date-picker
                          v-model="targetData.reminder_datetime"
                          type="datetime"
                          placeholder="Select a date"
                          :teleported="false"
                          popper-class="override-styles"
                          name="reminder_datetime"
                          format="YYYY/MM/DD hh:mm:ss"
                          value-format="YYYY-MM-DD hh:mm:ss"
                        />
                      </el-form-item>
                      <!--end::Datepicker-->
                    </div>
                    <!--end::Input-->

                    <div
                      class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
                    ></div>
                  </div>
                  <!--end::Input group-->
                </div>
              </div>
              <!--end::Scroll-->

              <!--begin::Actions-->
              <div class="text-center pt-5">
                <button
                  type="reset"
                  id="kt_modal_add_reminder_cancel"
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
            <!--end::Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - ADD Reminder Details-->



    <!--begin::Modal - ADD Event Details-->
    <div
        class="modal fade"
        id="kt_modal_add_event"
        ref="NewEventModalRef"
        tabindex="-1"
        aria-hidden="true"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-750px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <!--begin::Modal title-->
            <h2 class="fw-bold">Ajouter Événement</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
                class="btn btn-icon btn-sm btn-active-icon-primary"
                data-bs-dismiss="modal"
            >
              <i class="ki-duotone ki-cross fs-1"
              ><span class="path1"></span><span class="path2"></span
              ></i>
            </div>
            <!--end::Close-->
          </div>
          <!--end::Modal header-->

          <!--begin::Modal body-->
          <div class="modal-body scroll-y mx-5 my-7">
            <!--begin::Form-->
            <el-form
                id="kt_modal_add_event_form"
                @submit.prevent="addEvent()"
                :model="targetDataEvent"
                :rules="Eventrules"
                ref="formEventRef"
                class="form"
            >
              <!--begin::Scroll-->
              <div
                  class="d-flex flex-column scroll-y me-n7 pe-7"
                  style="min-height: 500px"
                  id="kt_modal_add_event_scroll"
                  data-kt-scroll="true"
                  data-kt-scroll-activate="{default: false, lg: true}"
                  data-kt-scroll-max-height="auto"
                  data-kt-scroll-dependencies="#kt_modal_add_event_header"
                  data-kt-scroll-wrappers="#kt_modal_add_reminder_scroll"
                  data-kt-scroll-offset="300px"
              >
                <!--begin::Input group-->
                <div class="fv-row mb-10 fv-plugins-icon-container">
                  <!--begin::Label-->
                  <label class="fs-5 fw-bold form-label mb-2">
                    <span class="required">Titre</span>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="title">
                    <el-input
                        v-model="targetDataEvent.title"
                        placeholder="Enter reminder Title"
                        name="title"
                    ></el-input>
                  </el-form-item>
                </div>
                <!--end::Input group-->

                <!--begin::Permissions-->
                <div class="fv-row">
                  <!--begin::Label-->
                  <label class="fs-5 fw-bold form-label mb-2 required"
                  >Description</label
                  >
                  <!--end::Label-->
                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-8">
                    <el-form-item prop="description">
                      <el-input
                          v-model="targetDataEvent.description"
                          type="textarea"
                          rows="3"
                          name="description"
                          placeholder="Type Target Details"
                      />
                    </el-form-item>
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Permissions-->

                <div class="d-flex flex-wrap gap-5">
                  <!--begin::Input group-->
                  <div
                      class="fv-row w-100 flex-md-root fv-plugins-icon-container"
                  >
                    <!--begin::Label-->
                    <label class="fs-5 fw-bold form-label mb-2 required"
                    >Date Debut</label
                    >

                    <!--begin::Input-->
                    <div class="position-relative align-items-center">
                      <!--begin::Datepicker-->
                      <el-form-item prop="start_datetime">
                        <el-date-picker
                            v-model="targetDataEvent.start_datetime"
                            type="datetime"
                            placeholder="Select a date"
                            :teleported="false"
                            popper-class="override-styles"
                            name="start_datetime"
                            format="YYYY/MM/DD hh:mm:ss"
                            value-format="YYYY-MM-DD hh:mm:ss"
                        />
                      </el-form-item>
                      <!--end::Datepicker-->
                    </div>
                    <!--end::Input-->

                    <div
                        class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
                    ></div>
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div
                      class="fv-row w-100 flex-md-root fv-plugins-icon-container"
                  >
                    <!--begin::Label-->
                    <label class="fs-5 fw-bold form-label mb-2 required"
                    >Date Fin</label
                    >

                    <!--begin::Input-->
                    <div class="position-relative align-items-center">
                      <!--begin::Datepicker-->
                      <el-form-item prop="end_datetime">
                        <el-date-picker
                            v-model="targetDataEvent.end_datetime"
                            type="datetime"
                            placeholder="Select a date"
                            :teleported="false"
                            popper-class="override-styles"
                            name="end_datetime"
                            format="YYYY/MM/DD hh:mm:ss"
                            value-format="YYYY-MM-DD hh:mm:ss"
                        />
                      </el-form-item>
                      <!--end::Datepicker-->
                    </div>
                    <!--end::Input-->

                    <div
                        class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
                    ></div>
                  </div>
                  <!--end::Input group-->
                </div>
              </div>
              <!--end::Scroll-->

              <!--begin::Actions-->
              <div class="text-center pt-5">
                <button
                    type="reset"
                    id="kt_modal_add_event_cancel"
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
            <!--end::Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - ADD Event Details-->
    <!--begin::Row-->
    <div class="row gy-10 gx-xl-10">
      <div class="card">
        <!--begin::Card body-->
        <div class="card-body">
          <!--begin::Layout-->
          <div class="d-flex flex-column flex-xl-row p-7">
            <!--begin::Content-->
            <div class="flex-lg-row-fluid me-xl-15 mb-20 mb-xl-0">
              <!--begin::Ticket view-->
              <div class="mb-0">
                <!--begin::Heading-->
                <div class="d-flex align-items-center mb-12">
                  <!--begin::Icon-->
                  <i
                    class="ki-duotone ki-file-added fs-4qx text-success ms-n2 me-3"
                    ><span class="path1"></span><span class="path2"></span
                  ></i>
                  <!--end::Icon-->

                  <!--begin::Content-->
                  <div class="d-flex flex-column">
                    <!--begin::Title-->
                    <h1 class="text-gray-800 fw-semibold task-description">
                      {{ task.title }}
                    </h1>
                    <!--end::Title-->

                    <!--begin::Info-->
                    <div class="">
                      <!--begin::Label-->
                      <span class="fw-semibold text-muted me-6"
                        >Project:
                        <a href="#" class="text-muted text-hover-primary">{{
                          task.project.title
                        }}</a></span
                      >
                      <!--end::Label-->

                      <!--begin::Label-->
                      <span class="fw-semibold text-muted me-6"
                        >Par:
                        <a href="#" class="text-muted text-hover-primary">{{
                          task.project.owner.fullname
                        }}</a></span
                      >
                      <!--end::Label-->

                      <!--begin::Label-->
                      <span class="fw-semibold text-muted"
                        >Crée:
                        <span class="fw-bold text-muted me-1">{{
                          formatDate(task.created_at)
                        }}</span>
                      </span>
                      <!--end::Label-->
                    </div>
                    <!--end::Info-->
                  </div>
                  <!--end::Content-->
                </div>
                <!--end::Heading-->

                <!--begin::Details-->
                <div class="mb-15">
                  <!--begin::Description-->
                  <div class="mb-15 fs-5 fw-normal text-gray-800">
                    <!--begin::Text-->
                    <div class="mb-10">
                      {{ task.description }}
                    </div>
                    <!--end::Text-->
                  </div>
                  <!--end::Description-->
                  <div
                    class="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6"
                    v-if="task.parent_id !== null"
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
                          visiter la tâche parente
                          <router-link
                            class="fs-6 project-title"
                            :to="{
                              name: 'task-overview',
                              params: {
                                slug: route.params.slug,
                                id: task.parent.slug,
                              },
                            }"
                          >
                            {{ task.parent.title }}</router-link
                          >
                        </div>
                      </div>
                      <!--end::Content-->
                    </div>
                    <!--end::Wrapper-->
                  </div>
                  <!--begin::Row-->
                  <div class="row mb-7">
                    <!--begin::Col-->
                    <div class="col-md-3 fv-row mb-3">
                      <label class="fs-6 fw-semibold mb-2">Créateur</label>
                      <el-form-item prop="assign_id">
                        <el-select
                          v-model="task.creator.id"
                          placeholder="Sélectionnez un membre de l'équipe"
                          name="assign_id"
                          as="select"
                        >
                          <el-option
                            v-if="task.creator"
                            :label="task.creator.fullname"
                            :value="userstore.user.id"
                          >
                            {{ task.creator.fullname }}</el-option
                          >
                        </el-select>
                      </el-form-item>
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-md-3 fv-row mb-3">
                      <label class="fs-6 fw-semibold mb-2">Affecter à</label>

                      <el-form-item prop="assign_id">
                        <el-select
                          v-model="task.assign_id"
                          placeholder="Sélectionnez un membre de l'équipe"
                          name="assign_id"
                          as="select"
                        >
                          <el-option
                            v-if="userstore.user"
                            :label="userstore.user.fullname"
                            :value="userstore.user.id"
                            >assignez-vous</el-option
                          >
                          <el-option
                            v-for="item in members"
                            :key="item.id"
                            :label="item.fullname"
                            :value="item.id"
                          />
                        </el-select>
                      </el-form-item>
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-sm-3 fv-row mb-3">
                      <label class="fs-6 fw-semibold mb-2">Statut</label>

                      <el-form-item prop="status">
                        <el-select
                          v-model="task.status"
                          placeholder="Sélectionnez une Statut"
                          name="status"
                          as="select"
                        >
                          <el-option value="">Sélectionnez Statut...</el-option>
                          <el-option label="Encore à commencer" value="1">
                            Encore à commencer</el-option
                          >
                          <el-option label="En cours" value="2"
                            >En cours
                          </el-option>
                          <el-option label="Complété" value="3"
                            >Complété
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-sm-3 fv-row mb-3">
                      <label class="fs-6 fw-semibold mb-2">Priorité</label>

                      <el-form-item prop="priority">
                        <el-select
                          v-model="task.priority"
                          placeholder="Sélectionnez un Priorité"
                          name="priority"
                          as="select"
                        >
                          <el-option value=""
                            >Sélectionnez priorité...</el-option
                          >
                          <el-option label="Importante" value="1"> </el-option>
                          <el-option label="Urgente" value="2"> </el-option>
                          <el-option label="Haute" value="3"> </el-option>
                          <el-option label="Faible" value="4"> </el-option>
                          <el-option label="Moyenne" value="5"> </el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Row-->

                  <!--begin::Input group-->
                  <div class="mb-0">
                    <textarea
                      class="form-control form-control-solid placeholder-gray-600 fw-bold fs-4 ps-9 pt-7"
                      rows="6"
                      name="message"
                      placeholder="Partagez vos connaissances"
                      v-model="TextComment"
                    >
                    </textarea>

                    <!--begin::Submit-->

                    <button
                      :data-kt-indicator="loading ? 'on' : null"
                      class="btn btn-primary mt-n20 mb-20 position-relative float-end me-7"
                      type="submit"
                      @click="addComment(task.id)"
                    >
                      <span v-if="!loading" class="indicator-label">
                        Enregistrer
                      </span>
                      <span v-if="loading" class="indicator-progress">
                        S'il vous plaît, attendez...
                        <span
                          class="spinner-border spinner-border-sm align-middle ms-2"
                        ></span>
                      </span>
                    </button>

                    <!--end::Submit-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Details-->

                <!--begin::Comments-->
                <div class="mb-15">
                  <!--begin::Comment-->
                  <div
                    class="overflow-hidden position-relative card-rounded"
                    v-for="(comment, index) in filteredComments"
                    :key="index"
                  >
                    <!--begin::Card-->
                    <div class="card card-bordered w-100 mb-5">
                      <!--begin::Body-->
                      <div class="card-body">
                        <!--begin::Wrapper-->
                        <div class="w-100 d-flex flex-stack mb-8">
                          <!--begin::Container-->
                          <div class="d-flex align-items-center f">
                            <!--begin::Author-->
                            <div class="symbol symbol-50px me-5">
                              <div
                                class="symbol-label fs-1 fw-bold bg-light-primary text-primary"
                              >
                                {{ generateInitials(comment.author.fullname) }}
                              </div>
                            </div>
                            <!--end::Author-->

                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column fw-semibold fs-5 text-gray-600 text-dark"
                            >
                              <!--begin::Text-->
                              <div class="d-flex align-items-center">
                                <!--begin::Username-->
                                <a
                                  href="/metronic8/demo7/../demo7/pages/user-profile/overview.html"
                                  class="text-gray-800 fw-bold text-hover-primary fs-5 me-3"
                                  >{{
                                    capitalizeFirstLetter(
                                      comment.author.fullname
                                    )
                                  }}</a
                                >
                                <!--end::Username-->
                                <span
                                  class="badge badge-light-danger"
                                  v-if="comment.author.id === task.creator.id"
                                  >Auteur</span
                                >
                                <span class="m-0" v-else></span>
                              </div>
                              <!--end::Text-->

                              <!--begin::Date-->
                              <span class="text-muted fw-semibold fs-6">{{
                                getTimeSince(comment.created_at)
                              }}</span>
                              <!--end::Date-->
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::Container-->

                          <!--begin::Actions-->
                          <div class="m-0">
                            <!--begin::Menu-->
                            <button
                              type="button"
                              class="btn btn-sm btn-icon btn-active-light-primary"
                              v-if="comment.author.id === userstore.user.id"
                              data-bs-toggle="modal"
                              @click="getIdComment(comment)"
                              data-bs-target="#kt_modal_edit_comment"
                            >
                              <i class="ki-duotone ki-message-edit fs-1">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                                <span class="path4"></span>
                              </i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-icon btn-active-light-primary"
                              v-if="
                                comment.author.id === userstore.user.id ||
                                task.creator.id === userstore.user.id
                              "
                              @click="deleteComment(comment.id)"
                            >
                              <i class="ki-duotone ki-trash-square fs-1">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                                <span class="path4"></span>
                              </i>
                            </button>
                          </div>
                          <!--end::Actions-->
                        </div>
                        <!--end::Wrapper-->

                        <!--begin::Desc-->
                        <p class="fw-normal fs-5 text-gray-700 m-0">
                          {{ comment.body }}
                        </p>
                        <!--end::Desc-->
                      </div>
                      <!--end::Body-->
                    </div>
                    <!--end::Card-->
                  </div>
                  <!--end::Comment-->
                </div>
                <!--end::Comments-->
                <!--begin::Pages-->
                <div
                  class="fs-6 fw-semobold text-gray-700"
                  v-if="comments.length"
                >
                  Affichage de {{ startIndex }} à {{ totalPages }} sur
                  {{ comments.length }} entrées
                </div>
                <ul class="pagination" v-if="comments.length">
                  <li class="page-item previous">
                    <button
                      @click="onPageChange(currentPage - 1)"
                      :disabled="currentPage === 1"
                      class="cursor-pointer page-link"
                    >
                      <i class="previous"></i>
                    </button>
                  </li>
                  <li v-for="page in pageNumbers" :key="page" class="page-item">
                    <span
                      @click="onPageChange(page)"
                      :class="{ active: currentPage === page }"
                      class="cursor-pointer page-link"
                      >{{ page }}</span
                    >
                  </li>

                  <li class="page-item next">
                    <button
                      @click="onPageChange(currentPage + 1)"
                      :disabled="currentPage === totalPages"
                      class="cursor-pointer page-link"
                    >
                      <i class="next"></i>
                    </button>
                  </li>
                </ul>
                <!--end::Pages-->
              </div>
              <!--end::Ticket view-->
            </div>
            <!--end::Content-->

            <!--begin::Sidebar-->
            <div
              class="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px"
            >
              <!--begin::More channels-->
              <div class="card-rounded bg-primary bg-opacity-5 p-10 mb-15">
                <!--begin::Item-->
                <div class="d-flex align-items-center mb-10">
                  <!--begin::Icon-->
                  <i
                    class="ki-duotone ki-notification-status fs-1 text-primary me-5"
                    ><span class="path1"></span><span class="path2"></span
                    ><span class="path3"></span><span class="path4"></span
                  ></i>
                  <!--end::Icon-->

                  <!--begin::Info-->
                  <div class="d-flex flex-column">
                    <h5 class="text-gray-800 fw-bold">Type du projet</h5>

                    <!--begin::Section-->
                    <div class="fw-semibold">
                      <!--begin::Desc-->
                      <span class="text-muted">{{ task.type }}</span>
                      <!--end::Desc-->
                    </div>
                    <!--end::Section-->
                  </div>
                  <!--end::Info-->
                </div>
                <!--end::Item-->
                <!--begin::Item-->
                <div class="d-flex align-items-center mb-10">
                  <!--begin::Icon-->
                  <i class="ki-duotone ki-calendar fs-1 text-primary me-5"
                    ><span class="path1"></span><span class="path2"></span
                  ></i>
                  <!--end::Icon-->

                  <!--begin::Info-->
                  <div class="d-flex flex-column">
                    <h5 class="text-gray-800 fw-bold">Date d'échéance</h5>

                    <!--begin::Section-->
                    <div class="fw-semibold">
                      <!--begin::Desc-->
                      <span class="text-muted">{{
                        formatDateWithoutTime(task.due_date)
                      }}</span>
                      <!--end::Desc-->
                    </div>
                    <!--end::Section-->
                  </div>
                  <!--end::Info-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="d-flex align-items-center mb-10">
                  <!--begin::Icon-->
                  <i class="ki-duotone ki-social-media fs-1 text-primary me-5"
                    ><span class="path1"></span><span class="path2"></span
                  ></i>
                  <!--end::Icon-->

                  <!--begin::Info-->
                  <div class="d-flex flex-column">
                    <h5 class="text-gray-800 fw-bold">Tags</h5>
                    <div class="d-flex">
                      <span
                        v-for="(tag, index) in JSON.parse(task.tags)"
                        :key="index"
                        class="symbol symbol-35px me-2"
                        data-bs-toggle="tooltip"
                        aria-label="Ana Stone"
                        data-bs-original-title="Ana Stone"
                        data-kt-initialized="1"
                      >
                        <span class="badge badge-primary">{{ tag }}</span>
                      </span>
                    </div>
                  </div>
                  <!--end::Info-->
                </div>
                <!--end::Item-->
              </div>
              <!--end::More channels-->
              <div class="m-0" v-if="task.subtasks.length">
                <h4 class="text-dark mb-7">Sous-tâches</h4>

                <!--begin::Item-->
                <div
                  class="d-flex flex-stack mb-7"
                  v-for="(subtask, index) in task.subtasks"
                  :key="index"
                >
                  <!--begin::Symbol-->

                  <div class="symbol symbol-60px symbol-2by3 me-4">
                    <div
                      class="symbol-label fs-1 fw-bold bg-light-primary text-primary"
                    >
                      {{ generateInitials(subtask.title) }}
                    </div>
                  </div>

                  <!--end::Symbol-->

                  <!--begin::Title-->
                  <div class="m-0">
                    <router-link
                      class="text-dark fw-bold text-hover-primary fs-6 project-title"
                      :to="{
                        name: 'task-overview',
                        params: {
                          slug: route.params.slug,
                          id: subtask.slug,
                        },
                      }"
                    >
                      {{ subtask.title }}</router-link
                    >

                    <span
                      class="text-gray-600 fw-semibold pt-1 fs-7 task-description"
                      >{{ subtask.description }}</span
                    >
                  </div>
                  <!--end::Title-->
                </div>
                <!--end::Item-->
              </div>
            </div>
            <!--end::Sidebar-->
          </div>
          <!--end::Layout-->
        </div>
        <!--end::Card body-->
      </div>
    </div>
    <AddNewSubTaskModal
      @buttonClick="ReloadTask"
      :id="task.id"
    ></AddNewSubTaskModal>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import Dropdown from "@/components/dropdown/dropdown-student/TaskDropdown.vue";
import { useAuthStore } from "@/stores/auth";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useProjectStore } from "@/stores/project";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { hideModal } from "@/core/helpers/dom";
import { jsPDF } from "jspdf";
import AddNewSubTaskModal from "@/components/modals/student-modals/add-new-task/AddNewSubTaskModal.vue";
import KtEmpty from "@/layouts/main-layout/search/partials/Empty.vue";
interface ReminderData {
  title: string;
  description: string;
  reminder_datetime: Date;
  checked: number;
  task_id: number;
}
interface EventData {
  title: string;
  description: string;
  start_datetime: Date;
  end_datetime: Date;

  task_id: number;
}
export default defineComponent({
  name: "task-overview",
  components: { KtEmpty, AddNewSubTaskModal },
  setup() {
    const userstore = useAuthStore();
    const loading = ref<boolean>(false);
    const store = useProjectStore();
    const members = ref([]);
    const comments = ref([]);
    const url = import.meta.env.VITE_APP_URL;
    const task = ref(null);
    const id = ref(0);
    const router = useRouter();
    const route = useRoute();
    const capitalized = (name) => {
      if (name) {
        const capitalizedFirst = name[0].toUpperCase();
        const rest = name.slice(1);

        return capitalizedFirst + rest;
      }
    };
    const getTask = async (slug) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/task/byslug/" + slug);
          task.value = response.data.data;
          if (task.value) {
            id.value = response.data.data.id;
            comments.value = response.data.data.comments;
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
            // Go to page after successfully login
            router.push({ name: "account-tasks" });
          });
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
    function capitalizeFirstLetter(str: string): string {
      if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      } else {
        return "non défini";
      }
    }
    function ProjectType(name) {
      if (name) {
        const initials = name
          .toUpperCase()
          .split(" ")
          .map((name) => name[0])
          .join("");
        return initials;
      }
      return "";
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
    function formatDate(date) {
      if (date) {
        return new Date(date).toLocaleDateString();
      } else {
        return "Inconnu";
      }
    }
    function formatDateWithoutTime(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    const getTeamMembers = async (id) => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/members/" + id);
          members.value = response.data.data;
        } catch (error: any) {
          document.body.classList.add("page-loading");
          document.body.setAttribute("data-kt-app-page-loading", "true");
        }
      }
    };
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

    const currentPage = ref(1);
    const pageSize = ref(5);
    const filteredComments = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize.value;
      const endIndex = startIndex + pageSize.value;
      return comments.value.slice(startIndex, endIndex);
    });
    const totalPages = computed(() => {
      return Math.ceil(comments.value.length / pageSize.value);
    });

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
      return end > filteredComments.value.length
        ? filteredComments.value.length
        : end;
    });
    function deleteItemComment(id) {
      //Send  request
      store.DeleteTaskComment(id);
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {
        getTask(route.params.id);
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
    const commentData = new FormData();
    const TextComment = ref("");
    const UpdatecommentData = new FormData();
    const CommentBody = ref("");
    const IdComment = ref(0);
    const newUpdateCommentModalRef = ref<null | HTMLElement>(null);
    function addComment(id) {
      if (TextComment.value !== "") {
        commentData.append("comment", TextComment.value);
        commentData.append("task_id", id);
        loading.value = true;
        //Send  request
        store.AddTaskComment(commentData);
        const error = Object.values(store.errors);

        console.log("error", error);
        if (!error.length) {
          loading.value = false;
          getTask(route.params.id);
        } else {
          loading.value = false;
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
    }
    function updateComment() {
      if (CommentBody.value !== "") {
        UpdatecommentData.append("comment", CommentBody.value);

        loading.value = true;
        //Send  request
        store.UpdateTaskComment(UpdatecommentData, IdComment.value);
        const error = Object.values(store.errors);

        console.log("error", error);
        if (!error.length) {
          loading.value = false;
          setTimeout(() => {
            loading.value = false;
            hideModal(newUpdateCommentModalRef.value);
          }, 1000);
          getTask(route.params.id);
        } else {
          loading.value = false;
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
    }
    function getIdComment(comment) {
      IdComment.value = comment.id;
      CommentBody.value = comment.body;
    }
    const deleteComment = (id: number) => {
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
          for (let i = 0; i < comments.value.length; i++) {
            if (comments.value[i]["id"] === id) {
              comments.value.splice(i, 1);
            }
          }
          deleteItemComment(id);

          // Show success message after successful deletion
          Swal.fire("Supprimé!", "L'élément a été supprimé.", "success");
        } else {
          // User cancelled, do nothing or show a cancellation message
          Swal.fire("Annulé", "Suppression annulée.", "info");
        }
      });
    };

    function deleteItemTask(id) {
      //Send  request
      store.DeleteTask(id);
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {
        // Show success message after successful deletion
        Swal.fire("Supprimé!", "L'élément a été supprimé.", "success");
        // Go to page after successfully login
        router.push({
          name: "project-tasks",
          params: {
            slug: route.params.slug,
          },
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
    const deleteTask = (id: number) => {
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
          deleteItemTask(id);
        } else {
          // User cancelled, do nothing or show a cancellation message
          Swal.fire("Annulé", "Suppression annulée.", "info");
        }
      });
    };
    function generatePDF(taskDetails) {
      const doc = new jsPDF();

      // Set font styles
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);

      // Add cover page
      doc.text("Détails de la tâche", 105, 40, { align: "center" });
      doc.line(20, 45, 190, 45); // Horizontal line

      // Add task title
      doc.setFontSize(16);
      doc.text(taskDetails.title, 20, 60);
      // Add other task details
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const priorityText = `Type: ${taskDetails.type}`;
      doc.text(priorityText, 20, 70);

      // Add due date
      const dueDateText = `Date d'échéance: ${taskDetails.due_date}`;
      doc.text(dueDateText, 20, 80);
      // Add task description
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      const descriptionLines = doc.splitTextToSize(
        taskDetails.description,
        180
      );
      doc.text(descriptionLines, 20, 90);

      // Save the PDF
      doc.save("task_details.pdf");
    }
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
          getTask(newParams.id).finally(() => {
            // Disable loading indicator
            document.body.classList.remove("page-loading");
            document.body.removeAttribute("data-kt-app-page-loading");
          });
        }
      }
    );
    function ReloadTask() {
      // Handle the button click event
      console.log("Button clicked in child component!");
      getTask(route.params.id);
    }

    const NewReminderModalRef = ref<null | HTMLElement>(null);

    const targetData = ref<ReminderData>({
      title: "",
      description: "",
      reminder_datetime: new Date(),
      checked: 0,
      task_id: 0,
    });
    const rules = ref({
      title: [
        {
          required: true,
          message: "Veuillez saisir le titre",
          trigger: "blur",
        },
      ],
      description: [
        {
          required: true,
          message: "Veuillez saisir la description",
          trigger: "blur",
        },
      ],
      reminder_datetime: [
        {
          required: true,
          message: "Veuillez sélectionner la date d'échéance",
          trigger: "change",
        },
      ],
    });
    const formRef = ref<null | HTMLFormElement>(null);

    const NewEventModalRef = ref<null | HTMLElement>(null);
    const targetDataEvent = ref<EventData>({
      title: "",
      description: "",
      start_datetime: new Date(),
      end_datetime: new Date(),
      task_id: 0,
    });
    const Eventrules = ref({
      title: [
        {
          required: true,
          message: "Veuillez saisir le titre",
          trigger: "blur",
        },
      ],
      description: [
        {
          required: true,
          message: "Veuillez saisir la description",
          trigger: "blur",
        },
      ],
      start_datetime: [
        {
          required: true,
          message: "Veuillez sélectionner la date debut",
          trigger: "change",
        },
      ],
      end_datetime: [
        {
          required: true,
          message: "Veuillez sélectionner la date fin",
          trigger: "change",
        },
      ],
    });
    const formEventRef = ref<null | HTMLFormElement>(null);

    const addReminder = () => {
      if (typeof route.params.slug === "string") {
        //  targetData.value.project_slug = route.params.slug;
      }
      if (!formRef.value) {
        return;
      }
      formRef.value.validate(async (valid: boolean) => {
        targetData.value.task_id = id.value;
        if (valid) {
          loading.value = true;
          try {
            loading.value = true;
            const response = await store.AddReminder(targetData.value);
            // Do something with the successful response, if needed
            console.log("successfully:", response);
            // Handle success, show success message, etc.
            Swal.fire({
              text: "Enregistrement effectué avec succès!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "OK",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
              },
            }).then(() => {
              // Refresh page data or perform any other action
              loading.value = false;
              hideModal(NewReminderModalRef.value);
            });
          } catch (error) {
            // Handle errors here
            console.error("Error creating admin:", error);
            Swal.fire({
              text: error as string, // Use the error message received from the API
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-danger",
              },
            });
            loading.value = false;
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
            }, 1000);
          });
          return false;
        }
      });
    };
    const addEvent = () => {
      if (typeof route.params.slug === "string") {
        //  targetData.value.project_slug = route.params.slug;
      }
      if (!formEventRef.value) {
        return;
      }
      formEventRef.value.validate(async (valid: boolean) => {
        targetDataEvent.value.task_id = id.value;
        if (valid) {
          loading.value = true;
          try {
            loading.value = true;
            const response = await store.AddEvent(targetDataEvent.value);
            // Do something with the successful response, if needed
            console.log("successfully:", response);
            // Handle success, show success message, etc.
            Swal.fire({
              text: "Enregistrement effectué avec succès!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "OK",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
              },
            }).then(() => {
              // Refresh page data or perform any other action
              loading.value = false;
              hideModal(NewEventModalRef.value);
            });
          } catch (error) {
            // Handle errors here
            console.error("Error creating admin:", error);
            Swal.fire({
              text: error as string, // Use the error message received from the API
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-light-danger",
              },
            });
            loading.value = false;
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
            }, 1000);
          });
          return false;
        }
      });
    };
    onMounted(() => {
      //    Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");
      // Access the project ID from the route params
      if (route.params.slug) {
        console.log("Project ID:", route.params.id);

        getTeamMembers(route.params.slug);
        getTask(route.params.id).finally(() => {
          // Disable loading indicator
          document.body.classList.remove("page-loading");
          document.body.removeAttribute("data-kt-app-page-loading");
        });
      }
    });
    return {
      store,
      url,
      task,
      capitalized,
      generateInitials,
      capitalizeFirstLetter,
      getStatusColorClass,
      ProjectType,
      formatDate,
      getAssetPath,
      id,
      formatDateWithoutTime,
      userstore,
      getTimeSince,
      members,
      pageNumbers,
      endIndex,
      onPageChange,
      startIndex,
      currentPage,
      totalPages,
      comments,
      filteredComments,
      deleteComment,
      loading,
      addComment,
      TextComment,
      updateComment,
      CommentBody,
      getIdComment,
      newUpdateCommentModalRef,
      route,
      generatePDF,
      deleteTask,
      ReloadTask,
      addReminder,
      NewReminderModalRef,
      rules,
      formRef,
      targetData,
      NewEventModalRef,
      Eventrules,
      formEventRef,
      targetDataEvent,
      addEvent
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
