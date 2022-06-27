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
import { useForm } from '@mantine/form';
import { FaUserLock } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { GoVerified } from 'react-icons/go';
import { AiOutlineAntDesign } from 'react-icons/ai';

const LoginForm = () => {
  // 表单的hooks
  const form = useForm({
    initialValues: {
      userName: '', // 用户名
      password: '', // 密码
      captcha: '', // 图灵验证码
    },
  });
  type FormValues = typeof form.values;
  const handleSubmit = (values: FormValues) => {
    console.log('values', values);
  };
  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput icon={<FaUserLock />} className="mb-2 md:mb-4" placeholder="留下你的大名" />
          <PasswordInput
            icon={<RiLockPasswordFill />}
            className="mb-2 md:mb-4"
            placeholder="悄悄输入密码哦"
          />
          <Grid>
            <Grid.Col span={7}>
              <TextInput
                icon={<GoVerified />}
                className="mb-2 md:mb-4"
                placeholder="输入图灵验证码"
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Verification />
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
