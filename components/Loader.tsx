import React from "react"

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-16 w-16"></div>
    </div>
  )
}

export default Loader
