import {
  ReclaimCalendar,
  ReclaimEndpoints,
} from "../types";
import { ReclaimClient } from "../client";

/**
 * A class for interacting with Reclaim calendars.
 */
export class ReclaimCalendars {
  private path = ReclaimEndpoints.Calendars;
  private client: ReclaimClient;

  constructor(client: ReclaimClient) {
    this.client = client;
  }

  /**
   * @description Get the primary calendar.
   * @returns {ReclaimUser}
   */
  async primary(): Promise<ReclaimCalendar> {
    return await this.client._fetcher(`${this.path}/primary`, {
      method: "GET",
    });
  }
}
