import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CheckoutState {
  firstName: string
  lastName: string
  creditCardNumber: string
  expiryDate: string
  cvv: string
}

const initialState: CheckoutState = {
  firstName: "",
  lastName: "",
  creditCardNumber: "",
  expiryDate: "",
  cvv: "",
}

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload
    },
    setCreditCardNumber: (state, action: PayloadAction<string>) => {
      state.creditCardNumber = action.payload
    },
    setExpiryDate: (state, action: PayloadAction<string>) => {
      state.expiryDate = action.payload
    },
    setCvv: (state, action: PayloadAction<string>) => {
      state.cvv = action.payload
    },
  },
})

export const {
  setFirstName,
  setLastName,
  setCreditCardNumber,
  setExpiryDate,
  setCvv,
} = checkoutSlice.actions

export default checkoutSlice.reducer
