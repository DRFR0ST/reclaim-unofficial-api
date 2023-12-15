import { expect, test, beforeEach, describe } from "bun:test";
import { ReclaimClient } from '../src';

describe('ReclaimClient', () => {
  let client: ReclaimClient;

  beforeEach(() => {
    client = new ReclaimClient();
  });

  test('should be created', () => {
    expect(client).toBeTruthy();
  });
});