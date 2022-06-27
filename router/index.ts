/*
 * @Author: bugdr
 * @Date: 2022-06-26 09:23:36
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-26 19:41:24
 * @FilePath: \blog-next\router\index.ts
 * @Description:菜单路由的封装
 */
import type { RouteType } from '#types/route';
import { DiAtlassian, DiCode } from 'react-icons/di';

const Routers: RouteType[] = [
  {
    path: '/',
    name: '首页',
    icon: 'majesticons:home-analytics',
  },
  {
    path: '/file',
    name: '归档',
    icon: 'clarity:file-settings-solid-alerted',
  },
  {
    path: '/technology',
    name: '技术',
    icon: 'cib:skillshare',
  },
  {
    path: '/codetalk',
    name: '杂谈',
    icon: 'raphael:codetalk',
  },
  {
    path: '/message',
    name: '留言',
    icon: 'bxs:message-alt-detail',
  },
  {
    path: '/laboratory',
    name: '实验室',
    icon: 'healthicons:biochemistry-laboratory',
    children: [
      {
        path: '/prxo',
        name: '小程序',
        icon: 'healthicons:biochemistry-laboratory',
      },
      {
        path: '/xqiu',
        name: '新球',
        icon: 'healthicons:biochemistry-laboratory',
      },
    ],
  },
  {
    path: '/links',
    name: '友链',
    icon: 'dashicons:admin-links',
    children: [
      {
        path: '/codetalk',
        name: '杂谈',
        icon: 'raphael:codetalk',
      },
    ],
  },
  {
    path: '/about',
    name: '关于',
    icon: 'simple-icons:aboutdotme',
  },
];

export default Routers;
