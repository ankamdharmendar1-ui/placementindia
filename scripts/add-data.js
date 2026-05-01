const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * 🚀 EASY DATA ADDITION SCRIPT
 * 
 * To add a new Job or Internship:
 * 1. Add your details to the respective arrays below.
 * 2. Run this command in your terminal: node scripts/add-data.js
 */

const NEW_JOBS = [
  {
    title: "SDE-1 (Frontend)",
    company: "Flipkart",
    location: "Bangalore",
    salary: "₹18L - ₹25L",
    category: "Software",
    description: "Join the Flipkart engineering team to build the next generation of e-commerce experiences. You will work with React, Next.js, and high-scale systems.",
    eligibility: "B.Tech in CS/IT, Strong proficiency in React.js and CSS.",
    applyLink: "https://www.flipkartcareers.com/",
  },
  {
    title: "Backend Developer",
    company: "Zomato",
    location: "Gurgaon",
    salary: "₹20L - ₹30L",
    category: "Software",
    description: "Build robust and scalable microservices that power food delivery for millions of users.",
    eligibility: "Experience with Node.js, Go, or Java. Understanding of distributed systems.",
    applyLink: "https://www.zomato.com/careers",
  }
];

const NEW_INTERNSHIPS = [
  {
    title: "UX/UI Design Intern",
    company: "Picktime",
    location: "Hyderabad",
    stipend: "no stipend",
    duration: "not disclosed",
    category: "Design",
    description: "Assist in UI/UX design by creating wireframes and prototypes, conducting user research, collaborating with teams, improving product usability, following design systems, and staying updated with latest trends.",
    eligibility: "Freshers are eligible",
    applyLink: "https://www.linkedin.com/jobs/view/4398947887/",
    isRemote: true,
  },
  {
    title: "Python Full Stack Intern",
    company: "Codebook.in",
    location: "Hyderabad",
    stipend: "Up to ₹1,000/month",
    duration: "not disclosed",
    category: "Software",
    description: "Python Developer Intern (Fresher) role at Codebook.in.",
    eligibility: "Freshers are eligible",
    applyLink: "https://in.indeed.com/viewjob?jk=58ab09902d5e3c08&from=shareddesktop_copy",
    isRemote: false,
  },
  {
    title: "MERN Stack Developer Intern",
    company: "TheSmartBridge Educational Services Pvt.Ltd.",
    location: "Hyderabad",
    stipend: "₹5,000 - ₹10,000/month",
    duration: "not disclosed",
    category: "Software",
    description: "Work closely with senior developers to design and implement new features for our web-based application using MERN stack.",
    eligibility: "Freshers are eligible",
    applyLink: "mailto:Sireesha@thesmartbridge.com",
    isRemote: false,
  },
];

const NEW_WFH_JOBS = [
  {
    title: "Remote Content Writer",
    company: "Copy.ai",
    location: "Remote",
    salary: "₹8L - ₹12L",
    category: "Marketing",
    description: "Write high-quality blog posts and marketing copy for our AI-powered platform. This is a 100% remote role.",
    eligibility: "Excellent writing skills, understanding of SEO, and ability to work independently.",
    applyLink: "https://www.copy.ai/careers",
  },
  {
    title: "Senior Product Designer",
    company: "Canva",
    location: "Remote",
    salary: "₹35L - ₹50L",
    category: "Design",
    description: "Lead the design of new features for Canva's collaboration tools. Work with a global team from the comfort of your home.",
    eligibility: "5+ years of experience in product design, strong portfolio, and experience with Figma.",
    applyLink: "https://www.canva.com/careers",
  }
];

async function main() {
  console.log("⏳ Syncing data (clearing old and adding new)...");

  // Clear existing data to ensure we only have what's in this script
  await prisma.job.deleteMany({});
  await prisma.internship.deleteMany({});
  await prisma.wfhJob.deleteMany({});
  console.log("🗑️  Existing data cleared from database");

  if (NEW_JOBS.length > 0) {
    await prisma.job.createMany({
      data: NEW_JOBS.map((item, index) => ({ ...item, createdAt: new Date(Date.now() + index * 1000) })),
    });
    console.log(`✅ ${NEW_JOBS.length} Jobs Added`);
  }

  if (NEW_INTERNSHIPS.length > 0) {
    await prisma.internship.createMany({
      data: NEW_INTERNSHIPS.map((item, index) => ({ ...item, createdAt: new Date(Date.now() + index * 1000) })),
    });
    console.log(`✅ ${NEW_INTERNSHIPS.length} Internships Added`);
  }

  if (NEW_WFH_JOBS.length > 0) {
    await prisma.wfhJob.createMany({
      data: NEW_WFH_JOBS.map((item, index) => ({ ...item, createdAt: new Date(Date.now() + index * 1000) })),
    });
    console.log(`✅ ${NEW_WFH_JOBS.length} WFH Jobs Added`);
  }

  console.log("✨ Sync complete!");
}

main()
  .catch((e) => {
    console.error("❌ Error adding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
