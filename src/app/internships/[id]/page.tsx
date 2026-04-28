import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Calendar, IndianRupee, Globe, ChevronLeft, Share2, Bookmark, Lightbulb, Briefcase } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  const interns = await prisma.internship.findMany({
    select: { id: true },
  });

  return interns.map((intern) => ({
    id: intern.id,
  }));
}

export default async function InternshipDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const intern = await prisma.internship.findUnique({
    where: { id },
  });

  if (!intern) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/internships" className="flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 font-semibold">
        <ChevronLeft className="w-4 h-4" /> Back to Internships
      </Link>

      <div className="glass p-8 md:p-12 rounded-[3rem] mb-12">
        <div className="flex flex-col md:row justify-between items-start gap-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center font-bold text-3xl text-primary">
              {intern.logoUrl || intern.company[0]}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{intern.title}</h1>
              <p className="text-xl text-muted font-medium">{intern.company} • {intern.location}</p>
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none glass p-4 rounded-2xl hover:bg-muted/5 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="flex-1 md:flex-none glass p-4 rounded-2xl hover:bg-muted/5 transition-all">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="flex-[3] md:flex-none bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
              Apply Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border mb-12">
          <div className="space-y-1">
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Stipend</span>
            <p className="font-bold flex items-center gap-2"><IndianRupee className="w-4 h-4 text-primary" /> {intern.stipend}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Duration</span>
            <p className="font-bold flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {intern.duration}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Type</span>
            <p className="font-bold flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> {intern.isRemote ? "Remote" : "On-site"}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-muted uppercase tracking-widest">Category</span>
            <p className="font-bold flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> {intern.category}</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-primary rounded-full" />
              About the Internship
            </h2>
            <p className="text-muted text-lg leading-relaxed whitespace-pre-wrap">{intern.description}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-accent rounded-full" />
              Who can apply?
            </h2>
            <div className="glass p-6 rounded-2xl bg-muted/5 border-dashed">
              <p className="text-muted leading-relaxed font-medium whitespace-pre-wrap">{intern.eligibility}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-secondary rounded-full" />
              Interview Tips
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-6 glass rounded-2xl">
                <Lightbulb className="w-6 h-6 text-secondary shrink-0" />
                <p className="text-muted leading-relaxed">Showcase your portfolio and any open-source contributions.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="text-center">
        <h3 className="font-bold mb-4">Share this internship</h3>
        <div className="flex justify-center gap-4">
          {["WhatsApp", "LinkedIn", "Twitter", "Email"].map(platform => (
            <button key={platform} className="px-6 py-2 glass rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all">
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
