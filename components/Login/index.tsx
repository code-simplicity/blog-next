/*
 * @Author: bugdr
 * @Date: 2022-06-27 14:44:58
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 16:02:40
 * @FilePath: \blog-next\components\Login\index.tsx
 * @Description:登录的modal弹窗表单
 */
import { Button, Group, Input, Modal, Title, useMantineTheme } from '@mantine/core';

const LoginModal = (props: any) => {
  const theme = useMantineTheme();
  const { loginModalOpened, setLoginModalOpened } = props;
  // 设置modal关闭
  const setCloseOpened = () => {
    setLoginModalOpened(false);
  };
  return (
    <>
      <Modal
        id="loginModal"
        radius="sm"
        size="sm"
        opened={loginModalOpened}
        closeOnClickOutside={false}
        onClose={() => setCloseOpened()}
        transition="fade"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[4]}
        transitionDuration={600}
        transitionTimingFunction="ease"
        style={{ marginTop: 80 }}
        title={<Title className="text-base md:text-xl">登录</Title>}
      >
        <Input data-autofocus />
        <Input data-autofocus />
        <Input data-autofocus />
      </Modal>
    </>
  );
};

export default LoginModal;
