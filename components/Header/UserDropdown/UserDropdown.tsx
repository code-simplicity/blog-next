/*
 * @Author: bugdr
 * @Date: 2022-06-25 16:43:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 17:33:25
 * @FilePath: \blog-next\components\Header\UserDropdown\UserDropdown.tsx
 * @Description:
 */
import MenuHeaderLogin from '@locales/lang/zh-CN/menuHeader';
import { ActionIcon, Avatar, Button, Group, Menu, Popover, Text } from '@mantine/core';
import { useState } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp, BsFillBellFill } from 'react-icons/bs';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { RiAdminFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const UserDropdown = (props: any) => {
  const { setLoginModalOpened } = props;
  // 触发登录弹窗的显示
  const handleShowModal = () => {
    setLoginModalOpened(true);
  };
  // 获取用户信息的展示
  const { tokenKey, userInfo } = useSelector((store: any) => store.user);
  // 打开用户信息的功能
  const [openUserEditProver, setOpenUserEditProver] = useState(false);

  // 弹出的功能模块
  const handleMouseEnter = () => {
    setOpenUserEditProver(true);
  };
  // 鼠标移出模块之后就关闭
  const handleMouseLeave = () => {
    setOpenUserEditProver(false);
  };
  // 点击item实现不同的方法
  const handleChildeMenu = (args: string) => {
    if (args === MenuHeaderLogin.doLogout.title) return doLogout();
    if (args === MenuHeaderLogin.doAdmin.title) return doAdmin();
  };
  // 退出登录的方法
  const doLogout = () => {
    console.log('退出登录 :>> ');
  };
  const doAdmin = () => {
    console.log('去管理中心 :>> ');
  };
  return (
    <>
      <div className="flex items-center">
        {tokenKey !== '' ? (
          <div className="flex items-center">
            <BsFillBellFill className="text-2xl" />
            <Menu
              key="login-edit"
              trigger="hover"
              size="xs"
              shadow="xl"
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
              position="bottom"
              control={
                <div className="flex items-center cursor-pointer">
                  <Avatar
                    src={userInfo.avatar}
                    alt={userInfo.avatar}
                    radius="xl"
                    size="md"
                    className="mx-2"
                  ></Avatar>
                  <span>{userInfo.userName}</span>
                  {/* 屏幕触摸到之后就切换 */}
                  <span>
                    {openUserEditProver ? <BsChevronCompactDown /> : <BsChevronCompactUp />}
                  </span>
                </div>
              }
            >
              <Menu.Item onClick={() => handleChildeMenu(MenuHeaderLogin.doLogout.title)}>
                <div className="flex items-center hover:text-purple-600">
                  <RiLogoutCircleRFill className="mr-2" />
                  <span>{MenuHeaderLogin.doLogout.title}</span>
                </div>
              </Menu.Item>
              <Menu.Item onClick={() => handleChildeMenu(MenuHeaderLogin.doLogout.title)}>
                <div className="flex items-center hover:text-purple-600">
                  <RiAdminFill className="mr-2" />
                  <span>{MenuHeaderLogin.doAdmin.title}</span>
                </div>
              </Menu.Item>
            </Menu>
          </div>
        ) : (
          <div className="flex items-center">
            <Group>
              <Button
                leftIcon={<BsFillShieldLockFill />}
                variant="outline"
                onClick={() => handleShowModal()}
              >
                登录
              </Button>
            </Group>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDropdown;
