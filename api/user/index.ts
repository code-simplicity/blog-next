import { defHttp } from '@utils/http';
import useSWR from 'swr';
import type { DoLoginParamsType } from './type';

export enum UserApi {
  GetCaptcha = '/user/captcha',
  DoLogin = '/user/login/',
  CheckToken = '/user/check-token',
  Logout = '/user/logout',
}

/**
 * 登录
 * @param data
 * @returns
 */
export const doLogin = (data: DoLoginParamsType) => {
  const { captcha, ...user } = data;
  return defHttp.post({
    url: `${UserApi.DoLogin}${captcha}`,
    data: user,
  });
};

/**
 * 检查用户是否登录
 * @returns
 */
export const checkToken = () => {
  return defHttp.get({
    url: UserApi.CheckToken,
  });
};

/**
 * 退出登录
 * @returns
 */
export const logout = () => {
  return defHttp.get({
    url: UserApi.Logout,
  });
};
