"use server";

import { PrismaClient } from "./generated/prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function addApplication(formData: FormData) {
  const company = formData.get("company") as string;
  const position = formData.get("position") as string;

  await prisma.application.create({
    data: {
      company,
      position,
      status: "APPLIED",
    },
  });

  revalidatePath("/");
}