
import Question from '@/components/question.vue';

export default [
  {
    path: '/',
    name: 'Quiz',
    inNavbar: true,
    component: Question,
  },
  {
    path: '/about',
    name: 'About',
    inNavbar: true,
    component: () => import(/* webpackChunkName: "about" */ './views/about.vue'),
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    inNavbar: false,
    component: () => import(/* webpackChunkName: "scoreboard" */ './components/scoreboard.vue'),
  },
];
