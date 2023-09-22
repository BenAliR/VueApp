import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { date } from "yup";

export const useStudentStore = defineStore("student", () => {
  const errors = ref({});
  const isAuthenticated = ref(!!JwtService.getToken());
  function setStudentError(error: any) {
    errors.value = { ...error };
  }

  function CreateStudent(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("student/add", credentials)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function CreateStudentTask(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("student/task/add", credentials)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function AddNewMemberToTeam(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("students/members/invite/" + id, credentials)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateStudent(credentials, id) {
    return ApiService.post("students/update/" + id, credentials)
      .then(() => {
        setStudentError({});
      })
      .catch(({ response }) => {
        if (response.data.errors.length) {
          setStudentError(response.data.errors);
        }
      });
  }
  function UpdateTaskStatus(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("student/task/update/status/" + id, credentials)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateTask(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("student/task/update/" + id, credentials)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }

  function DeleteTaskComment(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("student/task/comment/delete/" + id)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }

  function getStudents() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("admin/student/list")
        .then(({ data }) => {
          return data;
        })
        .catch(({ response }) => {
          setStudentError(response.data.errors);
        });
    } else {
      console.log("error");
    }
  }
  function DeleteStudent(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("admin/users/students/delete/" + id)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function DeleteMultipeStudent(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/users/students/mass/delete", credentials)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateStudentPassword(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/students/password/update/" + id,
        credentials
      )
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateStudentEmail(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/students/email/update/" + id,
        credentials
      )
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function CreateStudentProject(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post(
        "admin/users/students/projects/add/" + id,
        credentials
      )
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdateDemande(credentials, id) {
    return ApiService.post("admin/demandes/update/" + id, credentials)
      .then(() => {
        setStudentError({});
      })
      .catch(({ response }) => {
        if (response.data.errors.length) {
          setStudentError(response.data.errors);
        }
      });
  }

  function DeleteDemande(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("admin/demandes/delete/" + id)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
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
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
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
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function DeleteStudentProject(id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.delete("admin/users/projects/delete/" + id)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function StudentMultipeProject(credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("admin/users/projects/mass/delete", credentials)
        .then(() => {
          setStudentError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setStudentError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }

  function UpdateStudentProject(credentials, id) {
    return ApiService.post("admin/users/projects/update/" + id, credentials)
        .then(() => {
          setStudentError({});
        })
        .catch((errors) => {
          setStudentError(errors);
          //     console.error(message);
        });
  }
  return {
    errors,
    isAuthenticated,
    UpdateStudent,
    CreateStudent,
    getStudents,
    CreateStudentTask,
    AddNewMemberToTeam,
    UpdateTaskStatus,
    UpdateTask,
    DeleteTaskComment,

    DeleteStudent,
    DeleteMultipeStudent,
    UpdateStudentPassword,
    UpdateStudentEmail,
    CreateStudentProject,
    UpdateDemande,
    DeleteDemande,
    DeleteMultipeDemande,
    CreateDemande,
    DeleteStudentProject,
    StudentMultipeProject,
    UpdateStudentProject,
  };
});
