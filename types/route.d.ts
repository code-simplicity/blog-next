/*
 * @Author: bugdr
 * @Date: 2022-06-26 09:25:03
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-26 19:34:05
 * @FilePath: \blog-next\types\route.d.ts
 * @Description:路由接口类型约束
 */
export interface RouteType {
  path: string;
  name: string;
  icon?: any;
  children?: RouteType[];
}
