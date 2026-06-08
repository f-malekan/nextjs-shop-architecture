import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
const globalForPrisma = global as unknown as {
  prisma?: PrismaClient;
};
const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "11471347Fa@",
  database: "nextapp",
  allowPublicKeyRetrieval: true,
  //   database: process.env.DATABASE_NAME,
});
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;
