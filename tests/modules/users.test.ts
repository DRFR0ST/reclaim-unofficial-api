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

  test('should update the current user\'s metadata', async () => {
    const res1 = await users.update({ companyName: "Priv." });
    
    expect(res1).toBeTruthy();
    expect(res1.metadata.companyName).toBe("Priv.");

    // Reset the company name
    const res2 = await users.update({ companyName: "Assembless" });

    expect(res2).toBeTruthy();
    expect(res2.metadata.companyName).toBe("Assembless");
  });
});