<template>
  <div
    class="modal fade"
    id="kt_modal_add_new_modal_example"
    ref="addModalTestModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered ">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_add_new_modal_example_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Add a Customer</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_add_new_modal_example_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->

        <el-form
          ref="formRef"
          :model="formModel"
          :rules="rules"
          label-position="top"
          inline
          size="mini"
          @submit="submitForm"
        >
          <el-form-item label="Name" prop="name">
            <el-input v-model="formModel.name" />
          </el-form-item>

          <el-form-item label="Email" prop="email">
            <el-input v-model="formModel.email" />
          </el-form-item>

          <el-form-item label="Gender" prop="gender">
            <el-radio-group v-model="formModel.gender">
              <el-radio label="male">Male</el-radio>
              <el-radio label="female">Female</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="Country" prop="country">
            <el-select v-model="formModel.country">
              <el-option label="USA" value="usa" />
              <el-option label="Canada" value="canada" />
              <el-option label="UK" value="uk" />
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" native-type="submit">Submit</el-button>
          </el-form-item>
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import {
  ElForm,
  ElFormItem,
  ElInput,
  ElRadioGroup,
  ElRadioButton,
  ElSelect,
  ElOption,
  ElButton,
} from "element-plus";

export default defineComponent({
  name: "add-customer-modal",
  components: {},
  setup() {
    // Form model and rules
    const formRef = ref<null | HTMLFormElement>(null);
    const formModel = ref({
      name: "",
      email: "",
      gender: "",
      country: "",
    });

    const formRules = ref({
      name: [{ required: true, message: "Name is required", trigger: "blur" }],
      email: [
        { required: true, message: "Email is required", trigger: "blur" },
        { type: "email", message: "Invalid email format", trigger: "blur" },
      ],
      gender: [
        { required: true, message: "Please select gender", trigger: "change" },
      ],
      country: [
        { required: true, message: "Please select country", trigger: "change" },
      ],
    });
    const rules = ref({
      name: [
        {
          required: true,
          message: "Customer name is required",
          trigger: "change",
        },
      ],
      email: [
        {
          required: true,
          message: "Customer email is required",
          trigger: "change",
        },
      ],
      addressLine: [
        {
          required: true,
          message: "Address 1 is required",
          trigger: "change",
        },
      ],
      town: [
        {
          required: true,
          message: "Town is required",
          trigger: "change",
        },
      ],
      state: [
        {
          required: true,
          message: "State is required",
          trigger: "change",
        },
      ],
      postCode: [
        {
          required: true,
          message: "Post code is required",
          trigger: "change",
        },
      ],
    });
    // Submit form handler
    const submitForm = () => {
      // Form validation
      formRef.value?.validate((valid: boolean) => {
        if (valid) {
          // Submit form logic here
          console.log("Form submitted successfully");
        }
      });
    };
    return {
      formRef,
      formModel,
      formRules,
      submitForm,
      rules
    };
  },
});
</script>
