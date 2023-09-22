import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { date } from "yup";

export const useFichStore = defineStore("fich", () => {
  const errors = ref({});
  const isAuthenticated = ref(!!JwtService.getToken());

  function setFichError(error: any) {
    errors.value = { ...error };
  }

  function getFich() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("fich")
        .then(({ data }) => {
          return data;
        })
        .catch(({ response }) => {
          setFichError(response.data.errors);
        });
    } else {
      console.log("error");
    }
  }
  function UpdateEmailFunction(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("fich/email/update/" + id, credentials)
        .then(() => {
          setFichError({});
        })
        .catch(({ response }) => {
          if (response.data.errors.length) {
            setFichError(response.data.errors);
          }
        });
    } else {
      console.log("error");
    }
  }
  function UpdatePasswordFunction(credentials, id) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.post("fich/password/update/" + id, credentials)
          .then(() => {
            setFichError({});
          })
          .catch(({ response }) => {
            if (response.data.errors.length) {
              setFichError(response.data.errors);
            }
          });
    } else {
      console.log("error");
    }
  }
  function UpdateFich(credentials) {
    return ApiService.post("fich/update", credentials)
      .then(() => {
        setFichError({});
      })
      .catch(({ response }) => {
        if (response.data.errors.length) {
          setFichError(response.data.errors);
        }
      });
  }
  return {
    errors,
    isAuthenticated,
    getFich,
    UpdateFich,
    UpdateEmailFunction,
    UpdatePasswordFunction,
  };
});
