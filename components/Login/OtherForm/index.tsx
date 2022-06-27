/*
 * @Author: bugdr
 * @Date: 2022-06-27 19:49:53
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 20:23:28
 * @FilePath: \blog-next\components\Login\OtherForm\index.tsx
 * @Description:其他方式登录
 */

import Verification from '@components/Verification';
import { Box, Button, Grid, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { AiOutlineAlipayCircle, AiFillWechat, AiFillGithub } from 'react-icons/ai';
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
