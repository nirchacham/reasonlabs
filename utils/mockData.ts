import { Plan } from "@/interfaces/plan.interface"

export const mockData: Plan[] = [
  {
    id: 1,
    intervalValue: 6,
    intervalType: "months",
    price: "$125.40",
    title: "6-Month Subscription",
    description: "Get started with our 6-month plan.",
  },
  {
    id: 2,
    intervalValue: 1,
    intervalType: "year",
    price: "$178.80",
    title: "1-Year Subscription",
    description: "Save with our annual subscription.",
  },
  {
    id: 3,
    intervalValue: 2,
    intervalType: "years",
    price: "$285.60",
    title: "2-Year Subscription",
    description: "Enjoy the best value with our 2-year plan.",
  },
]
