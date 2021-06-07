import { createApp } from "vue";

import App from "./custom_events/app/App";
import router from "./router";
import store from "./store";
import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons)
import "@/assets/css/tailwind.css";


let app = createApp(App)
    app.use(store)
    app.use(router)
    app.mount("#app");
