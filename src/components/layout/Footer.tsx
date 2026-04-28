import Link from "next/link";
import { Mail, Link2, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/5 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                PlacementIndia<span className="text-primary">.dev</span>
              </span>
            </Link>
            <p className="text-muted max-w-sm leading-relaxed">
              Empowering students and professionals to find their dream careers through placements, internships, and expert guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-muted">
              <li><Link href="/placements" className="hover:text-primary transition-colors">Placements</Link></li>
              <li><Link href="/internships" className="hover:text-primary transition-colors">Internships</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Career Blog</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">User Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="p-3 rounded-xl glass hover:bg-primary hover:text-white transition-all">
                <Link2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 rounded-xl glass hover:bg-primary hover:text-white transition-all">
                <Link2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 rounded-xl glass hover:bg-primary hover:text-white transition-all">
                <Link2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 rounded-xl glass hover:bg-primary hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:row justify-between items-center gap-4 text-sm text-muted">
          <p>© 2024 PlacementIndia. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
