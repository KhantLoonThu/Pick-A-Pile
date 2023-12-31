import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue'
import PilesPage from '@/views/PilesPage.vue'
import DetailPage from '@/views/DetailPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: 'HomePage',
            component: HomePage,
        },
        {
            path: "/PilesPage:id",
            name: 'PilesPage',
            component: PilesPage,
            props: true
        },
        {
            path: '/PilesPage:id/DetailPage:ansId&:index',
            name: "DetailPage",
            component: DetailPage,
            props: true
        }
    ]
})

export default router;