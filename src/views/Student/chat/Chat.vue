<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-lg-row">
    <!--begin::Sidebar-->
    <div
      class="flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0"
    >
      <!--begin::Contacts-->
      <div class="card card-flush">
        <!--begin::Card header-->
        <div class="card-header pt-7" id="kt_chat_contacts_header">
          <!--begin::Form-->
          <form class="w-100 position-relative" autocomplete="off">
            <!--begin::Icon-->
            <KTIcon
              icon-name="magnifier"
              icon-class="fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y"
            />
            <!--end::Icon-->

            <!--begin::Input-->
            <input
              type="text"
              class="form-control form-control-solid px-15"
              name="search"
              v-model="searchQuery"
              placeholder="Rechercher par nom de discussion..."
            />
            <!--end::Input-->
          </form>
          <!--end::Form-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body pt-5" id="kt_chat_contacts_body">
          <!--begin::List-->
          <div
            class="scroll-y me-n5 pe-5 h-200px h-lg-auto"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-max-height="auto"
            data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
            data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
            data-kt-scroll-offset="0px"
          >
            <template v-for="(item, index) in filteredGroups" :key="index">
              <div class="d-flex flex-stack py-4">
                <!--begin::Details-->
                <div class="d-flex align-items-center">
                  <!--begin::Avatar-->
                  <div
                    class="symbol symbol-45px symbol-fixed position-relative"
                  >
                    <img v-if="item.avatar" :src="url + item.avatar" />
                    <span
                      v-else
                      :class="`bg-light-${item.color} text-${item.color}`"
                      class="symbol-label fs-6 fw-bold"
                      >{{ item.subject.charAt(0) }}</span
                    >
                    <div
                      :class="`${
                        item.is_starred
                          ? 'btn btn-icon btn-color-primary'
                          : 'btn btn-icon btn-color-gray-400'
                      }`"
                      @click="StarChat(item.id, item.is_starred)"
                      class="position-absolute translate-middle bottom-0 start-100 mb-6 border border-4 border-body h-20px w-20px"
                    >
                      <i class="ki-duotone ki-star fs-3"></i>
                    </div>
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Details-->
                  <div class="ms-5">
                    <span
                      class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2 cursor-pointer chat-subject"
                      @click="loadConversation(item)"
                      >{{ item.subject }}
                    </span>
                    <div
                      class="fw-semobold text-gray-400"
                      v-if="item.last_message !== ''"
                    >
                      <span
                        class="chat-subject"
                        :class="`${
                          item.unread > 0
                            ? 'fw-bold text-gray-600'
                            : 'fw-semobold'
                        }`"
                        >{{ item.last_message }}
                      </span>
                    </div>
                    <div class="fw-semobold text-gray-400" v-else>
                      discussion vide
                    </div>
                  </div>
                  <!--end::Details-->
                </div>
                <!--end::Details-->

                <!--begin::Lat seen-->
                <div class="d-flex flex-column align-items-end ms-2">
                  <span
                    class="text-muted fs-7 mb-1"
                    v-if="item.end_date !== null"
                    >{{ getTimeSince(item.end_date) }}</span
                  >

                  <span
                    class="badge badge-sm badge-circle badge-light-primary"
                    v-if="item.unread > 0"
                    >{{ item.unread }}</span
                  >
                </div>

                <!--end::Lat seen-->
              </div>
            </template>
          </div>
          <!--end::List-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Contacts-->
    </div>
    <!--end::Sidebar-->

    <div v-if="loading" class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title"></h3>
        </div>
        <div class="card-body">
          <div class="overlay overlay-block rounded">
            <div class="overlay-wrapper p-5">Chargement du contenu...</div>
            <div class="overlay-layer rounded bg-dark bg-opacity-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!Group" class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title"></h3>
          <!--begin::Card toolbar-->
          <div class="card-toolbar">
            <!--begin::Menu-->
            <div class="me-n3">
              <button
                class="btn btn-sm btn-icon btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                data-kt-menu-flip="top-end"
              >
                <i class="bi bi-three-dots fs-2"></i>
              </button>
            </div>
            <!--end::Menu-->
          </div>
          <!--end::Card toolbar-->
        </div>

        <div class="card-body">
          <div class="overlay overlay-block rounded">
            <div class="overlay-wrapper p-5">Chargement du contenu...</div>
            <div class="overlay-layer rounded bg-dark bg-opacity-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--begin::Content-->
    <div
      v-if="!loading && Group"
      ref="loadingMessage"
      class="flex-lg-row-fluid ms-lg-7 ms-xl-10"
    >
      <!--begin::Messenger-->
      <div class="card" id="kt_chat_messenger_group">
        <!--begin::Card header-->
        <div class="card-header" id="kt_chat_messenger_group_header">
          <!--begin::Title-->
          <div class="card-title">
            <!--begin::User-->
            <div class="d-flex justify-content-center flex-column me-3">
              <div v-if="isGroupChat" class="symbol-group symbol-hover">
                <div
                  class="symbol symbol-35px symbol-circle"
                  v-for="(item, index) in participants"
                  :key="index"
                >
                  <img
                    alt="Pic"
                    :title="item.user.fullname"
                    :src="url + item.user.photo"
                  />
                </div>

                <!--end::All users-->
              </div>
              <template v-else>
                <a
                  href="#"
                  class="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                  >Brian Cox</a
                >

                <!--begin::Info-->
                <div class="mb-0 lh-1">
                  <span
                    class="badge badge-success badge-circle w-10px h-10px me-1"
                  ></span>
                  <span class="fs-7 fw-semobold text-gray-400">Active</span>
                </div>
                <!--end::Info-->
              </template>
            </div>
            <!--end::User-->
          </div>
          <!--end::Title-->

          <!--begin::Card toolbar-->
          <div class="card-toolbar">
            <!--begin::Menu-->
            <div class="me-n3">
              <span
                id="ChatContactAction"
                class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <KTIcon icon-name="category" icon-class="fs-2" />
              </span>
              <!--begin::Menu-->
              <div class="dropdown">
                <!--begin::Menu 2-->
                <div
                  class="dropdown-menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold w-200px"
                  data-kt-menu="true"
                  aria-labelledby="dropdownMenuButton"
                >
                  <!--begin::Heading-->
                  <div class="menu-item px-3">
                    <div
                      class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase"
                    >
                      Contacts
                    </div>
                  </div>
                  <!--end::Heading-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3" v-if="Group.owner">
                    <a
                      href="#"
                      class="menu-link px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_add_contact"
                    >
                      Ajouter membre
                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Specify a contact email to send an invitation"
                      ></i>
                    </a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a
                      href="#"
                      class="menu-link px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_group_details"
                    >
                      Groupe
                    </a>
                  </div>
                  <!--end::Menu item-->

                  <!--begin::Menu item-->
                  <div class="menu-item px-3 my-1" v-if="Group.owner">
                    <a
                      href="#"
                      class="menu-link px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_update_chat_name"
                    >
                      Paramètres
                    </a>
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu 2-->
              </div>
              <!--end::Menu-->
            </div>
            <!--end::Menu-->
          </div>
          <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div
          class="scroll-y h-500px card-body"
          id="kt_chat_messenger_group_body"
        >
          <!--begin::Messages-->
          <div
            class="scroll-y me-n5 pe-5 h-300px h-lg-auto"
            ref="messagesRef"
            data-kt-element="messages"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-max-height="auto"
            data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_group_header, #kt_chat_messenger_group_group_footer"
            data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_group_group_body"
            data-kt-scroll-offset="5px"
          >
            <template v-for="(item, index) in messages" :key="index">
              <MessageIn
                ref="messagesInRef"
                v-if="item.type === 'in'"
                :name="item.name"
                :image="url + item.image"
                :time="getTimeSince(item.time)"
                :text="item.text"
                :attachments="item.attachments"
              ></MessageIn>
              <MessageOut
                ref="messagesOutRef"
                v-if="item.type === 'out'"
                :image="url + item.image"
                :time="getTimeSince(item.time)"
                :text="item.text"
                :attachments="item.attachments"
              ></MessageOut>
            </template>
          </div>
          <!--end::Messages-->
        </div>
        <!--end::Card body-->
        <div class="d-flex flex-column align-items-end ms-2 m-2 me-2">
          <div class="symbol-group symbol-hover">
            <span v-for="(item, index) in participants" :key="index"
              ><span v-if="isMessageRead(item.last_read, Group.end_date)"
                ><img
                  class="badge badge-circle badge-primary"
                  :title="item.user.fullname"
                  :src="url + item.user.photo"
                /> </span
            ></span>
          </div>
        </div>
        <!--begin::Card footer-->
        <div class="card-footer pt-4" id="kt_chat_messenger_group_group_footer">
          <!--begin::Input-->
          <input
            v-model="newMessageText"
            @keydown.enter="addNewMessage"
            class="form-control form-control-flush mb-3"
            data-kt-element="input"
            placeholder="Tapez un message"
          />
          <!--end::Input-->

          <!--begin:Toolbar-->
          <div class="d-flex flex-stack">
            <!--begin::Actions-->
            <div class="d-flex align-items-center me-2">
              <button
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_upload_chat_files"
                class="btn btn-sm btn-icon btn-active-light-primary me-1"
              >
                <i class="bi bi-paperclip fs-3"></i>
                <span v-if="uploadFiles.length > 0">{{
                  uploadFiles.length
                }}</span>
              </button>

              <!--end::-->

              <button
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_upload_chat"
                class="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
              >
                <i class="bi bi-upload fs-3"></i>
                <span v-if="uploadImages.length > 0">{{
                  uploadImages.length
                }}</span>
              </button>
            </div>
            <!--end::Actions-->

            <!--begin::Send-->
            <button
              :data-kt-indicator="loadingSend ? 'on' : null"
              class="btn btn-primary"
              type="submit"
              @click="addNewMessage()"
            >
              <span v-if="!loadingSend" class="indicator-label"> Envoyer </span>
              <span v-if="loadingSend" class="indicator-progress">
                S'il vous plaît, attendez...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>

            <!--end::Send-->
          </div>
          <!--end::Toolbar-->
        </div>
        <!--end::Card footer-->
      </div>
      <!--end::Messenger-->
    </div>
    <div
      ref="UploadChatModalRef"
      class="modal fade"
      id="kt_modal_upload_chat"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Form-->
          <form class="form" action="none" id="kt_modal_upload_chat_form">
            <!--begin::Modal header-->
            <div class="modal-header">
              <!--begin::Modal title-->
              <h2 class="fw-bold">Upload Images</h2>
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
            <div class="modal-body pt-10 pb-15 px-lg-17">
              <!--begin::Input group-->
              <div class="form-group">
                <!--begin::Dropzone-->
                <div class="dropzone dropzone-queue mb-2">
                  <!-- begin::Controls -->
                  <div class="dropzone-panel mb-4">
                    <div class="dropzone">
                      <!--                      @click="openFileSelection"-->
                      <!--                      @dragover="onDragOver"-->
                      <!--                      @dragleave="onDragLeave"-->
                      <!--                      @drop="onDrop"-->
                      <!--                      :class="{ disabled: !enabled }"-->

                      <!--begin::Label-->
                      <label
                        class="btn btn-icon btn-circle btn-active-color-primary w-50px h-50px bg-body shadow"
                        data-kt-image-input-action="change"
                        data-bs-toggle="tooltip"
                        title="Upload pictures"
                      >
                        <img
                          :src="getAssetPath('media/svg/files/upload.svg')"
                        />

                        <!--begin::Inputs-->
                        <input
                          ref="fileInput"
                          class="file-input"
                          style="display: none"
                          type="file"
                          accept="image/*"
                          name="images[]"
                          multiple
                          @change="handleImagesUpload"
                        />

                        <!--end::Inputs-->
                      </label>
                      <!--end::Label-->
                    </div>

                    <div class="dropzone-panel mb-4">
                      <a
                        v-if="uploadImages.length"
                        @click="clearImagesList"
                        class="dropzone-select mt-2 btn btn-sm btn-primary me-2"
                      >
                        Supprimer tout
                      </a>
                    </div>
                  </div>
                  <!-- end::Controls -->

                  <!-- begin::Items -->
                  <div
                    class="dropzone-items wm-200px"
                    v-for="(item, index) in uploadImages"
                    :key="item.id"
                  >
                    <div
                      class="dropzone-item p-5 dz-image-preview"
                      style=""
                      id=""
                    >
                      <!--begin::File-->
                      <div class="dropzone-file">
                        <div
                          class="dropzone-filename text-dark"
                          title="some_image_file_name.jpg"
                        >
                          <span data-dz-name="">{{ item.name }}</span>
                        </div>
                        <div
                          class="dropzone-error mt-0"
                          data-dz-errormessage=""
                        ></div>
                      </div>
                      <!--end::File-->

                      <!--begin::Toolbar-->
                      <div class="dropzone-toolbar">
                        <span
                          class="dropzone-delete"
                          @click="removeImage(index)"
                          data-dz-remove
                        >
                          <i class="ki-duotone ki-cross fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                        </span>
                      </div>
                      <!--end::Toolbar-->
                    </div>
                  </div>
                  <!-- end::Items -->
                </div>
                <!--end::Dropzone-->

                <!--begin::Hint-->
                <span class="form-text fs-6 text-muted"
                  >Max file size is 1MB per file.</span
                >
                <!--end::Hint-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Modal body-->
          </form>
          <!--end::Form-->
        </div>
      </div>
    </div>

    <div
      ref="UploadChatModalRef"
      class="modal fade"
      id="kt_modal_upload_chat_files"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Form-->
          <form class="form" action="none" id="kt_modal_upload_chat_files_form">
            <!--begin::Modal header-->
            <div class="modal-header">
              <!--begin::Modal title-->
              <h2 class="fw-bold">Upload Fichiers</h2>
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
            <div class="modal-body pt-10 pb-15 px-lg-17">
              <!--begin::Input group-->
              <div class="form-group">
                <!--begin::Dropzone-->
                <div class="dropzone dropzone-queue mb-2">
                  <!-- begin::Controls -->
                  <div class="dropzone-panel mb-4">
                    <div class="dropzone">
                      <!--begin::Label-->
                      <label
                        class="btn btn-icon btn-circle btn-active-color-primary w-50px h-50px bg-body shadow"
                        data-kt-image-input-action="change"
                        data-bs-toggle="tooltip"
                        title="Upload files"
                      >
                        <img
                          :src="getAssetPath('media/svg/files/upload.svg')"
                        />

                        <!--begin::Inputs-->
                        <input
                          ref="fileInputFiles"
                          class="file-input"
                          style="display: none"
                          type="file"
                          accept=".pdf,.docx,.xlsx,.zip,.doc,.pptx,.ppt"
                          name="files[]"
                          multiple
                          @change="handleFileUpload"
                        />

                        <!--end::Inputs-->
                      </label>
                      <!--end::Label-->
                    </div>

                    <div class="dropzone-panel mb-4">
                      <a
                        v-if="uploadFiles.length"
                        @click="clearFilesList"
                        class="dropzone-select mt-2 btn btn-sm btn-primary me-2"
                      >
                        Supprimer tout
                      </a>
                    </div>
                  </div>
                  <!-- end::Controls -->

                  <!-- begin::Items -->
                  <div
                    class="dropzone-items wm-200px"
                    v-for="(item, index) in uploadFiles"
                    :key="item.id"
                  >
                    <div
                      class="dropzone-item p-5 dz-image-preview"
                      style=""
                      id=""
                    >
                      <!--begin::File-->
                      <div class="dropzone-file">
                        <div
                          class="dropzone-filename text-dark"
                          title="some_image_file_name.jpg"
                        >
                          <span data-dz-name="">{{ item.name }}</span>
                        </div>
                        <div
                          class="dropzone-error mt-0"
                          data-dz-errormessage=""
                        ></div>
                      </div>
                      <!--end::File-->

                      <!--begin::Toolbar-->
                      <div class="dropzone-toolbar">
                        <span
                          class="dropzone-delete"
                          @click="removeFile(index)"
                          data-dz-remove
                        >
                          <i class="ki-duotone ki-cross fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                        </span>
                      </div>
                      <!--end::Toolbar-->
                    </div>
                  </div>
                  <!-- end::Items -->
                </div>
                <!--end::Dropzone-->

                <!--begin::Hint-->
                <span class="form-text fs-6 text-muted"
                  >Max file size is 1MB per file.</span
                >
                <!--end::Hint-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Modal body-->
          </form>
          <!--end::Form-->
        </div>
      </div>
    </div>
    <!--begin::Modal - Group Details-->
    <div
      v-if="!loading && Group"
      class="modal fade"
      id="kt_modal_group_details"
      tabindex="-1"
      aria-hidden="true"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-800px">
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
          <div class="modal-body scroll-y pt-0 pb-15">
            <!--begin::Wrapper-->
            <div class="mw-lg-600px mx-auto">
              <!--begin::Heading-->
              <div class="mb-13 text-center">
                <!--begin::Title-->
                <h1 class="mb-3">Détails du groupe</h1>
                <!--end::Title-->

                <!--begin::Description-->
                <div class="text-gray-400 fw-semobold fs-5">
                  Si vous avez besoin de plus d'informations, veuillez consulter
                  <a href="#" class="link-primary fw-bold"></a>.
                </div>
                <!--end::Description-->
              </div>
              <!--end::Heading-->

              <!--begin::Users-->
              <div class="mb-15">
                <!--begin::List-->
                <div class="mh-375px scroll-y me-n7 pe-7">
                  <template
                    v-for="(participant, index) in participants"
                    :key="index"
                  >
                    <!--begin::User-->
                    <div
                      class="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed"
                    >
                      <!--begin::Details-->
                      <div class="d-flex align-items-center">
                        <!--begin::Avatar-->
                        <div class="symbol symbol-35px symbol-circle">
                          <img
                            v-if="participant.user.photo"
                            alt="Pic"
                            :src="url + participant.user.photo"
                          />
                        </div>
                        <!--end::Avatar-->

                        <!--begin::Details-->
                        <div class="ms-6">
                          <!--begin::Name-->
                          <a
                            href="#"
                            class="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"
                          >
                            {{ participant.user.fullname }}
                          </a>
                          <!--end::Name-->

                          <!--begin::Email-->
                          <div class="fw-semobold text-gray-400">
                            Membre depuis:
                            {{ getTimeSince(participant.created_at) }}
                          </div>
                          <!--end::Email-->
                        </div>
                        <!--end::Details-->
                      </div>
                      <!--end::Details-->

                      <!--begin::Stats-->
                      <div class="d-flex">
                        <!--begin::action-->
                        <div class="text-end" v-if="Group.owner">
                          <div class="fs-5 fw-bold text-dark"></div>

                          <span
                            @click="
                              deleteParticipant(
                                Group.id,
                                participant.user.id,
                                participant.id
                              )
                            "
                            v-if="participant.user.id === userstore.user.id"
                            class="cursor-pointer badge badge-light-danger fw-bold px-4 py-3"
                          >
                            Quitter
                          </span>

                          <span
                            @click="
                              deleteParticipant(
                                Group.id,
                                participant.user.id,
                                participant.id
                              )
                            "
                            v-else
                            class="cursor-pointer badge badge-light-danger fw-bold px-4 py-3"
                          >
                            Supprimer
                          </span>
                        </div>
                        <div class="text-end" v-else>
                          <div class="fs-5 fw-bold text-dark"></div>

                          <span
                            @click="
                              deleteParticipant(
                                Group.id,
                                participant.user.id,
                                participant.id
                              )
                            "
                            v-if="participant.user.id === userstore.user.id"
                            class="cursor-pointer badge badge-light-danger fw-bold px-4 py-3"
                          >
                            Quitter
                          </span>
                        </div>
                        <!--end::action-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::User-->
                  </template>
                </div>
                <!--end::List-->
              </div>
              <!--end::Users-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - Group Details-->
    <!--begin::Modal - Add Contact-->
    <div
      class="modal fade"
      id="kt_modal_add_contact"
      tabindex="-1"
      aria-hidden="true"
      ref="addContactModalRef"
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
              <h1 class="mb-3">Invite un nouveau membre</h1>
              <!--end::Title-->

              <!--begin::Description-->
              <div class="text-gray-400 fw-semobold fs-5">
                Si vous avez besoin de plus d'informations, veuillez consulter
                <a href="#" class="link-primary fw-bold">FAQ Page</a>.
              </div>
              <!--end::Description-->
            </div>
            <!--end::Heading-->

            <div
              data-kt-search-keypress="true"
              data-kt-search-min-length="2"
              data-kt-search-enter="enter"
              data-kt-search-layout="inline"
              data-kt-search="true"
            >
              <!--begin::Form-->
              <form
                data-kt-search-element="form"
                class="w-100 position-relative mb-5"
                autocomplete="off"
              >
                <!--begin::Icon-->
                <i
                  class="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y"
                  ><span class="path1"></span><span class="path2"></span
                ></i>
                <!--end::Icon-->

                <!--begin::Input-->
                <input
                  type="text"
                  class="form-control form-control-lg form-control-solid px-15"
                  v-model="fullnameFilter"
                  name="search"
                  placeholder="Recherche par nom d'utilisateur..."
                  data-kt-search-element="input"
                />
                <!--end::Input-->
              </form>
              <!--end::Form-->

              <!--begin::Wrapper-->
              <div class="py-5">
                <!--begin::Suggestions-->
                <div data-kt-search-element="suggestions">
                  <!--begin::Heading-->
                  <h3 class="fw-semibold mb-5">Recherches récente :</h3>
                  <!--end::Heading-->

                  <!--begin::Users-->
                  <div class="mh-375px scroll-y me-n7 pe-7">
                    <!--begin::User-->
                    <div
                      class="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                      v-for="(connection, index) in filteredConnections"
                      :key="index"
                    >
                      <!--begin::Avatar-->
                      <div class="symbol symbol-35px symbol-circle me-5">
                        <img
                          alt="Pic"
                          :title="connection.fullname"
                          :src="url + connection.photo"
                        />
                      </div>
                      <!--end::Avatar-->

                      <!--begin::Info-->
                      <div class="fw-semibold">
                        <span class="fs-6 text-gray-800 me-2">{{
                          connection.fullname
                        }}</span>
                        <span
                          @click="AddChatContact(connection.id, Group)"
                          class="cursor-pointer badge badge-light"
                          >Ajouter</span
                        >
                      </div>
                      <!--end::Info-->
                    </div>
                    <!--end::User-->
                  </div>
                  <!--end::Users-->
                </div>
                <!--end::Suggestions-->
              </div>
              <!--end::Wrapper-->
            </div>
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - Add Contact-->

    <!--begin::Modal - update chat name-->
    <div
      class="modal fade"
      id="kt_modal_update_chat_name"
      tabindex="-1"
      ref="updatechatNameModalRef"
      aria-hidden="true"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-800px">
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
          <div class="modal-body scroll-y pt-0 pb-15">
            <!--begin::Wrapper-->
            <div class="mw-lg-600px mx-auto">
              <!--begin::Heading-->
              <div class="mb-13 text-center">
                <!--begin::Title-->
                <h1 class="mb-3">Edit nom discussion</h1>
                <!--end::Title-->
              </div>
              <!--end::Heading-->

              <!--begin::Input group-->
              <div class="mb-10">
                <!--begin::Title-->
                <h4 class="fs-5 fw-semobold text-gray-800">Nom discussion</h4>
                <!--end::Title-->

                <!--begin::Title-->
                <div class="d-flex">
                  <input
                    ref="inputRef"
                    id="kt_update_chat_name_link_input"
                    type="text"
                    class="form-control form-control-solid me-3 flex-grow-1"
                    v-model="ChatName"
                  />

                  <button
                    @click="updateSubject"
                    ref="updatechatNameButtonRef"
                    id="kt_update_chat_name_link_copy_button"
                    class="btn btn-light fw-bold flex-shrink-0"
                    data-clipboard-target="#kt_update_chat_name_link_input"
                  >
                    Edit
                  </button>
                </div>
                <!--end::Title-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - update chat name-->
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Dropdown4 from "@/components/dropdown/Dropdown4.vue";
import contacts from "@/core/data/contacts";
import MessageIn from "./messenger-parts/MessageIn.vue";
import MessageOut from "./messenger-parts/MessageOut.vue";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";
import { useProjectStore } from "@/stores/project";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { hideModal } from "@/core/helpers/dom";
import router from "../../../router/clean";
interface KTMessage {
  type: string;
  id: number;
  thread_id: number;
  user_id: number;
  name?: string;
  image: string;
  time: string;
  text: string;
  created_at: string;
  updated_at: string;
  user: any[];
  attachments: any[];
}
interface Group {
  id: number;
  avatar: string | null;
  color: string;
  online: boolean;
  subject: string;
  last_message: string;
  unread: number;
  end_date: string | null;
  project: any[]; // Replace `any` with the appropriate type
  messages: any[]; // Replace `any` with the appropriate type
  participants: any[]; // Replace `any` with the appropriate type
}
interface Member {
  id: number;
  fullname: string;
  photo: string | null;
}
interface ImageItem {
  id: number;
  src: string;
  name: string;
}

export default defineComponent({
  name: "private-chat",
  methods: {
    router() {
      return router
    }
  },
  components: {
    MessageIn,
    MessageOut,
  },
  setup() {
    const messagesRef = ref<null | HTMLElement>(null);
    const messagesInRef = ref<null | HTMLElement>(null);
    const messagesOutRef = ref<null | HTMLElement>(null);
    const UploadChatModalRef = ref<null | HTMLElement>(null);
    const updatechatNameModalRef = ref<null | HTMLElement>(null);
    const searchQuery = ref("");
    const groups = ref<Group[]>([]);
    const images = ref<ImageItem[]>([]);
    const Group = ref<null | Group[]>(null);
    const newArray = ref<null | Group[]>([]);
    const GroupRefId = ref(0);
    const participants = ref([]);
    const uploadImages = ref<File[]>([]);
    const uploadFiles = ref<File[]>([]);
    const userstore = useAuthStore();
    const loading = ref(false);
    const loadingSend = ref(false);
    const store = useProjectStore();
    const connections = ref<Member[]>([]);
    const fullnameFilter = ref("");
    const ChatName = ref("");
    const addContactModalRef = ref<null | HTMLElement>(null);
    const filteredGroups = computed(() => {
      const query = searchQuery.value.toLowerCase();

      if (query) {
        return groups.value.filter((item) =>
          item.subject.toLowerCase().includes(query)
        );
      }

      return groups.value;
    });
    const route = useRoute();
    const url = import.meta.env.VITE_APP_URL;
    const messages = ref<Array<KTMessage>>([]);

    const newMessageText = ref("");

    const isGroupChat = computed(() => {
      //  return route.path.indexOf("/group-chat") !== -1;
      return true;
    });

    function isMessageRead(lastRead, messageCreatedAt) {
      const userLastRead = new Date(lastRead).getTime();
      const messageCreatedAtTime = new Date(messageCreatedAt).getTime();
      return userLastRead >= messageCreatedAtTime;
    }
    const loadConversation = (item) => {
      console.log("messages", item);
      // Reformat each message using map
      loading.value = true;
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          ApiService.get("project/conversation/members/markasread/" + item.id);
        } catch (error) {
          console.error("Failed to fetch chat:", error);
          // Handle the error as needed
        }
      }
      setTimeout(() => {
        loading.value = false;
        getChat();
      }, 1000);

      Group.value = item;
      GroupRefId.value = item.id;
      ChatName.value = item.subject;
      messages.value = [];
      participants.value = [];
      participants.value = item.participants;
      messages.value = item.messages.map((message) => {
        // Conditionally change the type based on a condition user id and message sender

        const type = message.user_id === userstore.user.id ? "out" : "in";

        return {
          type, // Use the dynamically determined type
          id: message.id,
          thread_id: message.thread_id,
          user_id: message.user_id,
          created_at: message.created_at,
          updated_at: message.updated_at,
          user: message.user,
          attachments: message.attachments,
          name: message.user.fullname,
          image: message.user.photo,
          time: message.created_at,
          text: message.body,
        };
      });
    };
    const noloaderConversation = (item) => {
      console.log("messages edzefef", item);
      // Reformat each message using map
      // loading.value = true;
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          ApiService.get("project/conversation/members/markasread/" + item.id);
        } catch (error) {
          console.error("Failed to fetch chat:", error);
          // Handle the error as needed
        }
      }
      setTimeout(() => {
        //  loading.value = false;
        getChat();
      }, 1000);

      Group.value = item;
      GroupRefId.value = item.id;
      messages.value = [];
      participants.value = [];
      ChatName.value = item.subject;
      participants.value = item.participants;
      messages.value = item.messages.map((message) => {
        // Conditionally change the type based on a condition user id and message sender

        const type = message.user_id === userstore.user.id ? "out" : "in";

        return {
          type, // Use the dynamically determined type
          id: message.id,
          thread_id: message.thread_id,
          user_id: message.user_id,
          created_at: message.created_at,
          updated_at: message.updated_at,
          user: message.user,
          attachments: message.attachments,
          name: message.user.fullname,
          image: message.user.photo,
          time: message.created_at,
          text: message.body,
        };
      });
    };

    const ConversationLoading = (id) => {
      // Reformat each message using map
      // loading.value = true;
      getChat().finally(() => {
        // Disable loading indicator
        newArray.value = groups.value.filter((item) => item.id === id);
        noloaderConversation(newArray.value[0]);
      });
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
        return `${elapsedDays} jours`;
      } else if (elapsedHours > 0) {
        return `${elapsedHours} heures`;
      } else if (elapsedMinutes > 0) {
        return `  ${elapsedMinutes} minutes`;
      } else {
        return `${elapsedSeconds} instants`;
      }
    }
    const getChat = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("project/conversation/list");
          groups.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch chat:", error);
          // Handle the error as needed
        }
      }
    };
    const NewMessageData = new FormData();

    const addNewMessage = () => {
      if (!newMessageText.value) {
        return;
      }
      if (GroupRefId.value === 0) {
        return;
      }

      for (const picture of uploadImages.value) {
        NewMessageData.append("file[]", picture);

        // Use your preferred method to send the picture data to the server
        // axios.post('/upload', formData);
      }
      for (const file of uploadFiles.value) {
        NewMessageData.append("file[]", file);

        // Use your preferred method to send the picture data to the server
        // axios.post('/upload', formData);
      }
      NewMessageData.append("message", newMessageText.value);
      NewMessageData.append("thread_id", GroupRefId.value.toString());
      loadingSend.value = true;
      //Send  request
      const res = store.AddChatMessage(NewMessageData);

      if (res) {
        res
          .then((response) => {
            noloaderConversation(response.data);
          })
          .catch((error) => {
            console.error(error); // Handle any errors during the Promise resolution
          });
      } else {
        console.log("res is undefined");
      }

      console.log("data", res);
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {
        loadingSend.value = false;
        //  loadConversation(res);
      } else {
        loadingSend.value = false;
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

      setTimeout(() => {
        if (messagesRef.value) {
          messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
        }
      }, 1);

      newMessageText.value = "";
    };

    const chatUpdateData = new FormData();
    const updateSubject = () => {
      if (!ChatName.value) {
        return;
      }
      if (GroupRefId.value === 0) {
        return;
      }

      chatUpdateData.append("subject", ChatName.value);

      // Use your preferred method to send the picture data to the server
      // axios.post('/upload', formData);

      loadingSend.value = true;
      //Send  request
      const res = store.UpdateChatSubject(chatUpdateData, GroupRefId.value);

      if (res) {
        res
          .then(() => {
            hideModal(updatechatNameModalRef.value);
            getChat();
          })
          .catch((error) => {
            console.error(error); // Handle any errors during the Promise resolution
          });
      } else {
        console.log("res is undefined");
      }
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {
        loadingSend.value = false;
        //  loadConversation(res);
      } else {
        loadingSend.value = false;
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

      ChatName.value = "";
    };

    function handleUpload(event) {
      const fileInput = event.target as HTMLInputElement;
      const files = fileInput.files;
      if (files && files.length > 0) {
        const file = files[0];
        // Process the selected file here
        console.log("Selected file:", file);
      }
    }
    // const removeImage = () => {
    //   //   profileDetails.value.photo = "/media/avatars/blank.png";
    // };
    // function handleImagesUpload(event: Event): void {
    //   const files = (event.target as HTMLInputElement)?.files;
    //   if (files && files.length > 0) {
    //     const totalImages = images.value.length + files.length;
    //     if (totalImages > 4) {
    //       Swal.fire({
    //         text: "Désolé, deux photos d'identité et deux photos de carte universitaire sont nécessaires. Veuillez réessayer.",
    //         icon: "error",
    //         buttonsStyling: false,
    //         confirmButtonText: "D'accord, j'ai compris !",
    //         heightAuto: false,
    //         customClass: {
    //           confirmButton: "btn btn-primary",
    //         },
    //       }).then(() => {
    //         const remainingImages = 4 - images.value.length;
    //         const selectedFiles = Array.from(files).slice(0, remainingImages);
    //         handleFiles(selectedFiles);
    //       });
    //     } else {
    //       handleFiles(files);
    //     }
    //   }
    // }
    function handleImagesUpload(event: Event): void {
      const files = (event.target as HTMLInputElement)?.files;

      const target = event.target as HTMLInputElement;
      if (target.files) {
        uploadImages.value = Array.from(target.files);
        console.log(" uploadImages.value:", uploadImages.value);
      }
      // if (files && files.length > 0) {
      //   const file = files[0];
      //   // Process the selected file here
      //   console.log("Selected file:", file);
      // }
    }
    function handleFileUpload(event: Event): void {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        uploadFiles.value = Array.from(target.files);
        console.log(" uploadFiles.value:", uploadFiles.value);
      }
    }
    function removeImage(index: number): void {
      uploadImages.value.splice(index, 1);
    }
    function removeFile(index: number): void {
      uploadFiles.value.splice(index, 1);
    }
    function clearImagesList(): void {
      uploadImages.value = [];
    }
    function clearFilesList(): void {
      uploadFiles.value = [];
    }
    const deleteParticipant = (
      Groupid: number,
      id: number,
      participant: number
    ) => {
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
          for (let i = 0; i < participants.value.length; i++) {
            if (participants.value[i]["id"] === participant) {
              participants.value.splice(i, 1);
            }
          }
          deleteItemParticipant(Groupid, id);

          // Show success message after successful deletion
          Swal.fire("Supprimé!", "L'élément a été supprimé.", "success");
        } else {
          // User cancelled, do nothing or show a cancellation message
          Swal.fire("Annulé", "Suppression annulée.", "info");
        }
      });
    };
    function deleteItemParticipant(Groupid, id) {
      const NewDeleteData = new FormData();
      NewDeleteData.append("user_id", id);
      //Send  request
      store.DeleteChatParticipant(Groupid, NewDeleteData);
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {
        getChat();
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Essayer à nouveau!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }
    }

    function AddChatContact(id, Group) {
      const NewDeleteData = new FormData();
      NewDeleteData.append("user_id", id);
      //Send  request
      store.AddChatParticipant(Group.id, NewDeleteData);
      const error = Object.values(store.errors);

      if (!error.length) {
        ConversationLoading(Group.id);
        hideModal(addContactModalRef.value);
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Essayer à nouveau!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }
    }

    function StarChat(id, star) {
      const NewDeleteData = new FormData();
      NewDeleteData.append("user_id", id);
      //Send  request
      if (star) {
        store.ChatUnfavourite(id);
      } else {
        store.ChatFavourite(id);
      }

      const error = Object.values(store.errors);

      if (!error.length) {
        getChat();
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Essayer à nouveau!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }
    }

    const getConnections = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("account/connection");
          connections.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch Connections:", error);
          // Handle the error as needed
        }
      }
    };
    const filteredConnections = computed(() => {
      const query = fullnameFilter.value.toLowerCase();

      if (query) {
        return connections.value.filter((item) =>
          item.fullname.toLowerCase().includes(query)
        );
      }

      return connections.value;
    });
    onMounted(() => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");
      getChat().finally(() => {
        getConnections();
        // Disable loading indicator
        document.body.classList.remove("page-loading");
        document.body.removeAttribute("data-kt-app-page-loading");
      });
    });
    return {
      messages,
      messagesRef,
      newMessageText,
      addNewMessage,
      messagesInRef,
      messagesOutRef,
      contacts,
      isGroupChat,
      getAssetPath,
      filteredGroups,
      url,
      getTimeSince,
      loadConversation,
      searchQuery,
      participants,
      isMessageRead,
      Group,
      loading,
      loadingSend,
      handleImagesUpload,
      UploadChatModalRef,
      uploadImages,
      uploadFiles,
      removeImage,
      clearImagesList,
      removeFile,
      handleFileUpload,
      clearFilesList,
      userstore,
      deleteParticipant,
      StarChat,
      connections,
      fullnameFilter,
      filteredConnections,
      AddChatContact,
      addContactModalRef,
      ChatName,
      updateSubject,
      updatechatNameModalRef,
    };
  },
});
</script>
<style>
.chat-subject {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* Maximum number of lines */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
