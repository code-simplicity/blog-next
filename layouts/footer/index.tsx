/*
 * @Author: bugdr
 * @Date: 2022-06-25 11:12:03
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-26 08:48:51
 * @FilePath: \blog-next\layouts\footer\index.tsx
 * @Description:
 */
import SysConfig from '@locales/lang/zh-CN/sys';
import { Footer } from '@mantine/core';
// import './index.scss'

const LayoutFooter = () => {
  const { copyright, security, icp } = SysConfig.footer;
  return (
    <>
      <Footer height={60} p="md">
        <div className="flex flex-col items-center justify-center">
          <div>{copyright}</div>
          <div className="flex items-center">
            <div>{security}</div>
            <a href="https://beian.miit.gov.cn" target="_blank" className="icp">{icp}</a>
          </div>
          <div>本站已运行 259 天 23 时 34 分 38 秒 </div>
          <div className="flex items-center">
            <div>本站访问量</div>
            <div className="mx-4">访客数量</div>
            <div>当前页面的访问量</div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default LayoutFooter;
