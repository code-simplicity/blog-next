/*
 * @Author: bugdr
 * @Date: 2022-06-27 17:11:51
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 22:01:34
 * @FilePath: \blog-next\components\Login\LoginForm\index.tsx
 * @Description:
 */
import Verification from '@components/Verification';
import { Box, Button, Grid, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { FaClosedCaptioning, FaPassport, FaUserLock } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { GoVerified } from 'react-icons/go';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { doLogin } from '@api/user';
import { ResponseCode } from '@utils/enums/ResponseCode';
import { useDispatch } from 'react-redux';
import { checkUserInfoByToken, setTokenKey } from '@store/modules/userSlice';
import { showNotification } from '@mantine/notifications';
import { z } from 'zod';
import { useRef } from 'react';

const LoginForm = (props: any) => {
  const { setLoginModalOpened } = props;
  // 验证扫描
  const schema = z.object({
    userName: z.string().min(1, { message: '别忘记了你的用户名啊' }),
    password: z.string().min(4, { message: '密码怎么可能忘记呢' }),
    captcha: z.string().min(1, { message: '哎，你忘记右侧验证码了吗' }),
  });
  // 表单的hooks
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      userName: '468264345@qq.com', // 用户名
      password: '123456', // 密码
      captcha: '', // 图灵验证码
    },
  });
  const dispatch = useDispatch();
  type FormValues = typeof form.values;
  // 验证码的ref
  const verificationRef = useRef<any>();
  const handleSubmit = async (values: FormValues) => {
    const { result, code, message } = await doLogin(values);
    if (code === ResponseCode.SUCCESS) {
      // 设置token
      dispatch(setTokenKey(result));
      showNotification({
        title: '登录成功',
        message: '欢迎您登录到我的博客',
        icon: <FaPassport />,
      });
      // 触发获取用户信息
      dispatch(checkUserInfoByToken());
      // 关闭modal弹窗
      setLoginModalOpened(false);
    } else {
      showNotification({
        title: '登录失败',
        message: message,
        icon: <FaClosedCaptioning />,
      });
      // 更新验证码
      if (verificationRef.current) {
        verificationRef.current.getVerification();
      }
    }
  };
  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            icon={<FaUserLock />}
            className="mb-2 md:mb-4"
            placeholder="留下你的大名"
            {...form.getInputProps('userName')}
          />
          <PasswordInput
            icon={<RiLockPasswordFill />}
            className="mb-2 md:mb-4"
            placeholder="悄悄输入密码哦"
            {...form.getInputProps('password')}
          />
          <Grid>
            <Grid.Col span={7}>
              <TextInput
                icon={<GoVerified />}
                className="mb-2 md:mb-4"
                placeholder="输入图灵验证码"
                {...form.getInputProps('captcha')}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Verification ref={verificationRef} />
            </Grid.Col>
          </Grid>

          <Group position="right" mt="md">
            <Button
              leftIcon={<AiOutlineAntDesign className="text-xl" />}
              loaderPosition="right"
              fullWidth
              type="submit"
            >
              登录
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
};

export default LoginForm;
