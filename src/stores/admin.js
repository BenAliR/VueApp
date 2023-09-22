import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { date } from "yup";
export const useAdminStore = defineStore("admin", () => {
  const errors = ref({});
  const isAuthenticated = ref(!!JwtService.getToken());
  function setAdminError(error) {
    errors.value = { ...error };
  }

  function CreateAdmin(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/users/admins/add", credentials)
        .then((res) => {
          setAdminError({}); // Clear any previous errors
          return res.data; // Return the response data when the API call is successful
        })
        .catch(({ response }) => {
          if (response && response.data && response.data.errors) {
            // If there are errors in the response, reject the Promise with the errors
            const errorMessages = Object.values(response.data.errors).flat();
            setAdminError(response.data.errors);
            return Promise.reject(errorMessages[0]);
          } else {
            // If there are no specific errors in the response, return a generic error message
            setAdminError("Quelque chose s'est mal passé");
            return Promise.reject("Quelque chose s'est mal passé");
          }
        });
    } else {
      console.log("error");
      // If there's no JWT token, return a rejected Promise with an error message
      return Promise.reject("JWT token not found");
    }
  }

  function CreateAdminTask(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/users/admins/task/add", credentials)
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
      return ApiService.post(
        "admin/users/admins/members/invite/" + id,
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
  function UpdateAdmin(credentials, id) {
    return ApiService.post("admin/users/admins/update/" + id, credentials)
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
      return ApiService.post(
        "admin/users/admins/task/update/status/" + id,
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
  function UpdateTask(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/admins/task/update/" + id,
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

  function DeleteTaskComment(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("admin/users/admins/task/comment/delete/" + id)
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
      ApiService.get("admin/users/admins/list")
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
