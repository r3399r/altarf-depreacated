import { tmp } from './tmp';

/**
 * Tests of temp function.
 */
describe('tmp', () => {
  it('test should work', async () => {
    expect(tmp()).toBe(1);
  });
});
