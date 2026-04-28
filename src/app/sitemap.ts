import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://placementindia.dev';

  // Fetch dynamic jobs and internships from the database
  const jobs = await prisma.job.findMany({
    select: { id: true, updatedAt: true }
  });

  const internships = await prisma.internship.findMany({
    select: { id: true, updatedAt: true }
  });

  // Map jobs to sitemap entries
  const jobEntries = jobs.map((job) => ({
    url: `${baseUrl}/placements/${job.id}`,
    lastModified: job.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Map internships to sitemap entries
  const internshipEntries = internships.map((intern) => ({
    url: `${baseUrl}/internships/${intern.id}`,
    lastModified: intern.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Static routes
  const staticRoutes = [
    '',
    '/placements',
    '/internships',
    '/blog',
    '/dashboard',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticRoutes, ...jobEntries, ...internshipEntries];
}
