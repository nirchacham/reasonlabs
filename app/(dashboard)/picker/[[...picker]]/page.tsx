"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import checked from "@/icons/checked.png"
import Image from "next/image"
import { Plan } from "@/interfaces/plan.interface"
import PlanComponent from "@/components/PlanComponent"
import { setPlan } from "@/redux/reducers/plan.reducer"
import { useDispatch } from "react-redux"
import Loader from "@/components/Loader"

const desc = [
  "Protection against ransomware viruses, malware and other threats",
  "Camera and Microphone anti-spy protection",
  "Risk free! 30-day money-back guarantee",
]

const PlanDescription = () => {
  return (
    <div className="flex justify-evenly border-b-2 border-gray-300 p-4">
      {desc.map((info, i) => {
        return (
          <div
            key={i + info}
            className="flex flex-col items-center w-1/3 text-center "
          >
            <Image className="w-6 h-6" src={checked} alt="checked" />
            <p className="mt-6">{info}</p>
          </div>
        )
      })}
    </div>
  )
}

const PlanButton: React.FC<{
  selectedPlanId: number | null
  handlePlanSubmission: () => void
}> = ({ selectedPlanId, handlePlanSubmission }) => {
  return (
    <Link href={"/checkout"}>
      <button
        className={`rounded-2xl bg-amber-500 text-white p-2 text-sm mb-6 ${
          selectedPlanId ? "" : "cursor-not-allowed"
        }`}
        onClick={handlePlanSubmission}
        disabled={!selectedPlanId}
      >
        {selectedPlanId ? "Review and checkout" : "Choose a plan first!"}
      </button>
    </Link>
  )
}

const PlanList: React.FC<{
  plans: Plan[]
  selectedPlanId: number | null
  handlePlanSelect: (id: number) => void
}> = ({ plans, selectedPlanId, handlePlanSelect }) => {
  return (
    <div className="plan-container w-full">
      {plans.map((plan) => (
        <PlanComponent
          key={plan.id}
          plan={plan}
          isSelected={selectedPlanId === plan.id}
          onPlanSelect={handlePlanSelect}
        />
      ))}
    </div>
  )
}

const PickerPage: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([])
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null) // Track the selected plan ID
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPlans = async () => {
      const result = await fetch("/api/plans")
      const data = await result.json()
      setPlans(data.data)
    }

    fetchPlans()
  }, [])

  const handlePlanSelect = (id: number) => {
    setSelectedPlanId(id)
  }

  //Seperateing the functions because maybe it could be an expensive save.
  const handlePlanSubmission = () => {
    const plan = plans.filter((plan) => plan.id === selectedPlanId)
    if (plan.length) {
      dispatch(setPlan(plan[0]))
    }
  }

  return (
    <>
      {plans.length ? (
        <div className="flex flex-col items-center overflow-hidden">
          <PlanDescription />
          <PlanList
            plans={plans}
            selectedPlanId={selectedPlanId}
            handlePlanSelect={handlePlanSelect}
          />
          <PlanButton
            selectedPlanId={selectedPlanId}
            handlePlanSubmission={handlePlanSubmission}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default PickerPage
