import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Password123!", 12);
  const [admin, manager, employee] = await Promise.all([
    prisma.user.upsert({ where: { email: "admin@nimbuscrm.com" }, update: {}, create: { name: "Alex Admin", email: "admin@nimbuscrm.com", passwordHash, role: "ADMIN" } }),
    prisma.user.upsert({ where: { email: "manager@nimbuscrm.com" }, update: {}, create: { name: "Morgan Manager", email: "manager@nimbuscrm.com", passwordHash, role: "MANAGER" } }),
    prisma.user.upsert({ where: { email: "employee@nimbuscrm.com" }, update: {}, create: { name: "Erin Employee", email: "employee@nimbuscrm.com", passwordHash, role: "EMPLOYEE" } }),
  ]);

  const client = await prisma.client.upsert({
    where: { email: "ceo@northstar.io" },
    update: {},
    create: {
      fullName: "Jamie Carter",
      phone: "+1-415-555-0124",
      email: "ceo@northstar.io",
      company: "Northstar Labs",
      status: "Active",
      source: "Referral",
      tags: "enterprise,priority",
      notesText: "Interested in annual plan and onboarding package.",
    },
  });

  await prisma.lead.createMany({
    data: [
      { title: "Northstar Expansion", stage: "QUALIFIED", value: 45000, probability: 65, ownerId: manager.id, clientId: client.id },
      { title: "Pinecone Pilot", stage: "PROPOSAL", value: 18000, probability: 70, ownerId: employee.id },
      { title: "Atlas Renewal", stage: "CONTACTED", value: 25000, probability: 40, ownerId: manager.id },
    ],
    skipDuplicates: true,
  });

  await prisma.task.createMany({
    data: [
      { title: "Follow up with Northstar", description: "Share pricing deck", dueDate: new Date(Date.now() + 86400000), priority: "HIGH", status: "IN_PROGRESS", assigneeId: manager.id },
      { title: "Draft Q2 forecast", dueDate: new Date(Date.now() + 172800000), priority: "MEDIUM", status: "TODO", assigneeId: admin.id },
    ],
    skipDuplicates: true,
  });

  await prisma.activity.create({ data: { message: "Initial discovery call completed.", userId: manager.id, clientId: client.id } });
  await prisma.note.create({ data: { content: "Customer wants custom SLA and SSO.", clientId: client.id } });
}

main().finally(async () => prisma.$disconnect());
