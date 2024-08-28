import { createRouter, createWebHistory } from "vue-router";
import FormPage from "../pages/FormPage.vue";
import PreviewPage from "../pages/PreviewPage.vue";
const routes = [
  {
    path: "/",
    name: "Form",
    component: FormPage,
  },
  {
    path: "/preview",
    name: "Preview",
    component: PreviewPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_API_BASE_URL),
  routes,
});

export default router;
