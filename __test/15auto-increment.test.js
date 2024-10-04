import { prismaClient } from "../src/prisma-client";

describe("AUTO INCREMENT", () => {
  it("should be to create with auto increment", async () => {
    const create = await prismaClient.category.create({
      data: {
        name: "KATEGORI B",
      },
    });

    console.log(create);
  });

  it("should be able to chect if auto increment works ", async () => {
    const categories = await prismaClient.category.findMany({});

    console.log(categories);
  });
});
