"use client"

import React from "react"
import Link from "next/link"
import { RootState, useAppSelector } from "@/redux/store"

const CustomerInfo: React.FC = () => {
  const firstName = useAppSelector(
    (state: RootState) => state.checkoutReducer.firstName
  )
  const lastName = useAppSelector(
    (state: RootState) => state.checkoutReducer.lastName
  )

  return (
    <div>
      <p>
        Thank you for your purchase, {firstName} {lastName}!
      </p>
    </div>
  )
}

const PaymentInfo: React.FC = () => {
  const creditCardNumber = useAppSelector(
    (state: RootState) => state.checkoutReducer.creditCardNumber
  )
  const expiryDate = useAppSelector(
    (state: RootState) => state.checkoutReducer.expiryDate
  )
  const cvv = useAppSelector((state: RootState) => state.checkoutReducer.cvv)

  return (
    <div>
      <div className="mb-4">
        <strong>Credit Card:</strong> {creditCardNumber}
      </div>
      <div className="mb-4">
        <strong>Expiry Date:</strong> {expiryDate}
      </div>
      <div className="mb-4">
        <strong>CVV:</strong> {cvv}
      </div>
    </div>
  )
}

const PlanDetails: React.FC = () => {
  const plan = useAppSelector((state: RootState) => state.planReducer.plan)

  return (
    <div>
      <div className="mb-4">
        <strong>Selected Plan:</strong> {plan?.title}
      </div>
      <div className="mb-4">
        <strong>Price:</strong> {plan?.price}
      </div>
    </div>
  )
}

const ConfirmationPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-evenly border-b-2 border-gray-300"></div>
      <div className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-screen-md">
        <h1 className="text-3xl font-semibold mb-4">Confirmation</h1>
        <CustomerInfo />
        <PaymentInfo />
        <PlanDetails />
        <Link href="/">
          <button className="rounded-2xl bg-amber-500 text-white p-2 text-sm mt-4">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ConfirmationPage
