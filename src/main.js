import { createApp } from "vue";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithubSquare, faLinkedin, faCopyright);

import "./assets/tailwind.css";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
