// // src/redux/userSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface UserState {
//   profileImage: string | null;
// }

// const initialState: UserState = {
//   profileImage: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setProfileImage(state, action: PayloadAction<string | null>) {
//       state.profileImage = action.payload;
//     },
//   },
// });

// export const { setProfileImage } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  profileImage: string | null;
}

const initialState: UserState = {
  profileImage: localStorage.getItem('profileImage'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfileImage(state, action: PayloadAction<string | null>) {
      state.profileImage = action.payload;
      if (action.payload) {
        localStorage.setItem('profileImage', action.payload);
      } else {
        localStorage.removeItem('profileImage');
      }
    },
  },
});

export const { setProfileImage } = userSlice.actions;
export default userSlice.reducer;
