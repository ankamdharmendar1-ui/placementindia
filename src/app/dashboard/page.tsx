"use client";

import { useState } from "react";
import { User, Settings, Briefcase, Bookmark, FileText, Plus, Edit2, ExternalLink, CheckCircle2, Clock, XCircle } from "lucide-react";
import { createJob, createInternship } from "../actions";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("applications");

  const APPLICATIONS = [
    { id: 1, role: "Full Stack Developer", company: "Zomato", status: "Reviewing", date: "Applied on May 10" },
    { id: 2, role: "Frontend Intern", company: "Unacademy", status: "Interviewing", date: "Applied on May 8" },
    { id: 3, role: "Data Scientist", company: "Fractal Analytics", status: "Rejected", date: "Applied on May 5" },
    { id: 4, role: "Product Manager", company: "Paytm", status: "Accepted", date: "Applied on May 2" },
  ];

  const SAVED_ITEMS = [
    { id: 1, role: "Backend Engineer", company: "Swiggy", type: "Placement" },
    { id: 2, role: "UI/UX Design Intern", company: "Cred", type: "Internship" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted": return "bg-emerald-500/10 text-emerald-500";
      case "Rejected": return "bg-rose-500/10 text-rose-500";
      case "Interviewing": return "bg-accent/10 text-accent";
      default: return "bg-muted/10 text-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Accepted": return <CheckCircle2 className="w-4 h-4" />;
      case "Rejected": return <XCircle className="w-4 h-4" />;
      case "Interviewing": return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass p-8 rounded-[2.5rem] text-center">
            <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-primary/20 relative">
              <User className="w-16 h-16 text-primary" />
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg border-4 border-background">
                <Edit2 className="w-3 h-3" />
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-2">John Doe</h2>
            <p className="text-muted text-sm mb-6">Final Year B.Tech • CSE</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["React", "Node.js", "Python", "SQL"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-muted/10 rounded-full text-[10px] font-bold uppercase tracking-widest">{skill}</span>
              ))}
            </div>
            <button className="w-full glass py-3 rounded-xl text-sm font-bold hover:bg-muted/5 transition-all flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" /> View Resume
            </button>
          </div>

          <div className="glass p-4 rounded-2xl">
            <div className="space-y-1">
              {[
                { id: "applications", name: "Applications", icon: <Briefcase className="w-4 h-4" /> },
                { id: "saved", name: "Saved Items", icon: <Bookmark className="w-4 h-4" /> },
                { id: "post", name: "Post Opportunity", icon: <Plus className="w-4 h-4" /> },
                { id: "blog", name: "Write Blog", icon: <Edit2 className="w-4 h-4" /> },
                { id: "settings", name: "Settings", icon: <Settings className="w-4 h-4" /> },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab.id ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-muted/10"
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">
              {activeTab === "applications" ? "Application Status" : activeTab === "saved" ? "Saved Opportunities" : "Settings"}
            </h1>
            {activeTab === "applications" && (
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all text-sm flex items-center gap-2 shadow-lg shadow-primary/20">
                <Plus className="w-4 h-4" /> New Application
              </button>
            )}
          </div>

          <div className="space-y-4">
            {activeTab === "applications" && APPLICATIONS.map(app => (
              <div key={app.id} className="glass p-6 rounded-3xl flex flex-col md:row items-start md:items-center justify-between gap-6 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-muted/10 rounded-2xl flex items-center justify-center font-bold text-xl text-primary">
                    {app.company[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{app.role}</h3>
                    <p className="text-muted text-sm">{app.company} • {app.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <span className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 ${getStatusColor(app.status)}`}>
                    {getStatusIcon(app.status)}
                    {app.status}
                  </span>
                  <button className="p-3 rounded-xl glass hover:bg-muted/10 transition-all ml-auto md:ml-0">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {activeTab === "saved" && SAVED_ITEMS.map(item => (
              <div key={item.id} className="glass p-6 rounded-3xl flex items-center justify-between hover:border-primary/50 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-muted/10 rounded-2xl flex items-center justify-center font-bold text-xl text-primary">
                    {item.company[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.role}</h3>
                    <p className="text-muted text-sm">{item.company} • {item.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="bg-primary text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-primary/90">Apply Now</button>
                  <button className="p-3 rounded-xl glass hover:bg-rose-500 hover:text-white transition-all text-rose-500">
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            ))}

            {activeTab === "post" && (
              <div className="glass p-8 md:p-12 rounded-[3rem]">
                <h3 className="text-2xl font-bold mb-8">Post New Opportunity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Job Form */}
                  <div className="space-y-6">
                    <h4 className="font-bold text-primary flex items-center gap-2">
                      <Briefcase className="w-5 h-5" /> Full-time Placement
                    </h4>
                    <form action={createJob} className="space-y-4">
                      <input name="title" placeholder="Job Title" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required />
                      <input name="company" placeholder="Company Name" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required />
                      <input name="location" placeholder="Location" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required />
                      <input name="salary" placeholder="Salary Range (e.g. ₹10L - ₹15L)" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" />
                      <select name="category" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary">
                        <option>Software</option>
                        <option>Data</option>
                        <option>Product</option>
                        <option>Design</option>
                      </select>
                      <textarea name="description" placeholder="Job Description" rows={4} className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required></textarea>
                      <textarea name="eligibility" placeholder="Eligibility Criteria" rows={2} className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required></textarea>
                      <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">Post Job</button>
                    </form>
                  </div>

                  {/* Internship Form */}
                  <div className="space-y-6">
                    <h4 className="font-bold text-accent flex items-center gap-2">
                      <Plus className="w-5 h-5" /> Internship
                    </h4>
                    <form action={createInternship} className="space-y-4">
                      <input name="title" placeholder="Internship Title" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required />
                      <input name="company" placeholder="Company Name" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required />
                      <input name="location" placeholder="Location" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required />
                      <input name="stipend" placeholder="Stipend (e.g. ₹20k/mo)" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" />
                      <input name="duration" placeholder="Duration (e.g. 6 Months)" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" />
                      <select name="category" className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary">
                        <option>Tech</option>
                        <option>Marketing</option>
                        <option>Data</option>
                        <option>Design</option>
                      </select>
                      <div className="flex items-center gap-2 px-2">
                        <input type="checkbox" name="isRemote" id="isRemote" className="w-4 h-4 accent-primary" />
                        <label htmlFor="isRemote" className="text-sm font-medium">Remote Internship</label>
                      </div>
                      <textarea name="description" placeholder="Internship Description" rows={4} className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required></textarea>
                      <textarea name="eligibility" placeholder="Eligibility" rows={2} className="w-full glass px-4 py-3 rounded-xl outline-none focus:border-primary" required></textarea>
                      <button type="submit" className="w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-accent/90 transition-all">Post Internship</button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "blog" && (
              <div className="glass p-12 rounded-[3rem]">
                <h3 className="text-2xl font-bold mb-8">Create New Blog Post</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-bold text-muted mb-2 block">Blog Title</label>
                    <input type="text" placeholder="Enter a catchy title..." className="w-full bg-muted/5 border border-border rounded-xl px-6 py-4 outline-none focus:border-primary transition-all font-bold text-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-muted mb-2 block">Content</label>
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/10 border-b border-border p-3 flex gap-4">
                        <button className="font-bold px-2 hover:text-primary transition-colors">B</button>
                        <button className="italic px-2 hover:text-primary transition-colors">I</button>
                        <button className="underline px-2 hover:text-primary transition-colors">U</button>
                        <div className="w-[1px] h-4 bg-border self-center" />
                        <button className="px-2 hover:text-primary transition-colors">Link</button>
                        <button className="px-2 hover:text-primary transition-colors">Image</button>
                      </div>
                      <textarea rows={12} placeholder="Write your thoughts here..." className="w-full bg-transparent p-6 outline-none resize-none leading-relaxed"></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end gap-4 pt-4">
                    <button className="glass px-8 py-3 rounded-xl font-bold hover:bg-muted/5">Save Draft</button>
                    <button className="bg-primary text-white px-10 py-3 rounded-xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20">Publish Post</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="glass p-12 rounded-[3rem] text-center">
                <Settings className="w-12 h-12 text-muted mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                <p className="text-muted mb-8 max-w-sm mx-auto">Update your personal information, privacy settings, and notification preferences.</p>
                <div className="flex flex-col gap-4 max-w-xs mx-auto">
                  <button className="glass py-4 rounded-2xl font-bold hover:bg-muted/5">Update Profile</button>
                  <button className="glass py-4 rounded-2xl font-bold hover:bg-muted/5">Notification Preferences</button>
                  <button className="text-rose-500 font-bold hover:bg-rose-500/10 py-4 rounded-2xl transition-all">Sign Out</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
