import { prisma } from "@/lib/prisma";
import WfhList from "@/components/wfh/WfhList";

export default async function WfhPage() {
  const jobs = await prisma.wfhJob.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Work From Home Jobs</h1>
        <p className="text-muted">Explore high-paying remote roles and work from anywhere in the world.</p>
      </div>

      <WfhList initialJobs={jobs} />
    </div>
  );
}
