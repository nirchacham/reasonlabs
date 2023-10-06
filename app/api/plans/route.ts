import { mockData } from "@/utils/mockData"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  return NextResponse.json({ data: mockData })
}
