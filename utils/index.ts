/*
 * @Author: bugdr
 * @Date: 2022-06-27 20:58:02
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-28 10:27:05
 * @FilePath: \blog-next\utils\index.ts
 * @Description:
 */
import { isObject } from 'lodash-es';

export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}
