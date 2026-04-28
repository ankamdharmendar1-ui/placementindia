const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.job.deleteMany();
  await prisma.internship.deleteMany();

  await prisma.job.createMany({
    data: [
      {
        id: "zomato-fsd",
        title: "Full Stack Developer",
        company: "Zomato",
        location: "Gurgaon",
        salary: "₹18L - ₹28L",
        description: "Join Zomato as a Full Stack Developer and build the future of food tech. You will work on scalable systems and high-traffic applications.",
        eligibility: "B.Tech in CSE or related field, 1-3 years of experience with React and Node.js.",
        category: "Software",
        type: "Full-time",
      },
      {
        id: "fractal-ds",
        title: "Data Scientist",
        company: "Fractal Analytics",
        location: "Bangalore",
        salary: "₹15L - ₹25L",
        description: "Help clients solve complex business problems using advanced analytics and machine learning.",
        eligibility: "Proficiency in Python, SQL, and statistical modeling. 0-2 years of experience.",
        category: "Data",
        type: "Full-time",
      },
      {
        id: "paytm-pm",
        title: "Product Manager",
        company: "Paytm",
        location: "Noida",
        salary: "₹20L - ₹35L",
        description: "Drive product strategy and execution for Paytm's core payment features.",
        eligibility: "MBA from top-tier institute preferred. Strong analytical and communication skills.",
        category: "Product",
        type: "Full-time",
      },
    ],
  });

  await prisma.internship.createMany({
    data: [
      {
        id: "unacademy-fe",
        title: "Frontend Intern",
        company: "Unacademy",
        location: "Bangalore",
        stipend: "₹30k/mo",
        duration: "6 Months",
        description: "Gain hands-on experience in building modern UIs with React and Next.js.",
        eligibility: "Final year students with good knowledge of HTML, CSS, and JS.",
        category: "Tech",
        isRemote: false,
      },
      {
        id: "boat-marketing",
        title: "Content Marketing",
        company: "Boat",
        location: "Mumbai",
        stipend: "₹15k/mo",
        duration: "3 Months",
        description: "Help us create engaging content and manage social media campaigns.",
        eligibility: "Creative thinkers with excellent writing skills.",
        category: "Marketing",
        isRemote: true,
      },
    ],
  });

  console.log("Database seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
