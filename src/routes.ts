
import Question from '@/components/question.vue';

export default [
  {
    path: '/',
    name: 'Quiz',
    component: Question,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ './views/about.vue'),
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: () => import(/* webpackChunkName: "scoreboard" */ './components/scoreboard.vue'),
  },
];
