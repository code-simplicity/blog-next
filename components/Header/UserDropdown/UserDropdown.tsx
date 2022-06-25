import { Avatar, Button } from '@mantine/core';
import { BsFillBellFill } from 'react-icons/bs';

const UserDropdown = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center">
          <Button className="bg-dark-300 text-blue-900">登录</Button>
        </div>
        <div className="flex items-center">
          <BsFillBellFill className="text-2xl" />
          <Avatar></Avatar>
          <span>用户名</span>
        </div>
      </div>
    </>
  );
};

export default UserDropdown;
