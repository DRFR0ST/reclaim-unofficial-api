import { beforeEach, describe, expect, test } from 'bun:test';
import { ReclaimClient } from '../../src';
import { ReclaimCalendars } from '../../src/modules/calendars';

describe('ReclaimCalendars', () => {
  let calendars: ReclaimCalendars;

  beforeEach(() => {
    const client = new ReclaimClient();
    calendars = client.calendars;
  });

  test('should be created', () => {
    expect(calendars).toBeTruthy();
  });

  test('should get the primary calendar', async () => {
    const results = await calendars.primary();
    
    expect(results).toBeTruthy();
    expect(results.id).toBeGreaterThan(0);
  });
});