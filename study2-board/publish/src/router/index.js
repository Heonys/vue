import Vue from "vue";
import VueRouter from "vue-router";
import routePublish from "@/router/routePublish";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("@/layout/LayoutMain"),
        children: [
            ...routePublish
        ]
    }
    //  {
    //      path: "/",
    //     name: "home",
    //      component: HomeView
    //  },
    //  {
    //      path: "/about",
    //      name: "about",
    //      // route level code-splitting
    //      // this generates a separate chunk (about.[hash].js) for this route
    //      // which is lazy-loaded when the route is visited.
    //      component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
    //  }
  
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
 