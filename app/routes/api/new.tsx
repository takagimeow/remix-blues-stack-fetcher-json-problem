import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/server-runtime";

export type ActionData = {
  message: string;
  received: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const country = formData.get("country");
  if (!country) {
    return json<ActionData>(
      {
        message: "bad request",
        received: false,
      },
      400
    );
  }
  const data: ActionData = {
    message: `your country is ${country.toString()}`,
    received: true,
  };
  console.log("[api/new] data > ", data);
  return json<ActionData>(data, 400);
};
