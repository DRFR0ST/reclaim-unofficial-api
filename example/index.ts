import { ReclaimClient } from "../src";
import {
  ReclaimHabitCreateMock,
  ReclaimHabitUpdateMock,
  ReclaimTaskCreateMock,
  ReclaimTaskUpdateMock,
} from "../tests/mocks";

// Create a new ReclaimClient instance.
const client = new ReclaimClient();

const createTaskExample = async () => {
  console.log("\n\nCreate a task =>\n");

  const newTask = await client.tasks.create(ReclaimTaskCreateMock);

  return newTask;
};

const searchTasksExample = async () => {
  console.log("\n\nSearch tasks =>\n");

  const tasks = await client.tasks.search({ title: "Funky Imitation Game" });

  return tasks;
};

const updateTaskExample = async (taskId: number) => {
  console.log("\n\nUpdate a task =>\n");

  const updatedTask = await client.tasks.update(taskId, ReclaimTaskUpdateMock);

  return updatedTask;
};

const getTaskExample = async (taskId: number) => {
  console.log("\n\nGet a task =>\n");

  const task = await client.tasks.get(taskId);

  return task;
};

const deleteTaskExample = async (taskId: number) => {
  console.log("\n\nDelete a task =>\n");

  const deletedTask = await client.tasks.delete(taskId);

  return deletedTask;
};

const getCurrentUserExample = async () => {
  console.log("\n\nGet current user =>\n");

  const user = await client.users.current();

  return user;
};

const updateCurrentUserExample = async () => {
  console.log("\n\nUpdate current user =>\n");

  const updatedUser = await client.users.update({ companyName: "Assembless" });

  return updatedUser;
};

const markTaskAsDoneExample = async (taskId: number) => {
  console.log("\n\nMark task as done =>\n");

  const doneTask = await client.tasks.markDone(taskId);

  return doneTask;
};

const createHabitExample = async () => {
  console.log("\n\nCreate a habit =>\n");

  const newHabit = await client.habits.create(ReclaimHabitCreateMock);

  return newHabit;
};

const updateHabitExample = async (habitId: number) => {
  console.log("\n\nUpdate a habit =>\n");

  const updatedHabit = await client.habits.update(
    habitId,
    ReclaimHabitUpdateMock
  );

  return updatedHabit;
};

const searchHabitsExample = async () => {
  console.log("\n\nSearch habits =>\n");

  const habits = await client.habits.search({
    title: ReclaimHabitCreateMock.title,
  });

  return habits;
};

const getHabitExample = async (habitId: number) => {
  console.log("\n\nGet a habit =>\n");

  const habit = await client.habits.get(habitId);

  return habit;
};

const deleteHabitExample = async (habitId: number) => {
  console.log("\n\nDelete a habit =>\n");

  const deletedHabit = await client.habits.delete(habitId);

  return deletedHabit;
};

const getAnalyticsExample = async () => {
  console.log("\n\nGet analytics =>\n");

  const analytics = await client.analytics.get({
    start: "2023-11-01",
    end: "2023-11-30",
    metricName: ["DURATION_BY_CATEGORY"],
  });

  return analytics;
};

// This is an example of how to use the ReclaimClient class.
const main = async () => {
  console.clear();

  await getCurrentUserExample();
  await updateCurrentUserExample();
  await getAnalyticsExample();

  const createdTask = await createTaskExample();
  const taskId = createdTask.id;

  await searchTasksExample();
  await updateTaskExample(taskId);
  await getTaskExample(taskId);
  await markTaskAsDoneExample(taskId);
  await deleteTaskExample(taskId);

  const createdHabit = await createHabitExample();
  const habitId = createdHabit.id;

  await searchHabitsExample();

  await updateHabitExample(habitId);

  await getHabitExample(habitId);

  await deleteHabitExample(habitId);
};

main();
