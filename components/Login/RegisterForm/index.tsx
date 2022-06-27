/*
 * @Author: bugdr
 * @Date: 2022-06-27 17:11:59
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 22:28:03
 * @FilePath: \blog-next\components\Login\RegisterForm\index.tsx
 * @Description:
 */
import Verification from '@components/Verification';
import { Box, Button, Grid, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { GiArchiveRegister } from 'react-icons/gi';
import { FaUserLock } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineVerified } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';

const RegisterForm = () => {
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
            icon={<FaUserLock />}
            className="mb-2 md:mb-4"
            placeholder="输入你独一无二的名字吧"
          />
          <PasswordInput
            icon={<RiLockPasswordFill />}
            className="mb-2 md:mb-4"
            placeholder="悄悄输入密码哦"
          />
          <TextInput icon={<MdMarkEmailRead />} className="mb-2 md:mb-4" placeholder="输入邮箱吧" />
          <Grid>
            <Grid.Col span={7}>
              <TextInput
                icon={<AiOutlineVerified />}
                className="mb-2 md:mb-4"
                placeholder="把邮箱验证码交给我"
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Verification />
            </Grid.Col>
          </Grid>

          <Group position="right" mt="md">
            <Button
              leftIcon={<GiArchiveRegister className="text-xl" />}
              loaderPosition="right"
              fullWidth
              type="submit"
            >
              注册
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
};

export default RegisterForm;
