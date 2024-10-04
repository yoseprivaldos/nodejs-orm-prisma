// method $execudeRaw()
// mengirim data SQL untuk memanipulasi data,
// INSERT, UPDATE, DELETE  (untuk SELECT dan CREATE beda)
// return value berupa promise

import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should be able to execute SQL", async () => {
    const id = "1";
    const name = "Yosep R Silaban";

    // insert
    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample (id, name) VALUES (${id}, ${name})`;
    expect(impacted).toBe(1);

    // delete
    const idToDelete = "2";
    const impacted2 =
      await prismaClient.$executeRaw`DELETE FROM sample where id = ${idToDelete}`;
    expect(impacted2).toBe(1);

    // update
    const idToUpdate = "1";
    const newIdValue = "2";
    const newNameValue = "Riski Vanni Simbolon";
    const impacted3 =
      await prismaClient.$executeRaw`UPDATE sample SET id=${newIdValue}, name=${newNameValue} WHERE id=${idToUpdate}`;
    expect(impacted3).toBe(1);
  });
});
