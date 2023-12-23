import { ReclaimHabitCreate, ReclaimTaskCreate } from "../src/types";

export const ReclaimTaskCreateMock: ReclaimTaskCreate = Object.freeze({
  title: "Funky Imitation Game",
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

export const ReclaimTaskUpdateMock: Partial<ReclaimTaskCreate> = Object.freeze({
  title: "Indistinguishable Turing Test",
});

export const ReclaimHabitCreateMock: ReclaimHabitCreate = Object.freeze({
  "title": "Positive Habit",
  "eventCategory": "WORK",
  "eventColor": null,
  "enabled": true,
  "defenseAggression": "DEFAULT",
  "durationMin": 15,
  "durationMax": 120,
  "idealTime": "09:00:00",
  "recurrence": null,
  "alwaysPrivate": false,
  "invitees": [],
  "index": 0,
  "timesPerPeriod": 0,
  "idealDay": null,
  "snoozeUntil": "2023-12-24T11:00:00.000Z",
  "reservedWords": [],
  "notification": true,
  "autoDecline": false,
  "timePolicyType": "ONE_OFF",
  "timeSchemeId": null,
  "oneOffPolicy": {
      "dayHours": {
          "MONDAY": {
              "intervals": [
                  {
                      "start": "09:00:00",
                      "end": "17:00:00"
                  }
              ]
          },
          "TUESDAY": {
              "intervals": [
                  {
                      "start": "09:00:00",
                      "end": "17:00:00"
                  }
              ]
          },
          "WEDNESDAY": {
              "intervals": [
                  {
                      "start": "09:00:00",
                      "end": "17:00:00"
                  }
              ]
          },
          "THURSDAY": {
              "intervals": [
                  {
                      "start": "09:00:00",
                      "end": "17:00:00"
                  }
              ]
          },
          "FRIDAY": {
              "intervals": [
                  {
                      "start": "09:00:00",
                      "end": "17:00:00"
                  }
              ]
          },
          "SATURDAY": {
              "intervals": [
                  {
                      "start": "09:00:00",
                      "end": "17:00:00"
                  }
              ]
          },
          "SUNDAY": {
              "intervals": [
                  {
                      "start": "09:00:00",
                      "end": "17:00:00"
                  }
              ]
          }
      }
  },
  "additionalDescription": "Hello!",
  "priority": "P3"
});

export const ReclaimHabitUpdateMock: Partial<ReclaimHabitCreate> = Object.freeze({
  title: "Negative Habit",
});