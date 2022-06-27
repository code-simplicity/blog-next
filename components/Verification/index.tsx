/*
 * @Author: bugdr
 * @Date: 2022-06-27 17:13:02
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 17:14:15
 * @FilePath: \blog-next\components\Verification\index.tsx
 * @Description:图灵验证码
 */
import { Image } from '@mantine/core';

const Verification = () => {
  return (
    <>
      <Image
        radius="sm"
        height={36}
        src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="Random unsplash image"
      />
    </>
  );
};

export default Verification;
