import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  id: number;
  username: string;
  description: string;
  photo: string;
}

export interface ProfilePayload {
  username: string;
  description: string;
  photo: string;
}

const initialState: ProfileState[] = [
  {
    id: 1,
    username: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo: "https://avatar.iran.liara.run/public/21",
  },
  {
    id: 2,
    username: "Jane Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo: "https://avatar.iran.liara.run/public/22",
  },
];

export const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<ProfilePayload>) => {
      state.push({
        id: state.length + 1,
        ...action.payload,
      });
    },
    removeProfile: (state, action: PayloadAction<number>) => {
      return state.filter((profile) => profile.id !== action.payload);
    },
    updateProfile: (state, action: PayloadAction<ProfileState>) => {
      return state.map((profile) => {
        if (profile.id === action.payload.id) {
          return {
            ...profile,
            ...action.payload,
          };
        }

        return profile;
      });
    },
  },
});

export const { addProfile, removeProfile, updateProfile } =
  profileSlice.actions;
export default profileSlice.reducer;
