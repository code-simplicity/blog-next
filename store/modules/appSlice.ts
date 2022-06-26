import type { appSliceType } from '#types/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState: appSliceType = {
  currentActivityMenu: '/', // 当前激活的菜单
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // 触发方法
    setCurrentActiveMenu: (state, action) => {
      state.currentActivityMenu = action.payload;
    },
  },
});

export const { setCurrentActiveMenu } = appSlice.actions;

// 导出
export default appSlice.reducer;
