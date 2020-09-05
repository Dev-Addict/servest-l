import { servest } from "./deps.ts";

import DataST from "./DataST.ts";

const DataRoutes = () => {
  const router = servest.createRouter();

  router.get("/", async (req) => {
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

  router.post("/", async (req) => {
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

  router.get(/^(.+)/, async (req) => {
    const [id] = req.match.map((match) => match.replace(/\//g, ""));

    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({
        status: "success",
        data: DataST.getInstance().getOneSimpleData(id),
      }),
    });
  });

  router.put(/^(.+)/, async (req) => {
    const [id] = req.match.map((match) => match.replace(/\//g, ""));

    const body = await req.json();

    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({
        status: "success",
        data: DataST.getInstance().updateOneSimpleData(id, body),
      }),
    });
  });

  router.delete(/^(.+)/, async (req) => {
    const [id] = req.match.map((match) => match.replace(/\//g, ""));

    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({
        status: "success",
        data: DataST.getInstance().deleteOneSimpleData(id),
      }),
    });
  });

  return router;
};

export default DataRoutes;
