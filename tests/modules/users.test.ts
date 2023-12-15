import { beforeEach, describe, expect, test } from 'bun:test';
import { ReclaimClient } from '../../src';
import { ReclaimUsers } from '../../src/modules/users';

describe('ReclaimUsers', () => {
  let users: ReclaimUsers;

  beforeEach(() => {
    const client = new ReclaimClient();
    users = client.users;
  });

  test('should be created', () => {
    expect(users).toBeTruthy();
  });

  test('should get the current user', async () => {
    const results = await users.current();

    expect(results).toBeTruthy();
    expect(results.id).toBeString();
  });
});