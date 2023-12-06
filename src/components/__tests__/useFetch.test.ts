import useFetch from "@/service/useFetch";
import { expect, test } from "vitest";
import { USERS_ENDPOINT } from "@/constants";
import { error } from "console";

test("useFetch should return data", async () => {
  const data = await useFetch(USERS_ENDPOINT, "GET");
  const expectedData: [] = [];

  expect(expectedData).toEqual(data);
  error("data", data);
});
