import { defHttp } from '@utils/http';
import type { GetArticleListType } from './type';

export enum ArticleApi {
  GetArticleList = '/portal/article/list/',
}

/**
 * 获取所有文章
 * @param params
 * @returns
 */
export const getArticleList = (params: GetArticleListType) => {
  const { page, size } = params;
  return defHttp.get({
    url: `${ArticleApi.GetArticleList}${page}/${size}`,
  });
};
