import { prismaClient } from "../src/prisma-client";

describe("PRISMA AGGREGATE", () => {
  test("should can be doing aggregate", async () => {
    const result = await prismaClient.product.aggregate({
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
      _sum: {
        price: true,
      },
      _count: {
        price: true,
      },
    });

    console.info(result);

    expect(result._min.price).toBe(1000);
    expect(result._max.price).toBe(5000);
    expect(result._avg.price).toBe(3000);
  });

  test("should can be doing order by", async () => {
    const products = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
    });

    console.info(products);
  });

  test("should can be doing order by and having", async () => {
    const products = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
      having: {
        price: {
          _avg: {
            gt: 3000,
          },
        },
      },
    });

    console.info(products);
  });
});
