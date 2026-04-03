import { Role } from "@prisma/client";

const roleRank: Record<Role, number> = {
  EMPLOYEE: 1,
  MANAGER: 2,
  ADMIN: 3
};

export function hasMinimumRole(actual: Role, required: Role) {
  return roleRank[actual] >= roleRank[required];
}
