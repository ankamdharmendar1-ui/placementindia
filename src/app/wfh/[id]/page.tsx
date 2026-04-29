import { prisma } from "@/lib/prisma";
import AdUnit from "@/components/ads/AdUnit";
import { notFound } from "next/navigation";
import { MapPin, Briefcase, IndianRupee, Clock, ChevronLeft, Lightbulb, Zap } from "lucide-react";
import Link from "next/link";
import JobActions from "@/components/layout/JobActions";
import SocialShare from "@/components/layout/SocialShare";

export async function generateStaticParams() {
  const jobs = await prisma.wfhJob.findMany({
    select: { id: true },
  });

  return jobs.map((job) => ({
    id: job.id,
  }));
}

export default async function WfhJobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await prisma.wfhJob.findUnique({
    where: { id },
  });

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/wfh" className="flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 font-semibold">
        <ChevronLeft className="w-4 h-4" /> Back to WFH Jobs
      </Link>

      <div className="glass p-8 md:p-12 rounded-[3rem] mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center font-bold text-3xl text-primary">
              {job.logoUrl || job.company[0]}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{job.title}</h1>
              <p className="text-xl text-muted font-medium">{job.company} • <span className="text-primary">Remote</span></p>
            </div>
          </div>
          <JobActions title={job.title} company={job.company} applyLink={job.applyLink} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border mb-12">
          <div className="space-y-1">
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Salary Range</span>
            <p className="font-bold flex items-center gap-2"><IndianRupee className="w-4 h-4 text-primary" /> {job.salary}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Job Type</span>
            <p className="font-bold flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Remote Full-time</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Location</span>
            <p className="font-bold flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Remote</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Posted On</span>
            <p className="font-bold flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {new Date(job.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <AdUnit slot="1122334455" />

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-primary rounded-full" />
              Role Description
            </h2>
            <p className="text-muted text-lg leading-relaxed whitespace-pre-wrap">{job.description}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-accent rounded-full" />
              Eligibility Criteria
            </h2>
            <div className="glass p-6 rounded-2xl bg-muted/5 border-dashed">
              <p className="text-muted leading-relaxed font-medium whitespace-pre-wrap">{job.eligibility}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-secondary rounded-full" />
              Preparation Tips
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-6 glass rounded-2xl">
                <Lightbulb className="w-6 h-6 text-secondary shrink-0" />
                <p className="text-muted leading-relaxed">Focus on remote collaboration skills and communication. Be prepared to show your portfolio or previous remote work experience.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="text-center">
        <h3 className="font-bold mb-4">Share this opportunity</h3>
        <SocialShare title={job.title} company={job.company} />
      </div>
    </div>
  );
}
