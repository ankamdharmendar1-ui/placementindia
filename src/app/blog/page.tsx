import Link from "next/link";
import { BookOpen, Clock, User, ArrowRight, ThumbsUp, MessageSquare } from "lucide-react";

const POSTS = [
  { id: 1, title: "How to Crack the Google Technical Interview", excerpt: "A comprehensive guide on data structures, algorithms, and system design patterns you need to master.", author: "Sarah Jenkins", date: "May 12, 2024", category: "Interview Prep", readTime: "8 min", likes: 124, comments: 18 },
  { id: 2, title: "The Future of Remote Work in Tech", excerpt: "Is remote work here to stay? We analyze the latest trends from Silicon Valley and Indian startups.", author: "David Chen", date: "May 10, 2024", category: "Trends", readTime: "5 min", likes: 89, comments: 12 },
  { id: 3, title: "Building Your First Portfolio Website", excerpt: "Learn how to showcase your projects effectively and attract top recruiters with a stunning portfolio.", author: "Priya Sharma", date: "May 8, 2024", category: "Portfolio", readTime: "12 min", likes: 256, comments: 45 },
  { id: 4, title: "Top 5 Soft Skills Recruiters Look For", excerpt: "Beyond coding, what makes you a great hire? Discover the essential soft skills for the modern workplace.", author: "Michael Ross", date: "May 5, 2024", category: "Career Advice", readTime: "6 min", likes: 167, comments: 22 },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">PlacementIndia <span className="text-primary">Blog</span></h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">Insights, stories, and expert advice to help you navigate your career journey.</p>
      </div>

      {/* Featured Post */}
      <div className="mb-20">
        <Link href="#" className="group relative block overflow-hidden rounded-[3rem] glass border-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="h-96 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-12">
              <BookOpen className="w-24 h-24 text-primary/30 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Featured Article</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">Mastering System Design for High-Level Placements</h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">Everything you need to know about designing scalable systems, from load balancers to database sharding.</p>
              <div className="flex items-center gap-6 text-sm text-muted">
                <div className="flex items-center gap-2"><User className="w-4 h-4" /> Alex Rivera</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 15 min read</div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map(post => (
          <div key={post.id} className="glass p-8 rounded-[2.5rem] flex flex-col group hover:border-primary/50 transition-all">
            <div className="flex-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">{post.category}</span>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
              <p className="text-muted text-sm mb-8 leading-relaxed line-clamp-3">{post.excerpt}</p>
            </div>
            
            <div className="pt-8 border-t border-border mt-auto">
              <div className="flex items-center justify-between text-sm text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted/20" />
                  <span className="font-semibold">{post.author}</span>
                </div>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1"><ThumbsUp className="w-4 h-4" /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> {post.comments}</span>
                </div>
                <Link href="#" className="font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                  Read <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
