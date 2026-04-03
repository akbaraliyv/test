import { PrismaClient, Role, LeadStage, TaskPriority, TaskStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@acmecrm.com" },
    update: {},
    create: {
      email: "admin@acmecrm.com",
      name: "System Admin",
      passwordHash: "seed_hash",
      role: Role.ADMIN
    }
  });

  const client = await prisma.client.create({
    data: {
      fullName: "Maya Thompson",
      email: "maya@northpeak.io",
      phone: "+1-202-555-0139",
      company: "NorthPeak Labs",
      status: "active",
      source: "website",
      tags: ["enterprise", "high-value"]
    }
  });

  await prisma.lead.create({
    data: {
      title: "Annual CRM migration",
      stage: LeadStage.QUALIFIED,
      score: 82,
      clientId: client.id,
      ownerId: admin.id
    }
  });

  await prisma.task.create({
    data: {
      title: "Schedule technical deep-dive",
      description: "Coordinate with solution architects and client stakeholders.",
      priority: TaskPriority.HIGH,
      status: TaskStatus.IN_PROGRESS,
      assigneeId: admin.id,
      clientId: client.id
    }
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
