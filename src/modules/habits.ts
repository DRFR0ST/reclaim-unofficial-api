import {
  ReclaimEndpoints,
  ReclaimHabit,
  ReclaimHabitCreate,
} from "../types";
import { ReclaimClient } from "../client";
import { filterArray } from "../utils";

/**
 * A class for interacting with Reclaim habits.
 */
export class ReclaimHabits {
  private path = ReclaimEndpoints.Habits;
  private client: ReclaimClient;

  constructor(client: ReclaimClient) {
    this.client = client;
  }

  /**
   * @description Create a new habit.
   * @param habit The habit to create.
   * @returns {ReclaimHabit}
   */
  async create(habit: ReclaimHabitCreate): Promise<ReclaimHabit> {
    const request = await this.client._fetcher(this.path, {
      method: "POST",
      body: JSON.stringify(habit),
    });

    const createdHabit = request.find((h: ReclaimHabit) => h.title === habit.title);

    return createdHabit;
  }

  async search(filters?: Partial<ReclaimHabit>): Promise<ReclaimHabit[]> {
    const response = (await this.client._fetcher(this.path, {
      method: "GET",
    })) as ReclaimHabit[];

    if (!filters) return response;

    // Filter the response based on the filter object
    return filterArray(response, filters);
  }

  /**
   * @description Get a single habit by ID.
   * @param id The ID of the habit to get.
   * @returns {ReclaimHabit | null}
   */
  async get(id: number): Promise<ReclaimHabit | null> {
    const habits = await this.search();

    return habits.find((habit) => habit.id === id) || null;
  }

  /**
   * @description Update a habit.
   * @param habit The habit to update.
   * @returns {ReclaimHabit}
   */
  async update(id: number, habit: Partial<ReclaimHabitCreate>): Promise<ReclaimHabit> {
    return await this.client._fetcher(`${this.path}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(habit),
    });
  }

  /**
   * @description Delete a habit.
   * @param id The ID of the habit to delete.
   * @returns {null}
   */
  async delete(id: number): Promise<{ taskOrHabit: ReclaimHabit, events: unknown[] }> {
    return await this.client._fetcher(`planner/policy/habit/${id}`, {
      method: "DELETE",
    });
  }
}
