import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage"
import PhotosPage from "@/pages/PhotosPage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/photos',
        component: PhotosPage
    },
];

export default new VueRouter({
    mode: 'history',
    routes
});