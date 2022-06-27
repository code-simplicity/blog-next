/*
 * @Author: bugdr
 * @Date: 2022-06-27 17:11:51
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 17:30:21
 * @FilePath: \blog-next\components\Login\LoginForm\index.tsx
 * @Description:
 */
import Verification from '@components/Verification';
import { Box, Button, Grid, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { BsFillPatchCheckFill } from 'react-icons/bs';

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
          <TextInput className="mb-2 md:mb-4" placeholder="留下你的大名" />
          <PasswordInput className="mb-2 md:mb-4" placeholder="悄悄输入密码哦" />
          <Grid>
            <Grid.Col span={7}>
              <TextInput className="mb-2 md:mb-4" placeholder="输入图灵验证码" />
            </Grid.Col>
            <Grid.Col span={5}>
              <Verification />
            </Grid.Col>
          </Grid>

          <Group position="right" mt="md">
            <Button
              leftIcon={<BsFillPatchCheckFill className="text-xl" />}
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
