import { prismaClient } from "../src/prisma-client.js";

describe("Paging", () => {
  // skip di query berarti limit
  // take di query berarti ofset

  it("should be able to paging", async () => {
    const customers = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: "desc",
        },
        {
          email: "asc",
        },
      ],
    });
    for (const customer of customers) {
      console.info(customer);
    }
  });
});
