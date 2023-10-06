"use client"
import { useState } from "react"
import Link from "next/link"
import {
  setFirstName,
  setLastName,
  setCreditCardNumber,
  setExpiryDate,
  setCvv,
} from "@/redux/reducers/checkout.reducer" // Import your actions
import { useDispatch } from "react-redux"

type FormData = {
  firstName: string
  lastName: string
  creditCardNumber: string
  expiryDate: string
  cvv: string
}

const FormFields: React.FC<{
  formData: FormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ formData, handleInputChange }) => {
  const fields: Record<keyof FormData, string> = {
    firstName: "First Name",
    lastName: "Last Name",
    creditCardNumber: "Credit card number",
    expiryDate: "Expiry Date",
    cvv: "CVV",
  }

  return (
    <div className="mb-4">
      {Object.keys(fields).map((fieldName) => {
        const fieldLabel = fields[fieldName as keyof FormData]
        return (
          <div key={fieldName}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={fieldName}
            >
              {fieldLabel}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id={fieldName}
              name={fieldName}
              value={formData[fieldName as keyof FormData]}
              onChange={handleInputChange}
              required
            />
          </div>
        )
      })}
    </div>
  )
}

const SubmitButton: React.FC<{
  isFormValid: boolean
  handleSubmit: (e: React.MouseEvent) => void
}> = ({ isFormValid, handleSubmit }) => {
  return (
    <div className="flex items-center justify-center">
      <Link href={"/confirmation"}>
        <button
          onClick={handleSubmit}
          className={`rounded-2xl bg-amber-500 text-white p-2 text-sm mb-6 ${
            isFormValid ? "" : "cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          {"Go to confirmation page"}
        </button>
      </Link>
    </div>
  )
}

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    creditCardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const dispatch = useDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const isValidCreditCard = (
    creditCardNumber: string,
    expiryDate: string,
    cvv: string
  ) => {
    const dateRegex = /^[0-9\/.]*$/
    const numbersRegex = /^[0-9]+$/

    return (
      numbersRegex.test(creditCardNumber) &&
      numbersRegex.test(cvv) &&
      dateRegex.test(expiryDate)
    )
  }

  const handleSubmit = (e: React.MouseEvent) => {
    if (
      isValidCreditCard(
        formData.creditCardNumber,
        formData.expiryDate,
        formData.cvv
      )
    ) {
      dispatch(setFirstName(formData.firstName))
      dispatch(setLastName(formData.lastName))
      dispatch(setCreditCardNumber(formData.creditCardNumber))
      dispatch(setExpiryDate(formData.expiryDate))
      dispatch(setCvv(formData.cvv))
    } else {
      alert("Please enter a valid card number & Expiry date (MM/YY)")
      e.preventDefault()
    }
  }

  // Check if all fields are filled
  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.creditCardNumber.trim() !== "" &&
    formData.expiryDate.trim() !== "" &&
    formData.cvv.trim() !== ""

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-evenly border-b-2 border-gray-300"></div>
      <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-screen-md">
        <FormFields formData={formData} handleInputChange={handleInputChange} />
        <SubmitButton isFormValid={isFormValid} handleSubmit={handleSubmit} />
      </form>
    </div>
  )
}

export default CheckoutPage
