import { getRandomInt } from "@/lib/utils";
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
  {
    id: 3,
    username: "Elon Musk",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo: "https://avatar.iran.liara.run/public/23",
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
        photo: `https://avatar.iran.liara.run/public/${getRandomInt(1, 30)}`,
      });
    },
    removeProfile: (state, action: PayloadAction<number>) => {
      return state.filter((profile) => profile.id !== action.payload);
    },
    updateProfile: (
      state,
      action: PayloadAction<ProfilePayload & { id: number }>
    ) => {
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
