import { prismaClient } from "../src/prisma-client";

describe("COUNT", () => {
  it("should can count", async () => {
    const customers = await prismaClient.customer.count({
      where: {
        name: "Yosep Silaban",
      },
    });
    expect(customers).toBe(1);
  });
});
