import { prismaClient } from "../src/prisma-client.js";

describe("Paging", () => {
  // skip di query berarti limit
  // take di query berarti ofset
  it("should be able to paging", async () => {
    const page1 = await prismaClient.customer.findMany({
      skip: 0,
      take: 3,
    });
    expect(page1.length).toBe(3);
    const page2 = await prismaClient.customer.findMany({
      skip: 3,
      take: 2,
    });
    expect(page2.length).toBe(2);

    const page3 = await prismaClient.customer.findMany({
      skip: 5,
      take: 2,
    });
    expect(page3.length).toBe(2);
  });
});
