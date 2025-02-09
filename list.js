const client = require("./client");

async function init() {
  await client.lpush("message", 1);
  await client.lpush("message", 2);
  await client.lpush("message", 3);
  await client.lpush("message", 4);
  await client.lpush("message", 5);
  await client.lpush("message", 6);
  const result = await client.lrange("message", 0, -1);
  console.log("Result: ", result);
}
init();
