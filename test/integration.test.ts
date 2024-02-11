import { it, expect } from "vitest";
import { foo } from "./styles.css";

it("can generate a css class name", () => {
  expect(foo).toContain("foo");
});
