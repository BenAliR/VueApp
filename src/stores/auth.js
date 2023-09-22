import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { date } from "yup";
export const useAuthStore = defineStore("auth", () => {
    const errors = ref({});
    const user = ref({});
    const isAuthenticated = ref(!!JwtService.getToken());
    function setAuth(authUser) {
        isAuthenticated.value = true;
        user.value = authUser;
        errors.value = {};
        JwtService.saveToken(user.value.api_token);
        localStorage.setItem("authUser", JSON.stringify(user.value));
    }
    function setUser(authUser) {
        user.value = authUser;
        localStorage.setItem("authUser", JSON.stringify(authUser));
    }
    function setError(error) {
        errors.value = { ...error };
    }
    function purgeAuth() {
        isAuthenticated.value = false;
        user.value = {};
        errors.value = [];
        JwtService.destroyToken();
        localStorage.removeItem("authUser");
    }
    function login(credentials) {
        return ApiService.post("login", credentials)
            .then(({ data }) => {
            setAuth(data);
        })
            .catch(({ response }) => {
            setError(response.data.errors);
        });
    }
    function logout() {
        purgeAuth();
    }
    function register(credentials) {
        return ApiService.post("register", credentials)
            .then(({ data }) => {
            setAuth(data);
        })
            .catch(({ response }) => {
            setError(response.data.errors);
        });
    }
    function inscription(credentials) {
        return ApiService.post("inscription", credentials)
            .then(({ data }) => {
            console.log("test");
            setError({});
        })
            .catch(({ response }) => {
            if (response.data.errors.length) {
                setError(response.data.errors);
            }
        });
    }



    function CreateGuestAccount(credentials) {


            return ApiService.post("/invitation/accept", credentials)
                .then((res) => {
                    setError({}); // Clear any previous errors
                    return res.data; // Return the response data when the API call is successful
                })
                .catch(({ response }) => {
                    if (response && response.data && response.data.errors) {
                        // If there are errors in the response, reject the Promise with the errors
                        const errorMessages = Object.values(response.data.errors).flat();
                        setError(response.data.errors);
                        return Promise.reject(errorMessages[0]);
                    } else {
                        // If there are no specific errors in the response, return a generic error message
                        setError("Quelque chose s'est mal passé");
                        return Promise.reject("Quelque chose s'est mal passé");
                    }
                });

    }

    function forgotPassword(email) {
        return ApiService.post("forgot_password", email)
            .then(() => {
            setError({});
        })
            .catch(({ response }) => {
            setError(response.data.errors);
        });
    }
    function verifyAuth() {
        if (JwtService.getToken()) {
            ApiService.setHeader();
            ApiService.get("user")
                .then(({ data }) => {
                setUser(data);
            })
                .catch(({ response }) => {
                setError(response.data.errors);
                purgeAuth();
            });
        }
        else {
            purgeAuth();
        }
    }
    return {
        errors,
        user,
        isAuthenticated,
        login,
        logout,
        register,
        forgotPassword,
        verifyAuth,
        inscription,
        CreateGuestAccount,
    };
});
