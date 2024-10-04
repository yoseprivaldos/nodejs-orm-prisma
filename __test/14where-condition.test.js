// DOCUMENTATION WHERE CONDITION
//https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting#filter-conditions-and-operators

import { prismaClient } from "../src/prisma-client";

describe("WHERE CONDITION AND OPERATOR", () => {
  it("should be use where condition", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [{ name: "A" }, { name: "B" }],
        NOT: {
          price: {
            gt: 1000,
          },
        },
      },
      orderBy: [
        {
          name: "asc",
        },
      ],
    });

    console.info(products);
  });
});
