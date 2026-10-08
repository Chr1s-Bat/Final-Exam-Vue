import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import RequirementsView from './views/RequirementsView.vue';
import DashboardView from './views/DashboardView.vue';
import CrudView from './views/CrudView.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/requirements', name: 'Requirements', component: RequirementsView },
    { path: '/dashboard', name: 'Dashboard', component: DashboardView },
    { path: '/crud', name: 'Crud', component: CrudView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;