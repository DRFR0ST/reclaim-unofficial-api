# 📅 Unofficial Reclaim.ai API for Node.js

[![npm version](https://badge.fury.io/js/reclaim-unofficial-api.svg)](https://www.npmjs.com/package/reclaim-unofficial-api)
[![GitHub license](https://img.shields.io/github/license/DRFR0ST/reclaim-unofficial-api)](https://github.com/DRFR0ST/reclaim-unofficial-api/blob/main/LICENSE)

Welcome to the unofficial Node.js API for Reclaim.ai! This library is designed to help you interact with the Reclaim.ai API in your Node.js applications. Please note that this library is not officially supported by Reclaim.ai and was reverse engineered for educational purposes.

## 🚀 Getting Started

First, install the library using npm:

```sh
npm install reclaim-unofficial-api
```

Then, you can import the `ReclaimClient`` from the library:

```js
import { ReclaimClient } from 'reclaim-unofficial-api';
```

You'll need to provide an access token either in the .env file or when creating a new `ReclaimClient` instance:

```js
const client = new ReclaimClient({ accessToken: 'your-access-token' });
```

You can get an access token in the Reclaim.ai web app by going [here](https://app.reclaim.ai/settings/developer).

## 📚 API
The `ReclaimClient` provides access to various modules:

- `client.tasks`: Interact with tasks in Reclaim.ai.
- `client.habits`: Interact with habits in Reclaim.ai.
- `client.users`: Interact with users in Reclaim.ai.
- `client.calendars`: Interact with calendars in Reclaim.ai.

Each module provides methods for interacting with the respective resources in the Reclaim.ai API.

### Tasks

Method | Description | Status
--- | --- | ---
`search` | Search for tasks. | ✅
`create` | Create a new task. | ✅
`get` | Get an existing task. | ✅
`update` | Update an existing task. | ✅
`delete` | Delete an existing task. | ✅
`markComplete` | Mark a task as complete. | ✅

### Habits

Method | Description | Status
--- | --- | ---
`search` | Search for habits. | ✅
`create` | Create a new habit. | ✅
`get` | Get an existing habit. | ✅
`update` | Update an existing habit. | ✅
`delete` | Delete an existing habit. | ✅

### Users

Method | Description | Status
--- | --- | ---
`current` | Get the current user. | ✅
`update` | Update the current user. | ✅

### Calendars

Method | Description | Status
--- | --- | ---
`primary` | Get the primary calendar. | ✅


More methods will be added in the future. If you need a specific method, please open an issue or submit a pull request!

## 📖 Examples

### Search tasks
```js
const tasks = await client.tasks.search();
```

### Filter tasks
```js
const tasks = await client.tasks.search({ title: 'My Ticket' });
```

### Create task
```js
const task = await client.tasks.create({
  title: "My Ticket",
  eventColor: null,
  eventCategory: "WORK",
  timeChunksRequired: 8,
  minChunkSize: 4,
  maxChunkSize: 8,
  alwaysPrivate: true,
  timeSchemeId: "989b3027-46c4-4729-bdec-1070fc4d8c0f",
  priority: "P2",
  snoozeUntil: "2029-11-17T06:00:00.000Z",
  due: "2029-11-21T16:30:00.000Z",
  onDeck: false,
});
```

### Update task
```js
const task = await client.tasks.update(12345, {
  title: "My Updated Ticket",
});
```

### Delete task
```js
const task = await client.tasks.delete(12345);
```

### Get current user
```js
const user = await client.users.current();
```

Check out the [examples](https://github.com/DRFR0ST/reclaim-unofficial-api/blob/main/example/index.ts) directory for more examples.

## ⚠️ Disclaimer
This library was reverse engineered from the Reclaim.ai API and may be incomplete or inaccurate. Use at your own risk.

Every 12 hours a Github Action runs to test the library against the Reclaim.ai API. If the tests fail, the library may be out of date. Please open an issue or submit a pull request if you notice any issues. Thanks!

## 🙏 Acknowledgements
Big thanks to the author of the [reclaim-sdk](https://github.com/llabusch93/reclaim-sdk/tree/master) Python library for reverse engineering the Reclaim.ai API — your work inspired this library! 🚀

## 📝 License
This project is licensed under the terms of the MIT license. See the LICENSE file for details.
