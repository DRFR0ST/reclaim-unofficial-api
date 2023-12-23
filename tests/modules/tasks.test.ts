import { beforeEach, describe, expect, test } from "bun:test";
import { ReclaimClient } from "../../src";
import { ReclaimTasks } from "../../src/modules/tasks";
import { ReclaimTaskCreateMock, ReclaimTaskUpdateMock } from "../mocks";

describe("ReclaimTasks", () => {
  let tasks: ReclaimTasks;

  beforeEach(() => {
    const client = new ReclaimClient();
    tasks = client.tasks;
  });

  test("should be created", () => {
    expect(tasks).toBeTruthy();
  });

  test("should run tasks in sequence", async () => {
    // Test that tasks is created
    expect(tasks).toBeTruthy();
  
    // Test task creation
    const createResults = await tasks.create(ReclaimTaskCreateMock);
    expect(createResults).toBeTruthy();
    expect(createResults.id).toBeGreaterThan(0);
  
    // Test task search
    const searchResults = await tasks.search();
    expect(searchResults).toBeTruthy();
    expect(searchResults.length).toBeGreaterThan(0);
  
    // Test task search by title
    const filterResults = await tasks.search({ title: ReclaimTaskCreateMock.title });
    expect(filterResults).toBeTruthy();
    expect(filterResults.length).toBeGreaterThan(0);
    expect(filterResults[0].id).toBeGreaterThan(0);
    expect(filterResults[0].title).toBe(ReclaimTaskCreateMock.title);
  
    // Test task update
    const updateResults = await tasks.update(createResults.id, ReclaimTaskUpdateMock);
    expect(updateResults).toBeTruthy();
    expect(updateResults.id).toBe(updateResults.id);
    expect(updateResults.title).toBe(ReclaimTaskUpdateMock.title);
  
    // Test task get
    const getResults = await tasks.get(createResults.id);
    expect(getResults).toBeTruthy();
    expect(getResults.id).toBe(createResults.id);

    // Test task mark as done
    const markAsDoneResults = await tasks.markDone(createResults.id);
    expect(markAsDoneResults).toBeTruthy();
    expect(markAsDoneResults.taskOrHabit.id).toBe(createResults.id);
  
    // Test task delete
    const deleteResults = await tasks.delete(createResults.id);
    expect(deleteResults).toBeNull();
  });
});
