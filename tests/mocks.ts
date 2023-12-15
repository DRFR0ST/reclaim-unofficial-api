import { ReclaimTaskCreate } from "../src";

export const ReclaimTaskCreateMock: ReclaimTaskCreate = Object.freeze({
  title: "Test Task 1",
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
