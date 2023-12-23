import { beforeEach, describe, expect, test } from "bun:test";
import { ReclaimClient } from "../../src";
import { ReclaimAnalytics } from "../../src/modules/analytics";

describe("ReclaimAnalytics", () => {
  let analytics: ReclaimAnalytics;

  beforeEach(() => {
    const client = new ReclaimClient();
    analytics = client.analytics;
  });

  test("should be created", () => {
    expect(analytics).toBeTruthy();
  });

  test("should get the user's analytics", async () => {
    const results = await analytics.get();

    expect(results.result.metrics).toBeTruthy();
    expect(results.result.metrics).toBeArray();
  });

  test("should get the user's analytics for a specific timespan", async () => {
    const results = await analytics.get({
      start: "2023-11-01",
      end: "2023-11-30",
      metricName: ["DURATION_BY_CATEGORY"],
    });

    expect(results.result.metrics).toBeTruthy();
    expect(results.result.metrics).toBeArray();
    expect(results.result.metrics).toMatchSnapshot();
  });
});
