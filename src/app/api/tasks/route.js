import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {

  const task = await prisma.task.findMany()

  return NextResponse.json(task)
}

export async function POST(request) {
  const {title, name, email, description} = await request.json()
  const newTask = await prisma.task.create({
    data : {
      title: title,
      name: name,
      email: email,
      description: description,
    }
  })
  return NextResponse.json(newTask)
}