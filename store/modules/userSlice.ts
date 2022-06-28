import type { userSliceType } from '#types/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState: userSliceType = {
  userInfo: {
    id: '',
    userName: '',
    avatar: '',
  },
  tokenKey: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 添加用户信息
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    // 设置token
    setTokenKey: (state, action) => {
      state.tokenKey = action.payload;
    },
  },
});

export const { setUserInfo, setTokenKey } = userSlice.actions;

export default userSlice.reducer;
