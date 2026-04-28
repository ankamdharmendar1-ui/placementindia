"use client";

import { useState } from "react";
import { Search, Filter, MapPin, Calendar, IndianRupee, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Internship } from "@/lib/types";

export default function InternshipList({ initialInternships }: { initialInternships: Internship[] }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tech", "Data", "Design", "Marketing", "Business"];

  const filteredInternships = initialInternships.filter(intern => 
    (selectedCategory === "All" || intern.category === selectedCategory) &&
    (intern.title.toLowerCase().includes(search.toLowerCase()) || intern.company.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
      {/* Sidebar Filters */}
      <div className="lg:col-span-1 space-y-8">
        <div className="glass p-6 rounded-2xl">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filters
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted mb-3 block">Category</label>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-all ${
                      selectedCategory === cat ? "bg-primary text-white font-bold" : "hover:bg-muted/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted mb-3 block">Location</label>
              <select className="w-full bg-transparent border border-border rounded-xl px-4 py-2 text-sm outline-none focus:border-primary transition-all">
                <option>All Locations</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Remote</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className="lg:col-span-3 space-y-6">
        <div className="glass p-2 rounded-2xl flex items-center gap-3 px-6 shadow-sm mb-8">
          <Search className="w-5 h-5 text-muted" />
          <input 
            type="text" 
            placeholder="Search by role or company..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none outline-none w-full py-4 text-sm font-medium"
          />
        </div>

        <div className="space-y-4">
          {filteredInternships.length > 0 ? (
            filteredInternships.map(intern => (
              <div key={intern.id} className="glass p-6 rounded-3xl group hover:border-primary/50 transition-all cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <Link href={`/internships/${intern.id}`} className="flex items-center gap-6 flex-1">
                  <div className="w-16 h-16 bg-muted/10 rounded-2xl flex items-center justify-center font-bold text-2xl text-primary">
                    {intern.logoUrl || intern.company[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{intern.title}</h3>
                    <p className="font-medium text-muted mb-2">{intern.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {intern.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {intern.duration}</span>
                      <span className="flex items-center gap-1"><IndianRupee className="w-3 h-3" /> {intern.stipend}</span>
                      <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {intern.isRemote ? "Remote" : "On-site"}</span>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <button className="flex-1 md:flex-none glass px-6 py-3 rounded-xl font-bold hover:bg-muted/5 transition-all text-sm">
                    Save
                  </button>
                  <Link href={`/internships/${intern.id}`} className="flex-1 md:flex-none">
                    <button className="w-full bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all text-sm flex items-center justify-center gap-2">
                      View Details <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-24 glass rounded-3xl">
              <p className="text-muted font-medium">No internships found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
