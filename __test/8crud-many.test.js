import { prismaClient } from "../src/prisma-client.js";

describe("CRUD MANY", () => {
  // create many -- insert many data
  it("should be able to create many", async () => {
    // count menghasilkan jumlah data yang berhasil
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "junevson",
          email: "junevson@gmail.com",
          name: "Junevson Sinaga",
          phone: "081280808080",
        },
        {
          id: "henri",
          email: "henri@gmail.com",
          name: "Henri Surbakti",
          phone: "081260606060",
        },
        {
          id: "billy",
          email: "billy@gmail.com",
          name: "Billy Simamora",
          phone: "081270707070",
        },
      ],
    });

    expect(count).toBe(3);
  });

  // update many --> update beberapa data berdasarkan 1 input
  // kondisi where boleh menggunakan kolom yang unik, primary atau yang lainnya
  it("should be able to update many by same condition", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "yosepupdate@mail.com",
      },

      // kalau pakai update biasa ini akan error
      // karena kolom name tidak bersifat unique/primary key
      where: {
        name: "Yosep Silaban",
      },
    });

    expect(count).toBe(1);
  });

  // delete many -> aturannya sama dengan update many
  // kondisi where boleh menggunakan kolom yang unik, primary atau yang lainnnya
  it("should be able to delete many by one condition", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "belum terdaftar",
      },
    });

    expect(count).toBe(0);
  });

  // read many
  it("should be able to read many data", async () => {
    const customers = await prismaClient.customer.findMany({});
    expect(customers.length).toBe(7);
  });
});
