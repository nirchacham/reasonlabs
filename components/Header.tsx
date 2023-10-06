import reasonlabs from "@/icons/Reasonlabs.png"
import Image from "next/image"

const Header = () => {
  return (
    <div className="flex p-7">
      <Image alt="header" src={reasonlabs} />
      <p className="font-extrabold text-cyan-950 text-3xl self-center ml-56">
        Upgrade now and receive total endpoint protection
      </p>
    </div>
  )
}

export default Header
