import { PrismaClient } from "./generated/prisma/client";
import ApplicationForm from "./components/ApplicationForm";

const prisma = new PrismaClient();

export default async function Home() {
  const applications = await prisma.application.findMany();

  return (
    <div>
      <h1>Mes candidatures</h1>
      <ApplicationForm />
      <div>
        {applications.map((app) => (
          <div key={app.id}>
            <h3>{app.company}</h3>
            <p>{app.position} — {app.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}