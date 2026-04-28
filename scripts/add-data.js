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
    title: "UI/UX Design Intern",
    company: "Swiggy",
    location: "Remote",
    stipend: "₹25,000/month",
    duration: "4 Months",
    category: "Design",
    description: "Work with the product design team to create delightful user interfaces and experiences for the Swiggy app.",
    eligibility: "Portfolio demonstrating UI/UX skills. Proficiency in Figma.",
    applyLink: "https://careers.swiggy.com/",
    isRemote: true,
  },
  {
    title: "Data Analyst Intern",
    company: "Cred",
    location: "Bangalore",
    stipend: "₹40,000/month",
    duration: "6 Months",
    category: "Data",
    description: "Analyze user behavior and transaction data to drive product insights.",
    eligibility: "Strong SQL skills. Proficiency in Python or R for data analysis.",
    applyLink: "https://cred.club/careers",
    isRemote: false,
  }
];

async function main() {
  console.log("⏳ Adding data...");

  if (NEW_JOBS.length > 0) {
    await prisma.job.createMany({
      data: NEW_JOBS,
    });
    console.log(`✅ ${NEW_JOBS.length} Jobs Added`);
  }

  if (NEW_INTERNSHIPS.length > 0) {
    await prisma.internship.createMany({
      data: NEW_INTERNSHIPS,
    });
    console.log(`✅ ${NEW_INTERNSHIPS.length} Internships Added`);
  }

  console.log("✨ All done!");
}

main()
  .catch((e) => {
    console.error("❌ Error adding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
