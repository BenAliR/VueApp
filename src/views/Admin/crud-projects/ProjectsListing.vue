<template>
  <div class="card card-custom">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div
          class="d-flex flex-column flex-sm-row align-items-center position-relative my-1"
        >
          <KTIcon
            icon-name="magnifier"
            icon-class="fs-1 position-absolute ms-6"
          />
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-100 w-sm-250px ps-15 mb-2 mb-sm-0 me-0 me-sm-2"
            placeholder="Rechercher des projets"
          />
          <input
            v-model="filters.title"
            @input="searchItems"
            class="form-control form-control-solid w-100 w-sm-250px ps-15 mb-2 mb-sm-0 me-0 me-sm-2"
            placeholder="Filter propriétaire"
          />
          <select
            v-model="filters.project_status"
            @change="searchItems"
            class="form-select form-select-solid form-control form-control-solid w-100 w-sm-250px ps-15"
          >
            <option value="">Tous les statuts</option>
            <option value="en attente">En Attente</option>
            <option value="en cours de traitement">
              En Cours de Traitement
            </option>
            <option value="active">Active</option>

            <option value="inactive">Inactive</option>
          </select>
        </div>
        <!--end::Search-->
      </div>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
          data-kt-project-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_projects_export_modal"
          >
            <KTIcon icon-name="exit-up" icon-class="fs-2" />
            Export
          </button>
          <!--end::Export-->
        </div>
        <!--end::Toolbar-->

        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-project-table-toolbar="selected"
        >
          <div class="fw-bold me-0 me-sm-5 mb-2 mb-sm-0">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewProjects()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>

    <div class="card-body pt-0 dataTables_wrapper dt-bootstrap4">
      <Datatable
        @on-sort="sort"
        @on-items-select="onItemSelect"
        :data="filteredTableData"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="true"
        checkbox-label="id"
      >
        <template v-slot:title="{ row: project }">
          <router-link
            class="text-gray-600 text-hover-primary mb-1"
            :to="{
              name: 'student-project-overview',
              params: { id: project.id },
            }"
          >
            {{ project.title }}</router-link
          >
        </template>

        <template v-slot:project_status="{ row: project }">
          <span
            :class="getStatusColorClass(project.project_status)"
            class="badge fw-bold me-auto px-4 py-3"
            >{{ capitalizeFirstLetter(project.project_status) }}</span
          >
        </template>
        <template v-slot:type="{ row: project }">
          <span
            :class="getTypeColorClass(project.type)"
            class="badge fw-bold me-auto px-4 py-3"
            >{{ capitalizeFirstLetter(project.type) }}</span
          >
        </template>
        <template v-slot:owner="{ row: project }">
          <router-link
            class="text-gray-600 text-hover-primary mb-1"
            :to="{
              name: 'students-overview',
              params: { id: project.team.owner.id },
            }"
          >
            {{ project.team.owner.fullname }}</router-link
          >
        </template>
        <template v-slot:created_at="{ row: project }">
          {{ formatDate(project.created_at) }}
        </template>

        <template v-slot:actions="{ row: project }">
          <!--begin::Toolbar-->
          <div class="my-3 ms-9">
            <!--begin::Edit-->
            <!--            <a-->
            <!--              href="#"-->
            <!--              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"-->
            <!--              data-bs-toggle="modal"-->
            <!--              data-bs-target="#kt_modal_new_card"-->
            <!--            >-->
            <!--              <span-->
            <!--                data-bs-toggle="tooltip"-->
            <!--                data-bs-trigger="hover"-->
            <!--                title=""-->
            <!--                data-bs-original-title="Edit"-->
            <!--              >-->
            <!--                <KTIcon icon-name="pencil" icon-class="fs-3" />-->
            <!--              </span>-->
            <!--            </a>-->
            <!--end::Edit-->
            <!--begin::Delete-->
            <span
              @click="deleteProject(project.id)"
              class="btn btn-icon btn-active-light-primary w-30px h-30px me-3 cursor-pointer"
              data-bs-toggle="tooltip"
              title=""
              data-kt-customer-payment-method="delete"
              data-bs-original-title="Delete"
            >
              <KTIcon icon-name="trash" icon-class="fs-3" />
            </span>
            <!--end::Delete-->
            <!--begin::More-->
            <router-link
              class="btn btn-icon btn-active-light-primary w-30px h-30px"
              data-bs-toggle="tooltip"
              title=""
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-bs-original-title="More Options"
              :to="{
                name: 'student-project-overview',
                params: { id: project.id },
              }"
            >
              <KTIcon icon-name="switch" icon-class="fs-3"
            /></router-link>

            <!--begin::Menu-->
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold w-150px py-3"
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a
                  href="#"
                  class="menu-link px-3"
                  data-kt-payment-mehtod-action="set_as_primary"
                  >Set as Primary</a
                >
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
            <!--end::More-->
          </div>
          <!--end::Toolbar-->
        </template>
      </Datatable>
    </div>
  </div>

  <!-- Metronic Modal -->
  <div
    class="modal fade"
    id="kt_projects_export_modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Exporter le fichier Projets</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
          <!--begin::Form-->
          <el-form
            @submit="submit"
            :model="formData"
            :rules="rules"
            ref="formRef"
          >
            <!-- begin::Input group -->
            <div class="fv-row mb-10">
              <!-- begin::Label -->
              <label class="fs-5 fw-semibold form-label mb-5"
                >Select Date Range:</label
              >
              <!-- end::Label -->

              <!--begin::Input-->
              <el-form-item prop="name">
                <el-date-picker type="daterange" v-model="formData.dateRange">
                </el-date-picker>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!-- end::Input group -->
            <!-- begin::Row -->
            <div class="row fv-row mb-15">
              <!-- begin::Label -->
              <label class="fs-5 fw-semibold form-label mb-5"
                >Sélectionnez le format d'exportation:</label
              >
              <!-- end::Label -->

              <div
                class="fv-row mb-15 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid"
                data-kt-buttons="true"
                data-kt-initialized="1"
              >
                <!-- Option: PDF -->
                <label
                  :class="{
                    'active ': formData.exportFormat === 'PDF',
                  }"
                  class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6"
                >
                  <!-- Input -->
                  <el-form-item prop="exportFormat">
                    <el-radio
                      class="btn-check"
                      v-model="formData.exportFormat"
                      label="PDF"
                      checked
                    />
                  </el-form-item>
                  <!-- Label -->
                  <span class="d-flex">
                    <!-- Icon -->
                    <i class="bi bi-file-earmark-pdf fs-2x"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span
                    ></i>
                    <!-- Info -->
                    <span class="ms-4">
                      <span class="fs-3 fw-bold text-gray-900 mb-2 d-block"
                        >PDF</span
                      >
                      <span class="fw-semibold fs-4 text-muted"
                        >Portable Document Format (PDF)</span
                      >
                    </span>
                  </span>
                </label>

                <!-- Option: EXCEL -->
                <label
                  :class="{
                    'active ': formData.exportFormat === 'EXCEL',
                  }"
                  class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start mb-6 p-6"
                >
                  <!-- Input -->
                  <el-form-item prop="exportFormat">
                    <el-radio
                      class="btn-check"
                      v-model="formData.exportFormat"
                      label="EXCEL"
                    />
                  </el-form-item>
                  <!-- Label -->
                  <span class="d-flex">
                    <!-- Icon -->
                    <i class="bi bi-file-earmark-excel fs-2x"
                      ><span class="path1"></span><span class="path2"></span
                    ></i>
                    <!-- Info -->
                    <span class="ms-4">
                      <span class="fs-3 fw-bold text-gray-900 mb-2 d-block"
                        >EXCEL</span
                      >
                      <span class="fw-semibold fs-4 text-muted"
                        >Excel spreadsheet</span
                      >
                    </span>
                  </span>
                </label>

                <!-- Option: CSV -->
                <label
                  :class="{
                    'active ': formData.exportFormat === 'CSV',
                  }"
                  class="btn btn-outline btn-outline-dashed btn-active-light-primary mb-6 d-flex text-start p-6"
                >
                  <!-- Input -->
                  <el-form-item prop="exportFormat">
                    <el-radio
                      class="btn-check"
                      v-model="formData.exportFormat"
                      label="CSV"
                    />
                  </el-form-item>
                  <!-- Label -->
                  <span class="d-flex">
                    <!-- Icon -->
                    <i class="bi bi-filetype-csv fs-2x"
                      ><span class="path1"></span><span class="path2"></span
                    ></i>
                    <!-- Info -->
                    <span class="ms-4">
                      <span class="fs-3 fw-bold text-gray-900 mb-2 d-block"
                        >CSV</span
                      >
                      <span class="fw-semibold fs-4 text-muted"
                        >A valeurs séparées par des virgules</span
                      >
                    </span>
                  </span>
                </label>

                <!-- Validation error message -->
                <div
                  class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
                ></div>
              </div>
            </div>
            <!-- end::Row -->

            <!-- begin::Actions -->
            <div class="text-center">
              <button
                type="reset"
                id="kt_projects_export_cancel"
                class="btn btn-light me-3"
              >
                Annuler
              </button>

              <!-- begin::Button -->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                type="submit"
                class="btn btn-lg btn-primary"
              >
                <span v-if="!loading" class="indicator-label">
                  Enregistrer
                  <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" />
                </span>
                <span v-if="loading" class="indicator-progress">
                  S'il vous plaît, attendez...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
              <!-- end::Button -->
            </div>
            <!-- end::Actions -->
          </el-form>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!-- End Metronic Modal -->
  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
  computed,
} from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import arraySort from "array-sort";
import JwtService from "@/core/services/JwtService";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import ExcelJS from "exceljs";
import { useStudentStore } from "@/stores/student";
interface IProject {
  id: number;
  title: string;
  description: string;
  project_avatar: string;
  project_status: string;
  type: string;
  dev_technologie: string;
  duedate: string;
  domaine: string;
  slug: string;
  team_id: string;
  team_size: string;
  user_id: number;
  serviceid: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  team: Team;
}

