/*
 * @Author: bugdr
 * @Date: 2022-06-27 17:13:02
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 17:14:15
 * @FilePath: \blog-next\components\Verification\index.tsx
 * @Description:图灵验证码
 */
import { UserApi } from '@api/user/index';
import { Image } from '@mantine/core';
import { useEffect, useState } from 'react';

const Verification = () => {
  const [captchaSrc, setCaptchaSrc] = useState<string>();

  // 获取图灵验证码
  const getVerification = () => {
    // 调用获取验证码的接口
    const isDate = String(new Date()); // 时间类型格式化
    const result = `${UserApi.GetCaptcha}?random=${Date.parse(isDate)}`;
    setCaptchaSrc(result);
  };
  useEffect(() => {
    getVerification();
  }, [captchaSrc]);
  return (
    <>
      <Image
        onClick={() => getVerification()}
        radius="sm"
        height={36}
        src={captchaSrc}
        alt="Random unsplash image"
        className="cursor-pointer"
      />
    </>
  );
};

export default Verification;
