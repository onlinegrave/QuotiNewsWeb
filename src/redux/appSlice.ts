import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface AppState {
  showTopAppBar: boolean
}

// Define the initial state using that type
const initialState: AppState = {
  showTopAppBar: true,
}

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showTopAppBar: (state) => {
      state.showTopAppBar = true;
    },
    hideTopAppBar: (state) => {
      state.showTopAppBar = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setShowTopAppBar: (state, action: PayloadAction<boolean>) => {
      state.showTopAppBar = action.payload
    },
  },
})

export const { showTopAppBar, hideTopAppBar, setShowTopAppBar } = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectShowTopAppBar = (state: RootState) => state.app.showTopAppBar

export default appSlice.reducer
