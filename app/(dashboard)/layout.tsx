import "../globals.css"
import { Inter } from "next/font/google"
import { ReduxProvider } from "@/redux/provider"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
