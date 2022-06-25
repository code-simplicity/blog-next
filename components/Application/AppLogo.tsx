import SysConfig from '@locales/lang/zh-CN/sys';
import { Button } from '@mantine/core';

const AppLogo = () => {
  return (
    <>
      <section className="flex">
        <span className="text-xl">{SysConfig.app.appName}</span>
      </section>
    </>
  );
};

export default AppLogo;
