import type { userSliceType } from '#types/store';
import { checkToken } from '@api/user';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ResponseCode } from '@utils/enums/ResponseCode';

// 触发获取用户登录的action
export const checkTokenAction = createAsyncThunk('/user/check-token', async () => {
  const result = await checkToken();
  if (result.code === ResponseCode.SUCCESS) {
    return result.result;
  }
});

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
    // setUserInfo: (state, action) => {
    //   state.userInfo = action.payload;
    // },
    // 设置token
    setTokenKey: (state, action) => {
      state.tokenKey = action.payload;
    },
    // 检查用户是否登录
    // checkUserInfoByToken: () => {
    //   const { code, result } = checkToken();
    //   if (code === ResponseCode.SUCCESS) {
    //     setUserInfo(result);
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(checkTokenAction.fulfilled, (state, action) => {
      console.log('action :>> ', action);
      state.userInfo = action.payload;
    });
  },
});

export const { setTokenKey } = userSlice.actions;

export default userSlice.reducer;
