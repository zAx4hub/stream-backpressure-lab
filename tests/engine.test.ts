import { describe, it, expect } from "vitest";
import { run, demo, inspect } from "../src/engine";

describe("stream-backpressure-lab", () => {
  it("run returns zAx4hub report", () => {
    const r = run({ items: [{ text: "alpha beta" }, { text: "beta gamma (ok)" }] });
    expect(r.author).toBe("zAx4hub");
    expect(r.project).toBe("stream-backpressure-lab");
    expect(r.findings.length).toBeGreaterThan(0);
    expect(r.family).toBeTruthy();
  });
  it("demo is deterministic-ish and scored", () => {
    const a = demo();
    const b = demo();
    expect(a.score).toBeGreaterThanOrEqual(0);
    expect(a.summary).toEqual(b.summary);
  });
  it("inspect metadata", () => {
    expect(inspect().name).toBe("stream-backpressure-lab");
    expect(inspect().author).toBe("zAx4hub");
  });
});
