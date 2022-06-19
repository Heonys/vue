export default [
    {
        //dashboard
        path: "dashboard",
        component: () => import("@/pages/dashboard/MainDashBoard.vue"),
    },
    {
        // 메인
        path: "main",
        component: () => import("@/pages/dashboard/jiheon/MainDashBoard.vue"),
    },
    {
        //게시글 상세
        path: "main/veiw",
        component: () => import("@/pages/dashboard/jiheon/AppVeiw.vue"),
    },
    {
        //글 쓰기
        path: "main/write",
        component: () => import("@/pages/dashboard/jiheon/AppWrite.vue"),
    },
    {
        //테스트
        path: "test",
        component: () => import("@/pages/dashboard/jiheon/AppTest.vue"),
    },
];
