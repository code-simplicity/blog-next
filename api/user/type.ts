/*
 * @Author: bugdr
 * @Date: 2022-06-29 10:19:20
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 15:42:43
 * @FilePath: \blog-next\api\user\type.ts
 * @Description:
 */
// 用户登录的接口类型
export interface DoLoginType {
  userName: string;
  password: string;
  captchaCode: string;
}

// 用户注册的接口类型
export interface RegisterUserType extends DoLoginType {
  email: string;
  emailCode: string;
}

// 获取邮箱验证码的接口类型
export interface GetEmailCodeType {
  email: string;
  captcha_code: string;
  type: string;
}

// 获取管理员信息
export interface GetAdminInfoType {
  roles: string;
}
