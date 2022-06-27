/*
 * @Author: bugdr
 * @Date: 2022-06-26 09:14:54
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 10:01:31
 * @FilePath: \blog-next\components\Menu\HorizontalMenu\index.tsx
 * @Description:水平菜单
 */
import type { RouteType } from '#types/route';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { Badge, Button, Menu } from '@mantine/core';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { useState } from 'react';
import { NextLink } from '@mantine/next';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentActiveMenu } from '@store/modules/appSlice';
import type { appSliceType } from '#types/store';
import { motion } from 'framer-motion';
interface HorizontalMenuTypes {
  Routers: any;
}

const HorizontalMenu = (props: HorizontalMenuTypes) => {
  const { Routers } = props;
  // 有二级菜单的切换图标
  const [isShowCompactDow, setIsShowCompactDow] = useState<string>('');
  // 通过鼠标的移入移除事件进行判断
  const handleMouseEnter = (path: string) => {
    setIsShowCompactDow(path);
  };
  const handleMouseLeave = () => {
    setIsShowCompactDow('');
  };
  // 激活菜单
  const { currentActivityMenu } = useSelector((store: any) => store.app);
  const dispatch = useDispatch();
  const activeMenu = (path: string) => {
    dispatch(setCurrentActiveMenu(path));
  };

  return (
    <>
      <div className="flex items-center">
        {Routers.map((item: RouteType) => {
          return item.children && item.children.length ? (
            <Menu
              key={item.path}
              trigger="hover"
              size="xs"
              shadow="xl"
              onMouseEnter={() => handleMouseEnter(item.path)}
              onMouseLeave={() => handleMouseLeave()}
              position="bottom"
              // classNames={{
              //   item: `bg-blue-700 bg-opacity-50`,
              //   itemHovered: 'bg-pink-600',
              // }}
              control={
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                  className={`flex items-center mr-6 cursor-pointer hover:text-purple-600 ${
                    item.path === currentActivityMenu ? 'text-red-600 menu-item' : ''
                  }`}
                  onClick={() => activeMenu(item.path)}
                >
                  <span className="mr-2">
                    <Icon className="text-xl" icon={item.icon}></Icon>
                  </span>
                  <span>{item.name}</span>
                  {/* 屏幕触摸到之后就切换 */}
                  <span>
                    {isShowCompactDow === item.path ? (
                      <BsChevronCompactDown />
                    ) : (
                      <BsChevronCompactUp />
                    )}
                  </span>
                </motion.div>
              }
            >
              {item.children
                ? item.children.map((child) => {
                    return (
                      <Menu.Item component={NextLink} href={child.path} key={child.path}>
                        <motion.div
                          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                          className={`flex items-center mr-6 cursor-pointer hover:text-purple-600 ${
                            child.path === currentActivityMenu ? 'text-pink-600' : ''
                          }`}
                          onClick={() => activeMenu(child.path)}
                        >
                          <span>
                            <Icon icon={child.icon}></Icon>
                          </span>
                          <span>{child.name}</span>
                        </motion.div>
                      </Menu.Item>
                    );
                  })
                : null}
            </Menu>
          ) : (
            <Link href={item.path} key={item.path}>
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                className={`
                flex items-center mr-6 cursor-pointer hover:text-purple-600 ${
                  item.path === currentActivityMenu ? 'text-red-600 menu-item' : ''
                }`}
                onClick={() => activeMenu(item.path)}
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="mr-1"
                >
                  <Icon className="text-xl" icon={item.icon}></Icon>
                </motion.span>
                <span>{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HorizontalMenu;
