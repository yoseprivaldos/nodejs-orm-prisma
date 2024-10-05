import { prismaClient } from "../src/prisma-client.js";

describe("ONE TO MANY", () => {
  test("insert with includ", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "henri",
        title: "insert comment henri 2",
        description: "Description Comment henri 2",
      },
      include: {
        customer: true,
      },
    });

    console.log(comment);
  });

  test("find many with relation", async () => {
    const data = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {},
        },
      },
      select: {
        phone: true,
        comments: {
          select: {
            title: true,
          },
        },
      },
    });

    console.table(JSON.stringify(data, null, 2));
  });

  test("find many with relation 2", async () => {
    const value = await prismaClient.comment.findMany({
      where: { id: 1 },
      select: {
        title: true,
        customer: {
          select: {
            name: true,
          },
        },
      },
    });

    console.log(value);
  });

  test("create insert and include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "junevson",
        title: "insert comment junevson",
        description: "description comment junevson",
      },
      include: {
        customer: true,
      },
    });

    console.log(comment);
  });
});
