import { defHttp } from '@utils/http';
import useSWR from 'swr';

export enum UserApi {
  GetCaptcha = '/user/captcha',
  DoLogin = '/user/login/',
}

/**
 * 获取图灵验证码
 */
export const doLogin = (params) => {
  const { captcha, ...user } = params;
  return defHttp.post({
    url: `${UserApi.DoLogin}${captcha}`,
    data: user,
  });
};
