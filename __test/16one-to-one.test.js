import { prismaClient } from "../src/prisma-client.js";

describe("ONE TO ONE", () => {
  it("be able to test one to one ", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "yosep",
        customer_id: "yosep",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.log(wallet);
  });

  it("shoud be able to create one to one with relation", async () => {
    const wallet = await prismaClient.customer.create({
      data: {
        id: "endop",
        name: "Endop Lase",
        phone: "081234567890",
        email: "endop@gmail.com",
        wallet: {
          create: {
            id: "endop",
            balance: 1500000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });
    console.log(wallet);
  });

  it("should be able to find data one to one ", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        OR: [{ id: "endop" }, { id: "yosep" }],
      },
      include: {
        wallet: true,
      },
    });

    console.log(customer);
  });

  it("should be able to find many one to one", async () => {
    const data = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.log(data);
  });
});
