import _404Page from "@/pages/_404";
import Index from "@/pages/Index/index";
import My from "@/pages/My/index";
// import Content from '@/pages/Content';
// import basic from './basic';
// import ant from './ant';
// import tools from './tools';
// import component from './component';

const routes = [
  {
    path: "/",
    index: true,
    title: "CRM",
    component: Index,
  },
  {
    path: "/my",
    title: "我的",
    component: My,
  },
  // {
  //   path: '/Content',
  //   component: Content
  // },
  // ...basic,
  // ...ant,
  // ...tools,
  // ...component,
  {
    path: "/_404",
    miss: true,
    component: _404Page,
  },
];

export default routes;
