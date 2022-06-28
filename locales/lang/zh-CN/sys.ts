/*
 * @Author: bugdr
 * @Date: 2022-06-25 15:31:04
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-28 08:48:13
 * @FilePath: \blog-next\locales\lang\zh-CN\sys.ts
 * @Description:文字说明
 */
const SysConfig = {
  app: {
    appName: '博览群书',
  },
  footer: {
    copyright: 'Copyright © Powered bugdr | 🌈 Theme byMrDPY (2020-2022）',
    security: '黔公网安备 xxx',
    icp: '黔ICP备 xxx号',
  },
  api: {
    operationFailed: '操作失败',
    errorTip: '错误提示',
    errorMessage: '操作失败,系统异常!',
    timeoutMessage: '登录超时,请重新登录!',
    apiTimeoutMessage: '接口请求超时,请刷新页面重试!',
    apiRequestFailed: '请求出错，请稍候重试',
    networkException: '网络异常',
    networkExceptionMsg: '网络异常，请检查您的网络连接是否正常!',

    errMsg401: '用户没有权限（令牌、用户名、密码错误）!',
    errMsg403: '用户得到授权，但是访问是被禁止的。!',
    errMsg404: '网络请求错误,未找到该资源!',
    errMsg405: '网络请求错误,请求方法未允许!',
    errMsg408: '网络请求超时!',
    errMsg500: '服务器错误,请联系管理员!',
    errMsg501: '网络未实现!',
    errMsg502: '网络错误!',
    errMsg503: '服务不可用，服务器暂时过载或维护!',
    errMsg504: '网络超时!',
    errMsg505: 'http版本不支持该请求!',
  },
};
export default SysConfig;
