import { beforeEach, describe, expect, test } from "bun:test";
import { ReclaimClient } from "../../src";
import { ReclaimHabits } from "../../src/modules/habits";
import { ReclaimHabitCreateMock, ReclaimHabitUpdateMock } from "../mocks";

describe("ReclaimHabits", () => {
  let habits: ReclaimHabits;

  beforeEach(() => {
    const client = new ReclaimClient();
    habits = client.habits;
  });

  test("should be created", () => {
    expect(habits).toBeTruthy();
  });

  test("should run habits in sequence", async () => {
    // Test that habits is created
    expect(habits).toBeTruthy();
  
    // Test habit creation
    const createResults = await habits.create(ReclaimHabitCreateMock);
    expect(createResults).toBeTruthy();
    expect(createResults.id).toBeGreaterThan(0);

    // Create a snapshot of the createResults object
    const createSnapshot = { ...createResults, id: undefined, created: undefined, updated: undefined, index: undefined };
    expect(createSnapshot).toMatchSnapshot();

    // Test habit search
    const searchResults = await habits.search();
    expect(searchResults).toBeTruthy();
    expect(searchResults.length).toBeGreaterThan(0);
    expect(searchResults[0].id).toBeGreaterThan(0);

    // Test habit update
    const updateResults = await habits.update(createResults.id, ReclaimHabitUpdateMock);
    expect(updateResults).toBeTruthy();
  
    // Test habit get
    const getResults = await habits.get(createResults.id);
    expect(getResults).toBeTruthy();
    expect(getResults?.id).toBe(createResults.id);

    // Test habit delete
    const deleteResults = await habits.delete(createResults.id);
    expect(deleteResults.taskOrHabit.id).toBe(createResults.id);
  });
});
