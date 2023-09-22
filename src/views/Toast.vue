<template>
  <div
    v-if="show"
    class="toast show"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header">
      <i class="ki-duotone ki-abstract-39 fs-2 text-primary me-3">
        <span class="path1"></span><span class="path2"></span>
      </i>
      <strong class="me-auto">{{ title }}</strong>
      <small>{{ timestamp }}</small>
      <button
        type="button"
        class="btn-close"
        @click="close"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "KT-Toastr",
  props: {
    show: Boolean, // Boolean to control the visibility of the toast
    title: String, // Title for the toast
    timestamp: String, // Timestamp for the toast
    message: String, // Message content of the toast
  },
  methods: {
    close() {
      this.$emit("close"); // Emit a custom event to close the toast
    },
  },
};
</script>
