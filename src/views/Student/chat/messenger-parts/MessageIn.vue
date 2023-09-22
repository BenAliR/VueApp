<template>
  <div class="d-flex justify-content-start mb-10">
    <!--begin::Wrapper-->
    <div class="d-flex flex-column align-items-start">
      <!--begin::User-->
      <div class="d-flex align-items-center mb-2">
        <div class="symbol symbol-35px symbol-circle">
          <img alt="Pic" :src="image" />
        </div>

        <!--begin::Details-->
        <div class="ms-3">
          <a
            href="#"
            class="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
            >{{ name }}</a
          >
          <span class="text-muted fs-7 mb-1">{{ time }}</span>
        </div>
        <!--end::Details-->
      </div>
      <!--end::User-->

      <!--begin::Text-->
      <div
        class="p-5 rounded bg-light-info text-dark fw-semobold mw-lg-400px text-start"
        data-kt-element="message-text"
      >
        {{ text }}
      </div>
      <!--end::Text-->
    </div>
  </div>
  <div class="row justify-content-start mb-2  border border-dashed border-gray-300 rounded p-7" v-if="attachments?.length">
    <div class="col-lg-3" v-for="(item, index) in attachments" :key="index">
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
      <div class="card overlay" v-else-if="(item.type === 'pdf')">
        <div class="card-body p-0">
          <div class="overlay-wrapper ">
            <a
              :href="url + item.path"
              target="_blank"
              rel="noopener noreferrer"
              class="align-items-center"
            >
              Open PDF
            </a>
          </div>
        </div>
      </div>
      <div
        class="card overlay"
        v-else-if="item.type === 'docx' || item.type === 'pptx'"
      >
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
            <a :href="url + item.path" download> Download ZIP </a>
          </div>
        </div>
      </div>
      <!--end::Card-->
    </div>
  </div>
  <div></div>
  <!--end::Wrapper-->
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
    name: String,
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

<style>
.thumbnail-image {
  max-width: 200px;
  max-height: 200px;
  cursor: pointer;
}

.fullscreen-modal {
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

.fullscreen-content {
  max-width: 100%;
  max-height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.fullscreen-image {
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
}

.fullscreen-enabled {
  overflow: hidden;
}
</style>
