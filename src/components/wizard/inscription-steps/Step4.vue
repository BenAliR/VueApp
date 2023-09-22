<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bold text-dark">Télécharger des fichiers</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-semobold fs-6">
        Si vous avez besoin de plus d'informations, veuillez consulter
        <a href="#" class="link-primary fw-bold">Page d'aide</a>.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <div class="w-100">
      <!--begin::Modal body-->
      <div class="pb-5">
        <!--begin::Input group-->
        <div class="form-group">
          <!--begin::Dropzone-->
          <div class="dropzone dropzone-queue mb-2">
            <!--begin::Controls-->

            <div class="dropzone-panel mb-4">
              <div
                class="dropzone"
                v-on:click="openFileSelection"
                v-on:dragover="onDragOver"
                v-on:dragleave="onDragLeave"
                v-on:drop="onDrop"
                v-bind:class="{ disabled: !enabled }"
              >
                <input
                  ref="fileInput"
                  class="file-input"
                  type="file"
                  accept="image/*"
                  name="images"
                  multiple
                  v-on:change="handleFileChange"
                />
              </div>

              <div class="dropzone-panel mb-4">
                <a
                  v-if="images.length"
                  @click="clearFileList"
                  class="dropzone-select mt-2 btn btn-sm btn-primary me-2"
                  >Supprimer tout</a
                >
              </div>
            </div>
            <!--end::Controls-->
            <!--begin::Items-->
            <div
              class="dropzone-items wm-200px"
              v-for="(item, index) in images"
              :key="item.id"
            >
              <div class="dropzone-item p-5">
                <!--begin::File-->
                <div class="dropzone-file">
                  <div
                    class="dropzone-filename text-dark"
                    title="some_image_file_name.jpg"
                  >
                    <span data-dz-name="">{{ item.name }}</span>
                    <strong>
                      ( <span data-dz-size="">{{ item.size }}</span> kb
                      )</strong
                    >
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
                    data-dz-remove=""
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
            <!--end::Items-->
          </div>
          <!--end::Dropzone-->
          <!--begin::Hint-->
          <span class="form-text fs-6 text-muted"
            >La taille maximale du fichier est de 15 Mo par fichier.</span
          >
          <!--end::Hint-->
        </div>
        <!--end::Input group-->
      </div>
      <!--end::Modal body-->

      <!--begin::Input group-->
      <div class="d-flex flex-stack">
        <!--begin::Label-->
        <div class="me-5">
          <label class="fs-6 fw-semobold form-label"
            >Conditions générales</label
          >
          <div class="fs-7 fw-semobold text-gray-400">
            Si vous avez besoin de plus d'informations, veuillez consulter ce
            lien
          </div>
        </div>
        <!--end::Label-->

        <!--begin::Switch-->
        <label
          class="form-check form-switch form-check-custom form-check-solid"
        >
          <Field type="checkbox" class="form-check-input" name="agreed" />
          <span class="form-check-label fw-semobold text-gray-400">
            Accepter
          </span>
        </label>
        <!--end::Switch-->
      </div>
      <!--end::Input group-->
    </div>
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";

import { Field } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
export default defineComponent({
  name: "step-4-inscription",

  components: {
    Field,
  },
  emits: ["next-step"],
  setup(props, { emit }) {
    const images = ref<File[]>([]);
    const successfullUploaded = ref(false);

    const clearFileList = () => {
      images.value = [];
      successfullUploaded.value = false;
    };
    const handleFileChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        const files = Array.from(input.files);

        files.forEach((file) => {
          images.value.push(file);

          console.log(file);
        });
        if (files.length > 4) {
          Swal.fire({
            text: "Désolé, deux photos d'identité,deux photos carte universitaire nécessaires, veuillez réessayer.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "D'accord, j'ai compris !",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(() => {
            images.value.splice(4, images.value.length - 4);
          });
        }
      }
      console.log("images", images.value);
      emit("next-step", {
        images: images.value,
      });
    };

    const removeImage = (index: number) => {
      images.value.splice(index, 1);
    };
    return {
      images,
      clearFileList,
      handleFileChange,
      removeImage,
      getAssetPath,
    };
  },
});
</script>
