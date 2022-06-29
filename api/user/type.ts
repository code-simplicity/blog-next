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
