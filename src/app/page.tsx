"use client";

import Link from "next/link";
import { Search, ArrowRight, Star, ShieldCheck, Zap, Briefcase, GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import AdUnit from "@/components/ads/AdUnit";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative px-6 pt-12 md:pt-24 max-w-7xl mx-auto w-full text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-gradient -z-10" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">Over 500+ new opportunities this week</span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight"
        >
          Your Career Hub <br />
          At <span className="text-primary italic">PlacementIndia.dev</span>
        </motion.h1>
        
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          The all-in-one platform for placements, internships, and career growth. Connect with top companies and build your future today.
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto glass p-2 rounded-2xl flex flex-col md:row items-center gap-2 shadow-2xl">
          <div className="flex-1 flex items-center gap-3 px-4 w-full">
            <Search className="w-5 h-5 text-muted" />
            <input 
              type="text" 
              placeholder="Search roles, companies, or skills..." 
              className="bg-transparent border-none outline-none w-full py-4 text-sm font-medium"
            />
          </div>
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all w-full md:w-auto shadow-lg shadow-primary/20">
            Search Opportunities
          </button>
        </div>

        {/* Quick Categories - Mobile Primary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto px-2">
          {[
            { name: "Placements", href: "/placements", icon: <Briefcase className="w-6 h-6 text-blue-500" />, count: "250+", color: "bg-blue-500/10" },
            { name: "Internships", href: "/internships", icon: <GraduationCap className="w-6 h-6 text-emerald-500" />, count: "180+", color: "bg-emerald-500/10" },
            { name: "WFH Jobs", href: "/wfh", icon: <Zap className="w-6 h-6 text-amber-500" />, count: "120+", color: "bg-amber-500/10" },
            { name: "Blog", href: "/blog", icon: <BookOpen className="w-6 h-6 text-rose-500" />, count: "NEW", color: "bg-rose-500/10" },
          ].map((cat) => (
            <Link 
              key={cat.name} 
              href={cat.href}
              className="glass p-6 rounded-3xl flex flex-col items-center gap-3 hover:scale-105 transition-all border border-muted/5 group"
            >
              <div className={`w-12 h-12 ${cat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold">{cat.name}</span>
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{cat.count}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Top Ad Unit */}
        <AdUnit slot="1234567890" />

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted font-medium">
          <div className="flex items-center gap-2"><Star className="w-4 h-4 text-secondary" /> Top-rated roles</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Verified companies</div>
          <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-accent" /> Fast-track hiring</div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Opportunities</h2>
            <p className="text-muted">Handpicked roles from world-class organizations.</p>
          </div>
          <Link href="/placements" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Software Engineer", company: "Google", type: "Full-time", location: "Bangalore", salary: "₹24L - ₹45L", color: "bg-blue-500/10 text-blue-500" },
            { title: "Product Designer", company: "Airbnb", type: "Remote", location: "Global", salary: "$80k - $120k", color: "bg-rose-500/10 text-rose-500" },
            { title: "Data Analyst", company: "Microsoft", type: "Internship", location: "Hyderabad", stipend: "₹60k/mo", color: "bg-emerald-500/10 text-emerald-500" },
          ].map((job, i) => (
            <div key={i} className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className={`w-12 h-12 ${job.color} rounded-2xl flex items-center justify-center mb-6 font-bold text-xl`}>
                {job.company[0]}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
              <p className="text-muted mb-6">{job.company} • {job.location}</p>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{job.salary || job.stipend}</span>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-muted/10 rounded-full">{job.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Proof */}
      <section className="bg-primary/5 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10k+</div>
            <div className="text-muted text-sm uppercase tracking-wider font-semibold">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-muted text-sm uppercase tracking-wider font-semibold">Companies</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">2.5k+</div>
            <div className="text-muted text-sm uppercase tracking-wider font-semibold">Placements</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">₹18L</div>
            <div className="text-muted text-sm uppercase tracking-wider font-semibold">Avg Package</div>
          </div>
        </div>
      </section>

      {/* Middle Ad Unit */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <AdUnit slot="0987654321" />
      </div>

      {/* Blog Preview */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted max-w-xl mx-auto">Expert advice on resumes, interviews, and career growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Mastering the Technical Interview in 2024", author: "Sarah Jenkins", date: "May 12", category: "Career Advice" },
            { title: "Top 10 Remote Internship Opportunities for Students", author: "David Chen", date: "May 10", category: "Internships" },
          ].map((post, i) => (
            <Link href="/blog" key={i} className="group flex flex-col md:row gap-8 glass p-6 rounded-3xl hover:border-primary/50 transition-all">
              <div className="w-full md:w-48 h-48 bg-muted/20 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary/40 font-bold">
                  Blog Post
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{post.category}</span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <span>{post.author}</span>
                  <span className="w-1 h-1 bg-muted rounded-full" />
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 w-full">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] -z-10" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to start your journey?</h2>
          <p className="text-lg text-muted mb-12 max-w-xl mx-auto">
            Join thousands of students who have found their dream roles through PlacementIndia.dev. No hidden fees, just opportunities.
          </p>
          <div className="flex flex-col md:row justify-center gap-4">
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Get Started for Free
            </button>
            <button className="glass px-10 py-5 rounded-2xl font-bold hover:bg-muted/5 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
