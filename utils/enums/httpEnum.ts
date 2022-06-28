/*
 * @Author: bugdr
 * @Date: 2022-06-28 08:43:16
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-28 08:43:22
 * @FilePath: \blog-next\utils\enums\httpEnum.ts
 * @Description:http的枚举常量
 */
// 返回类型的枚举
export enum ResultEnum {
  SUCCESS = 0,
  ERROR = 1,
  TIMEOUT = 401,
  TYPE = 'success',
}

// 请求的方式
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

// 类型
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
