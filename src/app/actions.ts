"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createJob(formData: FormData) {
  const title = formData.get("title") as string;
  const company = formData.get("company") as string;
  const location = formData.get("location") as string;
  const salary = formData.get("salary") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const eligibility = formData.get("eligibility") as string;

  await prisma.job.create({
    data: {
      title,
      company,
      location,
      salary,
      category,
      description,
      eligibility,
      type: "Full-time",
    },
  });

  revalidatePath("/placements");
  redirect("/placements");
}

export async function createInternship(formData: FormData) {
  const title = formData.get("title") as string;
  const company = formData.get("company") as string;
  const location = formData.get("location") as string;
  const stipend = formData.get("stipend") as string;
  const duration = formData.get("duration") as string;
  const category = formData.get("category") as string;
  const isRemote = formData.get("isRemote") === "on";
  const description = formData.get("description") as string;
  const eligibility = formData.get("eligibility") as string;

  await prisma.internship.create({
    data: {
      title,
      company,
      location,
      stipend,
      duration,
      category,
      isRemote,
      description,
      eligibility,
    },
  });

  revalidatePath("/internships");
  redirect("/internships");
}
