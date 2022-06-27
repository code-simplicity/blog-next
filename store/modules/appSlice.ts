/*
 * @Author: bugdr
 * @Date: 2022-06-26 21:36:13
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 12:31:36
 * @FilePath: \blog-next\store\modules\appSlice.ts
 * @Description:
 */
import type { appSliceType } from '#types/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState: appSliceType = {
  currentActivityMenu: '/', // 当前激活的菜单
  currentActivityChillerMenu: '', // 当前激活的子菜单固定
  mouseActiveMenu: '', // 鼠标移动时候触发菜单
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // 触发方法
    setCurrentActiveMenu: (state, action) => {
      state.currentActivityMenu = action.payload;
    },
    setCurrentActivityChillerMenu: (state, action) => {
      state.currentActivityChillerMenu = action.payload;
    },
  },
});

export const { setCurrentActiveMenu, setCurrentActivityChillerMenu } = appSlice.actions;

// 导出
export default appSlice.reducer;
