import { configureStore } from "@reduxjs/toolkit"
import checkoutReducer from "./reducers/checkout.reducer"
import planReducer from "./reducers/plan.reducer"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const store = configureStore({
  reducer: { checkoutReducer, planReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
