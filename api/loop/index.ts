import { defHttp } from '@utils/http';
import type { GetPortalLoopType } from './type';

export enum LoopApi {
  GetPortalLoop = '/portal/web_size_info/loop',
}

/**
 * 获取门户轮播图
 * @param params
 * @returns
 */
export const getPortalLoop = (params: GetPortalLoopType) => {
  return defHttp.get({
    url: `${LoopApi.GetPortalLoop}`,
    params,
  });
};
