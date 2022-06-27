/*
 * @Author: bugdr
 * @Date: 2022-06-25 12:07:06
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 13:58:34
 * @FilePath: \blog-next\components\Application\AppLogo.tsx
 * @Description:
 */
import SysConfig from '@locales/lang/zh-CN/sys';

const AppLogo = () => {
  return (
    <>
      <section className="flex pr-8 truncate cursor-pointer app-title">
        <span className="text-xl">{SysConfig.app.appName}</span>
      </section>
    </>
  );
};

export default AppLogo;
