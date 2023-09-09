import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: SetupState;
};

type SetupState = {
  firstName: string;
  lastName: string;
  dob: string | null;
  gender: string;
  city: string;
  hometown: string;
  dp: string;
  page: number;
};

const initialState = {
  value: {
    firstName: '',
    lastName: '',
    dob: null,
    gender: '',
    city: '',
    hometown: '',
    dp: '',
    page: 1,
  } as SetupState,
} as InitialState;

export const profileSetupSlice = createSlice({
  name: 'profileSetup',
  initialState,
  reducers: {
    firstNameAdded: (state, action: PayloadAction<string>) => {
      state.value.firstName = action.payload;
    },
    lastNameAdded: (state, action: PayloadAction<string>) => {
      state.value.lastName = action.payload;
    },
    dobAdded: (state, action: PayloadAction<string | null>) => {
      state.value.dob = action.payload;
    },
    genderAdded: (state, action: PayloadAction<string>) => {
      state.value.gender = action.payload;
    },
    cityAdded: (state, action: PayloadAction<string>) => {
      state.value.city = action.payload;
    },
    hometownAdded: (state, action: PayloadAction<string>) => {
      state.value.hometown = action.payload;
    },
    dpAdded: (state, action: PayloadAction<string>) => {
      state.value.dp = action.payload;
    },
    pageChanged: (state, action: PayloadAction<number>) => {
      state.value.page = action.payload;
    },
  },
});

// export const {} = profileSetup.actions;
// export default profileSetup.reducer;

export const profileSetupActions = profileSetupSlice.actions;

export default profileSetupSlice;
