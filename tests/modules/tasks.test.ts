import { beforeEach, describe, expect, test } from "bun:test";
import { ReclaimClient, ReclaimTask } from "../../src";
import { ReclaimTasks } from "../../src/modules/tasks";
import { ReclaimTaskCreateMock } from "../mocks";

describe("ReclaimTasks", () => {
  let tasks: ReclaimTasks;
  let testTask: ReclaimTask;

  beforeEach(() => {
    const client = new ReclaimClient();
    tasks = client.tasks;
  });

  test("should be created", () => {
    expect(tasks).toBeTruthy();
  });

  describe("create", () => {
    test("should create a task", async () => {
      const results = await tasks.create(ReclaimTaskCreateMock);
      testTask = results;

      expect(results).toBeTruthy();
      expect(results.id).toBeGreaterThan(0);
    });
  });

  describe("search", () => {
    test("should list all tasks", async () => {
      const results = await tasks.search();

      expect(results).toBeTruthy();
      expect(results.length).toBeGreaterThan(0);
    });

    test("should search tasks by title", async () => {
      const results = await tasks.search({
        title: ReclaimTaskCreateMock.title,
      });

      expect(results).toBeTruthy();
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].id).toBeGreaterThan(0);
      expect(results[0].title).toBe(ReclaimTaskCreateMock.title);
    });
  });

  describe("update", () => {
    test("should update a task", async () => {
      const results = await tasks.update(testTask.id, {
        title: "Updated Test Task 1",
      });

      expect(results).toBeTruthy();
      expect(results.id).toBe(testTask.id);
      expect(results.title).toBe("Updated Test Task 1");
    });
  });

  describe("get", () => {
    test("should get a task", async () => {
      const results = await tasks.get(testTask.id);

      expect(results).toBeTruthy();
      expect(results.id).toBe(testTask.id);
    });
  });

  describe("delete", () => {
    test("should delete a task", async () => {
      const results = await tasks.delete(testTask.id);

      expect(results).toBeNull();
    });
  });
});
