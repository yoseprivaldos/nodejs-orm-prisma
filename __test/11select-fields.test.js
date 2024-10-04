// melakukan select tapi untuk beberapa kolom saja
import { prismaClient } from "../src/prisma-client.js";

describe("SELECT FIELD", () => {
  it(" should be able to create and select", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "agus",
        email: "agus@gmail.com",
        name: "Agus Tarigan",
        phone: "081290909090",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe("agus");
    expect(customer.name).toBe("Agus Tarigan");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should be able to findMany and select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
