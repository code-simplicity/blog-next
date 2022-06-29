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
import { useForm, zodResolver } from '@mantine/form';
import { GiArchiveRegister } from 'react-icons/gi';
import { FaUserLock } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineVerified } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';
import { z } from 'zod';
import { useRef, useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { ResponseCode } from '@utils/enums/ResponseCode';
import { getEmailCode, registerUser } from '@api/user';

const RegisterForm = () => {
  // 验证表单
  const schema = z.object({
    userName: z.string().min(3, {
      message: '用户名不能低于三个字符哦',
    }),
    password: z.string().min(4, { message: '密码未输入哦' }),
    email: z.string().email({ message: '请输入正确的邮箱哦' }),
    emailCode: z.string().min(5, { message: '邮箱验证码必须是五位哦' }),
    captchaCode: z.string().min(1, { message: '别看了，在你的右侧' }),
  });
  // 表单的hooks
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      userName: '', // 用户名
      email: '', // 邮箱
      emailCode: '', // 邮箱验证码
      password: '', // 密码
      captchaCode: '', // 图灵验证码
    },
  });
  type FormValues = typeof form.values;
  // 是否点击发送倒计时按钮
  const [isCountDown, setIsCountDown] = useState<boolean>(false);
  // 设计倒计时
  const [countDownTimeText, setCountDownTimeText] = useState<string>('');
  // 制作倒计时验证
  const handlerCountDown = async () => {
    // 判断邮箱值是否存在
    if (form.values.email === '' || form.values.captchaCode === '')
      return showNotification({
        title: '把邮箱输入吧',
        message: '邮箱呢',
      });
    // 初始时间
    let timerValue = 60;
    // 循环id
    const timerId = setInterval(() => {
      if (timerValue === 1) {
        setIsCountDown(false);
        clearIntervalFn(timerId);
        return;
      }
      timerValue -= 1;
      setCountDownTimeText(`发送成功${timerValue}`);
      setIsCountDown(true);
    }, 1000);
    // 发送邮箱验证码
    const params = {
      email: form.values.email,
      captcha_code: form.values.captchaCode,
      type: 'register',
    };
    const { code, message } = await getEmailCode(params);
    if (code === ResponseCode.SUCCESS) {
      showNotification({
        title: '邮箱发送成功',
        message: `${message}`,
      });
    } else {
      showNotification({
        title: '错误',
        message: `${message}`,
      });
    }
  };
  // 清除定时器
  const clearIntervalFn = (timerId: any) => {
    timerId && clearInterval(timerId);
  };

  // 更新验证码
  const verificationRef = useRef<any>();

  // 注册用户
  const handleSubmit = async (values: FormValues) => {
    const { result, code, message } = await registerUser(values);
    if (code === ResponseCode.SUCCESS) {
      showNotification({
        title: '注册成功',
        message,
      });
    } else {
      showNotification({
        title: '注册失败',
        message,
      });
      // 更新验证码
      if (verificationRef.current) {
        verificationRef.current.getVerification();
      }
      // 重置表单
      form.reset();
    }
  };

  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            icon={<FaUserLock />}
            className="mb-2 md:mb-4"
            placeholder="输入你独一无二的名字吧"
            {...form.getInputProps('userName')}
          />
          <PasswordInput
            icon={<RiLockPasswordFill />}
            className="mb-2 md:mb-4"
            placeholder="悄悄输入密码哦"
            {...form.getInputProps('password')}
          />
          <TextInput
            icon={<MdMarkEmailRead />}
            className="mb-2 md:mb-4"
            placeholder="输入邮箱吧"
            {...form.getInputProps('email')}
          />
          <Grid>
            <Grid.Col span={7}>
              <TextInput
                icon={<AiOutlineVerified />}
                className="mb-2 md:mb-4"
                placeholder="把图灵验证码交给我吧"
                {...form.getInputProps('captchaCode')}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Verification ref={verificationRef} />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={7}>
              <TextInput
                icon={<AiOutlineVerified />}
                className="mb-2 md:mb-4"
                placeholder="把邮箱验证码交给我"
                {...form.getInputProps('emailCode')}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Group>
                <Button
                  fullWidth
                  disabled={isCountDown}
                  variant="outline"
                  onClick={() => handlerCountDown()}
                >
                  {isCountDown ? countDownTimeText : '发送验证码'}
                </Button>
              </Group>
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
