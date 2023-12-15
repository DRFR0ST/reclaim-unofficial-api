import { ReclaimTasks } from "./modules/tasks";
import { ReclaimUsers } from "./modules/users";
import { ReclaimCalendars } from "./modules/calendars";
import { config } from "./config";

/**
 * A class for interacting with the Reclaim API.
 */
export class ReclaimClient {
  private accessToken = "";

  constructor(options?: { accessToken: string }) {
    if (!options?.accessToken && !config.reclaim.accessToken)
      throw new Error("Reclaim access token is required.");

    this.accessToken = options?.accessToken || config.reclaim.accessToken!;
  }

  /**
   * @description Get the tasks module.
   */
  get tasks() {
    return new ReclaimTasks(this);
  }

  /**
   * @description Get the users module.
   */
  get users() {
    return new ReclaimUsers(this);
  }

  /**
   * @description Get the calendars module.
   */
  get calendars() {
    return new ReclaimCalendars(this);
  }

  /**
   * @description A generic fetcher for the Reclaim API.
   * @param endpoint
   * @param options 
   */
  async _fetcher(endpoint: string, options: RequestInit) {
    const opts = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${this.accessToken}`,
      },
    };

    try {
      const response = await fetch(
        `${config.reclaim.apiUrl}/api/${endpoint}`,
        opts
      );
      const json = await response.json();

      return json;
    } catch (err) {
      console.error(err);
      throw new Error("Error fetching data from Reclaim API.");
    }
  }
}
