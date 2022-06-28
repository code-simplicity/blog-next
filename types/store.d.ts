/*
 * @Author: bugdr
 * @Date: 2022-06-26 22:08:04
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 12:31:54
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
  userInfo: userInfoType;
  tokenKey: string;
}
