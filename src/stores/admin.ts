import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { date } from "yup";

export const useAdminStore = defineStore("admin", () => {
  const errors = ref({});
  const isAuthenticated = ref(!!JwtService.getToken());
  function setAdminError(error: any) {
    errors.value = { ...error };
  }

  function CreateAdmin(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/users/admins/add", credentials)
          .then((res) => {
            setAdminError({});
            if (res && res.data) {
              return res.data;
            }
            return null; // Return null or handle the case when response or response.data is undefined
          })
          .catch(({ response }) => {
            if (response.data.errors.length) {
              setAdminError(response.data.errors);
            }
          });
    } else {
      console.log("error");
    }
  }
  function CreateAdminTask(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/task/add", credentials)
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function AddNewMemberToTeam(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admins/members/invite/" + id, credentials)
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateAdmin(credentials, id) {
    return ApiService.post("admins/update/" + id, credentials)
      .then(() => {
        setAdminError({});
      })
      .catch(({ response }) => {
        if (response.data.errors.length) {
          setAdminError(response.data.errors);
        }
      });
  }
  function UpdateTaskStatus(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/task/update/status/" + id, credentials)
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateTask(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/task/update/" + id, credentials)
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }

  function DeleteTaskComment(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("admin/task/comment/delete/" + id)
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }

  function getAdmins() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("admin/admin/list")
        .then(({ data }) => {
          return data;
        })
        .catch(({ response }) => {
          setAdminError(response.data.errors);
        });
    } else {
      console.log("error");
    }
  }
  function DeleteAdmin(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("admin/users/admins/delete/" + id)
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function DeleteMultipeAdmin(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/users/admins/mass/delete", credentials)
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateAdminPassword(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/admins/password/update/" + id,
        credentials
      )
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateAdminEmail(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/admins/email/update/" + id,
        credentials
      )
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function CreateAdminProject(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/admins/projects/add/" + id,
        credentials
      )
        .then(() => {
          setAdminError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setAdminError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  return {
    errors,
    isAuthenticated,
    UpdateAdmin,
    CreateAdmin,
    getAdmins,
    CreateAdminTask,
    AddNewMemberToTeam,
    UpdateTaskStatus,
    UpdateTask,
    DeleteTaskComment,

    DeleteAdmin,
    DeleteMultipeAdmin,
    UpdateAdminPassword,
    UpdateAdminEmail,
    CreateAdminProject,
  };
});
