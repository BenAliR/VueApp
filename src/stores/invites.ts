import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { date } from "yup";

export const useInviteStore = defineStore("invite", () => {
  const errors = ref({});
  const isAuthenticated = ref(!!JwtService.getToken());
  function setInviteError(error: any) {
    errors.value = { ...error };
  }

  function CreateInvite(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("invites/add", credentials)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function CreateInviteTask(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("invites/task/add", credentials)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function AddNewMemberToTeam(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("invites/members/invite/" + id, credentials)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateInvite(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/users/invites/update/" + id, credentials)
        .then((res) => {
          setInviteError({}); // Clear any previous errors
          return res.data; // Return the response data when the API call is successful
        })
        .catch(({ response }) => {
          if (response && response.data && response.data.errors) {
            // If there are errors in the response, reject the Promise with the errors
            const errorMessages = Object.values(response.data.errors).flat();
            setInviteError(response.data.errors);
            return Promise.reject(errorMessages[0]);
          } else {
            // If there are no specific errors in the response, return a generic error message
            setInviteError("Quelque chose s'est mal passé");
            return Promise.reject("Quelque chose s'est mal passé");
          }
        });
    } else {
      console.log("error");
      // If there's no JWT token, return a rejected Promise with an error message
      return Promise.reject("JWT token not found");
    }
  }
  function UpdateTaskStatus(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("invites/task/update/status/" + id, credentials)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateTask(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("invites/task/update/" + id, credentials)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }

  function DeleteTaskComment(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("invites/task/comment/delete/" + id)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }

  function getInvites() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("admin/invites/list")
        .then(({ data }) => {
          return data;
        })
        .catch(({ response }) => {
          setInviteError(response.data.errors);
        });
    } else {
      console.log("error");
    }
  }
  function DeleteInvite(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("admin/users/invites/delete/" + id)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function DeleteMultipeInvite(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/users/invites/mass/delete", credentials)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateInvitePassword(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/invites/password/update/" + id,
        credentials
      )
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateInviteEmail(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/invites/email/update/" + id,
        credentials
      )
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function CreateInviteProject(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/invites/projects/add/" + id,
        credentials
      )
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateDemande(credentials, id) {
    return ApiService.post("admin/demandes/update/" + id, credentials)
      .then(() => {
        setInviteError({});
      })
      .catch(({ response }) => {
        if (response.data.errors.length) {
          setInviteError(response.data.errors);
        }
      });
  }

  function DeleteDemande(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("admin/demandes/delete/" + id)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function DeleteMultipeDemande(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/demandes/mass/delete", credentials)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function CreateDemande(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/demandes/add/", credentials)
        .then(() => {
          setInviteError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setInviteError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  return {
    errors,
    isAuthenticated,
    UpdateInvite,
    CreateInvite,
    getInvites,
    CreateInviteTask,
    AddNewMemberToTeam,
    UpdateTaskStatus,
    UpdateTask,
    DeleteTaskComment,

    DeleteInvite,
    DeleteMultipeInvite,
    UpdateInvitePassword,
    UpdateInviteEmail,
    CreateInviteProject,
    UpdateDemande,
    DeleteDemande,
    DeleteMultipeDemande,
    CreateDemande,
  };
});