interface Team {
  id: number;
  owner_id: number;
  name: string;
  created_at: string;
  updated_at: string;
  owner: Owner;
  // Add other properties specific to the Team object
}
interface Owner {
  id: number;
  fullname: string;
  photo: string;
  // Add other properties specific to the Team object
}
export default defineComponent({
  name: "projects-listing",
  components: {
    Datatable,
    AddCustomerModal,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Titre",
        columnLabel: "title",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "statut",
        columnLabel: "project_status",
        sortingField: "project_status",
        sortEnabled: true,
        columnWidth: 135,
      },
      {
        columnName: "propriétaire",
        columnLabel: "owner",
        sortEnabled: true,
        columnWidth: 135,
      },
      {
        columnName: "type",
        columnLabel: "type",
        sortEnabled: true,
        columnWidth: 100,
      },
      {
        columnName: "créé à",
        columnLabel: "created_at",
        sortEnabled: true,
        columnWidth: 100,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);

    const selectedIds = ref<Array<number>>([]);
    const projects = ref([]);
    const filteredUsers = ref([]);
    const tableData = ref<Array<IProject>>(projects.value);
    const initProjects = ref<Array<IProject>>([]);
    const store = useStudentStore();
    const getProjects = async () => {
      if (JwtService.getToken()) {
        try {
          ApiService.setHeader();
          const response = await ApiService.get("admin/users/projects/list");
          projects.value = response.data.data;
        } catch (error) {
          console.error("Failed to fetch projects:", error);
          // Handle the error as needed
        }
      }
    };
    const filters = ref({
      title: "",
      project_status: "",
      // Add more filters for other columns
    });

    const filteredTableData = computed(() => {
      const { title, project_status /* Add more filters here */ } =
        filters.value;

      return tableData.value.filter((project) => {
        const titleMatch = project.team.owner.fullname
          .toLowerCase()
          .includes(title.toLowerCase());
        const statusMatch = project.project_status
          .toLowerCase()
          .includes(project_status.toLowerCase());
        // Add more filtering conditions for other columns

        return titleMatch && statusMatch /* Add more conditions */;
      });
    });

    onMounted(async () => {
      // Enable loading indicator if needed
      document.body.classList.add("page-loading");
      document.body.setAttribute("data-kt-app-page-loading", "true");

      await getProjects();

      // Disable loading indicator
      document.body.classList.remove("page-loading");
      document.body.removeAttribute("data-kt-app-page-loading");
      tableData.value = [...projects.value];
      initProjects.value = [...projects.value];

      console.log("projects", projects.value);
      console.log("tableData", tableData.value);
    });
    function removeItemById(id: number) {
      tableData.value = tableData.value.filter((item) => item.id !== id);
    }
    const deleteFewProjects = () => {
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
          //Send  request
          const formData = new FormData();
          const selectedIdsString = selectedIds.value.join(",");
          formData.append("user_ids", selectedIdsString);
          store.StudentMultipeProject(formData);
          const error = Object.values(store.errors);
          for (let i = 0; i < selectedIds.value.length; i++) {
            removeItemById(selectedIds.value[i]);
          }
          console.log("error", error);
          if (!error.length) {
            // Show success message after successful deletion
            Swal.fire("Supprimé!", "L'élément a été supprimé.", "success");
            // Go to page after successfully login
            getProjects();
            selectedIds.value.length = 0;
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
        } else {
          // User cancelled, do nothing or show a cancellation message
          selectedIds.value.length = 0;
          Swal.fire("Annulé", "Suppression annulée.", "info");
        }
      });
    };

    const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initProjects.value);
      if (search.value !== "") {
        let results: Array<IProject> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            console.log("search", search.value);
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
    };

    const searchingFunc = (obj: any, value: string): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };
    const onItemSelect = (selectedItems: Array<number>) => {
      selectedIds.value = selectedItems;
    };
    function formatDate(date) {
      if (date) {
        return new Date(date).toLocaleDateString();
      } else {
        return "Inconnu";
      }
    }

    //Modal Export
    const formRef = ref<null | HTMLFormElement>(null);
    const loading = ref<boolean>(false);
    const state = reactive({
      shortcuts: [
        {
          text: "Last week",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          },
        },
        {
          text: "Last month",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          },
        },
        {
          text: "Last 3 months",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          },
        },
      ],
    });

    const formData = ref({
      dateRange: [],
      exportFormat: "PDF",
    });

    const rules = ref({
      dateRange: [
        {
          required: true,
          message: "Veuillez sélectionner une plage de dates",
          trigger: "change",
        },
      ],
      exportFormat: [
        {
          required: true,
          message: "Veuillez sélectionner un format d'exportation",
          trigger: "change",
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }
      console.log("efzef", formData.value);
      formRef.value.validate((valid: boolean) => {
        if (valid) {
          loading.value = true;
          if (formData.value.exportFormat === "PDF") {
            generatePDF();
          }
          if (formData.value.exportFormat === "EXCEL") {
            generateExcel();
          }
          if (formData.value.exportFormat === "CSV") {
            generateCSV();
          }
          loading.value = false;
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    function filterUsersByDateRange(usersDetailsArray, startDate, endDate) {
      filteredUsers.value = usersDetailsArray.value.filter((userDetails) => {
        // Convert created_at dates to JavaScript Date objects
        const createdAtDate = new Date(userDetails.created_at);

        // Check if the user's created_at date falls within the specified date range
        return createdAtDate >= startDate && createdAtDate <= endDate;
      });

      return filteredUsers;
    }
    function generatePDF() {
      console.log("formData", formData.value);
      const filteredUsers = filterUsersByDateRange(
        tableData,
        formData.value.dateRange[0],
        formData.value.dateRange[1]
      );

      const doc = new jsPDF();

      // Set font styles
      // Set font styles for the page title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);

      // Add page title
      doc.text("List of Projects", 105, 20, { align: "center" });

      // Set font styles for the table content
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);

      const tableHeaders = [
        "Titre",
        "Statut",
        "Propriétaire",
        "Type",
        "Créé à",
      ];
      const tableData2 = filteredUsers.value.map((userDetails) => [
        userDetails["title"],
        capitalizeFirstLetter(userDetails["project_status"]),
        userDetails["team"]["owner"]["fullname"],
        userDetails["type"],
        formatDate(userDetails["created_at"]),
      ]);

      doc.autoTable({
        head: [tableHeaders],
        body: tableData2,
        startY: 50,
        theme: "grid",
        didParseHeader: function (data) {
          // Customize the table header
          data.table.headerRow.height = 20; // Adjust header row height
          data.table.headerRow.styles.fillColor = [65, 105, 225]; // Set header background color
          data.table.headerRow.styles.textColor = [255, 255, 255]; // Set header text color
          data.table.headerRow.styles.fontSize = 12; // Set header text font size
          data.table.headerRow.styles.fontStyle = "bold"; // Set header text font style
        },
      });

      // Save the PDF
      doc.save("Projets.pdf");
    }
    function generateExcel() {
      console.log("formData", formData.value);
      const filteredUsers = filterUsersByDateRange(
        tableData,
        formData.value.dateRange[0],
        formData.value.dateRange[1]
      );

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Projects");

      const tableHeaders = [
        "Titre",
        "Statut",
        "Propriétaire",
        "Type",
        "Créé à",
      ];
      const tableData2 = filteredUsers.value.map((userDetails) => [
        userDetails["title"],
        capitalizeFirstLetter(userDetails["project_status"]),
        userDetails["team"]["owner"]["fullname"],
        userDetails["type"],
        formatDate(userDetails["created_at"]),
      ]);

      // Add table headers to the worksheet
      worksheet.addRow(tableHeaders);

      // Add table data to the worksheet
      tableData2.forEach((dataRow) => {
        worksheet.addRow(dataRow);
      });

      // Save the Excel file
      const buffer = workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);

        // Create a link and click it to download the file
        const a = document.createElement("a");
        a.href = url;
        a.download = "Projets.xlsx";
        a.click();

        // Clean up the URL and the link
        window.URL.revokeObjectURL(url);
        a.remove();
      });
    }
    function generateCSV() {
      const filteredUsers = filterUsersByDateRange(
        tableData,
        formData.value.dateRange[0],
        formData.value.dateRange[1]
      );

      const tableHeaders = [
        "Titre",
        "Statut",
        "Propriétaire",
        "Type",
        "Créé à",
      ];
      const tableData2 = filteredUsers.value.map((userDetails) => [
        userDetails["title"],
        capitalizeFirstLetter(userDetails["project_status"]),
        userDetails["team"]["owner"]["fullname"],
        userDetails["type"],
        formatDate(userDetails["created_at"]),
      ]);

      const csvContent = [
        tableHeaders.join(","),
        ...tableData2.map((rowData) => rowData.join(",")),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = window.URL.createObjectURL(blob);

      // Create a link and click it to download the CSV file
      const a = document.createElement("a");
      a.href = url;
      a.download = "Projets.csv";
      a.click();

      // Clean up the URL and the link
      window.URL.revokeObjectURL(url);
      a.remove();
    }
    const deleteProject = (id: number) => {
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
          for (let i = 0; i < tableData.value.length; i++) {
            if (tableData.value[i].id === id) {
              tableData.value.splice(i, 1);
            }
          }
          deleteItemProject(id);

          // Show success message after successful deletion
          Swal.fire("Supprimé!", "L'élément a été supprimé.", "success");
        } else {
          // User cancelled, do nothing or show a cancellation message
          Swal.fire("Annulé", "Suppression annulée.", "info");
        }
      });
    };
    function deleteItemProject(id) {
      //Send  request
      store.DeleteStudentProject(id);
      const error = Object.values(store.errors);

      console.log("error", error);
      if (!error.length) {
        getProjects();
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
    function capitalizeFirstLetter(str: string): string {
      if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      } else {
        return "non défini";
      }
    }
    function getStatusColorClass(status) {
      if (status === "en attente") {
        return "badge-light-primary";
      } else if (status === "en cours de traitement") {
        return "badge-light-primary";
      } else if (status === "active") {
        return "badge-light-success";
      } else if (status === "en retard") {
        return "badge-light-danger";
      } else if (status === "inactive") {
        return "badge-light-danger";
      } else {
        return "badge-light-primary"; // Default color if status is null or unknown
      }
    }
    function  getTypeColorClass(type) {
      if (type === "Projet de Fin d' Etudes") {
        return "badge-light-info";
      } else if (type === "Projet Personnel") {
        return "badge-light-success";
      } else if (type === "Projet de Classe") {
        return "badge-light-primary";
      }  else {
        return "badge-light-warning"; // Default color if status is null or unknown
      }
    }
    return {
      capitalizeFirstLetter,
      getStatusColorClass,
      tableData,
      tableHeader,
      deleteProject,
      search,
      searchItems,
      selectedIds,
      deleteFewProjects,
      sort,
      onItemSelect,
      getAssetPath,
      formatDate,
      ...toRefs(state),
      formData,
      rules,
      submit,
      formRef,
      loading,
      generatePDF,
      generateExcel,
      filteredTableData,
      filters,
      getTypeColorClass
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
</style>
