import { ReclaimClient } from "../src";

// Create a new ReclaimClient instance.
const client = new ReclaimClient();

const createTaskExample = async () => {    
    console.log("Create a task =>");

    const newTask = await client.tasks.create({
        "title": "Test",
        "eventColor": null,
        "eventCategory": "WORK",
        "timeChunksRequired": 4,
        "minChunkSize": 4,
        "maxChunkSize": 8,
        "alwaysPrivate": true,
        "timeSchemeId": "989b3027-46c4-4729-bdec-1070fc4d8c0f",
        "priority": "P2",
        "snoozeUntil": null,
        "due": "2023-12-17T16:00:00.000Z",
        "onDeck": false
    });

    console.log(newTask, "\n\n");

    return newTask;
}

const searchTasksExample = async () => {
    console.log("Search tasks =>");

    const tasks = await client.tasks.search({title: "Test"});

    console.log(tasks, "\n\n");

    return tasks;
}

const updateTaskExample = async (taskId: number) => {
    console.log("Update a task =>");

    const updatedTask = await client.tasks.update(taskId, {
        "title": "Test 2",
    });

    console.log(updatedTask, "\n\n");

    return updatedTask;
}

const getTaskExample = async (taskId: number) => {
    console.log("Get a task =>");

    const task = await client.tasks.get(taskId);

    console.log(task, "\n\n");

    return task;
}

const deleteTaskExample = async (taskId: number) => {
    console.log("Delete a task =>");

    const deletedTask = await client.tasks.delete(taskId);

    console.log(deletedTask, "\n\n");

    return deletedTask;
}

const getCurrentUserExample = async () => {
    console.log("Get current user =>");

    const user = await client.users.current();

    console.log(user, "\n\n");

    return user;
}

// This is an example of how to use the ReclaimClient class.
const main = async () => {
    console.clear();

    await getCurrentUserExample();

    const createdTask = await createTaskExample();
    const taskId = createdTask.id;

    await searchTasksExample();
    await updateTaskExample(taskId);
    await getTaskExample(taskId);
    await deleteTaskExample(taskId);
}

main();