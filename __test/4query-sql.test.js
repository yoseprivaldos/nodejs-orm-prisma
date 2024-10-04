// method $queryRaw()
// mengirim SQL Query untuk melakukan SELECT
// menghasilkan promise array bukan bukan table

import { prismaClient } from "../src/prisma-client.js";

describe("Should run query select", () => {
  it("should execute query select", async () => {
    const id = "2";
    const results =
      await prismaClient.$queryRaw`SELECT * FROM sample WHERE id=${id}`;

    for (const result of results) {
      console.info(`Result sample id: ${result.id} and name: ${result.name}`);
    }
  });
});
