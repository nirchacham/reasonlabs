import Link from "next/link"

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-3xl font-bold mb-4">Welcome to Reasonlabs</h1>
      <p className="text-lg text-center mb-8">
        Explore our plans and protect your digital world.
      </p>
      <Link href="/picker">
        <button className="rounded-2xl bg-amber-500 text-white p-3 text-lg hover:bg-amber-600">
          Start exploring plans
        </button>
      </Link>
    </div>
  )
}

export default HomePage
