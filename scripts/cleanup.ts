/**
 * This script is used to clean up any dangling tasks or habits that were created
 * during the tests. It is not meant to be used in production.
 */
import { ReclaimClient } from "../src";
import {
  ReclaimHabitCreateMock,
  ReclaimHabitUpdateMock,
  ReclaimTaskCreateMock,
  ReclaimTaskUpdateMock,
} from "../tests/mocks";

// Create a new ReclaimClient instance.
const client = new ReclaimClient();

// This is an example of how to use the ReclaimClient class.
const main = async () => {
  console.clear();

  // Clean up tasks =>
  console.log("[1/4] Cleaning up tasks...");
  const danglingTasks = await client.tasks.search({
    title: ReclaimTaskCreateMock.title,
  });
  console.log(`Found ${danglingTasks.length} dangling tasks.`);

  for (var i = 0; i < danglingTasks.length; i++) {
    const taskId = danglingTasks[i].id;
    await client.tasks.delete(taskId);
    console.log("\x1b[2m%s\x1b[0m", `Deleted task with ID: ${taskId}`);
  }

  console.log("✅", "Done cleaning up tasks.\n\n");

  // Clean up updated tasks =>
  console.log("[2/4] Cleaning up updated tasks...");
  const danglingCompleteTasks = await client.tasks.search({
    title: ReclaimTaskUpdateMock.title,
  });
  console.log(`Found ${danglingCompleteTasks.length} dangling tasks.`);

  for (var i = 0; i < danglingCompleteTasks.length; i++) {
    const taskId = danglingCompleteTasks[i].id;
    await client.tasks.delete(taskId);
    console.log("\x1b[2m%s\x1b[0m", `Deleted task with ID: ${taskId}`);
  }

  console.log("✅", "Done cleaning up updated tasks.\n\n");

  // Clean up habits =>
  console.log("[3/4] Cleaning up habits...");
  const danglingHabits = await client.habits.search({
    title: ReclaimHabitCreateMock.title,
  });
  console.log(`Found ${danglingHabits.length} dangling habits.`);
  for (var i = 0; i < danglingHabits.length; i++) {
    const habitId = danglingHabits[i].id;
    await client.habits.delete(habitId);
    console.log("\x1b[2m%s\x1b[0m", `Deleted habit with ID: ${habitId}`);
  }

  console.log("✅", "Done cleaning up habits.\n\n");

  // Clean up updated habits =>
  console.log("[4/4] Cleaning up updated habits...");
  const danglingCompleteHabits = await client.habits.search({
    title: ReclaimHabitUpdateMock.title,
  });
  console.log(`Found ${danglingCompleteHabits.length} dangling habits.`);
  for (var i = 0; i < danglingCompleteHabits.length; i++) {
    const habitId = danglingCompleteHabits[i].id;
    await client.habits.delete(habitId);
    console.log("\x1b[2m%s\x1b[0m", `Deleted habit with ID: ${habitId}`);
  }

  console.log("✅", "Done cleaning up updated habits.\n\n");
};

main();
