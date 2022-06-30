/*
 * @Author: bugdr
 * @Date: 2022-06-26 22:08:04
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 07:19:15
 * @FilePath: \blog-next\types\store.d.ts
 * @Description:
 */
export interface appSliceType {
  currentActivityMenu: string;
  currentActivityChillerMenu: string;
  mouseActiveMenu: string;
}

export interface userInfoType {
  id?: string;
  userName?: string;
  avatar?: string;
}

export interface userSliceType {
  userInfo: null;
  tokenKey?: string | null;
}
