import {
  ReclaimEndpoints,
  ReclaimTask,
  ReclaimTaskCreate,
} from "../types";
import { ReclaimClient } from "../client";
import { filterArray } from "../utils";

/**
 * A class for interacting with Reclaim tasks.
 */
export class ReclaimTasks {
  private path = ReclaimEndpoints.Tasks;
  private client: ReclaimClient;

  constructor(client: ReclaimClient) {
    this.client = client;
  }

  /**
   * @description Get all tasks, optionally filtered by a filter object.
   * @param filters The filters to apply.
   * @returns {ReclaimTask[]}
   */
  async search(filters?: Partial<ReclaimTask>): Promise<ReclaimTask[]> {
    const response = (await this.client._fetcher(`${this.path}`, {
      method: "GET",
    })) as ReclaimTask[];

    if (!filters) return response;

    // Filter the response based on the filter object
    return filterArray(response, filters);
  }

  /**
   * @description Get a single task by ID.
   * @param id The ID of the task to get.
   * @returns {ReclaimTask}
   */
  async get(id: number): Promise<ReclaimTask> {
    return await this.client._fetcher(`${this.path}/${id}`, {
      method: "GET",
    });
  }

  /**
   * @description Create a new task.
   * @param task The task to create.
   * @returns {ReclaimTask}
   */
  async create(task: ReclaimTaskCreate): Promise<ReclaimTask> {
    return await this.client._fetcher(this.path, {
      method: "POST",
      body: JSON.stringify(task),
    });
  }

  /**
   * @description Update a task.
   * @param id The ID of the task to update.
   * @param task The task to update.
   * @returns {ReclaimTask}
   */
  async update(id: number, task: Partial<ReclaimTask>): Promise<ReclaimTask> {
    return await this.client._fetcher(`${this.path}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(task),
    });
  }

  /**
   * @description Delete a task.
   * @param id The ID of the task to delete.
   * @returns {null}
   */
  async delete(id: number): Promise<null> {
    return await this.client._fetcher(`${this.path}/${id}`, {
      method: "DELETE",
    });
  }
}
