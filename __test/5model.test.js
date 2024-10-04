// tidak disarankan menggunakan RAW SQL seperti $executeRaw() dan $queryRaw()
// disarankan menggunakan fitur ORM PRISMA

// Saat membuat table di database, maka perlu membuat model di Prisma
// kode untuk memanipulasi data tersebut di generate oleh Prisma CLI
// model dibuat di file prisma schema
// nama model akan menjadi nama table di database
// jika ingin mengubahnya, gunakan @@map('namatable')
// kolom yang boleh null, tandai dengan ?
// kolom Primary Key, tandai dengan @id

// setelah mengubah model, lakukan generate prisma client menggunakan perintah : npx prisma generate
