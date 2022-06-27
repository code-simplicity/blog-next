/*
 * @Author: bugdr
 * @Date: 2022-06-25 17:27:51
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 16:15:11
 * @FilePath: \blog-next\components\Header\Search\index.tsx
 * @Description:
 */
import { Button, Group, Input } from '@mantine/core';
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
          rightSection={
            <Group>
              <Button className="p-2">搜索</Button>
            </Group>
          }
        />
      </div>
    </>
  );
};
export default Search;
