import { PrismaClient } from "./app/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newApp = await prisma.application.create({
    data: {
      company: "Google",
      position: "Développeuse Frontend",
      status: "APPLIED",
    },
  });
  console.log("Créé :", newApp);

  const allApps = await prisma.application.findMany();
  console.log("Toutes les candidatures :", allApps);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());