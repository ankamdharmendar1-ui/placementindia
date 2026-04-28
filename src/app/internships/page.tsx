import { prisma } from "@/lib/prisma";
import InternshipList from "@/components/internships/InternshipList";

export default async function InternshipsPage() {
  const internships = await prisma.internship.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Internship Programs</h1>
        <p className="text-muted">Gain hands-on experience with industry-leading internship programs.</p>
      </div>

      <InternshipList initialInternships={internships} />
    </div>
  );
}
