import test from "node:test";
import assert from "node:assert/strict";

import { add } from "../src/calculator.js";

test("add should return the sum of two numbers", () => {
  const result = add(2, 3);

  assert.equal(result, 5);
});