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
          rightSection={<Button>搜索</Button>}
        />
      </div>
    </>
  );
};
export default Search;
