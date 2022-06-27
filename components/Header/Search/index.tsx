/*
 * @Author: bugdr
 * @Date: 2022-06-25 17:27:51
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 14:33:27
 * @FilePath: \blog-next\components\Header\Search\index.tsx
 * @Description:
 */
import { Button, Input } from '@mantine/core';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <>
      <div className="flex items-center mr-4">
        <Input
          icon={<BsSearch />}
          placeholder="请输入搜索内容"
          radius="xs"
          size="sm"
          rightSection={<Button className="p-2">搜索</Button>}
        />
      </div>
    </>
  );
};
export default Search;
