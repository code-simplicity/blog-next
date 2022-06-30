/*
 * @Author: bugdr
 * @Date: 2022-06-28 16:20:06
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 07:20:24
 * @FilePath: \blog-next\store\modules\userSlice.ts
 * @Description:
 */
import type { userSliceType } from '#types/store';
import { checkToken, logout } from '@api/user';
import { showNotification } from '@mantine/notifications';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ResponseCode } from '@utils/enums/ResponseCode';

// 触发获取用户登录的action
export const checkUserInfoByToken: any = createAsyncThunk('/user/check-token', async () => {
  const result = await checkToken();
  if (result.code === ResponseCode.SUCCESS) {
    // 登录成功
    showNotification({
      title: '登录成功',
      message: `${result.message}`,
    });
    return result.result;
  } else {
    // 登录失败
    showNotification({
      title: '用户未登录',
      message: `${result.message}`,
    });
    return result.result;
  }
});

// 退出登录
export const doLogout: any = createAsyncThunk('/user/logout', async () => {
  const result = await logout();
  if (result.code === ResponseCode.SUCCESS) {
    showNotification({
      title: '退出登录成功',
      message: `${result.message}🤥`,
    });
  } else {
    showNotification({
      message: `${result.message}🤥`,
    });
  }
});

const initialState: userSliceType = {
  userInfo: null,
  tokenKey: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 设置token
    setTokenKey: (state, action) => {
      state.tokenKey = action.payload;
    },
    clearTokenKey: (state) => {
      state.tokenKey = '';
    },
  },
  extraReducers: (builder) => {
    // 异步触发获取用户信息
    builder.addCase(checkUserInfoByToken.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });

    // 退出登录
    builder.addCase(doLogout.fulfilled, (state) => {
      // 将用户信息清除，清除token
      state.userInfo = null;
      state.tokenKey = null;
    });
  },
});

export const { setTokenKey } = userSlice.actions;

export default userSlice.reducer;
