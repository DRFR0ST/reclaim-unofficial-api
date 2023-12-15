import {
  ReclaimEndpoints,
  ReclaimUser,
} from "../types";
import { ReclaimClient } from "../client";

/**
 * A class for interacting with Reclaim users.
 */
export class ReclaimUsers {
  private path = ReclaimEndpoints.Users;
  private client: ReclaimClient;

  constructor(client: ReclaimClient) {
    this.client = client;
  }

  /**
   * @description Get the current user.
   * @returns {ReclaimUser}
   */
  async current(): Promise<ReclaimUser> {
    return await this.client._fetcher(`${this.path}/current`, {
      method: "GET",
    });
  }

  async update(metadata: Partial<ReclaimUser['metadata']>): Promise<ReclaimUser> {
    return await this.client._fetcher(`${this.path}/current`, {
      method: "PATCH",
      body: JSON.stringify({
        metadata: metadata
      }),
    });
  }
}
