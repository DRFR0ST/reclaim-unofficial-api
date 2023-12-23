import {
  ReclaimEndpoints,
  ReclaimAnalytics as ReclaimAnalyticsType,
  ReclaimAnalyticsGetPayload,
  ReclaimAnalyticsMetricName,
} from "../types";
import { ReclaimClient } from "../client";

/**
 * A class for interacting with Reclaim analytics.
 */
export class ReclaimAnalytics {
  private path = ReclaimEndpoints.Analytics;
  private client: ReclaimClient;

  constructor(client: ReclaimClient) {
    this.client = client;
  }

  /**
   * @description The default metric name to use when getting analytics.
   */
  private defaultMetricName: ReclaimAnalyticsMetricName[] = [
    "DURATION_BY_CATEGORY",
    "DURATION_BY_DATE_BY_CATEGORY",
    "FOCUS_TIME_DURATION_BY_DAY_OF_WEEK",
    "MEETING_CALLOUT_GROUP",
    "MEETING_TIME_DURATION_BY_DAY_OF_WEEK",
    "PERSONAL_HABITS_AND_TASKS_DURATION_BY_DATE_BY_NAME",
    "ROI_CALLOUT_GROUP",
    "TIME_WITH_PEOPLE_DURATION_BY_PERSON",
    "WORK_HABITS_AND_TASKS_DURATION_BY_DATE_BY_NAME",
    "WORK_LIFE_CALLOUT_GROUP",
  ];

  /**
   * @description Get the user's analytics.
   * @returns {ReclaimAnalytics}
   */
  async get({
    start,
    end,
    metricName,
    groupingInterval,
  }: ReclaimAnalyticsGetPayload = {}): Promise<ReclaimAnalyticsType> {
    // Set the start and end dates to the last 7 days and the next 7 days, respectively. Format YYYY-MM-DD.
    if (!start)
      start = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];
    if (!end)
      end = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];
    if (!metricName) metricName = this.defaultMetricName;
    if (!groupingInterval) groupingInterval = "DAILY";

    // Ensure that metricName is an array of strings
    if (!Array.isArray(metricName))
      throw new Error("The property metricName must be an array of strings.");

    // Compose the URL.
    const url = `${
      this.path
    }?start=${start}&end=${end}&metricName=${metricName.join(
      "%2C"
    )}&groupingInterval=${groupingInterval}`;

    return await this.client._fetcher(url, {
      method: "GET",
    });
  }
}
