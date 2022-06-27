/*
 * @Author: bugdr
 * @Date: 2022-06-27 20:49:16
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 22:27:12
 * @FilePath: \blog-next\components\Login\ForgotPasswordForm\index.tsx
 * @Description: 忘记密码
 */

import Verification from '@components/Verification';
import { Box, Button, Grid, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { AiOutlineAntDesign, AiOutlineVerified } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import { MdMarkEmailRead } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const ForgotPasswordForm = () => {
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
          <TextInput
            icon={<MdMarkEmailRead />}
            className="mb-2 md:mb-4"
            placeholder="输入注册过的邮箱吧"
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
          <Grid>
            <Grid.Col span={7}>
              <TextInput
                icon={<AiOutlineVerified />}
                className="mb-2 md:mb-4"
                placeholder="输入邮箱验证码"
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Verification />
            </Grid.Col>
          </Grid>
          <PasswordInput
            icon={<RiLockPasswordFill />}
            className="mb-2 md:mb-4"
            placeholder="悄悄输入新密码哦"
          />
          <Group position="right" mt="md">
            <Button
              leftIcon={<AiOutlineAntDesign className="text-xl" />}
              loaderPosition="right"
              fullWidth
              type="submit"
            >
              修改
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
};

export default ForgotPasswordForm;
