<template>
  <div
    class="modal fade"
    id="kt_modal_create_app"
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
            id="kt_modal_create_app_stepper"
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
                        Définir le cadre de votre application</div>
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

                      <div class="stepper-desc">Créer une équipe pour le projet</div>
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

                      <div class="stepper-desc"> Soumettez votre application</div>
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
              <CreateAppModalForm :stepperEl="createAppStepperRef" />
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
</template>

<script  lang="ts">
import { ref } from "vue";
import CreateAppModalForm from "@/components/modals/student-modals/create-project-modal/CreateProjectModalForm.vue";
export default {
  components: {
    CreateAppModalForm,
  },
  setup() {
    const createAppStepperRef = ref<HTMLElement | null>(null);
    const modalVisible = ref(false);

    return {
      createAppStepperRef,
    };
  },
};
</script>
