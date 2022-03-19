import { createSlice } from "@reduxjs/toolkit";

const defaultSliceState = {
  openMenu: false,
  pageExitingFrom: null,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: defaultSliceState,
  reducers: {
    toggleOpenMenu(state) {
      state.openMenu = !state.openMenu;
    },
    setOpenMenuFalse(state) {
      state.openMenu = false;
    },
    setPageExitingFrom(state, action) {
      state.pageExitingFrom = action.payload.exitingPage;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
