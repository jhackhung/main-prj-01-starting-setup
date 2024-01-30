import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/CoachesList.vue';
import CoachDetail from './pages/CoachDetail.vue';
import CoachContact from './pages/CoachContact.vue';
import CoachRegistration from './pages/CoachRegistration.vue';
import RequestReceived from './pages/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        { path: '/coaches/:id', component: CoachDetail, children: [
            { path: 'contact', component: CoachContact } // /coaches/:id/contact
        ] },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/notFound(/*)', component: NotFound }
    ],
});

export default router;