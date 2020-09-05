import { servest } from "./deps.ts";

import DataST from "./DataST.ts";
import { PORT } from "./config.ts";

const app = servest.createApp();

app.get("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({
      status: "success",
      data: DataST.getInstance().getSimpleData(),
    }),
  });
});

app.post("/", async (req) => {
  const body = await req.json();
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({
      status: "success",
      data: DataST.getInstance().addSimpleData(body),
    }),
  });
});

const port = PORT || 3000;

app.listen({ port });
