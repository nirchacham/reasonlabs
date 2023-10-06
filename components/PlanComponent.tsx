import { Plan } from "@/interfaces/plan.interface"

interface PlanProps {
  plan: Plan
  isSelected: boolean
  onPlanSelect: (id: number) => void // Callback to handle plan selection
}

const PlanComponent: React.FC<PlanProps> = ({
  plan,
  isSelected,
  onPlanSelect,
}) => {
  const calculatePricePerMonth = (plan: Plan): number => {
    const { intervalValue, intervalType, price } = plan

    const priceNumeric = parseFloat(price.replace("$", ""))

    // Calculate the price per month based on the interval type
    if (intervalType === "year") {
      // For year - divide the annual price by 12
      return priceNumeric / 12
    } else if (intervalType === "years") {
      // For multi-year plans, divide the total price by the number of months
      return priceNumeric / (intervalValue * 12)
    } else {
      // For monthly plans, the price is already per month
      return priceNumeric / intervalValue
    }
  }

  return (
    <div
      className={`plan bg-slate-200 flex p-5 m-5 rounded-3xl hover:cursor-pointer ${
        isSelected ? "border border-blue-400" : ""
      }`}
      onClick={() => onPlanSelect(plan.id)}
      key={plan.id}
    >
      <input
        className="mr-2.5"
        type="radio"
        name={`plan-${plan.id}`}
        value={plan.id}
        checked={isSelected}
        onChange={() => onPlanSelect(plan.id)}
      />
      <div className="flex flex-col">
        <p className="font-semibold">{plan.title}</p>
        <p>{`Billed as one payment of ${plan.price} recurring every ${plan.intervalValue} ${plan.intervalType}`}</p>
      </div>
      <div className="flex ml-auto">
        <p className="font-semibold text-2xl self-center">{`$${calculatePricePerMonth(
          plan
        ).toFixed(2)}`}</p>
        <p className="text-sm self-center">/month</p>
      </div>
    </div>
  )
}

export default PlanComponent
