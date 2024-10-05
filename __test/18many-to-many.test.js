import { prismaClient } from "../src/prisma-client.js";

describe("MANY TO MANY", () => {
  it("should be use to create many to many relation", async () => {
    const data = await prismaClient.like.create({
      data: {
        customer_id: "yosep",
        product_id: "P0001",
      },
      include: {
        customer: true,
        product: true,
      },
    });

    console.log(data);
  });

  it("should be use to find many to many relation", async () => {
    const data = await prismaClient.like.findMany({
      include: {
        customer: {
          select: {
            name: true,
          },
        },
        product: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log(data);
  });

  it("should be use to find many to many relation 2", async () => {
    const data = await prismaClient.customer.findMany({
      where: {
        id: "yosep",
      },
      select: {
        name: true,
        likes: {
          select: {
            product: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    console.dir(data);
  });

  it("should be use to find many to many relation 3", async () => {
    const data = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A",
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    console.log(JSON.stringify(data, null, 2));
  });
});
