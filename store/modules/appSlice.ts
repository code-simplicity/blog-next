import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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

const { setCurrentActiveMenu } = appSlice.actions;

// 导出
export default appSlice.reducer;
