import type { T } from "vitest/dist/reporters-LLiOBu3g.js";
import { unref, type Ref } from "vue";

export const unwrap = async (x: T | Ref<T> | T[] | Ref<T[]>) => {
  const unwrapped = unref(x);

  return unwrapped;
};
