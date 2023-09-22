<template>
  <div></div>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { getIllustrationsPath } from "@/core/helpers/assets";
export default defineComponent({
  name: "Project-task",
  components: {},
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
