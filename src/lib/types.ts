export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string | null;
  description: string;
  eligibility: string;
  category: string;
  type: string;
  logoUrl?: string | null;
  createdAt: Date;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  stipend: string | null;
  duration: string;
  description: string;
  eligibility: string;
  category: string;
  isRemote: boolean;
  logoUrl?: string | null;
  createdAt: Date;
}

export interface WfhJob {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string | null;
  description: string;
  eligibility: string;
  category: string;
  logoUrl?: string | null;
  createdAt: Date;
}
