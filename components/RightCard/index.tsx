/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:14:23
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 21:50:44
 * @FilePath: \blog-next\components\RightCard\index.tsx
 * @Description: 右侧卡片
 */

import AppletCard from './AppletCard';
import HotTagsCard from './HotTagsCard';
import MusicCard from './MusicCard';
import NoticeCard from './NoticeCard';
import OfficialAccountCard from './OfficialAccountCard';

const RightCard = () => {
  return (
    <>
      <NoticeCard />
      <HotTagsCard />
      <MusicCard />
      <OfficialAccountCard />
      <AppletCard />
    </>
  );
};

export default RightCard;
