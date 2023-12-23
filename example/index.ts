import { ReclaimClient } from "../src";

// Create a new ReclaimClient instance.
const client = new ReclaimClient();

const createTaskExample = async () => {    
    console.log("\n\nCreate a task =>\n");

    const newTask = await client.tasks.create({
        "title": "Funky Imitation Game",
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

    return newTask;
}

const searchTasksExample = async () => {
    console.log("\n\nSearch tasks =>\n");

    const tasks = await client.tasks.search({title: "Funky Imitation Game"});

    return tasks;
}

const updateTaskExample = async (taskId: number) => {
    console.log("\n\nUpdate a task =>\n");

    const updatedTask = await client.tasks.update(taskId, {
        "title": "Indistinguishable Turing Test",
    });

    return updatedTask;
}

const getTaskExample = async (taskId: number) => {
    console.log("\n\nGet a task =>\n");

    const task = await client.tasks.get(taskId);

    return task;
}

const deleteTaskExample = async (taskId: number) => {
    console.log("\n\nDelete a task =>\n");

    const deletedTask = await client.tasks.delete(taskId);

    return deletedTask;
}

const getCurrentUserExample = async () => {
    console.log("\n\nGet current user =>\n");

    const user = await client.users.current();

    return user;
}

const updateCurrentUserExample = async () => {
    console.log("\n\nUpdate current user =>\n");

    const updatedUser = await client.users.update({ companyName: "Assembless" });

    return updatedUser;
}

const markTaskAsDoneExample = async (taskId: number) => {
    console.log("\n\nMark task as done =>\n");

    const doneTask = await client.tasks.markDone(taskId);

    return doneTask;
}

// This is an example of how to use the ReclaimClient class.
const main = async () => {
    console.clear();
    
    await getCurrentUserExample();
    await updateCurrentUserExample();

    const createdTask = await createTaskExample();
    const taskId = createdTask.id;

    await searchTasksExample();
    await updateTaskExample(taskId);
    await getTaskExample(taskId);
    await markTaskAsDoneExample(taskId);
    await deleteTaskExample(taskId);
}

main();