import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/view/HomePage.vue";
import AboutUsPage from "./components/view/AboutUsPage.vue";
import ContactUsPage from "./components/view/ContactUsPage.vue";
import ServicesPage from "./components/view/ServicesPage.vue";

const routes = [
    {path: '/', name: 'home', component: HomePage },
    {path: '/AboutUsPage', name: 'AboutUsPage', component: AboutUsPage },
    {path: '/ContactUsPage', name: 'ContactUsPage', component: ContactUsPage},
    {path: '/ServicesPage', name: 'ServicesPage', component: ServicesPage },
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
