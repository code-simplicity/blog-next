/*
 * @Author: bugdr
 * @Date: 2022-06-27 14:44:58
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-01 08:06:29
 * @FilePath: \blog-next\components\Login\index.tsx
 * @Description:登录的modal弹窗表单
 */
import LoginFormConfig from '@locales/lang/zh-CN/login';
import {
  Box,
  Button,
  Group,
  Modal,
  Title,
  useMantineTheme,
  Image,
  Grid,
  Text,
} from '@mantine/core';
import { useState } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import LoginForm from './LoginForm';
import OtherForm from './OtherForm';
import RegisterForm from './RegisterForm';

const LoginModal = (props: any) => {
  const theme = useMantineTheme();
  const { loginModalOpened, setLoginModalOpened } = props;
  // 设置modal关闭
  const setCloseOpened = () => {
    setLoginModalOpened(false);
  };

  const [title, setTitle] = useState(LoginFormConfig.login.title);
  // 不同form的展示状态 {'loginForm, registerForm, otherForm, forgotPasswordForm'}
  const [formCheckState, setFormCheckState] = useState(LoginFormConfig.login.formCheckState);
  // 不同的状态显示不同的表单
  const handleCheckFormState = (config: any) => {
    setFormCheckState(config.formCheckState);
    setTitle(config.title);
  };

  // 获取不同的组件
  const getFormComponents = () => {
    if (formCheckState === LoginFormConfig.login.formCheckState)
      return (
        <>
          <LoginForm setLoginModalOpened={setLoginModalOpened} />
          <Grid className="my-2">
            <Grid.Col span={6}>
              <Group>
                <Button
                  color="indigo"
                  className="w-full"
                  onClick={() => handleCheckFormState(LoginFormConfig.other)}
                >
                  其他方式登录
                </Button>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group>
                <Button
                  color="cyan"
                  className="w-full"
                  onClick={() => handleCheckFormState(LoginFormConfig.register)}
                >
                  注册
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </>
      );
    if (formCheckState === LoginFormConfig.register.formCheckState)
      return (
        <>
          <RegisterForm />
          <Grid className="my-2">
            <Grid.Col span={6}>
              <Group>
                <Button
                  color="indigo"
                  className="w-full"
                  onClick={() => handleCheckFormState(LoginFormConfig.login)}
                >
                  账户登录
                </Button>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group>
                <Button
                  color="indigo"
                  className="w-full"
                  onClick={() => handleCheckFormState(LoginFormConfig.other)}
                >
                  其他方式登录
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </>
      );
    if (formCheckState === LoginFormConfig.other.formCheckState)
      return (
        <>
          <OtherForm />
          <Grid className="my-2">
            <Grid.Col span={6}>
              <Group>
                <Button
                  color="indigo"
                  className="w-full"
                  onClick={() => handleCheckFormState(LoginFormConfig.login)}
                >
                  账户登录
                </Button>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group>
                <Button
                  color="cyan"
                  className="w-full"
                  onClick={() => handleCheckFormState(LoginFormConfig.register)}
                >
                  注册
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </>
      );
    if (formCheckState === LoginFormConfig.forgotPassword.formCheckState)
      return (
        <>
          <ForgotPasswordForm />
          <Grid className="my-2">
            <Grid.Col span={6}>
              <Group>
                <Button
                  color="indigo"
                  className="w-full"
                  onClick={() => handleCheckFormState(LoginFormConfig.login)}
                >
                  账户登录
                </Button>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group>
                <Button
                  color="indigo"
                  className="w-full"
                  onClick={() => handleCheckFormState(LoginFormConfig.other)}
                >
                  其他方式登录
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </>
      );
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
        title={<Title className="text-base md:text-xl">{title}</Title>}
      >
        {getFormComponents()}
        {formCheckState !== LoginFormConfig.forgotPassword.formCheckState ? (
          <Group position="right">
            <Text
              color="pink"
              size="sm"
              className="cursor-pointer hover:text-green-700"
              onClick={() => handleCheckFormState(LoginFormConfig.forgotPassword)}
            >
              忘记密码
            </Text>
          </Group>
        ) : null}
      </Modal>
    </>
  );
};

export default LoginModal;
