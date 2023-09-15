import {createRouter, createWebHistory} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Blog from '../components/Blog.vue';

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/blog/:id', component: Blog },
    { path: '/post/:id?', component: Post, name: 'post' },
    {
        path: '/user/:id',
        component: User,
        children: [
            { path: 'profile', component: UserProfile },
            { path: 'schedule', component: UserSchedule },
        ]
    },
]

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route;