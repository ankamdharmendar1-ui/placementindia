import { prisma } from "@/lib/prisma";
import PlacementList from "@/components/placements/PlacementList";

export default async function PlacementsPage() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Placement Opportunities</h1>
        <p className="text-muted">Find the best full-time roles from top companies across India.</p>
      </div>

      <PlacementList initialJobs={jobs} />
    </div>
  );
}
