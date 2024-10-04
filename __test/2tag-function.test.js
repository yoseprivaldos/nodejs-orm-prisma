function tagFunction(array, ...values) {
  console.log(array);
  console.log(values);
}

test("tag function ", () => {
  const name = "Yosep";

  tagFunction`Hello ${name} how are you?`;
  tagFunction`Bye ${name} see you later`;
});

test("tag function sql", () => {
  const name = "Yosep";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
