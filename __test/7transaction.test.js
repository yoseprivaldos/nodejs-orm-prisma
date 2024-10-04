// syarat transaksi
// semua proses selesai atau tidak sama sekali
//sequencial transaction
//proses transaksi berututan
// returnnya berupa array

import { prismaClient } from "../src/prisma-client.js";

describe("Transaction", () => {
  // proses berututan
  it("Transaction Sequencial", async () => {
    const [yosep, rivaldo] = await prismaClient.$transaction(
      [
        // yang pertama dijalankan
        prismaClient.customer.create({
          data: {
            id: "yosep",
            email: "yosep@gmail.com",
            name: "Yosep Silaban",
            phone: "081220202020",
          },
        }),
        // yang ke dua dijalankan
        prismaClient.customer.create({
          data: {
            id: "rivaldo",
            email: "rivaldo@gmail.com",
            name: "Rivaldo Silaban",
            phone: "081230303030",
          },
        }),
      ],
      {
        timeout: 5,
      }
    );

    expect(yosep.name).toBe("Yosep Silaban");
    expect(rivaldo.name).toBe("Rivaldo Silaban");
  });

  // sama prosesnnya juga berurutan
  it("Transaction Interactive", async () => {
    const [riski, vanni] = await prismaClient.$transaction(
      async (prisma) => {
        const riski = await prisma.customer.create({
          data: {
            id: "riski",
            email: "riski@gmail.com",
            name: "Riski Simbolon",
            phone: "081240404040",
          },
        });
        const vanni = await prisma.customer.create({
          data: {
            id: "vanni",
            email: "vanni@gmail.com",
            name: "Vanni Simbolon",
            phone: "081250505050",
          },
        });

        return [riski, vanni];
      },
      {
        timeout: 5,
      }
    );

    expect(vanni.name).toBe("Vanni Simbolon");
    expect(riski.name).toBe("Riski Simbolon");
  });
});
