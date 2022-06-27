/*
 * @Author: bugdr
 * @Date: 2022-06-27 19:49:53
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 22:26:50
 * @FilePath: \blog-next\components\Login\OtherForm\index.tsx
 * @Description:其他方式登录
 */

import Verification from '@components/Verification';
import { Box, Button, Grid, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  AiOutlineAlipayCircle,
  AiFillWechat,
  AiFillGithub,
  AiOutlineAntDesign,
  AiOutlineVerified,
} from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';

const OtherForm = () => {
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
            placeholder="请输入你的邮箱"
          />
          <Grid>
            <Grid.Col span={7}>
              <TextInput
                icon={<AiOutlineVerified />}
                className="mb-2 md:mb-4"
                placeholder="邮箱验证码呢"
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
              邮箱登录
            </Button>
          </Group>
          <div className="grid grid-cols-3 gap-4 my-4 text-3xl cursor-pointer">
            <div className="flex items-center justify-center">
              <AiFillWechat />
            </div>
            <div className="flex items-center justify-center">
              <AiFillGithub />
            </div>
            <div className="flex items-center justify-center">
              <AiOutlineAlipayCircle />
            </div>
          </div>
        </form>
      </Box>
    </>
  );
};

export default OtherForm;
