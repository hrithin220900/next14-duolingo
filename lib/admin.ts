import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2g7WeSVs5nMnjmBaqSMiv7ZmAAi"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
