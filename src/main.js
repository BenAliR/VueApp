import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tooltip } from "bootstrap";
import App from "./App.vue";
/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router/clean";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";
//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { initKtIcon } from "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjn_uBA5j9jthtIF-6TZ06-ZWSIBPCR-k",
    authDomain: "academy-8d650.firebaseapp.com",
    projectId: "academy-8d650",
    storageBucket: "academy-8d650.appspot.com",
    messagingSenderId: "477930817169",
    appId: "1:477930817169:web:03dd73ba3223dd793d2130",
    measurementId: "G-42WHV7JD7S"

};





const app = createApp(App);
// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app1);




app.use(createPinia());
app.use(router);
app.use(ElementPlus);
ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initKtIcon(app);
initVeeValidate();
app.use(i18n);
app.directive("tooltip", (el) => {
    new Tooltip(el);
});
app.mount("#app");
