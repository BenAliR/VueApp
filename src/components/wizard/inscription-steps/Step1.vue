<template>

</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { ErrorMessage, Field } from "vee-validate";

export default defineComponent({
  name: "step-1-inscription",
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
