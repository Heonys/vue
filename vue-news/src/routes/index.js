import Vue from "vue";
import VueRouter from "vue-router";
// import AskView from "@/views/AskView.vue";
// import JobsView from "@/views/JobsView.vue";
import NewsView from "@/views/NewsView.vue";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";
import CreateListView from "@/views/CreateListView";
import store from "@/store/index";
import bus from "@/utils/bus";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/news",
        },
        {
            path: "/news",
            name: "news",
            component: NewsView,
            // component: CreateListView("NewsView"),
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                        next();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
        },
        {
            path: "/ask",
            name: "ask",
            // component: AskView,
            component: CreateListView("AskView"),
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                        next();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
        },
        {
            path: "/jobs",
            name: "jobs",
            // component: JobsView,
            component: CreateListView("JobsView"),
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log("fetched");
                        next();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
        },
        {
            path: "/user/:id",
            component: UserView,
        },
        {
            path: "/item/:id",
            component: ItemView,
        },
    ],
});

export default router;
