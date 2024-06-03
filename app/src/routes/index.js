import {createRouter, createWebHashHistory} from 'vue-router';

const Home = {template:"<div>Home</div>"};
const About = {template:"<div>About</div>"};

const routes =[
    {path: "/", component:Home},
    {path: "/about", component:About},
    {path: "/product", component:Product},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export  default router;
