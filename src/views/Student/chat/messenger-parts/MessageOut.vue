<template>
  <div class="d-flex justify-content-end mb-5">
    <!--begin::Wrapper-->
    <div class="d-flex flex-column align-items-end">
      <!--begin::User-->
      <div class="d-flex align-items-center mb-2">
        <!--begin::Details-->
        <div class="me-3">
          <span class="text-muted fs-7 mb-1">{{ time }}</span>
          <span class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
            >Vous</span
          >
        </div>
        <!--end::Details-->

        <div class="symbol symbol-35px symbol-circle">
          <img alt="Pic" :src="image" />
        </div>
      </div>
      <!--end::User-->

      <!--begin::Text-->
      <div
        class="p-5 rounded bg-light-primary text-dark fw-semobold mw-lg-400px text-end"
        data-kt-element="message-text"
      >
        {{ text }}
      </div>
      <!--end::Text-->
    </div>
    <!--end::Wrapper-->
  </div>
  <div class="row justify-content-end   border border-dashed border-gray-300 rounded p-2" v-if="attachments?.length">
    <div class="col-lg-3 mb-2" v-for="(item, index) in attachments" :key="index">
      <!--begin::Card-->
      <div class="card overlay" v-if="(item.type ===  'jpg' ||item.type ===  'png' || item.type === 'jpeg')">
        <div class="card-body p-0">
          <div class="overlay-wrapper">
            <img
              :src="url + item.path"
              alt=""
              class="w-100 rounded"
              @click="openFullscreen(item)"
            />
          </div>
          <div v-if="isPictureFullscreen(item)" class="fullscreen-modal">
            <div class="fullscreen-content">
              <img
                :src="url + item.path"
                class="fullscreen-image"
                @click="closeFullscreen(item)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card overlay" v-else-if="item.type === 'pdf'">
        <div class="card-body p-0">
          <div class="overlay-wrapper">
            <a :href="url + item.path" target="_blank" rel="noopener noreferrer">
              Open PDF
            </a>
          </div>
        </div>
      </div>
      <div class="card overlay" v-else-if="item.type === 'docx' || item.type === 'pptx'">
        <div class="card-body p-0">
          <div class="overlay-wrapper">
            <a :href="url + item.path" download>
              Download {{ item.type.toUpperCase() }}
            </a>
          </div>
        </div>
      </div>
      <div class="card overlay" v-else-if="item.type === 'zip'">
        <div class="card-body p-0">
          <div class="overlay-wrapper">
            <a :href="url + item.path" download>
              Download ZIP
            </a>
          </div>
        </div>
      </div>

      <!--end::Card-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
interface Picture {
  id: number;
  path: string;
  isFullscreen: boolean;
}

export default defineComponent({
  name: "message-out",
  props: {
    image: String,
    time: String,
    text: String,
    attachments: Array,
  },
  setup() {
    const url = import.meta.env.VITE_APP_URL;
    const showFullscreen = ref(false);

    const openFullscreen = (picture: Picture) => {
      console.log(picture);
      picture.isFullscreen = true;
      document.documentElement.classList.add("fullscreen-enabled");
    };

    const closeFullscreen = (picture: Picture) => {
      picture.isFullscreen = false;
      document.documentElement.classList.remove("fullscreen-enabled");
    };

    const isPictureFullscreen = (picture: Picture) => {
      return picture.isFullscreen;
    };
    return {
      url,
      showFullscreen,
      openFullscreen,
      closeFullscreen,
      isPictureFullscreen,
    };
  },
});
</script>
