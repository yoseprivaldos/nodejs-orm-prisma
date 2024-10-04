import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  // create digunakan untuk insert data
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "rivaldos",
        email: "rivaldo.yoseps@gmail.com",
        name: "Yosep R Silaban",
        phone: "081220203939",
      },
    });

    expect(customer.id).toBe("rivaldos");
    expect(customer.email).toBe("rivaldo.yoseps@gmail.com");
    expect(customer.name).toBe("Yosep R Silaban");
    expect(customer.phone).toBe("081220203939");
  });

  // update dilakukan untuk update data
  // memastikan hanya satu yang diupdate
  // kondisi where hanya bisa menggunakan kolom primary atau unique
  it("should be able to update data", async () => {
    const updateCustomer = await prismaClient.customer.update({
      data: { name: "Yosep Rivaldo Silaban" },
      where: { id: "rivaldos" },
    });

    expect(updateCustomer.name).toBe("Yosep Rivaldo Silaban");
  });

  // membaca satu data (findUnique() dan findFirst())
  it("should be able to read one data ", async () => {
    const readData = await prismaClient.customer.findUnique({
      where: {
        id: "rivaldos",
      },
    });
    expect(readData.name).toBe("Yosep Rivaldo Silaban");
  });

  // menghapus data -> delete({})
  // mengembalikan promise dengan payload data yang di delete
  it("should be able to delete data", async () => {
    const deletedData = await prismaClient.customer.delete({
      where: {
        id: "rivaldos",
      },
    });

    expect(deletedData.id).toBe("rivaldos");
    expect(deletedData.name).toBe("Yosep Rivaldo Silaban");
    expect(deletedData.email).toBe("rivaldo.yoseps@gmail.com");
    expect(deletedData.phone).toBe("081220203939");
  });
});
