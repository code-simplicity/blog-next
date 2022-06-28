/*
 * @Author: bugdr
 * @Date: 2022-06-28 08:33:46
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-28 10:18:43
 * @FilePath: \blog-next\utils\http\checkStatue.ts
 * @Description:检查状态码
 */
import type { ErrorMessageMode } from '#types/axios';
import SysConfig from '@locales/lang/zh-CN/sys';

export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: ErrorMessageMode = 'message',
): void {
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    case 401:
      errMessage = msg || SysConfig.api.errMsg401;
      break;
    case 403:
      errMessage = SysConfig.api.errMsg403;
      break;
    // 404请求不存在
    case 404:
      errMessage = SysConfig.api.errMsg404;
      break;
    case 405:
      errMessage = SysConfig.api.errMsg405;
      break;
    case 408:
      errMessage = SysConfig.api.errMsg408;
      break;
    case 500:
      errMessage = SysConfig.api.errMsg500;
      break;
    case 501:
      errMessage = SysConfig.api.errMsg501;
      break;
    case 502:
      errMessage = SysConfig.api.errMsg502;
      break;
    case 503:
      errMessage = SysConfig.api.errMsg503;
      break;
    case 504:
      errMessage = SysConfig.api.errMsg504;
      break;
    case 505:
      errMessage = SysConfig.api.errMsg505;
      break;
    default:
  }
}
