import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { date } from "yup";

export const useProjectStore = defineStore("project", () => {
  const errors = ref({});
  const isAuthenticated = ref(!!JwtService.getToken());
  function setProjectError(error: any) {
    errors.value = { ...error };
  }
  function CreateProject(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/add", credentials)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function CreateProjectTask(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/task/add", credentials)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function AddNewMemberToTeam(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/members/invite/" + id, credentials)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function UpdateProject(credentials, id) {
    return ApiService.post("project/update/" + id, credentials)
      .then(() => {
        setProjectError({});
      })
      .catch((errors) => {
        setProjectError(errors);
        //     console.error(message);
      });
  }
  function UpdateTaskStatus(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/task/update/status/" + id, credentials)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function UpdateTask(credentials, id) {


    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/task/update/" + id, credentials)
          .then((res) => {
            setProjectError({}); // Clear any previous errors
            return res.data; // Return the response data when the API call is successful
          })
          .catch(({ response }) => {
            if (response && response.data && response.data.errors) {
              // If there are errors in the response, reject the Promise with the errors
              const errorMessages = Object.values(response.data.errors).flat();
              setProjectError(response.data.errors);
              return Promise.reject(errorMessages[0]);
            } else {
              // If there are no specific errors in the response, return a generic error message
              setProjectError("Quelque chose s'est mal passé");
              return Promise.reject("Quelque chose s'est mal passé");
            }
          });
    } else {
      console.log("error");
      // If there's no JWT token, return a rejected Promise with an error message
      return Promise.reject("JWT token not found");
    }

  }
  function AddTaskComment(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/task/comment/add/", credentials)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }

  function UpdateTaskComment(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/task/comment/update/" + id, credentials)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function DeleteTaskComment(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("project/task/comment/delete/" + id)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function DeleteTask(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("project/task/delete/" + id)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function DeleteInvite(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("account/reject/invitation", credentials)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function AcceptInvite(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("account/accept/invitation", credentials)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function AddChatMessage(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/conversation/reply", credentials)
        .then((response) => {
          setProjectError({});
          if (response && response.data) {
            return response.data;
          }
          return null; // Return null or handle the case when response or response.data is undefined
        })
        .catch((errors) => {
          setProjectError(errors);
          // console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function DeleteChatParticipant(id, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "project/conversation/members/remove/" + id,
        credentials
      )
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }

  function AddChatParticipant(id, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
          "project/conversation/members/add/" + id,
          credentials
      )
          .then(() => {
            setProjectError({});
          })
          .catch((errors) => {
            setProjectError(errors);
            //     console.error(message);
          });
    } else {
      console.log("error");
    }
  }

  function UpdateChatSubject(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/conversation/update/" + id, credentials)
          .then(() => {
            setProjectError({});
          })
          .catch(({ response }) => {
            if (response.data.errors.length) {
              setProjectError(response.data.errors);
            }
          });
    } else {
      console.log("error");
    }
  }
  function ChatUnfavourite(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.get("project/conversation/unfavourite/" + id)
        .then(() => {
          setProjectError({});
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  function ChatFavourite(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.get("project/conversation/favourite/" + id)
          .then(() => {
            setProjectError({});
          })
          .catch((errors) => {
            setProjectError(errors);
            //     console.error(message);
          });
    } else {
      console.log("error");
    }
  }



  function UpdateReminder(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/task/reminder/update/" + id, credentials)
          .then((res) => {
            setProjectError({}); // Clear any previous errors
            return res.data; // Return the response data when the API call is successful
          })
          .catch(({ response }) => {
            if (response && response.data && response.data.errors) {
              // If there are errors in the response, reject the Promise with the errors
              const errorMessages = Object.values(response.data.errors).flat();
              setProjectError(response.data.errors);
              return Promise.reject(errorMessages[0]);
            } else {
              // If there are no specific errors in the response, return a generic error message
              setProjectError("Quelque chose s'est mal passé");
              return Promise.reject("Quelque chose s'est mal passé");
            }
          });
    } else {
      console.log("error");
      // If there's no JWT token, return a rejected Promise with an error message
      return Promise.reject("JWT token not found");
    }
  }

  function AddReminder(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/task/reminder/add/", credentials)
          .then((res) => {
            setProjectError({}); // Clear any previous errors
            return res.data; // Return the response data when the API call is successful
          })
          .catch(({ response }) => {
            if (response && response.data && response.data.errors) {
              // If there are errors in the response, reject the Promise with the errors
              const errorMessages = Object.values(response.data.errors).flat();
              setProjectError(response.data.errors);
              return Promise.reject(errorMessages[0]);
            } else {
              // If there are no specific errors in the response, return a generic error message
              setProjectError("Quelque chose s'est mal passé");
              return Promise.reject("Quelque chose s'est mal passé");
            }
          });
    } else {
      console.log("error");
      // If there's no JWT token, return a rejected Promise with an error message
      return Promise.reject("JWT token not found");
    }
  }

  function DeleteReminder(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("project/task/reminder/delete/" + id)
          .then((res) => {
            setProjectError({}); // Clear any previous errors
            return res.data; // Return the response data when the API call is successful
          })
          .catch(({ response }) => {
            if (response && response.data && response.data.errors) {
              // If there are errors in the response, reject the Promise with the errors
              const errorMessages = Object.values(response.data.errors).flat();
              setProjectError(response.data.errors);
              return Promise.reject(errorMessages[0]);
            } else {
              // If there are no specific errors in the response, return a generic error message
              setProjectError("Quelque chose s'est mal passé");
              return Promise.reject("Quelque chose s'est mal passé");
            }
          });
    } else {
      console.log("error");
      // If there's no JWT token, return a rejected Promise with an error message
      return Promise.reject("JWT token not found");
    }
  }

  function AddEvent(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("project/task/event/add/", credentials)
          .then((res) => {
            setProjectError({}); // Clear any previous errors
            return res.data; // Return the response data when the API call is successful
          })
          .catch(({ response }) => {
            if (response && response.data && response.data.errors) {
              // If there are errors in the response, reject the Promise with the errors
              const errorMessages = Object.values(response.data.errors).flat();
              setProjectError(response.data.errors);
              return Promise.reject(errorMessages[0]);
            } else {
              // If there are no specific errors in the response, return a generic error message
              setProjectError("Quelque chose s'est mal passé");
              return Promise.reject("Quelque chose s'est mal passé");
            }
          });
    } else {
      console.log("error");
      // If there's no JWT token, return a rejected Promise with an error message
      return Promise.reject("JWT token not found");
    }
  }


  function getProjects() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("project/list")
        .then(({ data }) => {
          return data;
        })
        .catch((errors) => {
          setProjectError(errors);
          //     console.error(message);
        });
    } else {
      console.log("error");
    }
  }
  return {
    errors,
    isAuthenticated,
    UpdateProject,
    getProjects,
    CreateProject,
    CreateProjectTask,
    AddNewMemberToTeam,
    UpdateTaskStatus,
    UpdateTask,
    DeleteTaskComment,
    AddTaskComment,
    UpdateTaskComment,
    DeleteTask,
    DeleteInvite,
    AcceptInvite,
    AddChatMessage,
    DeleteChatParticipant,
    ChatUnfavourite,
    ChatFavourite,
    AddChatParticipant,
    UpdateChatSubject,
    UpdateReminder,
    DeleteReminder,
    AddReminder,
    AddEvent,
  };
});
