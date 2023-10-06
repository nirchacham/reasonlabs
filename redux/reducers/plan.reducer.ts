import { Plan } from "@/interfaces/plan.interface"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PlanState {
  plan: Plan | null
}

const initialState: PlanState = {
  plan: null,
}

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan: (state, action: PayloadAction<Plan>) => {
      state.plan = action.payload
    },
  },
})

export const { setPlan } = planSlice.actions

export default planSlice.reducer
